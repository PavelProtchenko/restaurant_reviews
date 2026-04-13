import { createClient, type RedisClientType } from "redis";

let client: RedisClientType | null = null;
let connecting: Promise<RedisClientType> | null = null;

export async function initializeRedisClient(): Promise<RedisClientType> {
  if (client) return client;
  if (connecting) return connecting;

  connecting = (async () => {
    const newClient = createClient({
      url: process.env.REDIS_URL,
      socket: {
        reconnectStrategy: (retries) => Math.min(retries * 50, 1000),
      },
    });

    newClient.on("error", (error) => {
      console.error("Redis error:", error);
    });

    newClient.on("ready", () => {
      console.log("Redis connected and ready");
    });

    newClient.on("end", () => {
      console.log("Redis disconnected");
    });

    await newClient.connect();

    client = newClient;
    return client;
  })();

  return connecting;
}
