import React from "react";

export default function FormRowSelect({
  labelText,
  name,
  value,
  handleChange,
  list,
}) {
  return (
    <div className="flex flex-col gap-1 w-full rounded-lg">
      <label htmlFor={name} className="capitalize font-medium text-lg">
        {labelText || name}
      </label>
      <select
        className="bg-inherit px-4 py-1 focus:outline-none rounded ring-2 focus:ring-blue-400"
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
      >
        {list?.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
