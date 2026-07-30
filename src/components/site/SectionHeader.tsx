import { motion } from "framer-motion";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-4 max-w-2xl ${align === "center" ? "text-center mx-auto" : ""}`}
    >
      <span className="font-mono text-xs tracking-[0.18em] uppercase text-water-deep">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] text-balance">{title}</h2>
      {description && (
        <p className="text-base md:text-lg text-muted-foreground text-pretty">{description}</p>
      )}
    </motion.div>
  );
}