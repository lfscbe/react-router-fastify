# React Router ❤️ Fastify

This is a simple boilerplate to get an application running using [React Router 7](https://reactrouter.com/home)
and [Fastify](https://fastify.dev/)

## Get Started

1. Clone the repository
2. Install the packages with your favourite package manager (there is no
   lockfile by default, so choose whatever suits you)
3. Run the development server with `<package manager> run dev`

## Structure

```
client
├── components   # all your react components
├── routes       # react-router components + query files
├── styles       # any global styles
└── util         # things like queryClient
├── routes.ts
├── root.tsx
server
├── start.ts     # setup the server. Add any API routes, db connections etc in this dir
public
types            # global types accessible to all
```

One pattern utilised here is to integrate `react-query` with the `clientLoader`
of each route, and then within the relevant page component like `Home`.

The logic for the queries in stored in a relevant `<routeName>.queries.ts`

Read more:

- https://tkdodo.eu/blog/react-query-meets-react-router
- https://tkdodo.eu/blog/effective-react-query-keys#colocate

## Commands

| Command          | Action                                   |
| :--------------- | :--------------------------------------- |
| `npm install`    | Installs dependencies                    |
| `npm run dev`    | Starts the vite development server       |
| `npm run build`  | Builds the production site to `./build/` |
| `npm run format` | Formats files with Biome                 |
| `npm run check`  | Runs all linter checks                   |
| `npm run fix`    | Fix formatting and linting via Biome     |
| `npm run start`  | Start the server with Node               |

## Credit

Inspired by the excellent [mcansh/remix-fastify](https://github.com/mcansh/remix-fastify) examples
