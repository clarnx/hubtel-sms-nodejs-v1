export default class ApiHost {
    private auth;
    private hostname;
    constructor(auth?: null | any, hostname?: string);
    getAuth(): string | null;
    getHostname(): string;
}
