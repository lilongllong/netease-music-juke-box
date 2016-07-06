import NJUAPplication from "../../nju/app/Application";

export default class Application extends NJUAPplication{
    init()
    {
        super.init();
        this.addStyleClass("nju-app");
        this._initLayout();
    }

    _initLayout()
    {
        this.$element.append(`
                <div class="header-container"></div>
                <main></main>
                <footer></footer>
            `);
    }

    run()
    {
        console.log("netease music is now running ...");
    }
}
