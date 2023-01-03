export default function base64Decode(str:string){
    return Buffer.from(str,'base64')
}