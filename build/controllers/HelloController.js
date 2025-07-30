"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const nubie_1 = require("nubie");
let HelloController = class HelloController {
    async sayHiAsync(name) {
        return nubie_1.HttpResponse.Ok({
            message: `Hello ${name}, Thanks For Using Nubie :)`,
        });
    }
};
__decorate([
    (0, nubie_1.HttpGet)("/:name"),
    __param(0, (0, nubie_1.RouteParam)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], HelloController.prototype, "sayHiAsync", null);
HelloController = __decorate([
    (0, nubie_1.ApiController)()
], HelloController);
