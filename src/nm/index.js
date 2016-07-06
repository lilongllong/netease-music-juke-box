import Application from "./app/Application";
import ServiceClient from "./service/ServiceClient";

function main()
{
    ServiceClient.getInstance().getUserPlayList().then(playlist => {
        console.log(playlist);
    });
    ServiceClient.getInstance().getSpecificPlayList().then(playlist => {
        console.log(playlist);
    });
    const app = new Application("nju-app");
    $(document.body).append(app.$element);
    console.log(app);
}

$(main);

// $(document).ready(() => {
//     const panel = new Panel("nm-panel");
//     panel.title = "Panel Title";
//
//     const view = new PlayListView("nm-play-list");
//     panel.addSubView(view);
//     $(document.body).append(panel.$element);
//
//     console.log(view.parent, panel.parent);
//
// });
