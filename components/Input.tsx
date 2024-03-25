import React from "react";
import { UseFormRegister } from "react-hook-form";

interface InputProps {
  name: string;
  defaultValue?: string;
  register: UseFormRegister<any>;

  label?: string;
}

interface TextInputProps extends InputProps {
  placeholder: string;
}

interface RadioInputProps extends InputProps {
  value: string;
}

export function TextInput({
  name,
  label,
  placeholder,
  defaultValue,
  register,
}: TextInputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block pb-1 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        {...register(name)}
        id={name}
        className="block w-full rounded-sm border-b-2 border-gray-300 outline-none"
        required
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </div>
  );
}

export function RadioInput({ name, label, value, register }: RadioInputProps) {
  return (
    <div className="flex items-center pt-2">
      <input
        {...register(name)}
        className="min-h-4 min-w-4 rounded-full border-gray-300 bg-gray-100 leading-4"
        type="radio"
        id={value}
        value={value}
      />
      <label className="pl-2 text-sm text-gray-700" htmlFor={value}>
        {label}
      </label>
    </div>
  );
}

export function PhoneInput({
  name,
  placeholder,
  defaultValue,
  register,
}: TextInputProps) {
  return (
    <div className="flex items-center pt-2">
      <input
        {...register(name)}
        type="text"
        className="block w-full rounded-sm border-b-2 border-gray-300 outline-none"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
}
