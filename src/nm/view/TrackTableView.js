import TableView from "../../nju/view/TableView";
import TimeUtil from "../util/TimeUtil";

export default class PlayTableView extends TableView
{
    init()
    {
        super.init();
        /* class 添加前缀nm避免冲突  */
        this.addStyleClass("nm-track-table-view striped");
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
        $item.children(".time").text(TimeUtil.formateTime(item.duration));
        $item.children(".artists").text(item.artists.map(artist => artist.name).join(","));
        $item.children(".album").text(item.album.name);
    }

    renderHeaderItem($headerItem)
    {
        super.renderHeaderItem($headerItem);
        $headerItem.children(".name").text("歌曲标题");
        $headerItem.children(".time").text("时长");
        $headerItem.children(".artists").text("歌手");
        $headerItem.children(".album").text("专辑");

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
