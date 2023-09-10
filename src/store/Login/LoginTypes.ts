import {LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_REQUEST} from "./LoginActionTypes"

export interface ILoginState{
    userInfo?:any,
    loading:boolean,
    error:string | null,
    data:any
}

