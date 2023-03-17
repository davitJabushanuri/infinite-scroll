import { useUserHistory } from '@/stores'
import styles from './styles/user-history.module.scss'
import Link from 'next/link'

export const UserHistory = () => {
	const history = useUserHistory(state => state.history)
	console.log(history)

	if (history.length === 0) return null

	return (
		<div className={styles.container}>
			<h3>History:</h3>
			<div className={styles.history}>
				{history.map((user, index) => {
					return (
						<Link href={`/user/${user.id}`} key={index}>
							<span>{user.name}</span>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
