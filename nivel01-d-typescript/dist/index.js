"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
var app = express_1.default();
app.get('/', function (req, res) {
    var user = CreateUser_1.default({
        email: 'juliocholiveira@gmail.com',
        password: '123456',
        techs: ['ReactJS', { title: 'NodeJS', experience: 100 }]
    });
    console.log(user);
    console.log(user.techs);
    return res.json({ message: 'Hello Typescript' });
});
app.listen(3333);
