import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/BrandIcons";
import { links, whatsappChatUrl } from "@/data/profile";

export function WhatsAppFloat() {
  if (!links.whatsapp) return null;

  return (
    <motion.a
      href={whatsappChatUrl()}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="fixed right-4 bottom-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_28px_-6px_rgb(37_211_102_/_0.7)] transition-shadow hover:shadow-[0_12px_32px_-6px_rgb(37_211_102_/_0.85)] sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="sr-only">WhatsApp {links.whatsapp}</span>
    </motion.a>
  );
}
