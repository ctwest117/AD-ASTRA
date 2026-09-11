import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const githubPagesBase = '/AD-ASTRA/'

function rewriteGithubPagesPaths(value) {
  return value
    .replace(/(?<!AD-ASTRA)\/images\//g, `${githubPagesBase}images/`)
    .replace(/(?<!AD-ASTRA)\/fonts\//g, `${githubPagesBase}fonts/`)
    .replace(/href="\/(index|about|missions|contact)\.html"/g, `href="${githubPagesBase}$1.html"`)
}

export default defineConfig({
  base: githubPagesBase,
  plugins: [
    tailwindcss(),
    {
      name: 'rewrite-github-pages-paths',
      transformIndexHtml: rewriteGithubPagesPaths,
      generateBundle(_, bundle) {
        for (const output of Object.values(bundle)) {
          if (output.type === 'asset' && typeof output.source === 'string') {
            output.source = rewriteGithubPagesPaths(output.source)
          }
        }
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url)),
        about: fileURLToPath(new URL('./about.html', import.meta.url)),
        missions: fileURLToPath(new URL('./missions.html', import.meta.url)),
        contact: fileURLToPath(new URL('./contact.html', import.meta.url)),
      },
    },
  },
})
