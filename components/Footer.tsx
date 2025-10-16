import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto  h-full flex justify-center items-center relative">
      
      <div className="">
      <p className="text-[0.70rem] mx-auto text-center pt-4">
        © {currentYear} Aldeia Pintada  <br />Todos os direitos reservados
      </p>
      </div>
     <div className="flex mr-6 justify-center items-center absolute  right-0">
        <div className="flex flex-col justify-center items-end text-sm ">
          <p>SEGUE-NOS </p>
          
          <Link className="hover:text-[#00b499]" href="https://www.facebook.com/aldeiapintada/" target="_blank">
            FACEBOOK
          </Link>
          <Link className="hover:text-[#00b499]" href="https://www.instagram.com/aldeiapintada/" target="_blank">
          INSTAGRAM
          </Link>
          
        </div>
        <Image
          src="/Logo_pretoBranco.jpeg"
          alt="Logo_preto_e_branco"
          className="w-[6rem] h-[6rem] object-cover"
          width={2000}
          height={2000}
        />
      </div>
    </footer>
  );
}
