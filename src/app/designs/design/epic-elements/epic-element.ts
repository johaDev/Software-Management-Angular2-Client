import * as _ from 'lodash';
import { EntityElement, EntityElementState } from '../entity-elements/entity-element'
export class EpicElementState {
    name: string;
    guid: string;
    description: string;
    entities: Array<EntityElementState>;
}

export class EpicElement {
    private _state: EpicElementState;
    entities: Array<EntityElement>;
    constructor(state?: EpicElementState) {
        this.entities = new Array<EntityElement>();
        this._state = state;
        if (!state) {
            this._state = new EpicElementState();
        } else {
            if (state.entities && state.entities.length > 0) {
                for (let i = 0; i < state.entities.length; i++) {
                    this.entities.push(new EntityElement(state.entities[i]));
                }
            }
        }
    }

    get guid(): string { return this._state.guid; };
    set guid(value: string) { this._state.guid = value; };

    get name(): string { return this._state.name; };
    set name(value: string) { this._state.name = value; };

    get description(): string { return this._state.description; };
    set description(value: string) { this._state.description = value; };

    public clone(): EpicElement {
        return new EpicElement(_.clone(this._state));
    }
}

