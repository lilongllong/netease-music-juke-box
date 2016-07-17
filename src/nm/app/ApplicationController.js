import NJUApplication from "../../nju/app/ApplicationController";

import Application from "./Application";
import ServiceClient from "../service/ServiceClient";
export default class ApplicationController extends NJUApplication
{

    init()
    {
        super.init();
        this._playLists = [];
        this._activePlayList = null;
        this._activeTrack = null;
    }

    get playLists()
    {
        return this._playLists;
    }
    set playLists(value)
    {
        this._playLists = value;
        this._onPlayListsChanged();
    }

    get activePlayList()
    {
        return this._activePlayList;
    }
    set activePlayList(value)
    {
        if (this._activePlayList !== value)
        {
            this._activePlayList = value;
            this._onActivePlayListChanged();
        }

    }

    get activeTrack()
    {
        return this._activeTrack;
    }

    set activeTrack(value)
    {
        if (this._activeTrack !== value)
        {
            this._activeTrack = value;
            this._onActiveTrackChanged();
        }
    }

    createApplication(options)
    {
        const application = new Application();

        this.playerView = application.playerView;

        this.playListView = application.playListView;
        this.playListView.on("selectionchanged", this._playLists_selectionchanged.bind(this));

        this.searchView = application.searchView;
        this.searchView.on("search", this._searchView_search.bind(this));
        this.searchView.on("itemclick", this._searchView_itemclick.bind(this));

        this.trackTableView = application.trackTableView;
        this.trackTableView.on("activeTrack", this._trackTable_selectionchanged.bind(this));

        return application;
    }

    async run()
    {
        try
        {
            await ServiceClient.getInstance().login();
            await this._loadUserPlayLists();
        }
        catch (e)
        {
            console.error(e);
        }
    }



    async _loadUserPlayLists()
    {
        this.playLists = await ServiceClient.getInstance().getUserPlayLists();
        if (this.playLists.length > 0)
        {
            this.playListView.selection = this.playLists[0];
        }
    }

    _onPlayListsChanged()
    {
        this.playListView.items = this.playLists;
    }

    _onActivePlayListChanged()
    {

        if (this.activePlayList)
        {
            if (this.activePlayList.id && this.activePlayList.id === "search")
            {
                this.playListView.selectItem(null);
            }
            this.trackTableView.items = this.activePlayList.tracks;
        }
        else
        {
            this.trackTableView.items = [];
        }

    }

    _onActiveTrackChanged()
    {
        if (this.activeTrack)
        {
            this.playerView.track = this.activeTrack;
        }
        else
        {
            this.playerView.track = null;
        }
    }

    async _playLists_selectionchanged(e)
    {
        const playList = await ServiceClient.getInstance().getPlayListDetail(this.playListView.selectedId);
        this.activePlayList = playList;
    }

    _trackTable_selectionchanged(e)
    {
        this.activeTrack = this.trackTableView.selection;
    }

    async _searchView_search(e)
    {
        const songs = await ServiceClient.getInstance().search(this.searchView.text);
        this.activePlayList = {
            id : "search",
            tracks: songs
        };
        this.searchView.hideSuggestion();
    }

    async _searchView_itemclick(e)
    {
        const name = e.parameters.item.name;
        this.searchView.text = name;
        this.searchView.hideSuggestion();
        this.searchView.suggestionView.items =await ServiceClient.getInstance().search(this.searchView.text, true);
        const songs = await ServiceClient.getInstance().search(this.searchView.text);
        this.activePlayList = {
            id : "search",
            tracks: songs
        };
    }
}
