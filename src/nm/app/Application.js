import NJUAPplication from "../../nju/app/Application";

export default class Application extends NJUAPplication{
    init()
    {
        super.init();
        this.addStyleClass("nm-app");
        this._initLayout();
    }

    _initLayout()
    {
        this.$element.append(`
                <header></header>
                <main>
                    <aside></aside>
                    <section class="content"></section>
                </main>
                <footer></footer>
            `);
    }

    run()
    {
        console.log("netease music is now running ...");
    }
}
