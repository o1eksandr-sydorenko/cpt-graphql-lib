import 'reflect-metadata';
import express, { json } from 'express';
import dotenvSafe from 'dotenv-safe';
import cors from 'cors';
import { resolve } from 'path';
import { existsSync } from 'fs';
import { Container } from 'inversify';
import { buildSchema, NonEmptyArray } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

let path = resolve(process.cwd(), process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env');
if (!existsSync(path)) {
  path = resolve(process.cwd(), '.env');
}

dotenvSafe.config({
  path: path,
  example: resolve(process.cwd(), '.env.example'),
});

export const runApolloServer = async (container: Container, resolvers: NonEmptyArray<Function>): Promise<void> => {
  const app = express();

  const schema = await buildSchema({
    resolvers,
    validate: true,
    container: () => container,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  app.use(cors({ origin: '*', credentials: true }));
  app.use(json());

  app.use(
    '/graphql',
    expressMiddleware(server, {
      context: async ({ req }) => ({ ...req }),
    }),
  );

  const host = process.env.APP_HOST ?? 'localhost';
  const port = process.env.APP_PORT ? Number(process.env.APP_PORT) : 3000;

  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
};
