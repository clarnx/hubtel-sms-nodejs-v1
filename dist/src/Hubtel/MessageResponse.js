"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageResponse = /** @class */ (function () {
    // Primary constructor.
    function MessageResponse(json) {
        this.object = typeof (json) === "object" ? json : new Object();
    }
    // Gets clientReference.
    MessageResponse.prototype.getClientReference = function () {
        return this.object.ClientReference;
    };
    // Gets detail.
    MessageResponse.prototype.getDetail = function () {
        return this.object.Detail;
    };
    // Gets messageId.
    MessageResponse.prototype.getMessageId = function () {
        return this.object.MessageId;
    };
    // Gets networkId.
    MessageResponse.prototype.getNetworkId = function () {
        return this.object.NetworkId;
    };
    // Gets rate.
    MessageResponse.prototype.getRate = function () {
        return this.object.Rate;
    };
    // Gets status.
    MessageResponse.prototype.getStatus = function () {
        return this.object.Status;
    };
    return MessageResponse;
}());
exports.default = MessageResponse;
