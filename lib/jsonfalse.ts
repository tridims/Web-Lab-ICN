export default function jsonfalse(message:string,error:any=null){
    let jsons={
        success:false,
        message:message,
        error:error,
        data:null
    }
    return(jsons)
}