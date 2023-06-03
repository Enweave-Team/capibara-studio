import {PassportStrategy} from "@nestjs/passport";
import {Strategy,ExtractJwt} from "passport-jwt";
import config from "../../config";
import {Injectable} from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.secretKey
        })
    }

    async validate(payload: any) {
        return {...payload.user}
    }
}
