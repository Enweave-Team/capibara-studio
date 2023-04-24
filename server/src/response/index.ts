import {IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class AuthUserResponse {

    @ApiProperty()
    @IsString()
    email: string
    @ApiProperty()
    @IsString()
    password: string
    @ApiProperty()
    @IsString()
    token: string
}
