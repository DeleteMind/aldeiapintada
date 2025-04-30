export default function Footer() {
  return (
    <footer className="mt-auto p-4 bg-gray-100 text-center h-full">
      <p className="text-sm">
        © 2023 Aldeia Pintada. Todos os direitos reservados.
      </p>
      <div className="flex justify-center gap-4">
        <a href="/privacy-policy" className="text-sm hover:underline">
          Política de Privacidade
        </a>
        <a href="/terms-of-service" className="text-sm hover:underline">
          Termos de Serviço
        </a>
      </div>
    </footer>
  );
}
