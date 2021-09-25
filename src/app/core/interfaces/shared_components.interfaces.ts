export interface ModalComponent {
  data: any;
}

export interface EmailMessageI {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}


export enum EmailMessageIErrorsEnum {
  requiredFirstname="Firstname is required.",
  shortFirstname="Firstname is must contain min 2",

  requiredLastname="Firstname is required.",
  shortLastname="Firstname is must contain min 2",

  requiredEmail = 'Email is required.',
  invalidEmail = 'Email is not valid.',

  requiredMessage = 'Message is required.',
  shortMessage = 'Message must contain min 20 letters.'
}