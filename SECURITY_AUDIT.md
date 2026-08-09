# Auditoría de seguridad e infraestructura — Lottus Designers

Fecha: 2026-08-09
Alcance: entorno Mac (infraestructura de repos) + proyecto `lottus-designers` (frontend React/Vite/TS).

## 1. Infraestructura — resuelto

| Hallazgo | Severidad | Estado |
|---|---|---|
| Todo `/Users/dayanlenis` (home) era un único repo Git, sin remoto, con 34 archivos trackeados de 2 proyectos distintos mezclados. Riesgo: un `git add -A` accidental podía stagear `.zsh_history`, `.claude.json`, `.npm`, `Downloads/` completo, etc. | **Crítica** | ✅ Resuelto. `.git` del home respaldado en `Documents/git-home-backup-2026-08-08/` y eliminado. Cada proyecto (`lottus-designers`, `Portafolio Dayan`, `claude-code-test`) tiene ahora su propio repo aislado con `.gitignore` que excluye `.env*`. |
| Permisos `777` (drwxrwxrwx) en el home y en `Downloads`, `.npm`, `.vscode` | Media | 📋 Pendiente — documentado, no corregido (requiere confirmación explícita antes de cambiar permisos del sistema). |
| Archivos de credenciales reales fuera de este proyecto: `~/Downloads/alestetic.../.env`, `~/.claude-mem/.env`, `~/Documents/Agente personal/credentials` | Media–Alta | 📋 Fuera de alcance de esta sesión (el usuario acotó el análisis profundo a `lottus-designers`). Revisar por separado. |
| VSCode Live Server escuchando en `*:5500` (toda la red local, no solo localhost) | Baja | 📋 Informativo — verificar si es necesario exponerlo a la LAN. |

## 2. Código — `lottus-designers` (resuelto)

### 🔴 Crítico — Admin Portal sin autenticación (el hallazgo más sensible)
El "Leads Vault" (`AdminPortal.tsx`) exponía nombre, email, teléfono y mensajes de **clientes reales** a cualquier visitante del sitio público, con acceso vía un enlace visible en el footer o haciendo 5 clics en el logo — sin ninguna autenticación. Cualquiera podía ver, exportar a CSV o **borrar** todos los leads.

**Corregido**: se añadió una puerta de passcode (`VITE_ADMIN_PASSCODE`) que:
- Falla cerrado si la variable no está configurada (bloqueado por defecto).
- No carga los leads en memoria hasta desbloquear.
- Verificado en navegador: bloqueo por defecto ✅, passcode incorrecto rechazado ✅, passcode correcto desbloquea ✅.

⚠️ **Limitación honesta, documentada en el código**: el passcode viaja dentro del bundle JS — es un disuasivo para visitantes casuales, no protección real contra un atacante decidido. La causa raíz es arquitectónica: **no hay backend**, los leads viven solo en `localStorage` del navegador de cada visitante (ni siquiera llegan al dueño del negocio). Ver sección de plan pendiente.

### Otras correcciones aplicadas
- **Vulnerabilidad de dependencia** (`nanoid`, alta severidad, CVE con loop infinito) → corregida con `npm audit fix`. `npm audit` ahora en 0 vulnerabilidades.
- **Dependencias muertas** (`express`, `dotenv`, `@google/genai`, `@types/express`): quedaban del scaffold de Google AI Studio, referenciaban un `server.js` inexistente en el script `clean`. Eliminadas.
- **Servidor de desarrollo expuesto a la LAN por defecto** (`--host=0.0.0.0`): cambiado a localhost por defecto; se agregó `npm run dev:lan` para cuando sí se necesite exponerlo.
- `package.json` tenía nombre placeholder `"react-example"` → corregido a `lottus-designers`.
- `.env.example` desactualizado (variables de Gemini sin usar) → reemplazado por la variable real (`VITE_ADMIN_PASSCODE`) con advertencia de seguridad incluida.

Todo verificado con `tsc --noEmit` y `npm run build` exitosos.

## 3. Plan pendiente, priorizado por sensibilidad

1. **(Alta prioridad, decisión de producto)** Reemplazar el almacenamiento de leads en `localStorage` por un backend real (función serverless + email/CRM, o un servicio como Formspree/Resend). Esto resuelve dos problemas a la vez: la seguridad real del panel admin y el hecho de que **hoy los leads del formulario nunca llegan al dueño del negocio** — quedan atrapados en el navegador del visitante. Requiere decidir proveedor/hosting antes de implementar.
2. Añadir cabeceras de seguridad (CSP, X-Frame-Options, etc.) — depende de dónde se despliegue el sitio (Netlify/Vercel/otro), pendiente de confirmar hosting.
3. Revisar y, si aplica, restringir los permisos `777` detectados en el home y subcarpetas.
4. Auditar por separado los `.env`/`credentials` reales hallados fuera de este proyecto (Downloads, Agente personal).

## 4. Análisis de rendimiento

Build de producción (`npm run build`):

| Asset | Tamaño |
|---|---|
| `luxury_hero_event...jpg` (imagen hero) | 880 KB |
| `team_portrait_clean...jpg` | 672 KB |
| JS bundle | 448 KB (135 KB gzip) |
| CSS | 64 KB (10 KB gzip) |

**Hallazgo principal**: las dos imágenes JPEG suman ~1.5 MB sin comprimir ni convertir a WebP/AVIF, y la del hero carga above-the-fold — es el mayor cuello de botella de carga inicial. Recomendado: convertir a WebP con compresión (~80–150 KB c/u) y usar `loading="eager"` solo en el hero, `lazy` en el resto.

**Hallazgo secundario**: la página usa una librería de scroll suave (parallax) que, bajo scroll muy rápido/programático, puede desincronizar el layout de elementos `position: fixed` (se reprodujo al forzar scroll con JS). Con scroll normal de mouse/trackpad no se observó el problema, pero vale la pena revisar la configuración de esa librería si se reporta algo similar en producción.

## 5. Recomendaciones de mantenimiento

- Ejecutar `npm audit` periódicamente (o activar Dependabot/Renovate si el repo se sube a GitHub).
- No usar `git add -A`/`git add .` de forma automática sin revisar `git status` primero — ahora cada proyecto tiene su `.gitignore`, pero sigue siendo buena práctica.
- Antes de desplegar a producción, mover el `VITE_ADMIN_PASSCODE` a un valor fuerte y único, y priorizar el ítem 1 del plan pendiente (backend real para leads).
- Comprimir imágenes antes de commitear (`squoosh`, `sharp-cli`, o un paso de build con `vite-plugin-image-optimizer`).
