import { IAddress } from '../types'
import styles from './styles/user-address.module.scss'

export const UserAddress = ({ address }: { address: IAddress }) => {
	return (
		<div className={styles.container}>
			<h3>Address</h3>
			<p className={styles.city}>
				<span>City:</span> {address?.city}
			</p>
			<p className={styles.country}>
				<span>Country:</span> {address?.country}
			</p>
			<p className={styles.state}>
				<span>State:</span> {address?.state}
			</p>
			<p className={styles.streetAddress}>
				<span>Street Address:</span> {address?.streetAddress}
			</p>
			<p className={styles.zipCode}>
				<span>Zip Code:</span> {address?.zipCode}
			</p>
		</div>
	)
}
