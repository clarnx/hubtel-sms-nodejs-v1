export default class BasicAuth {

    private clientId: string;
    private clientSecret: string;

    constructor(clientId: string, clientSecret: string) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    public setClientId(clientId: string) {
        this.clientId = clientId;
        return this;
    }

    public setClientSecret(clientSecret: string) {
        this.clientSecret = clientSecret;
        return this;
    }

    public getClientId() {
        return this.clientId;
    }

    public getClientSecret() {
        return this.clientSecret;
    }

}