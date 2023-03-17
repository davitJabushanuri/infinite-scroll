import { useEffect, useState } from 'react'
import { IUser } from '@/features/users'
import axios from 'axios'

const URL = 'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com'

export const useUsers = (page: number, userId?: string) => {
	const pageSize = 20
	const [users, setUsers] = useState<IUser[]>([])
	const [hasNextPage, setHasNextPage] = useState(true)
	const [loading, setLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		setLoading(true)
		setIsError(false)
		setError(null)

		axios
			.get(
				`${URL}/user/${userId ? `${userId}/friends/` : ''}${page}/${pageSize}`
			)
			.then(res => {
				setUsers(prev => {
					return [...prev, ...res.data.list]
				})
				setHasNextPage(
					res.data.pagination.nextPage <= res.data.pagination.total
				)
				setLoading(false)
			})
			.catch(err => {
				setIsError(true)
				setError(err.message)
			})
	}, [page, userId])

	return { users, hasNextPage, loading, isError, error }
}
