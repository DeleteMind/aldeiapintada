"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PiListBold, PiXBold } from "react-icons/pi";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="z-[10000] sticky top-0 w-full flex justify-between items-center p-6 bg-zinc-900/50 backdrop-blur-md border-b border-zinc-900">
      {/* Logo */}
      <Link
        className="hover:ring-2 hover:ring-pink-300  shrink-0"
        href="/"
      >
        <Image
          className="bg-zinc-100 "
          src=""
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
      <nav className="hidden md:flex flex-row gap-4 flex-wrap justify-center">
        <NavLink href="/about">ALDEIA</NavLink>
        <NavLink href="/merch">PINTURA</NavLink>
        <NavLink href="/gallery">PROGRAMAÇÃO</NavLink>
        <NavLink href="/contact">ATIVIDADES</NavLink>
        <NavLink href="">ARQUIVO</NavLink>
        <NavLink href="">CONTACTOS</NavLink>
      </nav>

      {/* Nav Links - Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 flex flex-col items-center gap-2 py-4 bg-zinc-900/95 backdrop-blur-md border-b border-zinc-900 text-lg">
          <NavLink href="/about" onClick={handleLinkClick}>ALDEIA</NavLink>
          <NavLink href="/merch" onClick={handleLinkClick}>PINTURA</NavLink>
          <NavLink href="/gallery" onClick={handleLinkClick}>PROGRAMAÇÃO</NavLink>
          <NavLink href="/contact" onClick={handleLinkClick}>ATIVIDADES</NavLink>
          <NavLink href="/contact" onClick={handleLinkClick}>ARQUIVO</NavLink>
          <NavLink href="/contact" onClick={handleLinkClick}>CONTACTOS</NavLink>
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
        px-4 py-2 text-lg
        hover:text-green-300 tracking-wider font-semibold
        ${isActive ? "text-pink-300" : "text-zinc-50"}
      `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
