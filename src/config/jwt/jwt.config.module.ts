import { Module } from "@nestjs/common";
import { JwtConfigService } from "./jwt.config.service";


@Module({
    imports:[],
    providers:[JwtConfigService],
    exports:[JwtConfigService]
})
export class JwtConfigModule{}