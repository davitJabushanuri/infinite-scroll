import { IUser } from '../types'
import styles from './styles/users.module.scss'
import { UserCard } from './user-card'

export const Users = ({ users }: { users: IUser[] }) => {
	return (
		<div className={styles.container}>
			{users?.length > 0 &&
				users?.map(user => {
					return <UserCard key={user?.id} user={user} />
				})}
		</div>
	)
}
