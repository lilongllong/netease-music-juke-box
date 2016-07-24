import View from "../../nju/view/View";
import TimeUtil from "../util/TimeUtil";

export default class PlayerView extends View
{
    init()
    {
        super.init();
        this.addStyleClass("nm-player-view");
        this.initLayout();
    }

    initLayout()
    {
        this.initTrackBtnsView();
        this.initTrackIconView();
        this.initTrackProcessView();
        this.initTrackShareView();
        this.initTrackSettingView();
        this.initTrackPlayer();
    }

    initTrackBtnsView()
    {
        this.$trackBtnsView = $(`<div class="track-btns">
                                    <span class="prev iconfont icon-previous"></span>
                                    <span class="play iconfont icon-play"></span>
                                    <span class="next iconfont icon-next"></span>
                                </div>`);
        this.$trackBtnsView.children(".prev").on("click", this._TracksBtnsView_prevclick.bind(this));
        this.$trackBtnsView.children(".next").on("click", this._TracksBtnsView_nextclick.bind(this));
        this.$trackBtnsView.children(".play").on("click", this._TracksBtnsView_playclick.bind(this));
        this.$container.append(this.$trackBtnsView);
    }

    initTrackIconView()
    {
        this.$iconView = $(`<div class="track-icon"><img></span></div>`);
        this.$container.append(this.$iconView);
    }

    initTrackProcessView()
    {
        this.$trackProcessView = $(`<div class="track-process">
                                    <div class="head">
                                        <a class="track-name"></a>
                                        <a class="track-artist"></a>
                                    </div>
                                    <div class="foot">
                                        <div class="track-process"></div>
                                        <div class="track-time">00:00/00:00</div>
                                    </div>
                                </div>`);
        this.$container.append(this.$trackProcessView);

    }

    initTrackShareView()
    {
        this.$trackShareView = $(`<div class="track-share">
                                    <a class="favorite iconfont icon-favorite"></a>
                                    <a class="share iconfont icon-share"></a>
                                </div>`)
        this.$trackShareView.children(".favorite").on("click", this._TrackShareView_favoriteclick.bind(this));
        this.$trackShareView.children(".share").on("click", this._TrackShareView_shareclick.bind(this));
        this.$container.append(this.$trackShareView);
    }

    initTrackSettingView()
    {
        this.$settingView = $(`<div class="track-setting">
                                    <a class="track-volume iconfont icon-soundplus"></a>
                                    <a></a>
                                    <a></a>
                            </div>`);
        this.$container.append(this.$settingView);
    }

    initTrackPlayer()
    {
        this.$trackPlayer = $(`<audio class="music-player" controls="controls" autoplay>
                </audio>`);
        this.$container.append(this.$trackPlayer);
    }

    render(track)
    {
        if (track)
        {
            let duration = 0;
            if (track.lMusic)
            {
                duration = track.lMusic.playTime;
            }
            else
            {
                duration = track.duration;
            }

            this.$trackPlayer.attr("src", "assets/music/test.mp3");
            this.$iconView.children("img").attr("src", track.album.blurPicUrl);
            this.$trackProcessView.children(".head").children(".track-name").text(track.name);
            this.$trackProcessView.children(".head").children(".track-artist").text(track.artists.map(artist => artist.name).join(","));
            this.$trackProcessView.children(".foot").children(".track-time").text("00:00/" + TimeUtil.formateTime(duration));

        }
    }



    _TracksBtnsView_prevclick(e)
    {
        this.trigger("previous");
    }

    _TracksBtnsView_playclick(e)
    {
        this.trigger("play-toggle");
    }

    _TracksBtnsView_nextclick(e)
    {
        this.trigger("next");
    }

    _TrackShareView_favoriteclick(e)
    {
        this.trigger("favorite");
    }

    _TrackShareView_shareclick(e)
    {
        this.trigger("share");
    }


}
