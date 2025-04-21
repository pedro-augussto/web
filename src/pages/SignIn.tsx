import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn() {
  const [isLoading, setIsloading] = useState(false);

  function onAction(formData: FormData) {
    console.log(formData.get(""))
  }

  return (
    <form action={onAction} className="w-full flex flex-col gap-4">
      <Input
        required
        name="email"
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />
      <Input
        name="password"
        required
        legend="Senha"
        type="password"
        placeholder="senha"
      />

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>

      <a
        href="/signup"
        className="text-sm font-semibold text-gray-100 mt-10 text-center hover:text-green-800 transition ease-linear"
      >
        Criar Conta
      </a>
    </form>
  );
}
