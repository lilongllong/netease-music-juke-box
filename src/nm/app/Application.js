import NJUAPplication from "../../nju/app/Application";

import PlayerView from "../view/PlayerView";
import PlayListView from "../view/PlayListView";
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

}
