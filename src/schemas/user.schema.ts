import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument, Types} from 'mongoose';
import {Order} from "./order.schema";


export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    firstname: string;

    @Prop()
    lastname: string;

    @Prop()
    age: number;

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
