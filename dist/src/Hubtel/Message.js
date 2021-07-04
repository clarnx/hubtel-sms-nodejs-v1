"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = /** @class */ (function () {
    // Primary constructor.
    function Message(json) {
        if (json === void 0) { json = null; }
        this.object = typeof (json) === "object" ? json : new Object();
    }
    // Gets apiMessageType.
    Message.prototype.getType = function () {
        return this.object.Type;
    };
    // Gets clientReference.
    Message.prototype.getClientReference = function () {
        return this.object.ClientReference;
    };
    // Gets content.
    Message.prototype.getContent = function () {
        return this.object.Content;
    };
    // Gets from.
    Message.prototype.getFrom = function () {
        return this.object.From;
    };
    // Gets registeredDelivery.
    Message.prototype.getRegisteredDelivery = function () {
        return this.object.RegisteredDelivery;
    };
    // Gets to.
    Message.prototype.getTo = function () {
        return this.object.To;
    };
    // Sets Type.
    Message.prototype.setType = function (value) {
        if (Number.isInteger(value)) {
            if (value != 0 && value != 1 && value != 2) {
                this.object.Type = "Unset";
            }
            else {
                this.object.Type = value;
            }
            return this;
        }
        throw "Parameter value must be of type 'int'";
    };
    // Sets clientReference.
    Message.prototype.setClientReference = function (value) {
        if (value === null || typeof (value) === "string") {
            this.object.ClientReference = value;
            return this;
        }
        throw "Parameter value must be of type 'string'";
    };
    // Sets content.
    Message.prototype.setContent = function (value) {
        if (value === null || typeof (value) === "string") {
            this.object.Content = value;
            return this;
        }
        throw "Parameter value must be of type 'string'";
    };
    // Sets from.
    Message.prototype.setFrom = function (value) {
        if (value === null || typeof (value) === "string") {
            this.object.From = value;
            return this;
        }
        throw "Parameter value must be of type 'string'";
    };
    // Sets registeredDelivery.
    Message.prototype.setRegisteredDelivery = function (value) {
        if (typeof (value) === "boolean") {
            this.object.RegisteredDelivery = value ? "true" : "false";
            return this;
        }
        throw "Parameter value must be of type 'bool'";
    };
    // Sets to.
    Message.prototype.setTo = function (value) {
        if (value === null || typeof (value) === "string") {
            this.object.To = value;
            return this;
        }
        throw "Parameter value must be of type 'string'";
    };
    return Message;
}());
exports.default = Message;
