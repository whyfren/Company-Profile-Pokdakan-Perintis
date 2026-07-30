import { motion } from "framer-motion";
import { Building2, Workflow, TrendingUp, Truck } from "lucide-react";

const reasons = [
  {
    icon: Building2,
    title: "Fasilitas nyata dan aktif",
    body: "Kolam budidaya yang berfungsi dan dikelola secara langsung — bukan sekadar konsep, tapi sudah berjalan di lapangan.",
  },
  {
    icon: Workflow,
    title: "Sistem budidaya terstruktur",
    body: "Setiap siklus mengikuti proses yang jelas mulai dari pembenihan, pembesaran, hingga panen dan distribusi.",
  },
  {
    icon: TrendingUp,
    title: "Pengembangan berkelanjutan",
    body: "Kami terus mengembangkan usaha, termasuk rencana pembenihan mandiri dan perluasan kapasitas produksi.",
  },
  {
    icon: Truck,
    title: "Jaringan pemasaran stabil",
    body: "Didukung hubungan dengan pembeli lokal dan pasar yang terus berkembang, sehingga hasil panen terserap dengan baik.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 md:py-32 bg-leaf-deep text-primary-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-14">
        <div className="max-w-2xl flex flex-col gap-4">
          <span className="font-mono text-xs tracking-[0.18em] uppercase text-water">
            05 — Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] text-balance">
            A small farm, run with the discipline of a serious operation.
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/75">
            We&rsquo;re not the biggest farm in the region — and we don&rsquo;t need to be. We&rsquo;re built
            to be reliable, transparent, and scalable for the partners who grow with us.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 border border-primary-foreground/10 rounded-lg overflow-hidden">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-leaf-deep p-7 flex flex-col gap-4 hover:bg-foreground/30 transition-colors"
            >
              <r.icon className="size-6 text-water" />
              <h3 className="text-lg font-medium">{r.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}