import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString} from "class-validator";

export class UpdateUserDto{
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstname: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lastname: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    age: number;

    @ApiProperty()
    @IsPhoneNumber()
    @IsNotEmpty()
    tel: number;

    @ApiProperty()
    @IsString()
    avatar: string;

    @ApiProperty()
    @IsString()
    role: string;
}
