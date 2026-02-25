import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full flex justify-center py-4 bg-emerald-600 text-white shadow-md">

      <div className="container flex justify-between text-lg mx-8">

        <Link to="/" className="text-2xl font-bold">
          Projeto FarmaGen
        </Link>

        <div className="flex gap-6">
          <Link to="/categorias" className="hover:underline">
            Lista Categorias
          </Link>

          <Link to="/cadastrarCategoria" className="hover:underline">
            Cadastrar Categoria
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Navbar;