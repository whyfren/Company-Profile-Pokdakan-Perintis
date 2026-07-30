import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-pond.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Catfish pond at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 pb-20 pt-32 text-background">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl flex flex-col gap-7"
        >
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-water">
            Aquaculture · Hydroponics · Indonesia
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] text-balance">
            Mengembangkan pangan, komunitas, dan masa depan.
          </h1>
          <p className="text-lg md:text-xl text-background/85 max-w-2xl text-pretty">
            POKDAKAN adalah wadah bagi para pembudidaya ikan yang berfokus pada pengembangan budidaya lele dumbo/sangkuriang sebagai komoditas unggulan bernilai ekonomis tinggi. Kami hadir untuk mengoptimalkan potensi perikanan, khususnya di wilayah Bekasi dan sekitarnya.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md bg-background text-foreground px-6 py-3 text-sm font-medium hover:bg-water transition-colors"
            >
              Learn More <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-background/40 px-6 py-3 text-sm font-medium hover:bg-background/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}