export const REGISTRATION_FORM_INFO = {
  title: "Войти",
  fields: [
    {
      name: "email",
      type: "email",
      pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      label: "Ваша электронная почта",
      placeholder: "name@gmail.com",
    },
    {
      name: "password",
      type: "password",
      label: "Пароль",
      placeholder: "********",
    },
  ],
  acceptTermsButton: false,
  buttonText: "Войти",
  link: {
    text: "Нет аккаунта?",
    linkText: "Зарегистрироваться",
    href: "/auth/register",
  },
};
