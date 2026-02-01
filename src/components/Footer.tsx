import { motion } from 'framer-motion';
import { Github, Twitter, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0a0e1a] border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-lg">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">MINING CHAIN</div>
              <div className="text-gray-500 text-sm">Built for Vibecraft Hackathon</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-white/5 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all"
            >
              <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="p-3 bg-white/5 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all"
            >
              <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400 transition-colors" />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <p>© 2024 MINING CHAIN. Proof of Play meets Web3.</p>
        </motion.div>
      </div>
    </footer>
  );
}
