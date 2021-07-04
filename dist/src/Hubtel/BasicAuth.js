"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasicAuth = /** @class */ (function () {
    function BasicAuth(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }
    BasicAuth.prototype.setClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    BasicAuth.prototype.setClientSecret = function (clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    };
    BasicAuth.prototype.getClientId = function () {
        return this.clientId;
    };
    BasicAuth.prototype.getClientSecret = function () {
        return this.clientSecret;
    };
    return BasicAuth;
}());
exports.default = BasicAuth;
