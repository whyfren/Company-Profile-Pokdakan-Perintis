import { motion } from "framer-motion";
import { Fish, Leaf, Waves, Sprout } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Fish,
    tag: "Operasi Utama",
    title: "Budidaya Ikan Lele",
    description:
      "Kami membudidayakan ikan lele dari tahap benih hingga siap panen di kolam yang terkelola dengan baik, dengan jadwal pakan terstruktur dan pemantauan kualitas air.",
    status: "Aktif",
  },
  {
    icon: Leaf,
    tag: "Sekunder",
    title: "Pertanian Hidroponik",
    description:
      "Sayuran segar ditanam dengan sistem tanpa tanah, menggunakan lebih sedikit air, menghasilkan produk yang lebih bersih, serta memberikan siklus panen tambahan.",
    status: "Aktif",
  },
  {
    icon: Sprout,
    tag: "Dalam Pengembangan",
    title: "Sistem Pembenihan (Indukan)",
    description:
      "Mengembangkan produksi benih lele secara mandiri untuk mengurangi ketergantungan pada pemasok luar dan meningkatkan kontrol kualitas secara menyeluruh.",
    status: "Direncanakan",
  },
  {
    icon: Waves,
    tag: "Masa Depan",
    title: "Jasa Sewa Kolam",
    description:
      "Ke depannya, kami berencana menyediakan layanan sewa kolam bagi petani dan mitra untuk berbagi fasilitas serta pengetahuan budidaya.",
    status: "Direncanakan",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-14">
        <SectionHeader
          eyebrow="02 — Business Units"
          title="Apa yang kami jalankan saat ini, dan apa yang sedang kami bangun ke depan."
          description="Setiap unit dikelola sebagai bidang tersendiri, dengan metrik, jadwal, dan jalur pengembangan masing-masing."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-xl border border-border bg-card p-7 md:p-8 flex flex-col gap-5 hover:shadow-lg hover:shadow-leaf/5 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="grid place-items-center size-11 rounded-lg bg-water text-water-deep">
                  <s.icon className="size-5" />
                </span>
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded ${s.status === "Active"
                      ? "bg-leaf/10 text-leaf-deep"
                      : "bg-earth/10 text-earth"
                    }`}
                >
                  ● {s.status}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </span>
                <h3 className="text-2xl font-medium">{s.title}</h3>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}