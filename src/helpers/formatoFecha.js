export const formatoFecha = (fechaIso) => {
  const date = new Date(fechaIso);
  const dia = date.getDate();
  const mes = date.toLocaleString("es-ES", { month: "long" });
  const año = date.getFullYear();
  return `${dia} ${mes.charAt(0).toUpperCase() + mes.slice(1)}, ${año}`;
};
