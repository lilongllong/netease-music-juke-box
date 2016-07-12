import View from "./View";

export default class ListView extends View
{
    init()
    {
        super.init();
        this._items = [];
        this._$itemTemplates = [];
        this.addStyleClass("nju-list-view");//tian jian qianzhui fangzhi chongtu
    }

    getElementTag()
    {
        return "ul";
    }

    get items()
    {
        return this._items;
    }

    set items(items)
    {

        this._items = items;
        this.addItems(this._items);
    }

    getTypeOfItem(item)
    {
        return 0;
    }

    clearItems()
    {
        if (this._items !== null)
        {
            if (this._items.length > 0)
            {
                this._items.splice(0, this._items.length);
                this.$container.children().remove();
            }
        }
        else
        {
            this._items = [];
        }
    }

    addItems(items)
    {
        if (items && items.length)
        {
            items.forEach(item => {
                this.addItem(item);
            });
        }
    }

    addItem(item)
    {
        const itemType = this.getTypeOfItem(item);
        const $item = this.$createItem(itemType);
        this.items.push(item);
        this.renderItem(item, $item);
        this.$container.append($item);
    }

    renderItem(item, $li)
    {

    }

    $createItem(itemType = 0)
    {
        if (!this._$itemTemplates[itemType])
        {
            this._$itemTemplates[itemType] = this.$createNewItem(itemType);
        }

        return this._$itemTemplates[itemType].clone();
    }

    $createNewItem(itemType = 0)
    {
        return $(`<li/>`);
    }

}
