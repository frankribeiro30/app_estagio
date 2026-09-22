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

    async findById(id: string): Promise<User | null>{
        const user = await prisma.user.findUnique({
            where: {id}
        })
        return user
    }

    async findAll(): Promise<User[] | []>{
        const users = await prisma.user.findMany({
            orderBy: {name: "asc"} 
        })

        return users
    }
}