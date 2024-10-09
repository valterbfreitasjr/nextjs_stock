const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* Image */}
      <div>
        <h1 className="px-8 py-6 font-bold text-2xl">Stockly</h1>
      </div>
      {/* Botões */}
      <div className="flex flex-col gap-2 p-2">
        <button className="bg-yellow-100 px-6 py-3">Dashboard</button>
        <button className="bg-yellow-200 px-6 py-3">Produtos</button>
        <button className="bg-yellow-300 px-6 py-3">Vendas</button>
      </div>
    </div>
  );
};

export default Sidebar;
