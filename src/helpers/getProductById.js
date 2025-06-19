export const getProductById = (products, id) => {
  const numericId = Number(id);
  return products.find((p) => Number(p.id) === numericId);
};
