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
			<h3>Info</h3>
			<p className={styles.name}>
				<span>name:</span> {fullName}
			</p>
			<p className={styles.position}>
				<span>position:</span> {position}
			</p>
			<p className={styles.email}>
				<span>Email:</span> {email}
			</p>
			<p className={styles.ipAddress}>
				<span>IP Address:</span> {ipAddress}
			</p>
			<p className={styles.jobArea}>
				<span>Job Area:</span> {jobArea}
			</p>
			<p className={styles.jobType}>
				<span>Job Type:</span> {jobType}
			</p>
		</div>
	)
}
