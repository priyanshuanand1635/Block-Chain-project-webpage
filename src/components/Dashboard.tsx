import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Wallet, Pickaxe, Trophy, Coins } from 'lucide-react';

export default function Dashboard() {
  const [playerData, setPlayerData] = useState({
    username: 'SteveTheMiner',
    walletAddress: '0x742d35Cc...5f0bEb',
    blocksMined: 15847,
    proofOfPlayScore: 9234,
    pendingRewards: 2.45,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerData(prev => ({
        ...prev,
        blocksMined: prev.blocksMined + Math.floor(Math.random() * 3),
        proofOfPlayScore: prev.proofOfPlayScore + Math.floor(Math.random() * 10),
        pendingRewards: prev.pendingRewards + (Math.random() * 0.001),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const statCards = [
    {
      icon: Pickaxe,
      label: 'Total Blocks Mined',
      value: playerData.blocksMined.toLocaleString(),
      color: 'cyan',
      suffix: '',
    },
    {
      icon: Trophy,
      label: 'Proof of Play Score',
      value: playerData.proofOfPlayScore.toLocaleString(),
      color: 'green',
      suffix: 'PTS',
    },
    {
      icon: Coins,
      label: 'Pending Rewards',
      value: playerData.pendingRewards.toFixed(4),
      color: 'cyan',
      suffix: 'ETH',
    },
  ];

  return (
    <div className="py-20 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white mb-4">Player Dashboard</h2>
          <p className="text-gray-400 text-lg">Track your mining progress and rewards</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-2xl">
              <User className="w-12 h-12 text-cyan-400" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="text-sm text-gray-400 mb-2">Minecraft Username</div>
              <div className="text-3xl font-bold text-white mb-3">{playerData.username}</div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Wallet className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-mono text-sm">{playerData.walletAddress}</span>
              </div>
            </div>

            <div className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-xl border border-green-500/30">
              <div className="text-sm text-gray-400 mb-1">Status</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold">Active Mining</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {statCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className={`inline-flex p-4 rounded-xl bg-${card.color}-500/20 mb-6`}>
                  <card.icon className={`w-8 h-8 text-${card.color}-400`} />
                </div>

                <div className="text-gray-400 text-sm mb-3">{card.label}</div>

                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-black text-${card.color}-400`}>
                    {card.value}
                  </span>
                  {card.suffix && (
                    <span className="text-gray-500 text-lg font-semibold">{card.suffix}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

