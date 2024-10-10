import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* Image */}
      <div>
        <h1 className="px-8 py-6 text-2xl font-bold">Stockly</h1>
      </div>
      {/* Botões */}
      <div className="flex flex-col gap-2 p-2">
        <Button variant="ghost" className="justify-start">
          Dashboard
        </Button>
        <Button variant="ghost" className="justify-start">
          Produtos
        </Button>
        <Button variant="ghost" className="justify-start">
          Vendas
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
