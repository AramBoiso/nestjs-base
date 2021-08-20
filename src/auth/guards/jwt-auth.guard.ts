import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export class JwtAuthGuard extends AuthGuard('jwt'){

    handleRequest(error, data, info, ctx:ExecutionContext ){

        if(error || !data)
            throw error || new UnauthorizedException('Por favor, inicie sesión, para obtener acceso al recurso.');

        return data.user;
    
    }

}