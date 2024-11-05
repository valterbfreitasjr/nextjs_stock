import { DataTable } from "@/app/_components/ui/data-table";
import { productTableColumns } from "./table-columns";

const ProductList = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const { products } = await response.json();

  return <DataTable columns={productTableColumns} data={products} />;
};

export default ProductList;
