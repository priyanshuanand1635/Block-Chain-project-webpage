import { motion } from 'framer-motion';
import { Pickaxe, Wallet } from 'lucide-react';

const MinecraftCharacter = ({ type, size }: { type: string; size: number }) => {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24", // assuming a 24x24 pixel grid base for simplicity
    className: "drop-shadow-lg"
  };

  if (type === 'creeper') {
    return (
      <svg {...commonProps}>
        <rect width="24" height="24" fill="#55AA55" /> {/* Green face */}
        <rect x="4" y="6" width="4" height="4" fill="black" /> {/* Left Eye */}
        <rect x="16" y="6" width="4" height="4" fill="black" /> {/* Right Eye */}
        <rect x="10" y="10" width="4" height="6" fill="black" /> {/* Nose/Mouth center */}
        <rect x="8" y="14" width="2" height="6" fill="black" /> {/* Mouth left */}
        <rect x="14" y="14" width="2" height="6" fill="black" /> {/* Mouth right */}
      </svg>
    );
  }

  if (type === 'steve') {
    return (
      <svg {...commonProps}>
        <rect width="24" height="24" fill="#e0aa86" /> {/* Skin */}
        <rect width="24" height="6" fill="#3B2618" /> {/* Hair top */}
        <rect x="0" y="6" width="4" height="4" fill="#3B2618" /> {/* Side burns */}
        <rect x="20" y="6" width="4" height="4" fill="#3B2618" /> {/* Side burns */}
        <rect x="4" y="10" width="4" height="2" fill="white" /> {/* Eye white */}
        <rect x="6" y="10" width="2" height="2" fill="#4B4BDD" /> {/* Eye pupil */}
        <rect x="16" y="10" width="4" height="2" fill="white" /> {/* Eye white */}
        <rect x="18" y="10" width="2" height="2" fill="#4B4BDD" /> {/* Eye pupil */}
        <rect x="10" y="14" width="4" height="2" fill="#8d5e3c" /> {/* Nose */}
        <rect x="8" y="18" width="8" height="2" fill="#7a4628" /> {/* Mouth */}
      </svg>
    );
  }

  if (type === 'diamond') {
    return (
      <svg {...commonProps}>
        <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="#00FFFF" stroke="#00AAAA" strokeWidth="2" />
        <path d="M7 7L12 12L17 7" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
      </svg>
    );
  }

  if (type === 'pig') {
    return (
      <svg {...commonProps}>
        <rect width="24" height="24" fill="#F0A3A3" /> {/* Skin */}
        <rect x="2" y="8" width="2" height="2" fill="white" /> {/* L Eye */}
        <rect x="3" y="8" width="1" height="1" fill="black" />
        <rect x="20" y="8" width="2" height="2" fill="white" /> {/* R Eye */}
        <rect x="21" y="8" width="1" height="1" fill="black" />
        <rect x="8" y="12" width="8" height="6" fill="#D67A7A" /> {/* Snout */}
        <rect x="10" y="14" width="1" height="2" fill="#7C4040" /> {/* Nostril */}
        <rect x="13" y="14" width="1" height="2" fill="#7C4040" /> {/* Nostril */}
      </svg>
    );
  }

  if (type === 'tnt') {
    return (
      <svg {...commonProps}>
        <rect width="24" height="24" fill="#db382e" />
        <rect y="8" width="24" height="8" fill="white" />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="black" fontSize="8" fontWeight="bold" fontFamily="monospace">TNT</text>
      </svg>
    )
  }

  // Fallback Cube
  return <div style={{ width: size, height: size }} className="bg-white/20" />;
};

export default function Hero() {
  const characterTypes = ['creeper', 'steve', 'diamond', 'pig', 'tnt'];

  const floatingItems = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    type: characterTypes[Math.floor(Math.random() * characterTypes.length)],
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10, // Slower for floating feel
    x: Math.random() * 100,
    size: 40 + Math.random() * 40,
    rotate: Math.random() > 0.5 ? 15 : -15,
  }));

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0e1a] via-[#0f1729] to-[#0a0e1a]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingItems.map((item) => (
          <motion.div
            key={item.id}
            className="absolute opacity-20 hover:opacity-100 transition-opacity duration-300"
            style={{
              left: `${item.x}%`,
              top: '100%',
            }}
            animate={{
              y: [0, -window.innerHeight - 200], // Float up entire screen height roughly
              rotate: [0, item.rotate, 0, -item.rotate, 0], // Bobbing rotation
              x: [0, Math.sin(item.id) * 50, 0], // Slight horizontal wave
            }}
            transition={{
              y: {
                duration: item.duration,
                repeat: Infinity,
                ease: "linear",
                delay: item.delay
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              },
              x: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <MinecraftCharacter type={item.type} size={item.size} />
          </motion.div>
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
            <span className="text-cyan-300 font-medium tracking-wide">MINING CHAIN</span>
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
