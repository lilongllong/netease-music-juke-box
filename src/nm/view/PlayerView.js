import View from "../../nju/view/View";
import TimeUtil from "../util/TimeUtil";

export default class PlayerView extends View
{
    init()
    {
        super.init();
        this._track = null;
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
        this.$btnsView = $(`<div class="track-btns">
                                    <span class="prev iconfont icon-previous"></span>
                                    <span class="play iconfont icon-play"></span>
                                    <span class="next iconfont icon-next"></span>
                                </div>`);
        this.$container.append(this.$btnsView);
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
        this.$shareView = $(`<div class="track-share">
                                    <a class="favorite iconfont icon-favorite"></a>
                                    <a class="share iconfont icon-share"></a>
                                </div>`)
        this.$container.append(this.$shareView);
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
        this.$trackPlayer = $('<audio class="music-player"></audio>');
        this.$container.append(this.$trackPlayer);
    }

    get track()
    {
        return this._track;
    }
    set track(track)
    {
        if (track !== this._track)
        {
            this._track = track;
            this.render(track);
            console.log(track);
        }
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

            this.$trackPlayer.attr("src", track.mp3Url);
            this.$iconView.children("img").attr("src", track.album.blurPicUrl);
            this.$trackProcessView.children(".head").children(".track-name").text(track.name);
            this.$trackProcessView.children(".head").children(".track-artist").text(track.artists.map(artist => artist.name).join(","));
            this.$trackProcessView.children(".foot").children(".track-time").text("00:00/" + TimeUtil.formateTime(duration));

        }
    }

    playTrack()
    {
        this.$trackPlayer[0].play();
    }

    pauseTrack()
    {
        this.$trackPlayer[0].pause();
    }

    playNextTrack(track)
    {
        this.track = track;
    }

}
