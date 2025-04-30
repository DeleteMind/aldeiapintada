"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiListBold, PiXBold } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { TbBrandLinktree } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="z-[10000] sticky top-0 w-full flex justify-center items-center h-42">
      {/* Logo */}
      <Link className="" href="/">
        <Image
          className=""
          src="/Aldeia Pintada_Cor_PNG.png"
          alt="Aldeia Pintada Logo"
          width={100}
          height={100}
        />
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-zinc-50 hover:text-pink-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <PiXBold size={32} /> : <PiListBold size={32} />}
      </button>

      {/* Nav Links - Desktop */}
      <nav className="hidden md:flex flex-row gap-4 flex-wrap justify-center mx-20">
        <NavLink href="/aldeia">ALDEIA</NavLink>
        <NavLink href="/pinturaMural">PINTURA MURAL</NavLink>
        <NavLink href="/programacao">PROGRAMAÇÃO</NavLink>
        <NavLink href="/oficinas">OFICINAS</NavLink>
        <NavLink href="/arquivo">ARQUIVO</NavLink>
        <NavLink href="/contactos">CONTACTOS</NavLink>
      </nav>
      {/* icons */}
      <div className="flex flex-row gap-3 justify-center">
        <Link href="https://www.facebook.com/aldeiapintada/" target="_blank">
          <FaFacebookF className="text-black hover:text-green-200" size={16} />
        </Link>
        <Link href="https://www.instagram.com/aldeiapintada/" target="_blank">
          <FaInstagram className="text-black hover:text-green-200" size={16} />
        </Link>
        <Link href="https://linktr.ee/aldeiapintada" target="_blank">
          <TbBrandLinktree
            className="text-black hover:text-green-200"
            size={16}
          />
        </Link>
      </div>
      {/* Nav Links - Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 flex flex-col items-center gap-2 py-4 bg-white backdrop-blur-md  text-lg">
          <NavLink href="/aldeia" onClick={handleLinkClick}>
            ALDEIA
          </NavLink>
          <NavLink href="/pintura" onClick={handleLinkClick}>
            PINTURA
          </NavLink>
          <NavLink href="/programacao" onClick={handleLinkClick}>
            PROGRAMAÇÃO
          </NavLink>
          <NavLink href="/atividades" onClick={handleLinkClick}>
            ATIVIDADES
          </NavLink>
          <NavLink href="/arquivo" onClick={handleLinkClick}>
            ARQUIVO
          </NavLink>
          <NavLink href="/contactos" onClick={handleLinkClick}>
            CONTACTOS
          </NavLink>
        </nav>
      )}
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        px-4 py-2 text-xs md:text-sm
        hover:text-[#00b499] tracking-wider font-semibold
        ${isActive ? "text-[#00b499] " : "text-black"}
      `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
