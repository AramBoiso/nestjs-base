import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtConfigModule } from "src/config/jwt/jwt.config.module";
import { JwtConfigService } from "src/config/jwt/jwt.config.service";
import { PasswordsModule } from "src/models/usr/passwords/passwords.module";
import { UsersModule } from "src/models/usr/users/users.module";
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy, LocalStrategy } from "./strategies";

@Module({
    imports:[
        PassportModule,
        JwtModule.registerAsync({
            imports:[JwtConfigModule],
            inject:[JwtConfigService],
            useFactory: async (jwtConfigService:JwtConfigService) => {
                return {
                    secret: jwtConfigService.SECET_KEY,
                    signOptions: {
                        expiresIn: jwtConfigService.EXPIRE_IN
                    } 
                }
            }
        }),
        UsersModule,
        PasswordsModule
    ],
    controllers:[AuthController],
    providers:[AuthService, LocalStrategy, JwtStrategy],
    exports:[AuthService]
})
export class AuthModule{}