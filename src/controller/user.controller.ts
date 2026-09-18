import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../service/user.service";
import { User } from "../repository/user.repository";


export class UserController {
    private service: UserService

    constructor(userService: UserService) {
        this.service = userService
    }

    async create(request: FastifyRequest, replay: FastifyReply): Promise<void> {
        const user = request.body as User
        const newUser = await this.service.create(user)
        replay.status(201).send(newUser)
    }
}