import { IAddress } from '../types'
import styles from './styles/user-address.module.scss'

export const UserAddress = ({ address }: { address: IAddress }) => {
	return (
		<div className={styles.container}>
			<p className={styles.city}>City: {address?.city}</p>
			<p className={styles.country}>Country: {address?.country}</p>
			<p className={styles.state}>State: {address?.state}</p>
			<p className={styles.streetAddress}>
				Street Address: {address?.streetAddress}
			</p>
			<p className={styles.zipCode}>Zip Code: {address?.zipCode}</p>
		</div>
	)
}
