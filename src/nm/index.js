import ApplicationController from "./app/ApplicationController";
import ServiceClient from "./service/ServiceClient";

function main()
{
    // ServiceClient.getInstance().getUserPlayLists().then(playlist => {
    //     console.log(playlist);
    // });
    // ServiceClient.getInstance().getPlayListDetail().then(playlist => {
    //     console.log(playlist);
    // });
    const appController = new ApplicationController("nm-app");
    appController.view.placeAt(document.body);
    appController.run();
}

$(main);
