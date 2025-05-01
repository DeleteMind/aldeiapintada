import Header from "@/components/Header";
import Image from "next/image";

export default function Aldeia() {
  return (
    <main className="flex flex-col relative">
      <Header />

      <Image
        src="/Header_Aldeia.JPG"
        alt="Imagem de fundo da página principal"
        className="w-full h-[40rem] object-cover absolute"
        width={3846}
        height={2555}
      />
       <div className="mt-[35rem]"></div>


       
    </main>
   
  );
}
