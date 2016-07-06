import View from "../view/View";
// module env variabel
window.$app = null;

export default class Application extends View{

    constructor(...args)
    {
        super(...args);
        if (window.$app === null)
        {
            window.$app = this;
        }
        else
        {
            throw new Error("application is APP_SINGLETON and  It only construced once");
        }
    }

    init()
    {
        super.init();
        this.addStyleClass("nju-application");
    }

    run()
    {

    }
}
