import ApplicationController from "./app/ApplicationController";
import ServiceClient from "./service/ServiceClient";

function main()
{
    const appController = new ApplicationController("nm-app");
    appController.view.placeAt(document.body);
    appController.run();
}

$(main);
