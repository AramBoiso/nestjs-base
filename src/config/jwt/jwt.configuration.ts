import { registerAs } from "@nestjs/config";
import { MODULE_NAME } from "./constants";
import { JwtI } from "./interfaces";
    
export default registerAs( MODULE_NAME, ():JwtI => ({
    SECRET_KEY: process.env.JWT_SECRET_KEY,
    EXPIRE_IN: process.env.JWT_EXPIRE_IN
}))