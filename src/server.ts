import Fastify from 'fastify'
import { userRoutes } from "./routes/user.routes";

const app = Fastify({
  logger: true,
  routerOptions: {
    ignoreTrailingSlash: true,
  },
});

app.get("/", async () => {
  return {
    status: "ok",
    message: "API rodando 100% dentro do Docker",
  };
});

const start = async () => {
  try {
    await app.register(
      async function apiV1(instance) {
        await instance.register(userRoutes, { prefix: "/users" });
      },
      { prefix: "/api/v1" },
    );

    console.log(app.printRoutes());

    await app.listen({
      host: "0.0.0.0",
      port: 3000,
    });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start()