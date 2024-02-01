"use client";

import { ErrorMessage } from "@hookform/error-message";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { AuthFormInfo } from "../../types";

export function AuthForm({
  title,
  fields,
  acceptTermsButton,
  buttonText,
  linkInfo,
}: AuthFormInfo) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<Record<string, any>> = async data => {
    try {
      // Perform additional validation or submission logic here if needed
      console.log(data);
      console.log("hello");
    } catch (error) {
      // Handle errors or set form errors using setError
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" className="text-dark">
        {title}
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 flex flex-col gap-6">
          {fields.map((field, index) => (
            <Fragment key={index}>
              <div className="flex flex-col">
                <Typography variant="h6" className="text-dark">
                  {field.label}
                </Typography>
                <Input
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
                  size="lg"
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  autoComplete={field.autocomplete}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <ErrorMessage
                  errors={errors}
                  name={field.name}
                  render={({ message }) => (
                    <p className="text-sm text-red-900 pt-2">{message}</p>
                  )}
                />
              </div>
              {/* <Input {...register(field.name)} /> */}
              {/* <Field
                {...field}
                {...register(field.name, {
                  required: field.validation.required,
                  pattern: {
                    value: new RegExp(field.validation.pattern),
                    message: field.validation.message,
                  },
                })}
              /> */}
            </Fragment>
          ))}
        </div>
        {acceptTermsButton ? (
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                Я согласен с
                <span className="font-medium transition-colors hover:text-gray-900">
                  &nbsp;обработкой персональных данных
                </span>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
        ) : null}
        <Button type="submit" className="mt-6" fullWidth>
          {buttonText}
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          {linkInfo.text}{" "}
          <Link href={linkInfo.href} className="font-medium text-gray-900">
            {linkInfo.linkText}
          </Link>
        </Typography>
      </form>
    </Card>
  );
}
