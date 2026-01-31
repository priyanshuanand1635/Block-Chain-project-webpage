import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coins, Check } from 'lucide-react';

export default function ClaimRewards() {
  const [claimed, setClaimed] = useState(false);
  const pendingRewards = 2.45;

  const handleClaim = () => {
    setClaimed(true);
    setTimeout(() => setClaimed(false), 3000);
  };

  return (
    <div className="py-20 bg-[#0a0e1a]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-black text-white mb-4">Claim Your Rewards</h2>
          <p className="text-gray-400 text-lg">Convert your mining points into crypto rewards</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-green-500/10 to-cyan-500/10 backdrop-blur-xl border-2 border-cyan-500/30 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-green-500/20"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          <div className="relative text-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="inline-flex p-6 bg-gradient-to-br from-cyan-500/30 to-green-500/30 rounded-3xl mb-6"
            >
              <Coins className="w-16 h-16 text-cyan-400" />
            </motion.div>

            <div className="mb-8">
              <div className="text-gray-400 text-lg mb-2">Available to Claim</div>
              <div className="text-6xl font-black text-transparent bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text">
                {pendingRewards} ETH
              </div>
              <div className="text-gray-500 mt-2">≈ ${(pendingRewards * 3200).toFixed(2)} USD</div>
            </div>

            <AnimatePresence mode="wait">
              {!claimed ? (
                <motion.button
                  key="claim"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={handleClaim}
                  className="relative group px-12 py-6 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl font-black text-2xl text-white overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <span className="relative z-10">CLAIM TOKENS</span>
                </motion.button>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-green-500/20 to-green-500/10 border-2 border-green-500/50 rounded-2xl"
                >
                  <Check className="w-8 h-8 text-green-400" />
                  <span className="text-2xl font-black text-green-400">Claimed Successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 text-sm text-gray-500">
              Rewards are sent directly to your connected wallet
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-3 gap-4 text-center"
        >
          {[
            { label: 'Claim Fee', value: '0%' },
            { label: 'Processing Time', value: '~30s' },
            { label: 'Min. Claim', value: '0.1 ETH' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-cyan-500/20">
              <div className="text-gray-400 text-sm mb-1">{item.label}</div>
              <div className="text-cyan-400 font-bold">{item.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
