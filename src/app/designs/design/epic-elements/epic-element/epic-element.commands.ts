import { Command, CommandParameters } from '../../../../commands/command';
import { EpicElement } from '../epic-element';

export class EpicElementCommand extends Command {
    constructor(name: string, epicElement: EpicElement) {
        super(name, 'EpicElement', epicElement.guid);
    };
}

export class EpicElementCommandParameters extends CommandParameters {
    DesignGuid: string;
}

export class CreateEpicElementParameters extends EpicElementCommandParameters {
    Name: string;
}
export class CreateEpicElementCommand extends EpicElementCommand {
    constructor(epicElement: EpicElement, designId: string) {
        super('Create', epicElement);
        const parameters = new CreateEpicElementParameters();
        parameters.Name = epicElement.name;
        parameters.DesignGuid = designId;
        this.Parameters = parameters;
    }
}

export class DeleteEpicElementCommand extends EpicElementCommand {
    constructor(epicElement: EpicElement, designId: string) {
        super('Delete', epicElement);
        const parameters = new EpicElementCommandParameters();
        parameters.DesignGuid = designId;
        this.Parameters = parameters;
    }
}

export class RenameEpicElementParameters extends EpicElementCommandParameters {
    Name: string;
    OriginalName: string;
}

export class RenameEpicElementCommand extends EpicElementCommand {
    constructor(epicElement: EpicElement, orgName: string, designId: string) {
        super('Rename', epicElement);
        const parameters = new RenameEpicElementParameters();
        parameters.OriginalName = orgName;
        parameters.Name = epicElement.name;
        parameters.DesignGuid = designId;
        this.Parameters = parameters;
    }
}

// todo: support exact inserts, deletes etc.
export class ChangeDescriptionOfEpicElementParameters extends EpicElementCommandParameters {
    Description: string;
}

export class ChangeDescriptionOfEpicElementCommand extends EpicElementCommand {
    constructor(epicElement: EpicElement, designId: string) {
        super('ChangeDescriptionOf', epicElement);
        const parameters = new ChangeDescriptionOfEpicElementParameters();
        parameters.Description = epicElement.description;
        parameters.DesignGuid = designId;
        this.Parameters = parameters;
    }
}
