'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHackerrank } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const socialMediaLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/ntshrihari/',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/s_hari_rocks/',
  },
  {
    name: 'Gmail',
    icon: FaEnvelope,
    href: 'mailto:ntshrihari@gmail.com',
  },
];

const codingLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/shriharit04/',
  },
  {
    name: 'HackerRank',
    icon: FaHackerrank,
    href: 'https://www.hackerrank.com/profile/shriharit2004',
  },
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    href: 'https://leetcode.com/u/shriharit2004/',
  },
];

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full relative  py-16 md:pb-40  rounded-xl border border-white/10"
      style={{
        background:
          'linear-gradient(to bottom, rgba(44, 8, 92, 0.1), rgba(44, 8, 92, 0.3), rgba(44, 8, 92, 0.6), rgb(44, 8, 92))',
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-12 text-white relative">
          <p className="text-base md:text-xl mb-4 font-mono">
            This site is ever-evolving, just like my journey. Stay tuned as I continue to update and add more of my work and creativity over time.
          </p>
          <p className="text-base md:text-xl font-mono">
            Got something to say? I wouldd love to hear from you! Feel free to reach out via email or connect with me on social media.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/3 flex flex-row justify-center space-x-8 md:space-x-16">
          <div className="flex flex-col gap-8 mr-8 md:mr-0">
            {socialMediaLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                {/* Icon */}
                <motion.div
                  className="mr-3"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-6 h-6 text-white transition-all group-hover:text-cyan-300" />
                </motion.div>

                {/* Name */}
                <span className="text-white text-sm group-hover:text-cyan-300 transition-all">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Coding Links */}
          <div className="flex flex-col gap-8 mr-8 md:mr-0">
            {codingLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                {/* Icon */}
                <motion.div
                  className="mr-3"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="w-6 h-6 text-white transition-all group-hover:text-cyan-300" />
                </motion.div>

                {/* Name */}
                <span className="text-white text-sm group-hover:text-cyan-300 transition-all">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
