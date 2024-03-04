import { clsx } from "clsx";
import RSelect from "react-select";

import { OptionType } from "@/types/Select";

interface Props {
  options: string[];
  value: OptionType;
  updateValue: (value: OptionType) => void;
}

export function Select({ options, value, updateValue }: Props) {
  const selectOptions = options.reduce(
    (acc: { value: string; label: string }[], option) => {
      acc.push({ value: option, label: option });
      return acc;
    },
    [],
  );

  return (
    <RSelect
      options={selectOptions}
      value={value}
      onChange={e => updateValue(e as OptionType)}
      classNames={{
        control: ({ isFocused }) =>
          clsx(
            "!shadow-none",
            isFocused ? "!border-gray-400" : "border-gray-200",
          ),

        option: state =>
          clsx(
            state.isSelected ? "!bg-gray-300 !text-dark" : "bg-white",
            state.isFocused ? "!bg-gray-200 !text-dark" : "bg-white",
          ),
      }}
    />
  );
}
