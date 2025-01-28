import type {MetaFunction} from 'react-router'

export const meta: MetaFunction = () => {
  return [{title: 'React Router + Fastify'}]
}

export default function Home() {
  return (
    <section className="mx-auto mt-8 max-w-fit">
      <h1 className="text-3xl text-gray-800">React Router + Fastify</h1>
    </section>
  )
}
