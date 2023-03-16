export interface IUser {
	id: number
	name: string
	lastName: string
	prefix: string
	title: string
	imageUrl: string
}

export interface IFullUser extends IUser {
	jobDescription: string
	jobArea: string
	jobType: string
	email: string
	ip: string
	company: ICompany
	address: IAddress
}

export interface ICompany {
	name: string
	suffix: string
}

export interface IAddress {
	zipCode: string
	city: string
	streetAddress: string
	country: string
	state: string
}
