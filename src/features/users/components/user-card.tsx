import Image from 'next/image'
import styles from './styles/user-card.module.scss'

export const UserCard = ({
	avatar,
	name,
	position,
}: {
	avatar: string
	name: string
	position: string
}) => {
	return (
		<div className={styles.container}>
			<div className={styles.avatar}>
				<Image src={avatar} alt='user avatar' width={200} height={200} />
			</div>
			<h1 className={styles.name}>{name}</h1>
			<p className={styles.position}>{position}</p>
		</div>
	)
}
