interface Validation {
  required: boolean;
  pattern: string;
  message: string;
}

interface AuthField {
  name: string;
  type: string;
  validation: Validation;
  label: string;
  placeholder: string;
  autocomplete: string;
}

interface LinkInfo {
  text: string;
  linkText: string;
  href: string;
}

export interface AuthFormInfo {
  title: string;
  fields: AuthField[];
  acceptTermsButton: boolean;
  buttonText: string;
  linkInfo: LinkInfo;
}
