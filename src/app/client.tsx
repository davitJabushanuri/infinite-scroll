'use client'

import { useEffect, useState } from 'react'
import styles from './styles/home.module.scss'
import { IUser, Users } from '@/features/users'
import { LoadingSpinner } from '@/components/loading-spinner'

interface IReq {
	list: IUser[]
	patination: {
		current: number
		nextPage: number
		pageSize: number
		previousPage: number
		total: number
	}
}

const URL =
	'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/20'

export const HomeClient = () => {
	const [users, setUsers] = useState<IUser[]>([])
	const [isFetching, setIsFetching] = useState(false)
	const [page, setPage] = useState(1)
	const pageSize = 20

	console.log('users', users)

	useEffect(() => {
		const fetchUsers = async () => {
			setIsFetching(true)
			const response = await fetch(
				`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/${pageSize}`
			)
			const users = await response.json()
			setUsers(prev => prev.concat(users.list))
			setIsFetching(false)
		}

		fetchUsers()
	}, [page])

	return (
		<div className={styles.container}>
			<div className={styles.users}>
				{users?.length > 0 && <Users users={users} />}
			</div>

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
