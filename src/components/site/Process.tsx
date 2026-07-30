import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    title: "Pembenihan",
    body: "Usaha pembenihan lele dumbo/sangkuriang berlangsung sekitar 2 bulan (satu siklus produksi). Dalam periode ini, benih dipelihara hingga mencapai ukuran 6–7 cm per ekor dan siap dipindahkan ke tahap pembesaran.",
  },
  {
    n: "02",
    title: "Pembesaran",
    body: "Ikan lele dibesarkan selama kurang lebih 3 bulan hingga mencapai ukuran konsumsi sesuai kebutuhan pasar. Proses ini dilakukan dengan pengelolaan pakan, kualitas air, dan kepadatan tebar yang terkontrol.",
  },
  {
    n: "03",
    title: "Panen",
    body: "Setelah mencapai ukuran konsumsi, ikan dipanen sesuai standar yang ditentukan untuk menjaga kualitas dan keseragaman hasil sebelum dipasarkan.",
  },
  {
    n: "04",
    title: "Pascapanen & Pemasaran",
    body: "Penanganan pascapanen dilakukan secara hati-hati sesuai standar teknis agar ikan tetap segar hingga ke konsumen. Saat ini, pemasaran difokuskan untuk memenuhi permintaan pasar lokal hingga kota-kota besar.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-16">
        <SectionHeader
          eyebrow="03 — Our Process"
          title="Dari benih hingga panen, 4 langkah yang disiplin."
          description="jelas, terstruktur, dan dioptimalkan untuk hasil terbaik."
        />

        <div className="relative">
          {/* timeline line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border" />
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col gap-4"
              >
                <div className="flex items-center gap-4 lg:block">
                  <div className="relative grid place-items-center size-12 rounded-full bg-leaf-deep text-primary-foreground font-mono text-sm">
                    {s.n}
                  </div>
                </div>
                <div className="flex flex-col gap-2 lg:pt-4">
                  <h3 className="text-xl font-medium">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}7