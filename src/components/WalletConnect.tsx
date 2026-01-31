import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Check } from 'lucide-react';

export default function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress] = useState('0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb');

  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-[#0a0e1a] to-[#0f1729]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-black text-white mb-4">Connect Your Wallet</h2>
          <p className="text-gray-400 text-lg">Link your wallet to start earning rewards</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {!isConnected ? (
            <button
              onClick={handleConnect}
              className="w-full p-8 bg-gradient-to-r from-cyan-500/10 to-green-500/10 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl hover:border-cyan-400/60 transition-all group"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="p-4 bg-cyan-500/20 rounded-xl group-hover:bg-cyan-500/30 transition-all">
                  <Wallet className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white mb-1">Connect MetaMask</div>
                  <div className="text-gray-400">Click to connect your wallet</div>
                </div>
              </div>
            </button>
          ) : (
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative p-8 bg-gradient-to-r from-green-500/10 to-cyan-500/10 backdrop-blur-sm border-2 border-green-500/50 rounded-2xl"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-green-500/30 rounded-xl">
                    <Check className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Wallet Connected</div>
                    <div className="text-cyan-300 font-mono">{walletAddress}</div>
                  </div>
                </div>

                <motion.div
                  className="w-4 h-4 bg-green-400 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 10px rgba(34, 197, 94, 0.5)',
                      '0 0 20px rgba(34, 197, 94, 0.8)',
                      '0 0 10px rgba(34, 197, 94, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
