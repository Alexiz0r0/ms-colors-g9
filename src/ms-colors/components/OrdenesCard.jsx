import { formatoFecha } from "../../helpers";
import { iconMap } from "../../ui";

export const OrdenesCard = ({ usuarioId, fecha, productosIds = [] }) => {
  const AccountIcon = iconMap["account"];
  const EventIcon = iconMap["event"];
  const ListIcon = iconMap["list"];

  return (
    <div className="flex flex-col items-center justify-center space-y-6 rounded-lg border border-indigo-100 bg-white p-6 shadow transition-all duration-500 hover:shadow-xl lg:flex-row lg:space-y-0 lg:space-x-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border bg-[#6B49F4] text-white">
        <AccountIcon className="h-15 w-15" />
      </div>
      <div className="flex-1">
        <div>
          <h5 className="text-xl font-bold lg:text-2xl">ID: {usuarioId}</h5>
        </div>
        <div className="flex flex-row items-center gap-3">
          <EventIcon />
          <p className="text-lg text-gray-600">{formatoFecha(fecha)}</p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <ListIcon />
          <span className="flex items-baseline text-lg font-bold text-indigo-600">
            {productosIds.length}
          </span>
        </div>
      </div>
    </div>
  );
};
