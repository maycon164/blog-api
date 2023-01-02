import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { LoginDTO } from 'src/models/user.dto';

@Injectable()
export class AuthService {

    private mockUser = {
        email: 'maycon@gmail.com',
        token: 'jwt.token.here',
        username: 'maycon',
        bio: 'i work at statefarm',
        image: null
    }

    register() {
        return this.mockUser;
    }

    login(credentials: LoginDTO) {
        if (credentials.email == this.mockUser.email) {
            return this.mockUser
        }

        throw new InternalServerErrorException()
    }
}
