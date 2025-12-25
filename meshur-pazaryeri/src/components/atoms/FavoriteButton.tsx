'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export const FavoriteButton = ({ isFavorite, onClick }: FavoriteButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition-all ${
        isFavorite 
          ? 'bg-red-500 text-white' 
          : 'bg-white/90 text-gray-400 hover:text-red-500 backdrop-blur-sm'
      }`}
    >
      <Heart 
        size={18} 
        fill={isFavorite ? 'currentColor' : 'none'} 
        strokeWidth={2.5}
      />
    </motion.button>
  );
};