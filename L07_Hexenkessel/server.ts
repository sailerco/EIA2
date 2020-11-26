import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace L07_Hexenkessel {
    interface Potion {
        [type: string]: string | string[] | undefined;
    }
    let recipe: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001; //server hört auf port 5001

    console.log("Server starting on port:" + port);
    let databaseUrl: string = "mongodb+srv://cocosailer:ymiAAtdQQ@cocosailereia2.trquu.mongodb.net/<dbname>?retryWrites=true&w=majority";
    /* let databaseUrl: string = "mongodb://localhost:27017"; */
    
    startServer(port);

    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        console.log("Starting server on port " + _port);        
        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest); 
        /*server.addListener("listening", handleListen);*/
        server.listen(port); 
    }
    /* function handleListen(): void {
        console.log("Listening");
    } */
    
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        recipe = mongoClient.db("Hexenkessel").collection("Potion");
        console.log("Database connection", recipe != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("What's up?");
        
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            let jsonString: string;
            if (url.pathname == "/retrieve") {
                jsonString = JSON.stringify(await recipe.find().toArray());
                /* jsonString += "<br>"; */
                _response.write(jsonString);
            } else if (url.pathname == "/send") {
                console.log(_request.url);
                jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
                storePotion(url.query);
            } else if (url.pathname == "/delete") {
                deletePotion();
            }
        }

        _response.end();
    }
    function storePotion(_potion: Potion): void {
        console.log(_potion);
        recipe.insertOne(_potion);
    }
    function deletePotion(): void {
        recipe.drop();
    }
}