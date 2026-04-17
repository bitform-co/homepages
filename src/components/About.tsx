import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';

const members = [
  {
    name: '高橋 佑弥',
    position: '代表取締役',
    description: '大規模会員基盤事業の戦略立案からプロダクトデザインまで一貫して担当。新規事業の立ち上げ経験も豊富。',
  },
  {
    name: '堤 富登',
    position: '取締役',
    description: 'インフラからクラウドまで幅広い技術知見が強み。データ基盤開発やクラウド移行の経験を活かし顧客を成功に導く。',
  },
  {
    name: '前田 太徹',
    position: '取締役',
    description: '業務改善コンサルティングとWeb開発スキルを併せ持つ。財務・基幹システムからECサイト構築までDXを幅広く支援。',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#30D5C8]/10 to-blue-400/10 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ 
          rotate: [360, 0],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-[#30D5C8]/10 to-blue-400/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            メンバー紹介
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            プロフェッショナルなチームが、お客様のプロジェクトを成功へと導きます。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.15,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group relative overflow-hidden">
                {/* Hover gradient effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#30D5C8]/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <CardContent className="p-8 text-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {member.name}
                    </h3>
                  </motion.div>
                  <motion.p 
                    className="text-sm text-[#30D5C8] font-semibold mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {member.position}
                  </motion.p>
                  <motion.p 
                    className="text-slate-600 leading-relaxed text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {member.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};