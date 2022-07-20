import { ApiCall } from "tsrpc";
import { ReqGetInfo, ResGetInfo } from "../shared/protocols/PtlGetInfo";

export default async function (call: ApiCall<ReqGetInfo, ResGetInfo>) {
    call.succ({
        data: InfoData,
    });
}

export const InfoData: { id: number; content: string } = {
    id: 1,
    content: "test",
};
