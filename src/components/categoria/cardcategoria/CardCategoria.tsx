import { Link } from "react-router-dom"
import type Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md">

      <header className="py-2 px-6 bg-emerald-600 text-white font-bold text-2xl">
        Categoria
      </header>

      {/* CONTEÚDO */}
      <div className="p-6 bg-slate-100 h-full flex flex-col gap-2">
        <h2 className="text-2xl font-semibold">
          {categoria.nome}
        </h2>

        <p className="text-slate-600">
          {categoria.descricao}
        </p>
      </div>

      {/* BOTÕES */}
      <div className="flex">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="w-full text-white bg-emerald-400 hover:bg-emerald-600 flex items-center justify-center py-2"
        >
          Editar
        </Link>

        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="w-full text-white bg-red-400 hover:bg-red-600 flex items-center justify-center"
        >
          Deletar
        </Link>
      </div>

    </div>
  )
}

export default CardCategoria