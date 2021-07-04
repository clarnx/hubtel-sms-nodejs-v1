export default class MessageResponse {
    private object: any;

    // Primary constructor.

    constructor(json: any) {
        this.object = typeof (json) === "object" ? json : new Object();
    }

    // Gets clientReference.

    public getClientReference() {
        return this.object.ClientReference;
    }

    // Gets detail.

    public getDetail() {
        return this.object.Detail;
    }

    // Gets messageId.

    public getMessageId() {
        return this.object.MessageId;
    }

    // Gets networkId.

    public getNetworkId() {
        return this.object.NetworkId;
    }

    // Gets rate.

    public getRate() {
        return this.object.Rate;
    }

    // Gets status.

    public getStatus() {
        return this.object.Status;
    }
}