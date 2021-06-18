import { ResponseModel } from "./resposeModel";

export interface SingleResponseModel<T> extends ResponseModel{
    data:T
}