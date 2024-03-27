"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SocketServer_1 = require("../server/SocketServer");
const app_1 = require("../server/app");
const db_1 = __importDefault(require("./utils/db"));
const cloudinary_1 = require("cloudinary");
const http_1 = __importDefault(require("http"));
require("dotenv").config();
const server = http_1.default.createServer(app_1.app);
// cloudinary setup
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY
});
(0, SocketServer_1.initSocketServer)(server);
// Create server
server.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} `);
    (0, db_1.default)();
});