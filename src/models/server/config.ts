import { Client, Databases, Avatars, Storage, Users } from "node-appwrite";
import env from "@/env";

let client = new Client();

client
    .setEndpoint(env.appwrite.endpoint) // Your API Endpoint
    .setProject(env.appwrite.projectId) // Your project ID
    .setKey(env.appwrite.apiKey) // Your secret API key=


const databases = new Databases(client);
const users = new Users(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { databases, users, avatars, storage, client }