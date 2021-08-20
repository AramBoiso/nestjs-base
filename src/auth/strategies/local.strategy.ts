import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

    constructor(private readonly authService:AuthService){
        super({
            usernameField: 'usernameOrEmail',
        });
    }

    async validate(usernameOrEmail:string, password:string){

        let user = await this.authService.validateAccount(usernameOrEmail, password);

        if(!user){
            throw new UnauthorizedException({
                message: "Credenciales no válidas."
            });
        }

        return user;

    }


}