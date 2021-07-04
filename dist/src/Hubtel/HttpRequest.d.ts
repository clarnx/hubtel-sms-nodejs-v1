export default class HttpRequest {
    private url;
    private connection;
    private headers;
    constructor(url?: string, headers?: {
        "Content-Type": string;
    });
    post(requestBody?: null): Promise<any>;
    get(requestParams?: string): Promise<any>;
}
