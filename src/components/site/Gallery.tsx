import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import pond from "@/assets/hero-pond.jpg";
import catfish from "@/assets/gallery-catfish.jpg";
import hydro from "@/assets/gallery-hydroponic.jpg";
import ponds from "@/assets/gallery-ponds.jpg";
import seeds from "@/assets/gallery-seeds.jpg";
import greens from "@/assets/gallery-greens.jpg";
import feeding from "@/assets/gallery-feeding.jpg";

const items = [
  { src: ponds, alt: "Concrete catfish ponds", span: "md:col-span-2 md:row-span-2", label: "Pond facility" },
  { src: catfish, alt: "Catfish in pond", span: "", label: "Catfish stock" },
  { src: hydro, alt: "Hydroponic system", span: "", label: "Hydroponic beds" },
  { src: seeds, alt: "Catfish fingerlings", span: "", label: "Fingerlings" },
  { src: feeding, alt: "Feeding catfish", span: "md:col-span-2", label: "Daily feeding" },
  { src: greens, alt: "Fresh leafy greens", span: "", label: "Leafy greens" },
  { src: pond, alt: "Pond at sunrise", span: "md:col-span-2", label: "Sunrise on the pond" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-14">
        <SectionHeader
          eyebrow="04 — Gallery"
          title="The farm, in pictures."
          description="A look at our ponds, fish, hydroponic beds, and the people who make it run."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-lg border border-border ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <figcaption className="absolute bottom-3 left-3 right-3 font-mono text-[10px] uppercase tracking-widest text-background opacity-0 group-hover:opacity-100 transition-opacity">
                {it.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}