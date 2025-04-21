export function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-gray-100 font-bold text-9xl mb-10">400</h1>
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">
          Página não encontrada 🐔
        </h1>
        <a
          href="/"
          className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear"
        >
          Voltar para o inicio
        </a>
      </div>
    </div>
  );
}
