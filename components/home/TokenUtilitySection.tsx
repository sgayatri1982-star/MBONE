'use client';

import { motion } from 'framer-motion';
import { Coins, Gift, Vote, Zap } from 'lucide-react';

export default function TokenUtilitySection() {
  const utilities = [
    {
      title: 'Staking Rewards',
      description: 'Stake your $MBONE tokens and earn passive rewards from transaction fees.',
      image: '/image/hero-bone.png'
    },
    {
      title: 'Holder Airdrops',
      description: 'Regular airdrops and exclusive benefits for long-term diamond hands.',
      image: '/image/hero-bone.png'
    },
    {
      title: 'Governance Rights',
      description: 'Vote on community proposals and shape the future of MILLIONBONE.',
      image: '/image/hero-bone.png'
    },
    {
      title: 'Burn Mechanism',
      description: 'Every transaction burns tokens, making your holdings more valuable over time.',
      image: '/image/hero-bone.png'
    }
  ];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-brand-primary mb-4">
            TOKEN UTILITY
          </h2>
          <p className="text-xl text-brand-secondary max-w-2xl mx-auto">
            $MBONE isn't just a meme - it's a utility token with real benefits for holders
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {utilities.map((utility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group perspective"
            >
              <div className="relative w-full h-72 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

                {/* FRONT SIDE */}
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden flex items-end justify-center"
                  style={{
                    backgroundImage: `url(${utility.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>

                  <h3 className="relative z-10 text-white text-xl font-bold mb-6 px-4 text-center">
                    {utility.title}
                  </h3>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 rounded-2xl bg-brand-primary text-white p-6 rotate-y-180 backface-hidden flex flex-col justify-center text-center">
                  <h3 className="text-xl font-bold mb-3">
                    {utility.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {utility.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}