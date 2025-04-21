import logoSvg from "../assets/logo.svg";
import logoutSvg from "../assets/logout.svg";

export function Header() {
  return (
    <header className="w-full flex justify-between">
      <img src={logoSvg} alt="logo" />

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">Olá, Pedro</span>

        <img
          src={logoutSvg}
          alt="Icone de Sair"
          className="my-8 cursor-pointer hover:opacity-75 transition ease-linear"
        />
      </div>
    </header>
  );
}
