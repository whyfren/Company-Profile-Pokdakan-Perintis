import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Target, Compass } from "lucide-react";
import Image from "@/assets/gallery-feeding.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <SectionHeader
            eyebrow="01 — About Us"
            title="Peternakan yang berfungsi, ditanam dengan disiplin dan perhatian."
            description="POKDAKAN (Kelompok Pembudidaya Ikan) adalah wadah bagi para pembudidaya ikan yang berfokus pada pengembangan budidaya lele dumbo/sangkuriang sebagai komoditas unggulan bernilai ekonomis tinggi. Kami hadir untuk mengoptimalkan potensi perikanan, khususnya di wilayah Bekasi dan sekitarnya."
          />
          <div className="prose prose-neutral max-w-none text-foreground/85 text-base md:text-lg leading-relaxed flex flex-col gap-5">
            <p>
              Kami <strong>berkomitmen</strong> meningkatkan produksi dan kualitas hasil budidaya melalui penerapan teknik yang <strong>efektif</strong>, pemanfaatan sumber daya yang <strong>optimal</strong>, serta <strong>kolaborasi</strong> antar anggota. Upaya ini dilakukan untuk menjawab tingginya permintaan pasar yang terus berkembang.
            </p>
            <p>
              Lebih dari itu, POKDAKAN bertujuan meningkatkan kesejahteraan anggota dan membuka peluang ekonomi bagi masyarakat, dengan membangun ekosistem perikanan yang produktif dan berkelanjutan.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 pt-2">
            <div className="rounded-lg border border-border bg-card p-6 flex flex-col gap-3">
              <Compass className="size-5 text-leaf" />
              <h3 className="text-base font-mono uppercase tracking-wide">Vision</h3>
              <p className="text-sm text-muted-foreground">
                Menjadi pusat budidaya lele dumbo/sangkuriang yang unggul, berdaya saing, dan mampu memenuhi kebutuhan pasar lokal hingga nasional.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 flex flex-col gap-3">
              <Target className="size-5 text-water-deep" />
              <h3 className="text-base font-mono uppercase tracking-wide">Mission</h3>
              <p className="text-sm text-muted-foreground">
                Mengembangkan budidaya lele dari sistem tradisional menuju intensif serta memberdayakan masyarakat untuk meningkatkan produksi dan kesejahteraan secara berkelanjutan.
              </p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 lg:sticky lg:top-24"
        >
          <div className="aspect-4/5 overflow-hidden rounded-lg border border-border">
            <img
              src={Image}
              alt="Farmer feeding catfish at sunrise"
              loading="lazy"
              width={800}
              height={1000}
              className="size-full object-cover"
            />
          </div>
          <div className="mt-4 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <span>Est. 2026</span>
            <span>Jawa Barat, Indonesia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}