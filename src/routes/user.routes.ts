import { FastifyInstance } from "fastify";
import { UserService } from "../service/user.service";
import { UserRepository } from "../repository/user.repository";
import { UserController } from "../controller/user.controller";
const repository = new UserRepository();
const service = new UserService(repository);
const controller = new UserController(service);

export async function userRoutes(app: FastifyInstance) {
    app.post("/", { handler: controller.create.bind(controller),});

    app.get("/:id", {handler: controller.findById.bind(controller),});

    app.get("/", {handler: controller.findAll.bind(controller),});
}