import { useEffect, useState } from 'react'
import { IUser } from '../types'
import { LoadingSpinner } from '@/components/loading-spinner'
import { Users } from './users'

export const UserFriends = ({ userId }: { userId: string }) => {
	const [users, setUsers] = useState<IUser[]>([])
	const [isFetching, setIsFetching] = useState(false)
	const [page, setPage] = useState(1)
	const pageSize = 20

	useEffect(() => {
		const fetchUsers = async () => {
			setIsFetching(true)
			const response = await fetch(
				`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userId}/friends/${page}/${pageSize}`
			)
			const users = await response.json()
			setUsers(prev => prev.concat(users.list))
			setIsFetching(false)
		}

		fetchUsers()
	}, [page, userId])
	return (
		<div>
			<div>{users?.length > 0 && <Users users={users} />}</div>

			{isFetching && <LoadingSpinner />}

			<button
				onClick={() => {
					setPage(page + 1)
				}}
			>
				fetch users
			</button>
		</div>
	)
}
