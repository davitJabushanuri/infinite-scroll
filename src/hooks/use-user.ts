import { useEffect, useState } from 'react'
import axios from 'axios'
import { IFullUser } from '@/features/users'

const URL = 'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com'

export const useUser = (userId: string) => {
	const [user, setUser] = useState<IFullUser | null>(null)
	const [loading, setLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [error, setError] = useState(null)

	useEffect(() => {
		setLoading(true)
		setIsError(false)
		setError(null)

		axios
			.get(`${URL}/user/${userId}`, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then(res => {
				setUser(res.data)
				setLoading(false)
			})
			.catch(err => {
				setLoading(false)
				setIsError(true)
				setError(err.message)
			})
	}, [userId])

	return { user, loading, isError, error }
}
