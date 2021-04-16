import { useQuery } from "react-query"
import { api } from "services/api"

type User = {
  id: string
  email: string
  name: string
  createdAt: string
}

type GetUsersResponse = {
  users: User[]
  totalCount: number
}

export async function getUsers(page: number):Promise<GetUsersResponse> {
    const { data, headers } = await api.get('users', {
      params: {
        page
      }
    })

    const totalCount = Number(headers['x-total-count'])

    const users = data.users.map((user :User) => {
      return {
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }),
      }
    })

    return { users, totalCount }  
}

export function useUsers(page: number) {
  return(
    useQuery(['users', page], () => getUsers(page), {
      staleTime: 1000 * 60 * 10, // 10 minutes
    })
  )
}