'use client'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import { LoadingSpinner } from '@/components/loading-spinner'
import { UserInfo } from './user-info'
import { UserAddress } from './user-address'
import { UserFriends } from './user-friends'
import { UserHistory } from './user-history'
import styles from './styles/user-details.module.scss'
import { useUser } from '@/features/users/hooks'
import { BackButton } from '@/components/back-button'

export const UserDetails = () => {
	const pathname = usePathname()
	const userId = pathname.split('/')[2]

	const { user, loading, isError, error } = useUser(userId)

	if (loading || !user) return <LoadingSpinner />

	if (isError) return <div>{error}</div>

	return (
		<div className={styles.container}>
			<header>
				<BackButton />
				<h1>{`${user?.prefix} ${user?.name} ${user?.lastName}`}</h1>
			</header>
			<div className={styles.userDetails}>
				<div className={styles.avatar}>
					<Image
						src={user?.imageUrl}
						alt='user avatar'
						width={500}
						height={500}
					/>
				</div>

				<UserInfo
					fullName={`${user?.prefix} ${user?.name} ${user?.lastName}`}
					position={user?.title}
					email={user?.email}
					ipAddress={user?.ip}
					jobArea={user?.jobArea}
					jobType={user?.jobType}
				/>

				<UserAddress address={user?.address} />
			</div>

			<div className={styles.history}>
				<UserHistory />
			</div>

			<div className={styles.friends}>
				<UserFriends userId={userId} />
			</div>
		</div>
	)
}
