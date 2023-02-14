# Green Template: react/daisy/axum

SPA template based on [vite-ts-react-tailwind-template](https://github.com/cpojer/vite-ts-react-tailwind-template) 🙏, 
enhanced with storybook for component driven development, daisyUI for batteries included flexible component framwork,
and rust axum for the API

## Technologies

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com)
- [Storybook](https://storybook.com)
- [Axum](https://github.com/tokio-rs/axum)

![screenshot of `App.tsx`](./screenshot.png)

## Setup

~~- Press the "Use this template" on the top of this repository's GitHub page.~~
- [ ] set up as template
- Run `npm install`. Contrary to the upstream template, I can not suggest pnpm yet because of problems with storybook. 
- `npm run dev` for development.
- `npm run storybook` for component-based development in storybook
- Use `npm run test` to run tests.
~~- `npm run build` for production builds.~~ 
- [ ] set up prod build

## Protips for the fastest Developer Experience

- Use [`npm-run-all`](https://github.com/mysticatea/npm-run-all) to parallelize local test runs.
- Prettier and eslint have `--cache` flags. Use them!
- Do not run prettier inside of `eslint`. It commonly takes 50% of the eslint runtime!
- Automatically sort imports when running prettier/saving the document via [`@trivago/prettier-plugin-sort-imports`](https://github.com/trivago/prettier-plugin-sort-imports).
- Use `swc` with `ts-node` for fast node scripts with [ESM](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/). See below ↓

## Run node scripts with ESM and TypeScript, fast.

Create a `script.ts` file, run `chmod x script.ts` and execute it via `./script.ts`.

```
#!/usr/bin/env node --no-warnings --experimental-specifier-resolution=node --loader ts-node/esm

console.log('Your code goes here.');
```

Use this to restart your scripts instantly when a file changes:

```
#!/usr/bin/env NODE_ENV=development node --watch --no-warnings --experimental-specifier-resolution=node --loader ts-node/esm

console.log('This processes instantly restarts when a file changes.');
```

## TODO
- [x] update readme
- [x] replace examples with daisyUI
- [x] github repo
- [ ] work through Christoph Nakazawas blog post again
- [ ] add rust API
