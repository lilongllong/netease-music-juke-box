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
        this.playListView = application.playListView;
        this.trackTableView = application.trackTableView;
        this.playerView = application.playerView;
        this.playListView.on("selectionchanged", this._playLists_selectionchanged.bind(this));
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

}
