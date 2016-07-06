import ManageObject  from "../base/ManageObject";

export default class View extends ManageObject
{
    init()
    {
        super.init();
        this._subviews = [];
        this.$element = $(`<${this.getElementTag()}/>`);
        if (this.id !== null){
            this.$element.attr("id", this.id);
        }
        this.$container = this.$element;
    }

    getElementTag()
    {
        return "div";
    }

    get subview()
    {
        return this._subviews;
    }


    addStyleClass(...args)
    {
        this.$element.addClass(...args);
    }

    removeStyleClass()
    {
        this.$element.removeClass(...args);
    }

    toggleStyleClass()
    {
        this.$element.toggleClass(...args);
    }


    addSubView(view)
    {
        if (view instanceof View)
        {
            if (view._parent)
            {
                view.removeFromParent();
            }
            view._parent = this;
            this._subviews.push(view);
            view.placeAt(this.$container);
        }
    }

    addSubViews(views)
    {
        if (Array.isArray(views)) // Array.isArray is only method
        {
            views.forEach(item => {
                this.addSubView(item);
            });
        }
    }

    removeSubView(view, neverUseAgain = false)
    {
        if (view instanceof View)
        {
            const index = this._subviews.indexOf(view);
            if (index !== -1)
            {
                view._parent = null;
                this._subviews.splice(index, 1);
                if (!neverUseAgain)
                {
                    view.$element.detach();    // detach and remove diff
                }
                else {
                    view.$element.remove();
                }
            }
        }
    }

    removeAllSubViews(neverUseAgain = false)
    {
        while (this._subviews.length >0)
        {
            this._removeSubView(this._subviews[0], neverUseAgain);// remove use while
        }
        // this._subviews.map(item => {
        //     this._removeSubView(item, neverUseAgain);
        // });
    }

    removeFromParent()
    {
       if (this.parent)
       {
           this.parent.removeSubView(this);
       }
    }

    placeAt(target)
    {
        const $target =  (target instanceof jQuery ? target : $(target));
        $target.append($this.$element);
    }

    $(...args)
    {
        return this.$element.find(...args);
    }


}
