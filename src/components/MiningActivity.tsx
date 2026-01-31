import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Gem, Zap } from 'lucide-react';

export default function MiningActivity() {
  const [miningLogs, setMiningLogs] = useState([
    { id: 1, blockType: 'Diamond Ore', points: 100, icon: Gem, color: 'cyan', time: '2s ago' },
    { id: 2, blockType: 'Iron Ore', points: 25, icon: Box, color: 'gray', time: '15s ago' },
    { id: 3, blockType: 'Gold Ore', points: 50, icon: Zap, color: 'yellow', time: '32s ago' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = generateRandomLog();
      setMiningLogs(prev => [newLog, ...prev].slice(0, 6));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const generateRandomLog = () => {
    const types = [
      { type: 'Diamond Ore', points: 100, icon: Gem, color: 'cyan' },
      { type: 'Gold Ore', points: 50, icon: Zap, color: 'yellow' },
      { type: 'Iron Ore', points: 25, icon: Box, color: 'gray' },
      { type: 'Emerald Ore', points: 75, icon: Gem, color: 'green' },
      { type: 'Stone', points: 5, icon: Box, color: 'gray' },
    ];
    const randomType = types[Math.floor(Math.random() * types.length)];
    return {
      id: Date.now(),
      blockType: randomType.type,
      points: randomType.points,
      icon: randomType.icon,
      color: randomType.color,
      time: 'Just now',
    };
  };

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400',
      green: 'from-green-500/20 to-green-500/5 border-green-500/30 text-green-400',
      gray: 'from-gray-500/20 to-gray-500/5 border-gray-500/30 text-gray-400',
      yellow: 'from-yellow-500/20 to-yellow-500/5 border-yellow-500/30 text-yellow-400',
    };
    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <div className="py-20 bg-gradient-to-b from-[#0f1729] to-[#0a0e1a]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-white mb-4">Mining Activity</h2>
          <p className="text-gray-400 text-lg">Real-time mining events from your game</p>
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence mode='popLayout'>
            {miningLogs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -50, height: 0 }}
                animate={{ opacity: 1, x: 0, height: 'auto' }}
                exit={{ opacity: 0, x: 50, height: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`group p-6 rounded-xl bg-gradient-to-r ${getColorClasses(log.color)} backdrop-blur-sm border hover:scale-[1.02] transition-all`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
                      <log.icon className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="text-white font-bold text-lg mb-1">{log.blockType}</div>
                      <div className="text-gray-400 text-sm">{log.time}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl font-black text-green-400">+{log.points}</div>
                    <div className="text-gray-400 text-sm">points</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-gray-500"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gray-700">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Live updates enabled</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

