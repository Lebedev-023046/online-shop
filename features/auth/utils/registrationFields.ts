export const REGISTRATION_FORM_INFO = {
  title: "Регистрация",
  fields: [
    {
      name: "name",
      type: "text",
      pattern: /^[a-zA-Zа-яА-Я]+$/,
      label: "Ваше имя",
      placeholder: "Иван Иванов",
    },
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
  acceptTermsButton: true,
  buttonText: "Зарегистрироваться",
  link: {
    text: "Уже есть аккаунт?",
    linkText: "Войти",
    href: "/auth/login",
  },
};
