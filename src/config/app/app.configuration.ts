import { registerAs } from "@nestjs/config";
import { MODULE_NAME } from "./constants/app.constants";
import { AppEnvironmentsInterface } from "./interfaces";

export default registerAs( MODULE_NAME, ():AppEnvironmentsInterface => ({
    PORT:parseInt(process.env.APP_PORT),
}))