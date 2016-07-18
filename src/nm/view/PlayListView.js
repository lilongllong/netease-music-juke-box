import ListView from "../../nju/view/ListView";

export default class PlayListView extends ListView
{
    init()
    {
        super.init();
        this.addStyleClass("nm-play-list-view");
    }

    $createItem()
    {
        const $item = super.$createItem();
        $item.append(`
            <span class="icon iconfont icon-music"></span>
            <span class="text"></span>
            `);
        return $item;
    }

    renderItem(item, $item)
    {
        super.renderItem(item, $item);
        $item.children(".text").text(item.name);
    }

}
