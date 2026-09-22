import { User, UserRepository } from "../repository/user.repository";


export class UserService {
    private repository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.repository = userRepository;
    }
    
    async create(user: User): Promise<User> {
        return await this.repository.create(user);
    }

    async findById(id: string): Promise<User>{
        const user = await this.repository.findById(id)
        if (!user){
            throw new Error("Usuario nao encontrado")
        }
        return user
    }

    async findAll(): Promise<User[]>{
        const users = await this.repository.findAll()
        if (!users){
            throw new Error("Nenhum usuario encontrado")
        }
        return users
    }
}

