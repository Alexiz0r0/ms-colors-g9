export const getCurrentDate = () => {
  const fecha = new Date();
  // Array con nombres de los meses en español
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const dia = String(fecha.getDate()).padStart(2, "0");
  const mes = meses[fecha.getMonth()];
  const anio = fecha.getFullYear();

  const fechaFormateada = `${dia} ${mes}, ${anio}`;

  return {
    date: fechaFormateada,
  };
};
