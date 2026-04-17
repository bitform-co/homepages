import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#30D5C8]/5 relative overflow-hidden">
      {/* Floating animated shapes */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-32 h-32 bg-[#30D5C8]/10 rounded-full blur-2xl"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#30D5C8] font-semibold tracking-wider uppercase text-sm">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            お問い合わせ
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            プロジェクトのご相談、お見積もりなど、お気軽にお問い合わせください。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="border-none shadow-md bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 bg-[#30D5C8]/10 rounded-full flex items-center justify-center shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    <Mail className="w-6 h-6 text-[#30D5C8]" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">メール</h3>
                    <p className="text-slate-600 text-sm mb-2">24時間受付中</p>
                    <a href="mailto:info@bitform.co.jp" className="text-lg font-bold text-[#30D5C8] hover:underline">
                      info@bitform.co.jp
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-none shadow-md bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <motion.div 
                    className="w-12 h-12 bg-[#30D5C8]/10 rounded-full flex items-center justify-center shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    <MapPin className="w-6 h-6 text-[#30D5C8]" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">所在地</h3>
                    <p className="text-slate-600 text-sm">
                      〒150-0002<br />
                      東京都渋谷区渋谷2-24-12<br />
                      渋谷スクランブルスクエア
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-none shadow-lg bg-white">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">お名前</label>
                      <Input placeholder="山田 太郎" className="bg-slate-50 border-slate-200 focus:border-[#30D5C8] focus:ring-[#30D5C8]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">会社名</label>
                      <Input placeholder="株式会社ビットフォーム" className="bg-slate-50 border-slate-200 focus:border-[#30D5C8] focus:ring-[#30D5C8]" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">メールアドレス</label>
                      <Input type="email" placeholder="example@company.com" className="bg-slate-50 border-slate-200 focus:border-[#30D5C8] focus:ring-[#30D5C8]" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">電話番号</label>
                      <Input type="tel" placeholder="090-1234-5678" className="bg-slate-50 border-slate-200 focus:border-[#30D5C8] focus:ring-[#30D5C8]" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">お問い合わせ種別</label>
                    <select className="w-full h-10 px-3 rounded-md border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-[#30D5C8] focus:border-transparent">
                      <option value="">選択してください</option>
                      <option value="web">WEBサイト制作について</option>
                      <option value="ec">ECサイト構築について</option>
                      <option value="marketing">マーケティングについて</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">お問い合わせ内容</label>
                    <Textarea placeholder="ご相談内容をご記入ください" className="min-h-[150px] bg-slate-50 border-slate-200 focus:border-[#30D5C8] focus:ring-[#30D5C8]" />
                  </div>

                  <Button className="w-full bg-[#30D5C8] hover:bg-[#25b0a5] text-white h-12 text-lg font-medium">
                    送信する
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};