import { BackArrowIcon } from './assets/back-arrow-icon'
import styles from './styles/back-button.module.scss'

export const BackButton = () => {
	return (
		<button className={styles.container}>
			<BackArrowIcon />
		</button>
	)
}
