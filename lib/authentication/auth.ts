import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({path: "../../.env"})

function createJWT(payload: any, expiresIn: string = '24h') {
    let secret=""
    if (process.env.APP_SECRET!=null){
        secret=process.env.APP_SECRET
    }
    return jwt.sign(payload, secret, { expiresIn });
}

function verifyJWT(token: string) {
    let secret=""
    if (process.env.APP_SECRET!=null){
        secret=process.env.APP_SECRET
    }
    try {
        return jwt.verify(token, secret);
    } catch (err) {
        throw new Error('Invalid token');
    }
}
