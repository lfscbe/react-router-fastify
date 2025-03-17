import {generatePageTitle} from '@common/util/page-title'
import {UserPage} from '@pages/UserPage'
import {dehydrateUserState, fetchUserData} from '@queries/users'
import type {Route} from '@rr/routes/+types/users'
import {HydrationBoundary} from '@tanstack/react-query'
import type {MetaFunction} from 'react-router'

export const meta: MetaFunction = () => {
  return [{title: generatePageTitle('Users')}]
}

export const loader = async () => {
  const {queryClient} = await fetchUserData()
  const dehydratedUserState = dehydrateUserState(queryClient)
  return {dehydratedUserState}
}

export default ({loaderData}: Route.ComponentProps) => {
  return (
    <HydrationBoundary state={loaderData.dehydratedUserState}>
      <UserPage />
    </HydrationBoundary>
  )
}
