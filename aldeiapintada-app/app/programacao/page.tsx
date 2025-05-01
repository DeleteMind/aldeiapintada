import Header from "@/components/Header";
import Image from "next/image";

export default function Programacao() {
  return (
    <main className="flex flex-col relative">
      <Header />

      <Image
        src="/Header_programacao.jpg"
        alt=""
        className="w-full h-[40rem] object-cover absolute "
        width={1600}
        height={900}
      />


      <div className="mt-[35rem]"></div>
    </main>
  );
}
