// @ts-check
import { defineConfig } from 'astro/config';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];

if (process.env.GITHUB_ACTIONS === 'true' && !repositoryName) {
  throw new Error('GITHUB_REPOSITORY must be set when building for GitHub Pages.');
}

export default defineConfig({
  base: repositoryName ? `/${repositoryName}` : '/',
});
