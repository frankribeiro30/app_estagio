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

    async findById(request: FastifyRequest, replay: FastifyReply): Promise<void> {
        const { id } = request.params as { id: string}
        const user = await this.service.findById(id)
        return replay.send(user)
    }

    async findAll(request: FastifyRequest, replay: FastifyReply): Promise<void> {
        const users = await this.service.findAll()
        return replay.send(users)
    }
}