import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

const sections = [
  {
    title: '1. 個人情報の収集について',
    body: '当社は、お問い合わせやサービスのご利用に際して、氏名、会社名、メールアドレス、電話番号などの個人情報をご提供いただく場合があります。',
  },
  {
    title: '2. 個人情報の利用目的',
    body: '収集した個人情報は、以下の目的のために利用します。\n・お問い合わせへの回答および対応\n・サービスの提供およびサポート\n・新サービス・キャンペーン等のご案内\n・法令に基づく対応',
  },
  {
    title: '3. 個人情報の第三者提供',
    body: '当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。\n・お客様の同意がある場合\n・法令に基づく場合\n・人の生命、身体または財産の保護のために必要な場合',
  },
  {
    title: '4. 個人情報の安全管理',
    body: '当社は、個人情報の漏洩、滅失またはき損を防止するため、適切な安全管理措置を講じます。また、個人情報を取り扱う従業者に対して、適切な監督を行います。',
  },
  {
    title: '5. Cookieの使用について',
    body: '当社ウェブサイトでは、サービス向上のためCookieを使用する場合があります。ブラウザの設定によりCookieを無効にすることができますが、一部の機能が使用できなくなる場合があります。',
  },
  {
    title: '6. 個人情報の開示・訂正・削除',
    body: 'お客様は、当社が保有する個人情報について、開示・訂正・削除を請求することができます。ご希望の場合は、下記お問い合わせ先までご連絡ください。',
  },
  {
    title: '7. プライバシーポリシーの変更',
    body: '当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のポリシーは、当ウェブサイトに掲載した時点で効力を生じるものとします。',
  },
  {
    title: '8. お問い合わせ',
    body: '個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。\n\n株式会社ビットフォーム\nメール：info@bitform.co.jp',
  },
];

export const Privacy = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />

      <main className="container mx-auto px-6 pt-36 pb-16 max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">プライバシーポリシー</h1>
        <p className="text-sm text-slate-500 mb-12">最終更新日：2026年4月18日</p>

        <p className="text-slate-600 leading-relaxed mb-12">
          株式会社ビットフォーム（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定めます。
        </p>

        <div className="space-y-10">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-lg font-bold text-slate-900 mb-3">{section.title}</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{section.body}</p>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};
