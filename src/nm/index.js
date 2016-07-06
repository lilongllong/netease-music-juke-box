import Application from "./app/Application";
import ServiceClient from "./service/ServiceClient";

function main()
{
    // ServiceClient.getInstance().getUserPlayLists().then(playlist => {
    //     console.log(playlist);
    // });
    // ServiceClient.getInstance().getPlayListDetail().then(playlist => {
    //     console.log(playlist);
    // });
    const app = new Application("nm-app");
    app.placeAt(document.body);
    app.run();
}

$(main);
