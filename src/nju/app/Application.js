import View from "../view/View";
// module env variabel


export default class Application extends View{

    static _instance = null;

    constructor(...args)
    {
        super(...args);
        /*
        全局只有一个Application  多New的会报错
        */
        if (Application._instance === null)
        {
            Application._instance = this;
        }
        else
        {
            throw new Error("Application is APP_SINGLETON and it only construced once.");
        }
    }

    static getInstance()
    {
        if (Application._instance === null)
        {
            throw new Error("Application has not been instantiated yet.");
        }
        return Application._instance;
    }

    init()
    {
        super.init();
        this.addStyleClass("nju-app");
    }
}
