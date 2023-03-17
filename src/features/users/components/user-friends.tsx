import { useState } from 'react'
import { LoadingSpinner } from '@/components/loading-spinner'
import { Users } from './users'
import { useUsers } from '@/features/users/hooks'

export const UserFriends = ({ userId }: { userId: string }) => {
	const [page, setPage] = useState(1)

	const { users, loading, hasNextPage, error, isError } = useUsers(page, userId)

	return (
		<div>
			<div>
				{users?.length > 0 && (
					<Users
						users={users}
						loading={loading}
						setPage={setPage}
						hasNextPage={hasNextPage}
					/>
				)}
			</div>

			{loading && <LoadingSpinner />}
			{isError && <div>{error}</div>}
		</div>
	)
}
