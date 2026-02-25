import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md">

      <header className="py-2 px-6 bg-emerald-600 text-white font-bold text-2xl">
        Categoria
      </header>

      <p className="p-8 text-2xl bg-slate-100 h-full">
        {categoria.nome}
      </p>

      <div className="flex">

        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="w-full text-white bg-emerald-400 hover:bg-emerald-600 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="w-full text-white bg-red-400 hover:bg-red-600 flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>

      </div>

    </div>
  )
}

export default CardCategoria