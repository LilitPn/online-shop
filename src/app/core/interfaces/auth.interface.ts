export interface User {
    id?: number;
    role: string;
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
    createdDate?: string,
    token?: string;
}

export interface Users {
    users: User[]
}

export class Alert {
    id: string;
    type: AlertType;
    message: string;
    autoClose: boolean;
    keepAfterRouteChange: boolean;
    fade: boolean;

    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}

export enum ErrorsEnum {
    requiredEmail = 'Email is required.',
    invalidEmail = 'Email is not valid.',

    requiredPassword = 'Password is required.',
    invalidPassword = 'Password is not valid.',
    shortPassword = 'Password must contain min 8 letters.',

    requiredUsername = 'Username is required.',
    shortUsername = 'Username must contain min 5 letters.',

    requiredConfirmPassword = 'Password confirmation is required.',
    confirmPasswordNotMatch = 'Password confirmation does not match.'
}