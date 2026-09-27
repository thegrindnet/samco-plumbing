// SSR and browser bundles must use the same portable production asset URLs.
// Vite dev paths contain another directory after /assets/ and stay unchanged.
export function assetUrl(source) {
  const match = source.match(/\/assets\/([^/]+)$/);
  return match ? `./assets/${match[1]}` : source;
}
