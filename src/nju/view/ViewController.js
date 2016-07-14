import ManageObject  from "../base/ManageObject";
import View from "../view/View";

export default class ViewController extends ManageObject
{
    constructor(id, options = {})
    {
        super(id);
        this._view = this.createView(options);
        this.applyViewOptions(options);
    }

    createView(options)
    {
        return new View();
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
