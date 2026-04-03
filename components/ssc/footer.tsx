'use client'

import React from 'react'
import { Instagram, ExternalLink } from 'lucide-react'
import { CAMPUS_CONFIG } from '@/lib/campus-config'

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-14">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6">
        
        {/* Company Info Block */}
        <div className="text-[12px] leading-[1.8] text-[#86868B]">
          <p className="font-bold text-[#1D1D1F] mb-4 text-[15px]">에스에스씨 스파르타</p>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1D1D1F]">전화번호(원주)</span>
              <a href={`tel:${CAMPUS_CONFIG.wonju.phone}`} className="hover:text-[#0071E3] transition-colors">{CAMPUS_CONFIG.wonju.phone}</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1D1D1F]">전화번호(춘천)</span>
              <a href={`tel:${CAMPUS_CONFIG.chuncheon.phone}`} className="hover:text-[#0071E3] transition-colors">{CAMPUS_CONFIG.chuncheon.phone}</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1D1D1F]">전화번호(충주)</span>
              <a href={`tel:${CAMPUS_CONFIG.chungju.phone}`} className="hover:text-[#0071E3] transition-colors">{CAMPUS_CONFIG.chungju.phone}</a>
            </div>
          </div>

          <div className="pt-8 border-t border-black/[0.03] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 opacity-60">
            <p className="text-[11px] tracking-tight">
              Copyright © 2025 에스에스씨 스파르타 All rights reserved. 
              단기 합격의 꿈, SSC 스파르타가 함께합니다.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0071E3] transition-colors font-bold text-[13px]">N</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0071E3] transition-colors"><Instagram size={15} strokeWidth={1.5} /></a>
              <a href="https://pf.kakao.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0071E3] transition-colors"><ExternalLink size={13} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
