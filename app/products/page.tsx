import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import ProductList from "./_components/product-list";
import { cookies, headers } from "next/headers";

export const dynamic = "force-dynamic";

fetch("URL", {
  cache: "no-cache",
});

const cookie = cookies();
const header = headers();

const ProductsPage = async () => {
  // const products = await getProducts();

  // const { products, randomNumber } = await (
  //   await fetch("http://localhost:3000/api/products", {
  //     method: "GET",
  //     next: {
  //       revalidate: 5,
  //     },
  //   })
  // ).json();
  // revalidatePath("/products");

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
      <ProductList />
    </div>
  );
};

export default ProductsPage;
