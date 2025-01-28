export type UsersResponse = {users: string[]}
import type {EnsureQueryDataOptions} from '@tanstack/react-query'

export const usersQueryOptions = (
  extraQueryKey: string,
): EnsureQueryDataOptions<UsersResponse> => ({
  queryKey: ['users-list', extraQueryKey],
  queryFn: async () => {
    const res = await fetch('/api/users')
    return res.json()
  },
  staleTime: 5000,
})
