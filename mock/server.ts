import { AuthRouter } from "./src/app/auth";
import { CompanieRouter } from "./src/app/companies";
import { serverConfig } from "./src/config/server.enum";

const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

class ApplicationStart {

    static start(): void {
        server.use(jsonServer.bodyParser);
        server.use(middlewares);

        AuthRouter.init(server);
        CompanieRouter.init(server);

        this.launchServer();
    }

    private static launchServer(): void {
        const onListen = () => console.log(`Go to ${serverConfig.PROTOCOL}://${serverConfig.HOST}:${serverConfig.PORT}`);
        server.listen(serverConfig.PORT, onListen);
    }
}

ApplicationStart.start();