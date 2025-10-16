import Header from "@/components/Header";
import Image from "next/image";

export default function pinturaMural() {
  return (
    <main className="flex flex-col relative">
      <Header />

        <Image
             src="/Header_PinturaMural.jpeg"
             alt="Imagem de fundo da página principal"
             className="w-full h-[40em] object-cover absolute object-[25%_0%]"
             width={1600}
             height={1062}
        />
    
    <div className="mt-[35rem]"></div>
    </main>
  );
}
