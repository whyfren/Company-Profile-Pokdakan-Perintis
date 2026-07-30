import { Sprout } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center size-8 rounded-md bg-leaf">
              <Sprout className="size-4" />
            </span>
            <span className="font-mono text-sm uppercase tracking-tight">POKDAKAN</span>
          </div>
          <p className="text-sm text-background/65 max-w-sm leading-relaxed">
            POKDAKAN adalah wadah bagi para pembudidaya ikan yang berfokus pada pengembangan budidaya lele dumbo/sangkuriang sebagai komoditas unggulan bernilai ekonomis tinggi. Kami hadir untuk mengoptimalkan potensi perikanan, khususnya di wilayah Bekasi dan sekitarnya.
          </p>
        </div>
        <div className="md:col-span-4 grid grid-cols-2 gap-6 text-sm">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-background/50">
              Explore
            </span>
            <a href="#about" className="text-background/80 hover:text-background">About</a>
            <a href="#services" className="text-background/80 hover:text-background">Business Units</a>
            <a href="#process" className="text-background/80 hover:text-background">Process</a>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-background/50">
              More
            </span>
            <a href="#gallery" className="text-background/80 hover:text-background">Gallery</a>
            <a href="#why" className="text-background/80 hover:text-background">Why Us</a>
            <a href="#contact" className="text-background/80 hover:text-background">Contact</a>
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col gap-3">
          <span className="font-mono text-[11px] uppercase tracking-widest text-background/50">
            Follow
          </span>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="grid place-items-center size-10 rounded-md border border-background/20 hover:bg-background/10"
            >
              <FaInstagram className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="grid place-items-center size-10 rounded-md border border-background/20 hover:bg-background/10"
            >
              <FaFacebook className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-background/55 font-mono uppercase tracking-widest">
          <span>© {new Date().getFullYear()} POKDAKAN</span>
          <span>Bekasi · Jawa Barat · Indonesia</span>
        </div>
      </div>
    </footer>
  );
}