import { Body, Controller, Inject, Post } from '@nestjs/common';
import { LoginDTO, RegisterDTO } from 'src/models/user.dto';
import { AuthService } from './auth.service';

@Controller('users')
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }

    @Post()
    register(@Body() credentials: RegisterDTO) {
        return this.authService.register();
    }

    @Post('/login')
    login(@Body() crendentials: LoginDTO) {
        return this.authService.login(crendentials);
    }

}
