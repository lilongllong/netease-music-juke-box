export default class TrackListView {
    constructor() {
        this.$element = $("<ul/>");
        this._tracks = [];
    }

    get tracks() {
        return this._tracks;
    }

    set tracks(tracks) {
        this._tracks = tracks;
        this._addTracks(this._tracks);
    }

    _addTracks(tracks) {
        tracks.forEach(track => {
            this._addtrack(track);
        });
    }

    _addtrack(track) {
        // const $li = $(`<li class="track"><a><span class="name"></span></a></li>`);
        // $li.find("a").attr("href", track.mp3Url);
        // $li.find(".name").text(track.name);
        const $li = $(`<li class="track">
                        <a href=${track.mp3Url}>
                            <span>${track.name}</span>
                        </a>
                      </li>`);
        this.$element.append($li);
    }

}
