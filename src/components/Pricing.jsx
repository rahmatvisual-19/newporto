import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="relative text-white antialiased" id="Pricing">
      {/* background layers */}


      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-28">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-white/70 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]"></span>
            Simple, fixed pricing
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Clear pricing to bring <br className="hidden sm:block" /> your ideas to life
          </span>
        </h2>
          <p className="mt-4 text-base sm:text-lg text-white/50 leading-relaxed">
            No complicated hourly tracking or surprise invoices. Choose a plan that matches your project scale, and let’s start building something amazing together.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 items-start max-w-6xl mx-auto">

          {/* Starter */}
          <div data-aos="fade-up" data-aos-delay="100" className="group rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-8 flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/30 hover:shadow-indigo-500/10 hover:shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Starter</h3>
              <span className="w-9 h-9 rounded-xl flex items-center justify-center bg-indigo-500/10 border border-indigo-500/20">
                <svg className="w-4.5 h-4.5 text-indigo-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg>
              </span>
            </div>
            <p className="mt-2 text-sm text-white/45 leading-relaxed">Solusi hemat buat mahasiswa yang butuh web cepat untuk tugas akhir atau personal branding.</p>

            <div className="mt-7 flex flex-col gap-1">
              <div className="flex items-end gap-1.5">
                <span className="text-4xl font-bold tracking-tight">Rp 149rb</span>
              </div>
              <p className="text-xs text-indigo-300/80">Ramah Kantong Mahasiswa</p>
            </div>

            <a href="https://wa.me/6282184668503?text=Saya%20tertarik%20dengan%20paket%20Starter%20dan%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20hal%20ini" target="_blank" rel="noopener noreferrer" className="mt-7 w-full py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition font-semibold text-sm block text-center">
              Pilih Paket Starter
            </a>

            <div className="mt-8 h-px bg-white/10"></div>

            <ul className="mt-6 space-y-3.5 text-sm text-white/65">
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-indigo-300" strokeWidth={2.2} />1 Halaman Sederhana (Single Page)</li>
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-indigo-300" strokeWidth={2.2} />Free Hosting & Subdomain (Vercel dll)</li>
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-indigo-300" strokeWidth={2.2} />Desain Responsif (HP & Laptop)</li>
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-indigo-300" strokeWidth={2.2} />Bebas Pasang Teks, Foto & Link Medsos</li>
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-indigo-300" strokeWidth={2.2} />Waktu Pengerjaan 1-2 Hari</li>
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-indigo-300" strokeWidth={2.2} />Source Code Milikmu Sepenuhnya</li>
            </ul>
          </div>

          {/* Growth (popular) */}
          <div data-aos="fade-up" data-aos-delay="200" className="rounded-3xl p-[1.5px] lg:-mt-4 shadow-[0_20px_60px_-15px_rgba(99,102,241,0.5)] bg-gradient-to-br from-purple-400 via-indigo-500 to-cyan-400 transition-all duration-300 hover:-translate-y-2">
            <div className="h-full rounded-[calc(1.5rem-1.5px)] bg-[#0d0d16] p-8 flex flex-col relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-indigo-500/30 rounded-full blur-[90px]"></div>

              <div className="flex items-center justify-between relative z-10">
                <h3 className="text-xl font-bold">Growth</h3>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400 text-[11px] font-bold text-[#0d0d16]">
                  Most Popular
                </span>
              </div>
              <p className="mt-2 text-sm text-white/50 leading-relaxed relative z-10">Bikin usahamu terlihat profesional di Google dan langsung terhubung ke WhatsApp.</p>

              <div className="mt-7 flex flex-col gap-1 relative z-10">
                <div className="flex items-end gap-1.5">
                  <span className="text-4xl font-bold tracking-tight">Rp 599rb</span>
                </div>
                <p className="text-xs text-fuchsia-300/80">Standar UMKM Pemula</p>
              </div>

              <a href="https://wa.me/6282184668503?text=Saya%20tertarik%20dengan%20paket%20Growth%20dan%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20hal%20ini" target="_blank" rel="noopener noreferrer" className="mt-7 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-400 to-fuchsia-400 hover:brightness-110 transition font-bold text-sm text-[#0d0d16] shadow-lg shadow-indigo-500/30 relative z-10 block text-center">
                Pilih Paket Growth
              </a>

              <div className="mt-8 h-px bg-white/10 relative z-10"></div>

              <ul className="mt-6 space-y-3.5 text-sm text-white/75 relative z-10">
                <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-fuchsia-300" strokeWidth={2.2} />Landing Page Bisnis (Max 3 Bagian)</li>
                <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-fuchsia-300" strokeWidth={2.2} />Tombol Langsung Chat ke WA Owner</li>
                <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-fuchsia-300" strokeWidth={2.2} />Integrasi Google Maps Alamat Toko</li>
                <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-fuchsia-300" strokeWidth={2.2} />Setup Custom Domain</li>
                <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-fuchsia-300" strokeWidth={2.2} />Desain Premium & Animasi Interaktif</li>
                <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-fuchsia-300" strokeWidth={2.2} />Optimasi SEO Dasar & Kecepatan</li>
                <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-fuchsia-300" strokeWidth={2.2} />Waktu Pengerjaan Tergantung Fitur (Min. 1 Minggu)</li>
                <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-fuchsia-300" strokeWidth={2.2} />Gratis Revisi Ringan 2 Kali</li>
                <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-fuchsia-300" strokeWidth={2.2} />Gratis Maintenance 1 Bulan</li>
              </ul>
            </div>
          </div>

          {/* Scale */}
          <div data-aos="fade-up" data-aos-delay="300" className="group rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-cyan-500/10 hover:shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Scale</h3>
              <span className="w-9 h-9 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/20">
                <svg className="w-4.5 h-4.5 text-cyan-300" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="4" height="10" rx="1"/><rect x="10" y="6" width="4" height="15" rx="1"/><rect x="17" y="2" width="4" height="19" rx="1"/></svg>
              </span>
            </div>
            <p className="mt-2 text-sm text-white/45 leading-relaxed">Paket lengkap untuk kebutuhan informasi produk yang lebih detail dan terstruktur.</p>

            <div className="mt-7 flex flex-col gap-1">
              <div className="flex items-end gap-1.5">
                <span className="text-4xl font-bold tracking-tight">Custom</span>
              </div>
              <p className="text-xs text-cyan-300/80">Custom / Company Profile</p>
            </div>

            <a href="https://wa.me/6282184668503?text=Saya%20tertarik%20dengan%20paket%20Scale%20dan%20ingin%20bertanya%20lebih%20lanjut%20mengenai%20hal%20ini" target="_blank" rel="noopener noreferrer" className="mt-7 w-full py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 transition font-semibold text-sm block text-center">
              Pilih Paket Scale
            </a>

            <div className="mt-8 h-px bg-white/10"></div>

            <ul className="mt-6 space-y-3.5 text-sm text-white/65">
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-cyan-300" strokeWidth={2.2} />Multi-Page Website (Sesuai Kebutuhan)</li>
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-cyan-300" strokeWidth={2.2} />Desain UI/UX Eksklusif & Animasi Premium</li>
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-cyan-300" strokeWidth={2.2} />Termasuk Domain Pilihan (.com / .id)</li>
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-cyan-300" strokeWidth={2.2} />Optimasi SEO Lanjutan & Kecepatan Tinggi</li>
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-cyan-300" strokeWidth={2.2} />Integrasi Payment Gateway / Fitur Khusus</li>
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-cyan-300" strokeWidth={2.2} />Gratis Maintenance 3 Bulan & Support Prioritas</li>
              <li className="flex gap-3"><Check className="w-4.5 h-4.5 mt-0.5 shrink-0 text-cyan-300" strokeWidth={2.2} />Pelatihan Pengelolaan Konten (CMS)</li>
            </ul>
          </div>

        </div>

        {/* Footnote */}
        {/* <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-white/40">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" strokeWidth={2.4} />
            14-day free trial
          </div>
          <span className="hidden sm:inline text-white/15">•</span>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" strokeWidth={2.4} />
            No credit card required
          </div>
          <span className="hidden sm:inline text-white/15">•</span>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" strokeWidth={2.4} />
            Cancel anytime
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Pricing;
