# React Router + Fastify

This is a simple boilerplate to get an application running using [React Router 7](https://reactrouter.com/home)
and [Fastify](https://fastify.dev/)

## Get Started

1. Clone the repository
2. Install the packages with your favourite package manager (there is no
   lockfile by default)
3. Run the development server with `<package manager> run dev`

Code related to React Router lives in the `client` directory (components,
stylesheets etc)

React Router client loaders are combined with react-query. There is a working
example to copy paste

All Fastify code is inside the `server` directory

## Commands

| Command          | Action                                   |
| :--------------- | :--------------------------------------- |
| `npm install`    | Installs dependencies                    |
| `npm run dev`    | Starts the vite development server       |
| `npm run build`  | Builds the production site to `./build/` |
| `npm run format` | Formats files with Prettier              |
| `npm run check`  | Runs all linter checks                   |
| `npm run start`  | Start the server with node               |
