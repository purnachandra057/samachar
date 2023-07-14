import prisma from '../prisma'

interface User {
	id: string
	email: string
	firstName: string
	lastName: string
	profileImage: string
	author: Author | null
}

interface Author {
	description: string
}

class UserService {
	static async find(): Promise<User[]> {
		return prisma.user.findMany()
	}
}

export default UserService
