export default function jsontrue(message:string,data:any=null){
    let jsons={
        success:true,
        message:message,
        error:null,
        data:data
    }
    return(jsons)
}