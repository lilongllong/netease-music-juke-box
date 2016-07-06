import NJUAPplication from "../../nju/app/Application";

export default class Application extends NJUAPplication{
    init()
    {
        super.init();
        this.addStyleClass("nju-application");
    }

    run()
    {
        console.log("netease music is now running ...");
    }
}
