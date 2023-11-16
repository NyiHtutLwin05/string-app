import { Client } from "pg";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

async function loadFakeData(numUser: number = 10) {
  console.log(`executing load fake data. generating ${numUser} users`);
  console.log(process.env.POSTGRES_USER);
  console.log(process.env.POSTGRES_HOST);
  console.log(process.env.POSTGRES_NAME);
  console.log(process.env.POSTGRES_PASSWORD);
  console.log(parseInt(process.env.POSTGRES_PORT!));
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_NAME,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT!),
  });
  //   const res = await client.query("select 1");
  //   console.log(res);
  try {
    await client.connect();
    console.log("Connected to the database");

    const res = await client.query("SELECT 1");
    console.log(res);
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  } finally {
    await client.end();
  }
}

loadFakeData();
