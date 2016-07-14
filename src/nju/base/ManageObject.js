import EventEmitter from "wolfy87-eventemitter";

export default class ManageObject
{
        constructor(id =  null)
        {
            this._id = id;
            this._parent = null;
            this._eventEmitter = new EventEmitter();
            this.init();

        }

        init()
        {

        }

        get id()
        {
            return this._id;
        }

        get parent()
        {
            return this._parent;
        }

        get eventEmitter()
        {

        }

        on(type, listener)
        {
            this.EventEmitter.on(type,listener);
            return this;
        }

        off(type, listener)
        {
            this.EventEmitter.off(type,listener);
            return this;
        }

        trigger(type, parameters = {})
        {
            const event = {
                type,
                parameters
            };

            this.eventEmitter.trigger(type, [ event ]);
        }
}
