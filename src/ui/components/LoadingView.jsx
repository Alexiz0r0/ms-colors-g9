import { iconMap } from "../icons";
export const LoadingView = () => {
  const Icon = iconMap.loading;
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <Icon className="h-80 w-80" />
    </div>
  );
};
