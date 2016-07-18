import View from "../../nju/view/View";
import ListView from "../../nju/view/ListView";


export default class SearchView extends View
{
    init()
    {
        super.init();
        this.addStyleClass("nm-search-view");
        this.$element.append("<span class='icon iconfont icon-search'>");
        this.$input = $("<input type='search' placeholder='搜索歌曲'>");
        /*
        *  延迟响应input事件
        */
        let inputTimer = null;
        this.$input.on("input", () => {
            if (inputTimer)
            {
                window.clearTimeout(inputTimer);
                inputTimer = null;
            }

            inputTimer = window.setTimeout(() => {
                this.trigger("change");
            }, 300);
        });

        this.$input.on("focus", this._onfocus.bind(this));
        this.$input.on("blur", this._onblur.bind(this));

        this.$element.append(this.$input);
        this.$element.on("keydown", this._onkeydown.bind(this));
        this.$element.on("click", "span.icon", this._icon_onclick.bind(this));

        this._initSuggestionView();
    }

    _initSuggestionView()
    {
        this.suggestionView = new ListView("suggestion-list-view");
        this.suggestionView.renderItem = this._suggestionListView_renderItem.bind(this.suggestionView);
        this.addSubView(this.suggestionView);
        this.suggestionView.$element.on("mousedown", this.suggestionView.getItemElementTag(), this._onmousedown.bind(this));
        this.hideSuggestion();
    }

    showSuggestion()
    {
        this.suggestionView.$element.fadeIn(100);
    }

    hideSuggestion()
    {
        this.suggestionView.$element.fadeOut(100);
    }

    toggleSuggestion(shown)
    {
        if (!shown)
        {
            this.hideSuggestion();
        }
        else
        {
            this.showSuggestion();
        }
    }

    get text()
    {
        return $.trim(this.$input.val());
    }
    set text(value)
    {
        this.$input.val(typeof value === "string" ? value : null);
    }

    search(text = this.text)
    {
        this.text = text;

        if (this.text !== null)
        {
            this.trigger("search");
        }

    }

    _onkeydown(e)
    {
        if (e.keyCode === 13)
        {
            this.search();
        }
    }

    _icon_onclick(e)
    {
        this.search();
    }

    _onfocus(e)
    {
        this.trigger("focus");
    }

    _onblur(e)
    {
        this.trigger("blur");
    }

    _onmousedown(e)
    {

        const $item = $(e.currentTarget);
        const item = $item.data("item");
        this.trigger("itemclick", {item});
    }

    _suggestionListView_renderItem(item, $item)
    {
        $item.data("item", item);
        $item.text(item.name);
    }

}
