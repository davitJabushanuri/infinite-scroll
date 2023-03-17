import { useUserHistory } from '@/stores'
import styles from './styles/user-history.module.scss'

export const UserHistory = () => {
	const history = useUserHistory(state => state.history)
	console.log(history)

	if (history.length === 0) return null

	return (
		<div className={styles.container}>
			{history.map((item, index) => {
				return (
					<div key={index} className={styles.item}>
						<span>{item.name}</span>
					</div>
				)
			})}
		</div>
	)
}
