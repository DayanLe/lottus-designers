/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Resolves a file in /public against the deploy base (GitHub Pages serves under a sub-path).
export const publicUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

// Builds a responsive srcset for an Unsplash URL by rewriting its `w` param,
// so phones download ~400-800px images instead of the 1200-1600px originals.
export function unsplashSrcSet(url: string, widths: number[] = [400, 640, 960, 1200]) {
  if (!url.includes("images.unsplash.com")) return undefined;
  return widths
    .map((w) => {
      const u = new URL(url);
      u.searchParams.set("w", String(w));
      u.searchParams.delete("h");
      return `${u.toString()} ${w}w`;
    })
    .join(", ");
}
