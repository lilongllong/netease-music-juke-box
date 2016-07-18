import Application from "./Application";
import ViewController from "../view/ViewController";

export default class ApplicationController extends ViewController
{

    static _instance = null;

    constructor(...args)
    {
        super(...args);
        /*
        全局只有一个Application  多New的会报错
        */
        if (ApplicationController._instance === null)
        {
            ApplicationController._instance = this;
        }
        else
        {
            throw new Error("Application is APP_SINGLETON and it only construced once.");
        }
    }

    static getInstance()
    {
        if (ApplicationController._instance === null)
        {
            throw new Error("ApplicationController has not been instantiated yet");
        }
        return ApplicationController._instance;
    }

    get application()
    {
        return this.view;
    }

    createView(options = {})
    {
        return this.createApplication(options);
    }

    createApplication(options = {})
    {
        throw new Error("creatApplication must be inited");
    }

    run()
    {

    }
}
