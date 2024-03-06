"use client";

import { ErrorMessage } from "@hookform/error-message";
import Link from "next/link";
import { Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { AuthFormInfo, AuthProps } from "../types";

export function AuthForm({
  title,
  fields,
  acceptTermsButton,
  buttonText,
  linkInfo,
  action,
}: AuthFormInfo) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit: SubmitHandler<any> = async data => {
    action(data);
  };

  return (
    <div>
      <h1 className="text-dark text-2xl font-bold">{title}</h1>
      <form
        className="mb-2 mt-8 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 flex flex-col gap-6">
          {fields.map((field, index) => (
            <Fragment key={index}>
              <div className="flex flex-col">
                <h6 className="text-dark pb-2 font-bold">{field.label}</h6>
                <input
                  {...register(field.name, {
                    required: {
                      value: field.validation.required,
                      message: field.validation.message,
                    },
                    pattern: {
                      value: new RegExp(field.validation.pattern),
                      message: field.validation.message,
                    },
                  })}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.autocomplete}
                  className="border-dark/50 text-dark rounded-md border-2 p-2.5"
                />
                <ErrorMessage
                  errors={errors}
                  name={field.name}
                  render={({ message }) => (
                    <p className="pt-2 text-sm text-red-900">{message}</p>
                  )}
                />
              </div>
            </Fragment>
          ))}
        </div>
        {acceptTermsButton ? (
          <>
            <div className="flex items-center gap-2 pt-3">
              <input
                className="accent-dark h-4 w-4"
                id="accept-terms"
                type="checkbox"
                {...register("accept-terms", {
                  required: {
                    value: true,
                    message: "Необходимо принять условия",
                  },
                })}
              />
              <label htmlFor="accept-terms" className="text-gray-900">
                <span className="text-sm">
                  Я согласен с обработкой персональных данных
                </span>
              </label>
            </div>

            <ErrorMessage
              errors={errors}
              name="accept-terms"
              render={({ message }) => (
                <p className="pt-2 text-sm text-red-900">{message}</p>
              )}
            />
          </>
        ) : null}
        <button type="submit" className="button bg-dark mt-6 text-white">
          {buttonText}
        </button>
        <p color="gray" className="mt-4 text-center font-normal">
          {linkInfo.text}{" "}
          <Link href={linkInfo.href} className="font-medium text-gray-900">
            {linkInfo.linkText}
          </Link>
        </p>
      </form>
    </div>
  );
}
