export default class BasicAuth {
    private clientId;
    private clientSecret;
    constructor(clientId: string, clientSecret: string);
    setClientId(clientId: string): this;
    setClientSecret(clientSecret: string): this;
    getClientId(): string;
    getClientSecret(): string;
}
