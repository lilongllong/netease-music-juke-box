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
        this.updateTrackTime();
    }

    get track()
    {
        return this._track;
    }
    set track(track = null)
    {
        if (track !== this._track)
        {
            this.playState = false;
            this._track = track;
            this.view.render(track);
            this.playState = true;
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
        if (this.playState !== this.view.$trackPlayer[0].played)
        {
            if (this.playState)
            {
                this.view.$trackPlayer[0].play();
            }
            else
            {
                this.view.$trackPlayer[0].pause();
            }
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

    updateTrackTime()
    {
        setInterval(() => {
            if (this.view.$trackPlayer.attr("src") !== "" && !this.view.$trackPlayer[0].paused)
            {
                const curTime = isNaN(this.view.$trackPlayer[0].currentTime) ? 0 : this.view.$trackPlayer[0].currentTime * 1000;
                const duration = isNaN(this.view.$trackPlayer[0].duration) ? 0 : this.view.$trackPlayer[0].duration * 1000;
                this.view.renderTrackTime(curTime, duration);
            }
        }, 200);
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
