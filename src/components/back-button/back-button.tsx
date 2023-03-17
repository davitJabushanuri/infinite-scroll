'use client'

import { useRouter } from 'next/navigation'
import { BackArrowIcon } from './assets/back-arrow-icon'
import styles from './styles/back-button.module.scss'

export const BackButton = () => {
	const router = useRouter()

	return (
		<button onClick={() => router.push(`/`)} className={styles.container}>
			<BackArrowIcon />
		</button>
	)
}
