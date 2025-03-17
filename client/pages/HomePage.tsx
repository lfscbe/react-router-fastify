import {Link} from '@common/components/Link'

export const HomePage = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl text-slate-700 font-semibold">
        React Router ❤ Fastify
      </h1>
      <Link to="/users">View users</Link>
    </section>
  )
}
