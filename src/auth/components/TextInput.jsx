export const TextInput = ({
  value,
  onChange,
  placeholder,
  name,
  className = "",
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className={`h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm ${className}`}
      />
    </div>
  );
};
