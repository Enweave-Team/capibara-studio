import {BadRequestException, Injectable} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {CreateUserDto} from "../user/dto/create-user.dto";
import {AppError} from "../../comon/errors";
import {LoginUserDto} from "../user/dto/login-user.dto";
import * as bcrypt from 'bcrypt';
import {AuthUserResponse} from "./response";
import {TokenService} from "../token/token.service";


@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
                private readonly tokenService: TokenService) {
    }


    async registerUser(dto: CreateUserDto): Promise<CreateUserDto> {
        try {
            const existUser = await this.userService.checkUser(dto.email);
            if (existUser) {
                throw new BadRequestException(AppError.USER_EXIST);
            }
            return this.userService.create(dto);
        } catch (e) {
            throw new Error(e)
        }
    }

    async loginUser(dto: LoginUserDto): Promise<AuthUserResponse> {
        try {
            const existUser = await this.userService.checkUser(dto.email);
            if (!existUser) {
                throw new BadRequestException(AppError.USER_NOT_EXIST)
            }
            const validetePassword = await bcrypt.compare(dto.password, existUser.password);
            if (!validetePassword) {
                throw new BadRequestException(AppError.WRONG_DATA);
            }
            const user = await this.userService.publicUser(dto.email)
            const token = await this.tokenService.generateJwtToken(user)
            return {user, token};
        } catch (e) {
            throw new Error(e)
        }
    }
}
