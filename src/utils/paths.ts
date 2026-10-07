const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}
