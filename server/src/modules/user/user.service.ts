import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../../schemas/user.schema";
import {Model} from "mongoose";
import {Order, OrderDocument} from "../../schemas/order.schema";
import {CreateUserDto} from "../../dto/create-user.dto";
import * as bcrypt from 'bcrypt';
// import {AppError} from "../../comon/errors";


@Injectable()
export class UserService {

    constructor
    (@InjectModel(User.name) private userModel: Model<UserDocument>,
     @InjectModel(Order.name) private orderModel: Model<OrderDocument>) {
    }

    async checkUser(email: string) {
        return this.userModel.findOne({email: email});
    }

    async hashPassword(password: string) {
        return await bcrypt.hash(password, 10)
    }

    async create(dto: CreateUserDto): Promise<CreateUserDto> {
        dto.password = await this.hashPassword(dto.password);
        const newUser = {
            email: dto.email,
            password: dto.password,
        }
        await this.userModel.create(newUser);
        return dto
    }

    async delete() {

    }

    async edit() {

    }

    async getAll(): Promise<User[]> {
        const users = await this.userModel.find();
        return users;
    }

    async getOne() {

    }

    async publicUser(email: string){
        return this.userModel.findOne({email:email},['email'])
    }
}
