import React from "react";

export default function FormRow({
  type,
  name,
  value,
  handleChange,
  labelText,
}) {
  return (
    <div className="flex flex-col gap-1 w-full rounded-lg">
      <label htmlFor={name} className="capitalize font-medium text-lg">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className="bg-inherit px-4 py-1 focus:outline-none rounded ring-2 focus:ring-blue-400  "
      />
    </div>
  );
}
