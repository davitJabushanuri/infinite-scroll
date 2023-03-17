import { useRef, useCallback } from 'react'
import { IUser } from '../types'
import styles from './styles/users.module.scss'
import { UserCard } from './user-card'

export const Users = ({
	users,
	loading,
	setPage,
	hasNextPage,
}: {
	users: IUser[]
	loading: boolean
	setPage: (page: number) => void
	hasNextPage: boolean
}) => {
	const observer = useRef<IntersectionObserver>()

	const lastUserRef = useCallback(
		(node: HTMLDivElement) => {
			if (loading) return

			if (observer.current) observer.current?.disconnect()
			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting && hasNextPage) {
					// @ts-ignore
					setPage(prev => prev + 1)
				}
			})
			if (node) observer.current.observe(node)
		},
		[loading, hasNextPage, setPage]
	)

	return (
		<div className={styles.container}>
			{users?.length > 0 &&
				users?.map((user, index) => {
					if (users?.length === index + 1) {
						return (
							<div ref={lastUserRef} key={index}>
								<UserCard user={user} />
							</div>
						)
					} else
						return (
							<div key={index}>
								<UserCard user={user} />
							</div>
						)
				})}
		</div>
	)
}
