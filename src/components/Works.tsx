import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pureMarineImg1 from '../assets/63b0cfb25e093d29e921164f6cc50a9644c705e1.png';
import pureMarineImg2 from '../assets/73d7baac79c216c77908aa88c6e211468320700d.png';
import lumiRentImg1 from '../assets/bde4470a2243eb47f6a24caf9291581db1f7941d.png';
import lumiRentImg2 from '../assets/6b9c083bbeb9b92ee8be0c949b62c8e3e12600be.png';

const works = [
  {
    title: 'ピュアマリン 海洋散骨サービス',
    category: 'コーポレートサイト',
    description: '伊豆下田の海洋散骨サービスのWebサイト制作。',
    image: pureMarineImg1,
    url: 'https://puremarine.jp/',
    isExternal: true,
  },
  {
    title: 'ピュアマリン サービス詳細',
    category: 'ランディングページ',
    description: 'サービス案内ページの制作と最適化。',
    image: pureMarineImg2,
    url: 'https://puremarine.jp/',
    isExternal: true,
  },
  {
    title: 'Lumi Rent - トップページ',
    category: 'レンタルサービス',
    description: 'イルミネーションレンタルサービスのWebサイト制作。',
    image: lumiRentImg1,
    url: 'https://lumi-rent.com/',
    isExternal: true,
  },
  {
    title: 'Lumi Rent - 商品詳細',
    category: 'ECサイト',
    description: 'レンタル商品の詳細ページとカート機能の実装。',
    image: lumiRentImg2,
    url: 'https://lumi-rent.com/',
    isExternal: true,
  },
];

export const Works = () => {
  return (
    <section id="works" className="py-24 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-72 h-72 bg-[#30D5C8]/5 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#30D5C8] font-semibold tracking-wider uppercase text-sm">Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            実績紹介
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            これまでに手がけたプロジェクトの一部をご紹介します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group overflow-hidden">
                <div className="relative overflow-hidden aspect-video bg-slate-100">
                  {work.image ? (
                    <motion.img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-contain"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                  ) : (
                    <motion.div 
                      className="w-full h-full bg-gradient-to-br from-[#30D5C8]/20 to-blue-400/20 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                        alt={work.title}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  )}
                  
                  {/* Overlay on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-[#30D5C8]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={work.url}
                      target={work.isExternal ? "_blank" : "_self"}
                      rel={work.isExternal ? "noopener noreferrer" : ""}
                      className="text-white font-bold flex items-center gap-2 hover:gap-3 transition-all"
                      whileHover={{ scale: 1.1 }}
                    >
                      詳細を見る
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};