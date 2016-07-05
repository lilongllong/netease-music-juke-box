import TrackListView from "./view/TrackListView";

const trackListView = new TrackListView();
$(mainStart());

function mainStart () {
    $.ajax({
        url: "http://music.163.com/api/playlist/detail?id=77680183"
    }).then(res => {
        $(document.body).append(trackListView.$element);
        trackListView.tracks=res.result.tracks;

    });
}
