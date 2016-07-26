import NJUAPplication from "../../nju/app/Application";

import PlayerViewController from "../view/PlayerViewController";
import PlayListView from "../view/PlayListView";
import SearchViewController from "../view/SearchViewController";
import TrackTableView from "../view/TrackTableView";


export default class Application extends NJUAPplication{
    init()
    {
        super.init();
        this.addStyleClass("nm-app");
        this._initLayout();
        this._initPlayerViewController();
        this._initPlayListView();
        this._initSearchViewController();
        this._initTrackTableView();
    }

    _initLayout()
    {
        this.$element.append(`
                <header><h1>网易云音乐</h1></header>
                <main>
                    <aside class="sidebar"></aside>
                    <section class="content"></section>
                </main>
                <footer></footer>
            `);
    }

    _initPlayerViewController()
    {
        this.playerViewController = new PlayerViewController();
        this.addSubView(this.playerViewController.view, this.$("> footer"));
    }

    _initPlayListView()
    {
        this.playListView = new PlayListView("play-list-view");
        this.addSubView(this.playListView, this.$("> main > aside.sidebar"));
    }

    _initSearchViewController()
    {
        this.SearchViewController = new SearchViewController();
        this.searchView = this.SearchViewController.view;
        this.addSubView(this.searchView, this.$("> header"));
    }

    _initTrackTableView()
    {
        this.trackTableView = new TrackTableView("track-table-view");
        this.addSubView(this.trackTableView, this.$("> main > section.content"));
    }

}
