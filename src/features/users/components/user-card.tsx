import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useUserHistory } from '@/stores'
import { IUser } from '../types'
import styles from './styles/user-card.module.scss'

export const UserCard = ({ user }: { user: IUser }) => {
	const router = useRouter()
	const addHistory = useUserHistory(state => state.addHistory)

	console.log(user)

	return (
		<div
			onClick={() => {
				router.push(`/user/${user?.id}`)
				addHistory({
					id: user?.id,
					name: `${user?.prefix} ${user?.name} ${user?.lastName}`,
				})
			}}
			className={styles.container}
		>
			<div className={styles.avatar}>
				<Image
					src={user?.imageUrl}
					alt='user avatar'
					width={200}
					height={200}
				/>
			</div>
			<h3
				className={styles.name}
			>{`${user?.prefix} ${user?.name} ${user?.lastName}`}</h3>
			<p className={styles.position}>{user?.title}</p>
		</div>
	)
}
