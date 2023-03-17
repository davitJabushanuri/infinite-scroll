import styles from './styles/user-info.module.scss'

export const UserInfo = ({
	fullName,
	position,
	email,
	ipAddress,
	jobArea,
	jobType,
}: {
	fullName: string
	position: string
	email: string
	ipAddress: string
	jobArea: string
	jobType: string
}) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.name}>{fullName}</h3>
			<p className={styles.position}>{position}</p>
			<p className={styles.email}>Email: {email}</p>
			<p className={styles.ipAddress}>IP Address: {ipAddress}</p>
			<p className={styles.jobArea}>Job Area: {jobArea}</p>
			<p className={styles.jobType}>Job Type: {jobType}</p>
		</div>
	)
}
