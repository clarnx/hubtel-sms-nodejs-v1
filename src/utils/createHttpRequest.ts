import { IncomingMessage } from "http";
import https from "https";

const createHttpRequest = (url: string, options: any) => {
    return new Promise((resolve, reject) => {
        const req = https.request(url, options, (res: IncomingMessage | any) => {
            // reject on bad status
            if (res.statusCode < 200 || res.statusCode >= 300) {
                return reject(new Error('statusCode=' + res.statusCode));
            }
            // cumulate data
            let body: any = [];
            res.on('data', (chunk: any) => {
                body.push(chunk);
            });
            // resolve on end
            res.on('end', () => {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                } catch (e) {
                    reject(e);
                }
                resolve(body);
            });
        });
        // reject on request error
        req.on('error', (err) => {
            // This is not a "Second reject", just a different sort of failure
            reject(err);
        });
        // IMPORTANT
        req.end();
    });
}

export default createHttpRequest