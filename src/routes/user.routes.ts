import { FastifyInstance } from "fastify";
import { UserController } from "../controller/user.controller";
import { UserService } from "../service/user.service";
import { UserRepository } from "../repository/user.repository";
const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UserController(service);

export async function userRoutes(app: FastifyInstance) {
    app.post("/", { handler: controller.create.bind(controller),});
}