import ManageObject  from "../base/ManageObject";

export default class View extends ManageObject
{

    init()
    {
        super.init();
        this._subviews = [];
        this.$element = $(`<${this.getElementTag()}/>`);
        if (this.id !== null)
        {
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

    removeStyleClass(...args)
    {
        this.$element.removeClass(...args);
    }

    toggleStyleClass()
    {
        this.$element.toggleClass(...args);
    }


    addSubView(view, $container = this.$container)
    {
        if (view instanceof View)
        {
            if (view._parent)
            {
                view.removeFromParent();
            }
            view._parent = this;
            this._subviews.push(view);
            view.placeAt($container);
        }
    }

    addSubViews(views, $container = this.$container)
    {
        if (Array.isArray(views))
        {
            views.forEach(item => {
                this.addSubView(item, $container);
            });
        }
    }

    removeSubView(view, neverUseAgain = false)
    {
        const index = this._subviews.indexOf(view);
        if (index !== -1)
        {
            view._parent = null;
            this._subviews.splice(index, 1);
            if (neverUseAgain)
            {
                view.$element.remove();
            }
            else
            {
                view.$element.detach();
            }
        }
    }

    removeAllSubViews(neverUseAgain = false)
    {
        while (this._subviews.length > 0)
        {
            this._removeSubView(this._subviews[0], neverUseAgain);
        }
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
        $target.append(this.$element);
    }

    $(...args)
    {
        return this.$element.find(...args);
    }


}
