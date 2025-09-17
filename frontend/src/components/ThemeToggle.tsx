'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/utils/cn';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative p-2 rounded-lg transition-all duration-200',
        'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600',
        'text-gray-700 dark:text-gray-300'
      )}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : 180,
          scale: theme === 'light' ? 1 : 0.8,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="relative w-5 h-5"
      >
        {theme === 'light' ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-blue-400" />
        )}
      </motion.div>
    </button>
  );
}
