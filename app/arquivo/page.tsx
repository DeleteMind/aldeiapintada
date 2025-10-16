import Header from "@/components/Header";
import Image from "next/image";

export default function Arquivo() {
    return (
        <main className="flex flex-col relative">
            <Header />

             <Image
                      src="/Header_arquivo.JPG"
                      alt=""
                      className="w-full h-[40rem] object-cover absolute object-[25%_0%]"
                      width={1600}
                      height={666}
                    />
            
                    <div className="mt-[35rem]"></div>
        </main>
    );
}