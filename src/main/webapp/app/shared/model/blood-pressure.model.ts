import { Moment } from 'moment';
import { IUser } from 'app/core/user/user.model';

export interface IBloodPressure {
    id?: number;
    timestamp?: Moment;
    systolic?: number;
    user?: IUser;
}

export class BloodPressure implements IBloodPressure {
    constructor(public id?: number, public timestamp?: Moment, public systolic?: number, public user?: IUser) {}
}
