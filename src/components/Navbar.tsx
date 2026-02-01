import { Link, useLocation } from 'react-router-dom';
import { Pickaxe, Wallet, LayoutDashboard, Trophy, Coins } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/', icon: Pickaxe },
        { name: 'Connect Wallet', path: '/wallet', icon: Wallet },
        { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
        { name: 'Mining', path: '/mining', icon: Trophy },
        { name: 'Rewards', path: '/rewards', icon: Coins },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e1a]/80 backdrop-blur-md border-b border-cyan-500/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-lg group-hover:scale-110 transition-transform">
                            <Pickaxe className="w-6 h-6 text-cyan-400" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                            MINING CHAIN
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {links.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${isActive ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    <link.icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : ''}`} />
                                    <span className="font-medium">{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 bg-cyan-500/10 rounded-lg border border-cyan-500/20"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="md:hidden">
                        {/* Mobile menu button could go here - for now keeping it simple */}
                    </div>
                </div>
            </div>
        </nav>
    );
}
