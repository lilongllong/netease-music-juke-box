import ViewController from "../../nju/view/ViewController";

import SearchView from "./SearchView";
import ServiceClient from "../service/ServiceClient";

export default class SearchViewController extends ViewController
{
    createView()
    {
        return new SearchView();
    }

    initView(options)
    {
        super.initView(options);
        this.view.on("change", this._onchange.bind(this));

        this.suggestionView = this.view.suggestionView;
        this.view.on("focus", this._onfocus.bind(this));
        this.view.on("blur", this._onblur.bind(this));
    }

    async _onchange()
    {
        const keyword = this.view.text;
        if (keyword)
        {
            const tracks = await ServiceClient.getInstance().search(keyword, true);
            this.suggestionView.items = tracks;
        }
        this.view.toggleSuggestion(this.view.text && this.suggestionView.items && this.suggestionView.items.length > 0);
    }

    _onfocus(e)
    {
        this.view.toggleSuggestion(this.view.text && this.suggestionView.items && this.suggestionView.items.length > 0);
    }

    _onblur(e)
    {
        this.view.hideSuggestion();
    }
}
