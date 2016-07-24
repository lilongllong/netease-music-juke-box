import ViewController from "../../nju/view/ViewController";

import PlayerView from "./PlayerView";

export default class PlayerController extends ViewController
{
    createView(options)
    {
        return new PlayerView("player-view");
    }

    initView()
    {
        this._track = null;
        this._playState = false;
        this.view.on("previous", this._onPrevious.bind(this));
        this.view.on("play-toggle", this._onPlayToggle.bind(this));
        this.view.on("next", this._onNext.bind(this));
        this.view.on("favorite", this._onFavorite.bind(this));
        this.view.on("share", this._onShare.bind(this));
    }

    get track()
    {
        return this._track;
    }
    set track(track = null)
    {
        if (track !== this._track)
        {
            this._track = track;
            this.playState = true;
            this.view.render(track);
            console.log(track);
        }
    }

    get playState()
    {
        return this._playState;
    }

    set playState(state = false)
    {
        if (typeof state === "boolean")
        {
            this._playState = state;
            this.togglePlayIcon();
            this.togglePlayer();
        }
        else
        {
            throw new Error("playState parameters is wrong.");
        }
    }

    togglePlayer()
    {
        if (this.playState)
        {
            this.view.$trackPlayer[0].play();
            console.log(this.view.$trackPlayer[0]);

        }
        else
        {
            this.view.$trackPlayer[0].pause();
        }
    }

    togglePlayIcon()
    {
        if (this.view.$trackBtnsView.children(".play").hasClass("icon-pause") !== this.playState)
        {
            this.view.$trackBtnsView.children(".play").toggleClass("icon-play");
            this.view.$trackBtnsView.children(".play").toggleClass("icon-pause");
        }
    }

    _onPrevious(e)
    {
        this.trigger("previous-track");
        console.log("previous-track");
    }

    _onPlayToggle(e)
    {
        this.playState = !this.playState;
    }

    _onNext(e)
    {
        this.trigger("next-track");
        console.log("next-track");
    }

    _onFavorite(e)
    {
        this.trigger("favorite", {track: this.track});
        console.log("favorite");
    }

    _onShare(e)
    {
        this.trigger("share", {track: this.track});
        console.log("share");
    }
}
