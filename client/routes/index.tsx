import {queryClient} from '@client/util/react-query'
import {usersQueryOptions} from '@routes/index.query'
import {Home} from '@components/Home'

import type {MetaFunction} from 'react-router'
import {Route} from './+types/index'

export const meta: MetaFunction = () => {
  return [{title: 'React Router + Fastify'}]
}

export async function clientLoader(
  props: Route.ClientLoaderArgs, // eslint-disable-line
): Promise<{users: string[]}> {
  return queryClient.ensureQueryData(usersQueryOptions('index'))
}

// eslint-disable-next-line
export default function Index(props: Route.ComponentProps) {
  return (
    <main>
      <Home />
    </main>
  )
}
