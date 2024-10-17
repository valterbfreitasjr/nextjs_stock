import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { productTableColumns } from "./_components/table-columns";
import { getProducts } from "../_data-access/product/get-products";
import { revalidatePath } from "next/cache";

const ProductsPage = async () => {
  // const products = await getProducts();

  const response = await fetch("http://localhost:3000/api/products");
  const fetchProducts = await response.json();
  revalidatePath("/products");

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <div className="flex w-full items-end justify-between">
        {/* ESQUERDA */}
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de produtos
          </span>
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        {/* DIREITA */}
        <Button className="gap-2">
          <PlusIcon size={20} /> Novo produto
        </Button>
      </div>
      {/* <DataTable columns={productTableColumns} data={products} /> */}
      <DataTable columns={productTableColumns} data={fetchProducts} />
    </div>
  );
};

export default ProductsPage;
