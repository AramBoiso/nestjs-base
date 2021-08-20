import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Password } from 'src/models/usr/passwords/entities';
import { PasswordsService } from 'src/models/usr/passwords/passwords.service';
import { User } from 'src/models/usr/users/entities';
import { UsersService } from 'src/models/usr/users/users.service';
import { Connection } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService:JwtService,
        private readonly userService:UsersService,
        private readonly passwordService:PasswordsService,
        private readonly connection:Connection,
    ){}

    async login(user:User):Promise<object>{

        const { id_user, username, email } = user;

        const payload = {
            id_user,
            username,
            email
        }
        
        const accessToken = this.jwtService.sign(payload);

        return {
            statusCode:201,
            message: "Login succesfully",
            data:{
                accessToken
            }
        }
    }

    async validateAccount(usernameOrEmail:string, password:string):Promise<User>{

        const user:User = await this.userService.getOne({ username: usernameOrEmail })|| await this.userService.getOne({ email: usernameOrEmail });

        if(!user)
            return null;

        const pass:Password = await this.connection.getRepository(Password).findOne({ user });

        const passValid:boolean = this.passwordService.validatePassword(password, pass.password);
        
        return passValid? user : null;

    }

    
}
