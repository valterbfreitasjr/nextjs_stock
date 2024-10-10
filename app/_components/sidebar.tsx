"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutGrid, Package, ShoppingBasketIcon } from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="w-64 bg-white">
      {/* Image */}
      <div>
        <h1 className="px-8 py-6 text-2xl font-bold">Stockly</h1>
      </div>
      {/* Botões */}
      <div className="flex flex-col gap-2 p-2">
        <Button
          variant={pathname === "/" ? "secondary" : "ghost"}
          className="justify-start gap-2"
          asChild
        >
          <Link href="/">
            <LayoutGrid size={18} /> Dashboard
          </Link>
        </Button>
        <Button
          variant={pathname === "/products" ? "secondary" : "ghost"}
          className="justify-start gap-2"
          asChild
        >
          <Link href="/products">
            <Package size={18} /> Produtos
          </Link>
        </Button>
        <Button
          variant={pathname === "/sales" ? "secondary" : "ghost"}
          className="justify-start gap-2"
          asChild
        >
          <Link href="/sales">
            <ShoppingBasketIcon size={18} /> Vendas
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
