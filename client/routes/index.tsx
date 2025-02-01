import {ensureUsersData} from './index.queries'
import {Home} from '@components/Home'

import type {MetaFunction} from 'react-router'

export const meta: MetaFunction = () => {
  return [{title: 'React Router + Fastify'}]
}

export function clientLoader(): Promise<{users: string[]}> {
  return ensureUsersData()
}

// eslint-disable-next-line
export default function Index() {
  return (
    <main>
      <Home />
    </main>
  )
}
