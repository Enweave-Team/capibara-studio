import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";

export class OrderDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsNotEmpty()
    price: number;

    @ApiProperty()
    @IsString()
    picture: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    datetime: string;

}
