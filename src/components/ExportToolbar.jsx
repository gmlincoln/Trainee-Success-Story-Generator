import React, { useState } from 'react';
import { 
  Download, 
  FileCheck, 
  Copy, 
  Check, 
  ZoomIn, 
  ZoomOut 
} from 'lucide-react';
import { toPng, toJpeg } from 'html-to-image';
import jsPDF from 'jspdf';
import confetti from 'canvas-confetti';
import { TouchAndSolveLogo } from './Logos';

export const ExportToolbar = ({ 
  canvasRef, 
  data, 
  zoomLevel, 
  setZoomLevel,
  onReset 
}) => {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Trigger celebration confetti with TNS theme colors
  const triggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 80,
      colors: ['#4EB829', '#0E385D', '#38A169', '#FFD700'],
      origin: { y: 0.6 }
    });
  };

  // Export high resolution PNG
  const handleDownloadPNG = async () => {
    if (!canvasRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(canvasRef.current, {
        pixelRatio: 2.5,
        cacheBust: true,
        quality: 1.0,
      });

      const link = document.createElement('a');
      const filename = `${data.name || 'photocard'}_success_story.png`.replace(/\s+/g, '_');
      link.download = filename;
      link.href = dataUrl;
      link.click();

      triggerConfetti();
    } catch (err) {
      console.error('Failed to export image:', err);
      alert('ইমেজ ডাউনলোড করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
    } finally {
      setDownloading(false);
    }
  };

  // Export PDF document
  const handleDownloadPDF = async () => {
    if (!canvasRef.current) return;
    setDownloading(true);
    try {
      const dataUrl = await toJpeg(canvasRef.current, { quality: 0.95, pixelRatio: 2 });
      
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [297, 210] // A4 Landscape
      });

      pdf.addImage(dataUrl, 'JPEG', 8, 8, 281, 194);
      const filename = `${data.name || 'photocard'}_success_story.pdf`.replace(/\s+/g, '_');
      pdf.save(filename);

      triggerConfetti();
    } catch (err) {
      console.error('Failed to export PDF:', err);
      alert('PDF তৈরি করতে সমস্যা হয়েছে।');
    } finally {
      setDownloading(false);
    }
  };

  // Copy PNG image directly to system clipboard
  const handleCopyToClipboard = async () => {
    if (!canvasRef.current) return;
    try {
      const blob = await new Promise((resolve) => {
        toPng(canvasRef.current, { pixelRatio: 2 }).then(dataUrl => {
          fetch(dataUrl).then(res => res.blob()).then(resolve);
        });
      });

      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);

      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
      triggerConfetti();
    } catch (err) {
      console.error('Copy to clipboard failed:', err);
      alert('ক্লিপবোর্ডে কপি করা সম্ভব হয়নি।');
    }
  };

  return (
    <header className="bg-[#081E31] text-white border-b border-[#0E385D] sticky top-0 z-50 shadow-xl">
      <div className="max-w-[1800px] mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand Header */}
        <div className="flex items-center gap-3">
          <div className="h-10 px-2.5 py-1 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-700/60">
            <img 
              src="/tns_logo.png" 
              alt="Touch & Solve" 
              className="h-7 w-auto object-contain"
            />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-extrabold tracking-tight flex items-center gap-2">
              দৈনিক সাফল্যের গল্প Generator
              <span className="text-[10px] uppercase tracking-widest font-extrabold bg-[#4EB829] text-white px-2.5 py-0.5 rounded-full shadow-sm">
                OFFICIAL STUDIO
              </span>
            </h1>
            <p className="text-xs text-slate-300 font-medium">
              Trainee Success Profile &amp; Career Placement Card
            </p>
          </div>
        </div>

        {/* Right: Export & Canvas Actions with TNS Branding */}
        <div className="flex items-center gap-2.5">
          
          {/* Zoom Controls */}
          <div className="flex items-center bg-[#07192C] rounded-xl border border-[#0E385D] p-1 shadow-inner">
            <button
              onClick={() => setZoomLevel(prev => Math.max(0.35, prev - 0.08))}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-[#0E385D] transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold px-2 text-[#4EB829]">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel(prev => Math.min(1.2, prev + 0.08))}
              className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-[#0E385D] transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopyToClipboard}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0E385D] hover:bg-[#164b7c] text-slate-100 border border-[#1b4b7a] transition-all shadow-sm"
            title="Copy PNG Image"
          >
            {copied ? <Check className="w-4 h-4 text-[#4EB829]" /> : <Copy className="w-4 h-4 text-slate-300" />}
            <span className="hidden sm:inline">{copied ? 'কপি হয়েছে!' : 'কপি ইমেজ'}</span>
          </button>

          {/* Download PDF Button */}
          <button
            onClick={handleDownloadPDF}
            disabled={downloading}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#0E385D] hover:bg-[#164b7c] text-amber-300 border border-[#1b4b7a] transition-all shadow-sm"
          >
            <FileCheck className="w-4 h-4" />
            <span className="hidden sm:inline">PDF সেভ</span>
          </button>

          {/* Download PNG Button (Primary TNS CTA) */}
          <button
            onClick={handleDownloadPNG}
            disabled={downloading}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-[#4EB829] hover:bg-[#419e22] text-white shadow-lg shadow-[#4EB829]/20 transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 border border-[#5cd130]"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>{downloading ? 'প্রসেস হচ্ছে...' : 'HD ফটো ডাউনলোড'}</span>
          </button>

        </div>

      </div>
    </header>
  );
};
