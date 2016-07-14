import View from "../../nju/view/View";

export default class PlayerView extends View
{
    init()
    {
        super.init();
        this._track = null;
        this.addStyleClass("nm-player-view");
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
            this.$container.append(track.name);
        }
    }

    $createNewContent(track)
    {
        const $content = $(`<div class="music-operation"></div>
                            <div class="music-process">${track.name}</div>
                            <div class="music-like"></div>`);
    }
}
