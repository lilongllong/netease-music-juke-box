import ListView from "../../nju/view/ListView";

export default class PlayListView extends ListView
{
    init()
    {
        super.init();
        this.addStyleClass("nm-play-list-view");//tian jian qianzhui fangzhi chongtu
    }

    $createItem()
    {
        const $li = super.$createItem();
        $li.append(`
            <span class="icon"></span>
            <span class="text"></span>
            `);
        return $li;
    }

    renderItem(item, $li)
    {
        super.renderItem(item, $li);
        $li.children(".text").text(item.name);
    }

}
