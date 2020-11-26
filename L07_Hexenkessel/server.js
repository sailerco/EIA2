"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L07_Hexenkessel = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var L07_Hexenkessel;
(function (L07_Hexenkessel) {
    let recipe;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001; //server hört auf port 5001
    console.log("Server starting on port:" + port);
    let databaseUrl = "mongodb+srv://cocosailer:ymiAAtdQQ@cocosailereia2.trquu.mongodb.net/<dbname>?retryWrites=true&w=majority";
    /* let databaseUrl: string = "mongodb://localhost:27017"; */
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        console.log("Starting server on port " + _port);
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        /*server.addListener("listening", handleListen);*/
        server.listen(port);
    }
    /* function handleListen(): void {
        console.log("Listening");
    } */
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        recipe = mongoClient.db("Hexenkessel").collection("Potion");
        console.log("Database connection", recipe != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let jsonString;
            if (url.pathname == "/retrieve") {
                jsonString = JSON.stringify(await recipe.find().toArray());
                /* jsonString += "<br>"; */
                _response.write(jsonString);
            }
            else if (url.pathname == "/send") {
                console.log(_request.url);
                jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                storePotion(url.query);
            }
            else if (url.pathname == "/delete") {
                deletePotion();
            }
        }
        _response.end();
    }
    function storePotion(_potion) {
        console.log(_potion);
        recipe.insertOne(_potion);
    }
    function deletePotion() {
        recipe.drop();
    }
})(L07_Hexenkessel = exports.L07_Hexenkessel || (exports.L07_Hexenkessel = {}));
//# sourceMappingURL=server.js.map