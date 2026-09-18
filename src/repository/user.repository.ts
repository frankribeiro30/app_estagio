import { prisma } from "../config/database"

export interface User {
    id?: string
    name: string
    email: string
}

export class UserRepository {
    async create(user: User): Promise<User> {
        const newUser: User = await prisma.user.create({
            data: user
        })
        return newUser
    }
}