export interface loginForm{
    username:string,
    password:string
}

interface dataType{
    token:string
}
export interface loginResponse{
    code:number,
    data:dataType
}