interface Props {
  options: string[];
  value?: string;
  updateValue?: (value: string) => void;
}

export function Select({ options, value, updateValue }: Props) {
  return (
    <select
      id="countries"
      value={value}
      onChange={e => updateValue?.(e.target.value)}
      className="select bg-transparent text-gray-900 w-full border-2 p-3 text-sm"
    >
      {options.map((size, i) => (
        <option value={size} key={i}>
          {size}
        </option>
      ))}
    </select>
  );
}
