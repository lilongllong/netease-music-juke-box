import NJUAPplication from "../../nju/app/Application";
import PlayerView from "../view/PlayerView";
import PlayListView from "../view/PlayListView";
import ServiceClient from "../service/ServiceClient";
import TrackTableView from "../view/TrackTableView";

export default class Application extends NJUAPplication{
    init()
    {
        super.init();
        this.addStyleClass("nm-app");
        this._initLayout();
        this._initPlayListView();
        this._initPlayerView();
        this._initTrackTableView();
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
        this.addSubView(this.playListView, this.$("> main > aside.sidebar"));
    }

    _initPlayerView()
    {
        this.playerView = new PlayerView("player-view");
        this.addSubView(this.playerView, this.$("> footer"));
    }

    _initTrackTableView()
    {
        this.trackTableView = new TrackTableView("track-table-view");
        this.addSubView(this.trackTableView, this.$("> main > section.content"));
    }

    async run()
    {
        // pseudo login -UserId
        // refresh playlist
        //by default, select the first play to show trackTableListView
        //by default, playerView select the first song of selected playList.
        try
        {
            await ServiceClient.getInstance().login();
            this.playListView.items = await ServiceClient.getInstance().getUserPlayLists();
            console.log(this.playListView.items);

            const playlist =  await ServiceClient.getInstance().getPlayListDetail(this.playListView.items[0].id);

            this.trackTableView.items = playlist.tracks;
            console.log(this.trackTableView.items);
        }
        catch (e)
        {
            console.error(e);
        }

    }
}
