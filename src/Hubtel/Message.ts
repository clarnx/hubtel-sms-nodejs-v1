export default class Message {

    private object: any;


    // Primary constructor.

    constructor(json = null) {
        this.object = typeof (json) === "object" ? json : new Object();
    }


    // Gets apiMessageType.

    public getType() {
        return this.object.Type;
    }


    // Gets clientReference.

    public getClientReference() {
        return this.object.ClientReference;
    }


    // Gets content.

    public getContent() {
        return this.object.Content;
    }


    // Gets from.

    public getFrom() {
        return this.object.From;
    }


    // Gets registeredDelivery.

    public getRegisteredDelivery() {
        return this.object.RegisteredDelivery;
    }


    // Gets to.

    public getTo() {
        return this.object.To;
    }



    // Sets Type.

    public setType(value: number) {
        if (Number.isInteger(value)) {
            if (value != 0 && value != 1 && value != 2) {
                this.object.Type = "Unset";
            } else {
                this.object.Type = value;
            }
            return this;
        }
        throw "Parameter value must be of type 'int'";
    }


    // Sets clientReference.

    public setClientReference(value: string) {
        if (value === null || typeof (value) === "string") {
            this.object.ClientReference = value;
            return this;
        }
        throw "Parameter value must be of type 'string'";
    }


    // Sets content.

    public setContent(value: string) {
        if (value === null || typeof (value) === "string") {
            this.object.Content = value;
            return this;
        }
        throw "Parameter value must be of type 'string'";
    }


    // Sets from.

    public setFrom(value: string) {
        if (value === null || typeof (value) === "string") {
            this.object.From = value;
            return this;
        }
        throw "Parameter value must be of type 'string'";
    }


    // Sets registeredDelivery.

    public setRegisteredDelivery(value: boolean) {
        if (typeof (value) === "boolean") {
            this.object.RegisteredDelivery = value ? "true" : "false";
            return this;
        }
        throw "Parameter value must be of type 'bool'";
    }


    // Sets to.

    public setTo(value: string) {
        if (value === null || typeof (value) === "string") {
            this.object.To = value;
            return this;
        }
        throw "Parameter value must be of type 'string'";
    }
}