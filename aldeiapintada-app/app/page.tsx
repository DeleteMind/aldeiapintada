import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div>
        <Image
          src="/fotoPáginaPrincipal.jpg"
          alt="Aldeia Pintada"
          width={1000}
          height={500}
          className="object-cover w-full h-96 "
        />
      </div>

      <div className=" flex items-center flex-col justify-center pt-16 pb-8 gap-4">
        <p className="text-[1.7rem]">
          Uma Associação Cultural que surge na Torre, <br /> uma aldeia do
          concelho da Batalha, lugar singular e com muito para contar.
        </p>
        <button className="bg-green-200 text-black px-2 py-2 rounded-md  hover:bg-green-300"> Saber Mais</button>
      </div>

      <p></p>
    </main>
  );
}
