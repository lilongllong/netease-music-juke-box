import View from "../../nju/view/View";

export default class PlayListView extends View
{
    init()
    {
        super.init();
        this.addStyleClass("nm-play-list-view");//tian jian qianzhui fangzhi chongtu
    }

    getElementTag()
    {
        return "ul";
    }
}
