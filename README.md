# React Router ❤️ Fastify

This is a boilerplate to start an application with [React Router 7](https://reactrouter.com/home)
and [Fastify](https://fastify.dev/)

## Get Started

1. Clone the repository
2. Install the packages with your favourite package manager (there is no
   lockfile by default, so choose whatever suits you)
3. Run the development server (`bun run dev`)
4. Get ready for production with (`bun run build && bun run start`)

## Structure

```
client
├── common                   # things shared across all features/pages
│   ├── components
│   │   ├── Container.tsx
│   └── util
│       ├── page-title.ts
├── features                 # feature directory
│   └── UserList             # features can contain whatever needed, components styles etc
│       ├── components
│       │   └── UserList.tsx
│       └── index.ts         # a place to easily export things
├── layouts
│   └── Default.tsx
├── pages                    # components rendered by routes
│   ├── HomePage.tsx
│   └── UserPage.tsx
├── queries                  # functions, options etc for react-query
│   └── users.ts
├── root.ts
├── routes
│   ├── home.tsx             # react-router files, these data load and render from client/pages
│   └── users.tsx
├── routes.ts                # configure the routes here
└── styles
    └── app.css
server
├── api
├── index.ts                  # does checks before starting the server
├── start.ts                  # starts the Fastify server
└── util                      # common utils
```

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
