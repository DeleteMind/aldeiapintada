import Image from "next/image";

import Header from "@/components/Header";


export default function Home() {
  return (
    <main className="flex flex-col gap-12 pb-8 relative">
      <Header />

      <Image
        src="/fotoPáginaPrincipal.jpg"
        alt="Imgem de fundo da página principal"
        className="w-full h-[40rem] object-cover absolute"
        width={3773}
        height={2506}
      />

      <div className="relative z-10 flex flex-col items-center justify-end gap-4 mt-[35rem] mb-24 ">
        <h1 className="text-[1.7rem] text-black">
          Uma Associação Cultural que surge na Torre, <br /> uma aldeia do
          concelho da Batalha, lugar singular e com muito para contar.
        </h1>
        <button className="bg-amber-500 text-black px-2 py-2 rounded-md hover:bg-amber-400">
          Saber Mais
        </button>
      </div>
    </main>
  );
}
