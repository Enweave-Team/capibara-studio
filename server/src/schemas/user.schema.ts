import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';
import {Order} from "./order.schema";


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    nickname: string;

    @Prop()
    email: string;

    @Prop()
    tel: number;

    @Prop()
    password: string;

    @Prop()
    avatar: string;

    @Prop()
    role: string;

    @Prop({type: [{type: Types.ObjectId, ref: 'Order'}]})
    orders: Order[];

}

export const UserSchema = SchemaFactory.createForClass(User);