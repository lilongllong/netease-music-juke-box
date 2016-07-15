import TableView from "../../nju/view/TableView";
import TimeUtil from "../util/TimeUtil";

export default class PlayTableView extends TableView
{
    init()
    {
        super.init();
        /* class 添加前缀nm避免冲突  */
        this.addStyleClass("nm-track-table-view striped");
        this.$container.on("dblclick", this.getItemElementTag(), () => {
            this.trigger("activeTrack");
            console.log("db");
        });
    }

    renderItem(item, $item)
    {
        super.renderItem(item, $item);
        $item.children(".name").text(item.name);

        let duration = 0;
        if (item.lMusic)
        {
            duration = item.lMusic.duration;
        }
        else
        {
            duration = item.duration;
        }
        $item.children(".time").text(TimeUtil.formateTime(duration));

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
