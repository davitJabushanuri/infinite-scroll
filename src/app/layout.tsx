import './styles/globals.scss'

export const metadata = {
	title: 'Sweeft Digital',
	description: 'infinite scroll example',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
