import { ResponseModel } from "./resposeModel";

export interface ListResponseModel<T> extends ResponseModel{
    data:T[]
}