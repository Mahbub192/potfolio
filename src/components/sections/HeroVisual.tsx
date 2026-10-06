import { motion } from "framer-motion";
import portrait from "@/assets/images/Mahbub_Ali_passport_600x600_under_100KB.jpg";
import { profile } from "@/data/profile";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-lift"
      >
        <div
          className="absolute inset-0 bg-gradient-to-tr from-accent/25 via-transparent to-transparent"
          aria-hidden="true"
        />
        <img
          src={portrait}
          alt={`${profile.name}, ${profile.role}`}
          width={600}
          height={600}
          decoding="async"
          fetchPriority="high"
          className="aspect-square w-full object-cover object-top"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent px-5 pb-5 pt-20">
          <p className="text-lg font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {profile.role} · Healthcare & education apps
          </p>
        </div>
      </motion.div>
    </div>
  );
}
