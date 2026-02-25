function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 flex justify-center">
        <div className="container grid grid-cols-2 text-white py-10">

          {/* TEXTO */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-5xl font-bold">
              FarmaGen
            </h2>

            <p className="text-xl text-center max-w-md">
              Cuidando da sua saúde com tecnologia,
              confiança e bem-estar.
            </p>
          </div>

          {/* IMAGEM */}
          <div className="flex justify-center">
            <img
              src="/src/assets/farmacia.png"
              alt="Ilustração Farmácia"
              className="w-2/3 object-contain"
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Home