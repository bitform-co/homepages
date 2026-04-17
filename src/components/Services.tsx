import React from 'react';
import { motion } from 'motion/react';
import { Monitor, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';

const services = [
  {
    icon: <Monitor className="w-10 h-10 text-[#30D5C8]" />,
    title: 'Web制作・ECサイト構築',
    description: '企業サイトからECサイトまで、目的に応じた最適なWebサイトを制作。デザイン性と機能性を両立し、ビジネスの成長を支援します。',
    features: ['コーポレートサイト制作', 'ブランドサイトの企画・開発', 'CMS導入・カスタマイズ'],
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-[#30D5C8]" />,
    title: 'Webマーケティング',
    description: 'データに基づいた戦略立案から運用まで、包括的なマーケティングソリューションを提供。確実な成果創出を実現します。',
    features: ['SEO・MEO・AIO(AI時代のSEO)対策', '広告運用支援', 'SNSマーケティング'],
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-[#30D5C8]" />,
    title: 'コンサルティング・事業支援',
    description: '戦略立案から実行支援まで、お客様のビジネス課題を解決。デジタルトランスフォーメーションを成功に導きます。',
    features: ['DX戦略策定', 'PR戦略・広報支援', 'トータルでの経営・IT活用アドバイス'],
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background animated shapes */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-[#30D5C8]/5 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#30D5C8] font-semibold tracking-wider uppercase text-sm">SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            サービス
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            企業のデジタル変革を支援する包括的なソリューションを提供しています。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group overflow-hidden">
                <CardHeader className="pb-4">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-[#30D5C8]/10 flex items-center justify-center mb-4 group-hover:bg-[#30D5C8]/20 transition-colors"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                  <CardDescription className="mt-3 text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start text-sm text-slate-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <ArrowRight className="w-4 h-4 text-[#30D5C8] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};