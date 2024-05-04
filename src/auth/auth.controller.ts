import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'auth.register.user' })
  registerUser() {
    return 'registerUser';
  }

  @MessagePattern({ cmd: 'auth.login.user' })
  loginUser() {
    return 'loginUser';
  }

  @MessagePattern({ cmd: 'auth.verify.user' })
  verifyToken() {
    return 'verifyToken';
  }
}
