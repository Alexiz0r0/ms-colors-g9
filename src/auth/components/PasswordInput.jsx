import { useState } from "react";
import { iconMap } from "../../ui";

export const PasswordInput = ({ value, onChange, name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const VisibilityOff = iconMap.visibilityOff;
  const Visibility = iconMap.visibility;

  const toggleVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        name={name}
        placeholder="••••••••"
        className="h10 w-full rounded-md border border-[#e4e4e4] px-3 py-2 text-sm"
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
      >
        {showPassword ? (
          <VisibilityOff className="h-6 w-6" />
        ) : (
          <Visibility className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};
