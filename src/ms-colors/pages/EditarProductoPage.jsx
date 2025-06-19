import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useForm, useProductStore } from "../../hooks";
import { useMemo, useState } from "react";
import { getProductById } from "../../helpers";
import { TextInput } from "../../auth/components";
import { Button, LoadingView } from "../../ui";
import { HexColorPicker } from "react-colorful";

export const EditarProductoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { products, editProduct, isLoading } = useProductStore();

  const product = useMemo(() => getProductById(products, id), [id]);

  const newFormField = useMemo(
    () => ({
      nombre: product.nombre,
      colors: product.categoria,
    }),
    [product],
  );

  const [color, setColor] = useState(product.categoria);
  const { colors, nombre, onInputChange, onResetForm } = useForm(newFormField);

  if (!product) {
    return <Navigate to="/" />;
  }

  const onEdit = (event) => {
    event.preventDefault();
    console.log({ colors, nombre });
    editProduct({ id, nombre: nombre, precio: 0, categoria: color });
    onResetForm();
    navigate(-1);
  };

  return isLoading ? (
    <LoadingView />
  ) : (
    <div className="animate__animated animate__fadeIn">
      <form
        className="mx-auto flex w-full flex-col py-14 md:w-[550px]"
        onSubmit={onEdit}
      >
        <h2 className="text-center text-2xl leading-8 font-semibold tracking-tight">
          Crear
        </h2>
        <label className="text-md py-2 leading-none font-medium">
          Selecciona un color
        </label>
        <TextInput
          name="colors"
          value={color}
          onChange={onInputChange}
          className="hidden"
        />
        <div className="resposive">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
        <label className="text-md py-2 leading-none font-medium">Nombre</label>
        <TextInput name="nombre" value={nombre} onChange={onInputChange} />

        <Button className="mt-4">Guardar</Button>
      </form>
    </div>
  );
};
