import { LayoutGrid, Package, ShoppingBasketIcon } from "lucide-react";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* Image */}
      <div>
        <h1 className="px-8 py-6 text-2xl font-bold">Stockly</h1>
      </div>
      {/* Botões */}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutGrid size={18} /> Dashboard
        </SidebarButton>
        <SidebarButton href="/products">
          <Package size={18} /> Produtos
        </SidebarButton>
        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={18} /> Vendas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
