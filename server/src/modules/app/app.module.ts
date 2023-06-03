import { Module } from '@nestjs/common';
import {OrderModule} from "../order/order.module";
import {MongooseModule} from "@nestjs/mongoose";
import env from "../../../config";
import {UserModule} from "../user/user.module";
import {AuthModule} from "../auth/auth.module";
import {TokenModule} from "../token/token.module";


@Module({
  imports: [
      AuthModule,
      OrderModule,
      UserModule,
      TokenModule,
      MongooseModule.forRoot(env.dbUrl)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
