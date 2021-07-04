export default class Message {
    private object;
    constructor(json?: null);
    getType(): any;
    getClientReference(): any;
    getContent(): any;
    getFrom(): any;
    getRegisteredDelivery(): any;
    getTo(): any;
    setType(value: number): this;
    setClientReference(value: string): this;
    setContent(value: string): this;
    setFrom(value: string): this;
    setRegisteredDelivery(value: boolean): this;
    setTo(value: string): this;
}
