import { useRef, useCallback } from 'react'
import { IUser } from '../types'
import styles from './styles/users.module.scss'
import { UserCard } from './user-card'

export const Users = ({
	users,
	loading,
	setPage,
	hasMore,
}: {
	users: IUser[]
	loading: boolean
	setPage: (page: number) => void
	hasMore: boolean
}) => {
	const observer = useRef<IntersectionObserver>()

	const lastUserRef = useCallback(
		(node: HTMLDivElement) => {
			if (loading) return

			if (observer.current) observer.current?.disconnect()
			observer.current = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting && hasMore) {
					// @ts-ignore
					setPage(prev => prev + 1)
				}
			})
			if (node) observer.current.observe(node)
		},
		[loading, hasMore, setPage]
	)

	return (
		<div className={styles.container}>
			{users?.length > 0 &&
				users?.map((user, index) => {
					if (users?.length === index + 1) {
						return (
							<div ref={lastUserRef} key={user?.id}>
								<UserCard user={user} />
							</div>
						)
					}
					return (
						<div key={user?.id}>
							<UserCard user={user} />
						</div>
					)
				})}
		</div>
	)
}
