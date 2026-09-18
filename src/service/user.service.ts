import { User, UserRepository } from "../repository/user.repository";


export class UserService {
    private repository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.repository = userRepository;
    }
    
    async create(user: User): Promise<User> {
        return await this.repository.create(user);
    }
}

