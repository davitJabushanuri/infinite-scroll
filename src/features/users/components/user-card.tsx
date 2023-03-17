import Image from 'next/image'
import styles from './styles/user-card.module.scss'
import { IUser } from '../types'

export const UserCard = ({ user }: { user: IUser }) => {
	return (
		<div className={styles.container}>
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
