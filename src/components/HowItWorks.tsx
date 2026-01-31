import { motion } from 'framer-motion';
import { Pickaxe, Calculator, Coins, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Pickaxe,
      title: 'Mine Blocks in Minecraft',
      description: 'Play Minecraft normally and mine any blocks. Our plugin tracks every action automatically.',
      color: 'cyan',
    },
    {
      icon: Calculator,
      title: 'Plugin Calculates Proof of Play',
      description: 'Advanced algorithms verify your mining activity and calculate your contribution score in real-time.',
      color: 'green',
    },
    {
      icon: Coins,
      title: 'Blockchain Mints Rewards',
      description: 'Claim your earned tokens directly to your wallet. Rewards are based on mining difficulty and rarity.',
      color: 'cyan',
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-[#0f1729] to-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg">Three simple steps to start earning</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/20 via-green-500/20 to-cyan-500/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all h-full">
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex p-6 rounded-2xl bg-gradient-to-br from-${step.color}-500/20 to-${step.color}-500/5 mb-6`}
                    >
                      <step.icon className={`w-12 h-12 text-${step.color}-400`} />
                    </motion.div>

                    <div className="absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/30 to-green-500/30 border border-cyan-400/50">
                      <span className="text-2xl font-black text-white">{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      animate={{
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <ArrowRight className="w-8 h-8 text-cyan-400" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/30">
            <div className="text-gray-400 mb-2">Ready to start?</div>
            <div className="text-2xl font-bold text-white mb-4">
              Install the plugin and connect your wallet
            </div>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-xl font-bold text-white hover:scale-105 transition-transform">
              Download Plugin
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
