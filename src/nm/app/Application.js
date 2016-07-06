import NJUAPplication from "../../nju/app/Application";
import PlayListView from "../view/PlayListView";

export default class Application extends NJUAPplication{
    init()
    {
        super.init();
        this.addStyleClass("nm-app");
        this._initLayout();
        this._initPlayList();
    }

    _initLayout()
    {
        this.$element.append(`
                <header><h1>易听音乐站</h1></header>
                <main>
                    <aside></aside>
                    <section class="content"></section>
                </main>
                <footer></footer>
            `);
    }

    _initPlayList()
    {
        this.playListView = new PlayListView("play-list");
        this.addSubView(this.playListView, this.$container.find("> main > aside"));
    }

    run()
    {
        console.log("netease music is now running ...");
    }
}
