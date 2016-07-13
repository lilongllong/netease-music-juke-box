import View from "./View";

export default class ListView extends View
{
    init()
    {
        super.init();
        this._items = [];
        this._selection = null;
        this._$itemTemplates = [];
        this.addStyleClass("nju-list-view");//tian jian qianzhui fangzhi chongtu
        this._initLayout();
        this.$container.on("click", this.getItemElemenTag(), this._onclick.bind(this));
    }

    _initLayout()
    {

    }

    getElementTag()
    {
        return "ul";
    }

    getItemElemenTag()
    {
        return "li";
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

    get selection()
    {
        return this._selection;
    }

    set selection(value)
    {
        this.selectItem(value);
    }

    getTypeOfItem(item)
    {
        return 0;
    }

    getIdOfItem(item)
    {
        return item.id;
    }

    clearItems()
    {
        if (this._items !== null)
        {
            if (this._items.length > 0)
            {
                this._items.splice(0, this._items.length);
                this.$container.children(this.getItemElemenTag()).remove();
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

    selectItem(item = null)
    {
        if (this.selection === item) return;

        if (this._selection !== null)
        {
            this.$getItem(this._selection).removeClass("selected");
            this._selection = null;
        }

        this._selection = item;
        if (item)
        {
            const $item = this.$getItem(item);
            $item.addClass("selected");
        }
    }







    renderItem(item, $item)
    {
        $item.data("item", item);
        $item.attr("id", "i-" + this.getIdOfItem(item));
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
        return $(`<${this.getItemElemenTag()}/>`);
    }

    $getItem(item)
    {
        const id = this.getIdOfItem(item);
        return this.$container.children("#i-" + id);
    }

    _onclick(e)
    {
        const $item = $(e.currentTarget);
        const item = $item.data("item");
        this.selectItem(item);
        console.log(item.name);
    }
}
