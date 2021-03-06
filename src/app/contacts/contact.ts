import * as _ from 'lodash';
export class ContactState {
    guid: string;
    name: string;
    /*    prefix?: string;
        firstName?: string;
        firstInitial?: string;
        middleInitials?: string;
        lastNamePrefix?: string;
        lastName?: string;
        lastNameSuffix?: string;
        gender?: string; */
    birthDate?: string;
    avatarFileGuid?: string;
    avatarUrl?: string;
    email?: string;
}
export class SelectableItem {
    isSelected: boolean;
}
export class Contact extends SelectableItem {
    _state: ContactState;
    _showActions = false;
    constructor(state?: ContactState) {
        super();
        this._state = state;
        if (!state) {
            this._state = new ContactState();
        }
    }

    get guid() { return this._state.guid; };
    set guid(value: string) { this._state.guid = value; };

    get name() { return this._state.name; };
    set name(value: string) { this._state.name = value; };

    get email() { return this._state.email; };
    set email(value: string) { this._state.email = value; };

    get birthDate() { return this._state.birthDate; };
    set birthDate(value: string) { this._state.birthDate = value; };

    get avatarFileGuid() { return this._state.avatarFileGuid; };
    set avatarFileGuid(value: string) { this._state.avatarFileGuid = value; };

    get avatarUrl() { return this._state.avatarUrl; };
    set avatarUrl(value: string) { this._state.avatarUrl = value; };

    get showActions() { return this._showActions; };
    set showActions(value: boolean) { this._showActions = value; };

    public clone(): Contact {
        return new Contact(_.clone(this._state));
    }
}

