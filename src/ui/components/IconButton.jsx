import { iconMap } from "../icons";

const BASE_STYLE =
  "group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full";

const RESPONSIVE_STYLE = "";
const ANIMATION_STYLE =
  "transition-all duration-300 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:-translate-y-1 active:scale-x-90 active:scale-y-110";
const DISABLED_STYLE = `${BASE_STYLE} ${RESPONSIVE_STYLE} ${ANIMATION_STYLE} cursor-not-allowed`;

const VARIANT_COLORS = {
  primary: "text-white bg-[#6B49F4] hover:bg-[#35247A]",
  success: "text-white bg-green-500 hover:bg-green-600",
  error: "text-white bg-red-500 hover:bg-red-600",
  warning: "text-white bg-yellow-500 hover:bg-yellow-600",
  info: "text-white bg-teal-500 hover:bg-teal-600",
  dark: "text-white bg-gray-700 hover:bg-gray-800",
  light: "gray-700 bg-gray-200 hover:bg-gray-300",
};

export const IconButton = ({
  iconName = "arrow",
  variant = "primary",
  disabled = false,
  onClick,
  ...rest
}) => {
  const Icon = iconMap[iconName];

  // bg-neutral-950
  // text-neutral-200

  if (!Icon) {
    console.warn(`Icon "${iconName}" not found in iconMap.`);
    return null;
  }

  const colorClass = VARIANT_COLORS[variant] || VARIANT_COLORS.primary;

  const buttonClass = disabled
    ? `${DISABLED_STYLE} ${VARIANT_COLORS.light}`
    : `${BASE_STYLE} ${RESPONSIVE_STYLE} ${ANIMATION_STYLE} ${colorClass} cursor-pointer`;

  return (
    <button onClick={onClick} className={buttonClass} {...rest}>
      <div className="transition duration-300 group-hover:rotate-[360deg]">
        <Icon className="h-5 w-5"></Icon>
      </div>
    </button>
  );
};
