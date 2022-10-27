import { AuthRouter } from "./src/app/auth";
import { CompanieRouter } from "./src/app/companies";
import { DashboardRouter } from "./src/app/dashboard";
import { DevicesRouter } from "./src/app/devices";
import { RatesRouter } from "./src/app/rates";
import { ReportsRouter } from "./src/app/reports";
import { UserRouter } from "./src/app/users";
import { ZoneRouter } from "./src/app/zones";
import { serverConfig } from "./src/config/server.enum";

const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

class ApplicationStart {

    static start(): void {
        server.use(jsonServer.bodyParser);
        server.use(middlewares);

        AuthRouter.init(server);
        DashboardRouter.init(server);
        CompanieRouter.init(server);
        CompanieRouter.companiesAll(server);
        ZoneRouter.zoneAll(server);
        ReportsRouter.init(server);
        RatesRouter.init(server);
        RatesRouter.create(server);
        RatesRouter.getbyid(server);
        RatesRouter.update(server);
        RatesRouter.delete(server);
        DevicesRouter.init(server);
        DevicesRouter.create(server);
        DevicesRouter.getbyid(server);
        DevicesRouter.update(server);
        DevicesRouter.delete(server);
        UserRouter.readAll(server);

        this.launchServer();
    }

    private static launchServer(): void {
        const onListen = () => console.log(`Go to ${serverConfig.PROTOCOL}://${serverConfig.HOST}:${serverConfig.PORT}`);
        server.listen(serverConfig.PORT, onListen);
    }
}

ApplicationStart.start();
