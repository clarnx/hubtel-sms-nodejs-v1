"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApiHost = /** @class */ (function () {
    function ApiHost(auth, hostname) {
        if (auth === void 0) { auth = null; }
        if (hostname === void 0) { hostname = "https://smsc.hubtel.com/v1/messages/send"; }
        this.auth = auth;
        this.hostname = hostname;
    }
    ApiHost.prototype.getAuth = function () {
        return this.auth;
    };
    ApiHost.prototype.getHostname = function () {
        return this.hostname;
    };
    return ApiHost;
}());
exports.default = ApiHost;
