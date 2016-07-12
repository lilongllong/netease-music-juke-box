import View from "../../nju/view/View";

export default class PlayTableView extends View
{
    init()
    {
        super.init();
        this.addStyleClass("nm-play-table-view");//tian jian qianzhui fangzhi chongtu
    }

    getElementTag()
    {
        return "table";
    }
}
