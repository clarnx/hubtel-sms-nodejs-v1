import createHttpRequest from "../utils/createHttpRequest";

export default class HttpRequest {
    private url: string;
    private connection: any;
    private headers: any;

    constructor(url = "", headers = { "Content-Type": "application/json" }) {
        this.url = url;
        this.headers = headers;
        this.connection = createHttpRequest;
    }

    public async post(requestBody = null) {


        const options = {
            method: 'POST',
            headers: this.headers,
            body: requestBody
        }

        const apiResponse = await this.connection(this.url, options)
        return apiResponse;
    }

    public async get(requestParams = "") {


        const options = {
            method: 'GET',
            headers: this.headers,
        }

        const apiResponse = await this.connection(`${this.url}${requestParams}`, options);

        return apiResponse
    }
}