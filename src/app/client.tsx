'use client'

import { useEffect, useState } from 'react'
import styles from './styles/home.module.scss'
import { Users } from '@/features/users'
import { LoadingSpinner } from '@/components/loading-spinner'
import { useUsers } from '@/hooks'
import { useUserHistory } from '@/stores'

export const HomeClient = () => {
	const [page, setPage] = useState(1)
	const { users, hasNextPage, loading, isError, error } = useUsers(page)
	const clearHistory = useUserHistory(state => state.clearHistory)

	useEffect(() => {
		clearHistory()
	}, [clearHistory])

	return (
		<div className={styles.container}>
			<div className={styles.users}>
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
