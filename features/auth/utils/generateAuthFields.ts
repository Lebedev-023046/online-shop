import { AuthFormInfo } from "../types";

export const getAuthFields = (
  state: "login" | "register",
): Omit<AuthFormInfo, "action"> => {
  const stateMap = {
    login: AUTHORIZATION_FORM_INFO,
    register: REGISTRATION_FORM_INFO,
  };
  return stateMap[state];
};

const AUTHORIZATION_FORM_INFO = {
  title: "Войти",
  fields: [
    {
      name: "email",
      type: "email",
      label: "Ваша электронная почта",
      placeholder: "name@gmail.com",
      autocomplete: "on",

      validation: {
        required: true,
        pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
        // pattern: "",
        message: "Введите действительный адрес электронной почты",
      },
    },
    {
      name: "password",
      type: "password",
      label: "Пароль",
      placeholder: "********",
      autocomplete: "off",

      validation: {
        required: true,
        pattern: "^.{8,}$",
        // pattern: "",
        message: "Пароль должен содержать минимум 8 символов",
      },
    },
  ],
  acceptTermsButton: false,
  buttonText: "Войти",
  linkInfo: {
    text: "Нет аккаунта?",
    linkText: "Зарегистрироваться",
    href: "/auth/register",
  },
};

const REGISTRATION_FORM_INFO = {
  title: "Регистрация",
  fields: [
    {
      name: "name",
      type: "text",
      label: "Ваше имя",
      placeholder: "Иван Иванов",
      autocomplete: "on",

      validation: {
        required: true,
        pattern: "^[a-zA-Zа-яА-Я]+$",
        message: "Введите ваше имя",
      },
    },
    {
      name: "email",
      type: "email",
      label: "Ваша электронная почта",
      placeholder: "name@gmail.com",
      autocomplete: "on",

      validation: {
        required: true,
        pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
        message: "Введите действительный адрес электронной почты.",
      },
    },
    {
      name: "password",
      type: "password",
      label: "Пароль",
      placeholder: "********",
      autocomplete: "off",

      validation: {
        required: true,
        pattern: "^.{8,}$",
        message: "Пароль должен содержать минимум 8 символов",
      },
    },
  ],
  acceptTermsButton: true,
  buttonText: "Зарегистрироваться",
  linkInfo: {
    text: "Уже есть аккаунт?",
    linkText: "Войти",
    href: "/auth/login",
  },
};
