import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../../schemas/user.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';
import {UpdateUserDto} from "./dto/update-user.dto";
import {Order} from "../../schemas/order.schema";


@Injectable()
export class UserService {

    constructor
    (@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    async checkUser(email: string): Promise<User> {
        try {
            return this.userModel.findOne({email: email});
        } catch (e) {
            throw new Error(e)
        }
    }

    async hashPassword(password: string): Promise<string> {
        try {
            return await bcrypt.hash(password, 10)
        } catch (e) {
            throw new Error(e)
        }
    }

    async create(dto: CreateUserDto): Promise<CreateUserDto> {
        try {
            dto.password = await this.hashPassword(dto.password);
            const newUser = {
                email: dto.email,
                password: dto.password,
                firstname: dto.firstname,
                lastname: dto.lastname,
                age: dto.age,
                tel: dto.tel,
                avatar: dto.avatar,
                role: dto.role,
            }
            await this.userModel.create(newUser);
            return dto
        } catch (e) {
            throw new Error(e)
        }
    }

    async getAll(): Promise<User[]> {
        try {
            const users = await this.userModel.find();
            return users;
        } catch (e) {
            throw new Error(e)
        }
    }

    async publicUser(email: string): Promise<User> {
        try {
            return this.userModel.findOne({email: email}, ['email']);
        } catch (e) {
            throw new Error(e)
        }


    }

    async updateUser(email: string, dto: UpdateUserDto): Promise<UpdateUserDto> {
        try {
            const newPassword = await this.hashPassword(dto.password);

            const updateUser = {
                email: dto.email,
                password: newPassword,
                firstname: dto.firstname,
                lastname: dto.lastname,
                age: dto.age,
                tel: dto.tel,
                avatar: dto.avatar,
                role: dto.role,
            }

            await this.userModel.updateOne({email: email}, updateUser);
            return updateUser;

        } catch (e) {
            throw new Error(e)
        }
    }

    async deleteUser(email: string): Promise<boolean> {
        try {
            await this.userModel.deleteOne({email: email});
            return true;
        } catch (e) {
            throw new Error(e)
        }
    }
}
