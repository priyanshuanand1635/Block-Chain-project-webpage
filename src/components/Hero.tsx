import { motion } from 'framer-motion';
import { Pickaxe, Wallet } from 'lucide-react';

export default function Hero() {
  const floatingCubes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
    x: Math.random() * 100,
    size: 20 + Math.random() * 40,
  }));

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0e1a] via-[#0f1729] to-[#0a0e1a]">
      <div className="absolute inset-0 overflow-hidden">
        {floatingCubes.map((cube) => (
          <motion.div
            key={cube.id}
            className="absolute bg-gradient-to-br from-cyan-500/20 to-green-500/20 backdrop-blur-sm border border-cyan-500/30"
            style={{
              width: cube.size,
              height: cube.size,
              left: `${cube.x}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: cube.duration,
              repeat: Infinity,
              delay: cube.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-green-500/10 border border-cyan-500/30">
            <Pickaxe className="w-6 h-6 text-cyan-400" />
            <span className="text-cyan-300 font-medium tracking-wide">BlockChainCraft</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Mine Blocks.
          </span>
          <br />
          <span className="text-white">Earn Crypto.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Turn Minecraft mining into blockchain rewards using{' '}
          <span className="text-cyan-400 font-semibold">Proof of Play</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg font-bold text-lg text-white overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            <span className="relative z-10 flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              Connect Wallet
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-cyan-500/30 rounded-lg font-bold text-lg text-cyan-300 hover:bg-white/10 hover:border-cyan-400/50 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            View How It Works
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { label: 'Active Miners', value: '2,547' },
            { label: 'Blocks Mined', value: '1.2M' },
            { label: 'Rewards Claimed', value: '$45K' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
