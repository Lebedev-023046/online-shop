export interface UserProps {
  name: string;
  email: string;
  image: string;
}

export interface AuthProps {
  username?: string;
  email: string;
  password: string;
}

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
  action: (data: AuthProps) => void;
}
