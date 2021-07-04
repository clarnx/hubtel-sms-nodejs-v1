import HttpRequest from "./HttpRequest";
import MessageResponse from "./MessageResponse";

export default class MessagingApi {
    private apiHost: any;
    private httpRequest: any;

    constructor(apiHost: any) {
        this.apiHost = apiHost;
    }

    public async sendQuickMessage(from: string, to: string, message: string) {
        const hostname = this.apiHost.getHostname();
        const auth = this.apiHost.getAuth();
        const urlEncodedMessage = encodeURI(message);
        const request = `?clientsecret=${auth.getClientSecret()}&clientid=${auth.getClientId()}&from=${from}&to=${to}&content=${urlEncodedMessage}`;

        this.httpRequest = new HttpRequest(hostname);

        const response = await this.httpRequest.get(request);

        console.log(response);

        return new MessageResponse(response);
    }
}