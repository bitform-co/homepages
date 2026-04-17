import React from 'react';
import logoImg from '../assets/913cd9fdf65892484af5c535fc4518e9e5058365.png';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src={logoImg} alt="BitForm Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">BitForm</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-2">
              デジタルの可能性をカタチに
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              お客様のビジネス成長を支援するパートナーとして
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">会社情報</h4>
            <div className="text-sm">
              <p className="text-slate-400 mb-4">株式会社ビットフォーム</p>
              <p className="text-slate-400 mb-4">〒150-0043</p>
              <p className="text-slate-400 mb-4">東京都渋区道玄坂 1 丁目 10 番 8 号</p>
              <p className="text-slate-400 mb-6">渋谷道玄坂東急ビル 2F-C</p>
              <p className="text-slate-400">
                <a href="mailto:info@bitform.co.jp" className="hover:text-[#30D5C8] transition-colors">
                  info@bitform.co.jp
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} BitForm Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};