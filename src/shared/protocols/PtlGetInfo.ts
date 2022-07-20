import { BaseRequest, BaseResponse, BaseConf } from "./base";

export interface ReqGetInfo extends BaseRequest {
    id: number;
}

export interface ResGetInfo extends BaseResponse {
    data: {
        id: number;
        content: string;
    };
}

export const conf: BaseConf = {};
