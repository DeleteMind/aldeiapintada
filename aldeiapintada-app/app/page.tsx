import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 pb-8 -m-42">
      <Image
        src="/fotoPáginaPrincipal.jpg"
        alt="Responsive image with aspect ratio"
        className="w-full h-[42rem] object-cover"
        width={1000}
        height={1000}
      />

      <div className="flex flex-col items-center justify-end gap-4 ">
        <p className="text-[1.7rem] text-black">
          Uma Associação Cultural que surge na Torre, <br /> uma aldeia do
          concelho da Batalha, lugar singular e com muito para contar.
        </p>
        <button className="bg-amber-500 text-black px-2 py-2 rounded-md hover:bg-amber-400">
          Saber Mais
        </button>
      </div>
    </main>
  );
}
