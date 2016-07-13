import TableView from "../../nju/view/TableView";

export default class PlayTableView extends TableView
{
    init()
    {
        super.init();
        /* class 添加前缀nm避免冲突  */
        this.addStyleClass("nm-play-table-view");
    }

    renderItem(item, $item)
    {
        super.renderItem(item, $item);
        let duration = "";
        if (typeof item.duration === "number")
        {
            duration = (item.duration / (60 * 1000 * 100)).toFixed(2).slice(-2)
            + ":" +
            ((item.duration / 1000) % 60 / 100).toFixed(2).slice(-2);
        }
        else
        {
            duration = item.duration;
        }

        $item.children(".name").text(item.name);
        $item.children(".time").text(duration);
        $item.children(".artists").text(item.artists.map(artist => artist.name).join(","));
        $item.children(".album").text(item.album.name);
    }

    renderHeaderItem($headerItem)
    {
        super.renderHeaderItem($headerItem);
        this.renderItem({
            name: "歌曲标题",
            duration: "时长",
            artists: [{name: "歌手"}],
            album: {name: "专辑"}
        }, $headerItem);

    }

    $createNewItem(type = 0)
    {
        return $(`
            <tr>
                <td class="name"></td>
                <td class="time"></td>
                <td class="artists"></td>
                <td class="album"></td>
            </tr>
            `);
    }
}
