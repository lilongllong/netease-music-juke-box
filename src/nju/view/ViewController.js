import ManageObject  from "../base/ManageObject";
import View from "../view/View";

export default class ViewController extends ManageObject
{
    constructor(id, options = {})
    {
        super(id);
        this._view = this.createView(options);
        this.initView(options);
    }

    createView(options)
    {
        throw new Error("createView(options) must be override in derived class.");
    }

    initView(options)
    {
        this.applyViewOptions(options);
    }

    applyViewOptions(options = {})
    {
        for (let key in options)
        {
            this.view[key] = options[key];
        }
    }

    get view()
    {
        return this._view;
    }
    set view(value)
    {
        this._view = value;
    }
}
