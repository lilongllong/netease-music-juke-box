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
            this.$container.append(this.$createNewContent(track));
        }
    }

    $createNewContent(track)
    {
        const $content = $(`<div class="track-operation"></div>
                            <div class="track-process">${track.name}</div>
                            <div class="track-like"></div>`);
        return $content;
    }
}
