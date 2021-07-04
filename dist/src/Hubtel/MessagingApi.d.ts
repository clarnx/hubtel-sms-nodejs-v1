import MessageResponse from "./MessageResponse";
export default class MessagingApi {
    private apiHost;
    private httpRequest;
    constructor(apiHost: any);
    sendQuickMessage(from: string, to: string, message: string): Promise<MessageResponse>;
}
