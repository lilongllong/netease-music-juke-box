import NJUAPplication from "../../nju/app/Application";
import PlayerView from "../view/PlayerView";
import PlayListView from "../view/PlayListView";
import ServiceClient from "../service/ServiceClient";
import TrackTableView from "../View/TrackTableView";

export default class Application extends NJUAPplication{
    init()
    {
        super.init();
        this.addStyleClass("nm-app");
        this._initLayout();
        this._initPlayListView();
    }

    _initLayout()
    {
        this.$element.append(`
                <header><h1>易听音乐站</h1></header>
                <main>
                    <aside class="sidebar"></aside>
                    <section class="content"></section>
                </main>
                <footer></footer>
            `);
    }

    _initPlayListView()
    {
        this.playListView = new PlayListView("play-list-view");
        this.playerView = new PlayerView("player-view");
        this.trackTableView = new TrackTableView("track-table-view");
        this.addSubView(this.playListView, this.$("> main > aside.sidebar"));
        this.addSubView(this.playerView, this.$("> footer"));
        this.addSubView(this.trackTableView, this.$("> main > section.content"));

    }

    async run()
    {
        // pseudo login -UserId
        // refresh playlist
        //by default , select the first play
        try
        {
            await ServiceClient.getInstance().login();
            this.playListView.items = await ServiceClient.getInstance().getUserPlayLists();
            console.log(this.playListView.items);
        }
        catch(e)
        {
            console.error("outer", e);
        }
        finally
        {

        }
    }
}
