export default class ApiHost {
    private auth: string | null;
    private hostname: string;

    constructor(auth: null | any = null, hostname: string = "https://smsc.hubtel.com/v1/messages/send") {
        this.auth = auth;
        this.hostname = hostname;
    }

    public getAuth() {
        return this.auth;
    }

    public getHostname() {
        return this.hostname;
    }
}