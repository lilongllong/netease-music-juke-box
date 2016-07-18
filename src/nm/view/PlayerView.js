import View from "../../nju/view/View";

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
        this.initTrackPlayView();
        this.initTrackShareView();
        this.initTrackSettingView();
    }

    initTrackBtnsView()
    {
        this.$btnsView = $(`<div class="track-btns">
                                    <span class="prev"></span>
                                    <span class="play"></span>
                                    <span class="next"></span>
                                </div>`);
        this.$container.append(this.$btnsView);
    }

    initTrackIconView()
    {
        this.$iconView = $(`<div class="track-icon"><span class="icon"></span></div>`);
        this.$container.append(this.$iconView);
    }

    initTrackPlayView()
    {
        this.$playView = $(`<div class="track-play">
                                    <div class="head">
                                        <span id="track-name"></span>
                                        <span id="track-artist"></span>
                                    </div>
                                    <div class="foot">
                                        <div class="track-process"><div>
                                        <span class="track-time"></span>
                                    </div>
                                </div>`);
        this.$container.append(this.$playView);
    }

    initTrackShareView()
    {
        this.$shareView = $(`<div class="track-share">
                                    <a class="favorite">收藏</a>
                                    <a class="share">分享</a>
                                </div>`)
        this.$container.append(this.$shareView);
    }

    initTrackSettingView()
    {
        this.$settingView = $(`<div class="track-setting">相关设置</div>`);
        this.$container.append(this.$settingView);
    }

    get track()
    {

    }
    set track(track)
    {
        if (track !== this._track)
        {
            this._track = track;
            this.render(track);
        }
    }

    render(track)
    {
        if (track === null)
        {
            this.$container.empty();
        }
        else
        {
            this.$container.empty();
            this.$container.append(this.$createNewContent(track));
        }
    }

}
