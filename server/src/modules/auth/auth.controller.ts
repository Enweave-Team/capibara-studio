import {Body, Controller, Post, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../user/dto/create-user.dto";
import {LoginUserDto} from "../user/dto/login-user.dto";
import {AuthUserResponse} from "./response";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {JwtGuard} from "../../guards/jwt-guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiTags('API')
    @ApiResponse({status: 201,type: CreateUserDto})
    @Post('register')
    register(@Body() dto: CreateUserDto): Promise<CreateUserDto>{
        return this.authService.registerUser(dto)
    }

    @ApiTags('API')
    @ApiResponse({status: 200,type: AuthUserResponse})
    @Post('login')
    login(@Body() dto: LoginUserDto): Promise<AuthUserResponse> {
        return this.authService.loginUser(dto);
    }
}
