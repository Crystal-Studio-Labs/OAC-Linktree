import { X, Download, Share2, Check } from 'lucide-react';
import { useState } from 'react';
import { getAssetUrl } from '../utils/assets';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export default function QRCodeModal({ isOpen, onClose, url }: QRCodeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(
    url
  )}&bgcolor=0C0C0C&color=F3B334&margin=15`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(qrImageUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'OAC-Official-Hub-QR.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch {
      window.open(qrImageUrl, '_blank');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Scan or Share QR Code"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-3xl bg-[#121212] border border-white/10 p-6 shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top glow ambient effect */}
        <div className="absolute -top-16 -left-16 w-36 h-36 bg-[#D91515]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-36 h-36 bg-[#F3B334]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D91515]/10 border border-[#D91515]/30 text-[#F3B334] text-xs font-semibold mb-3">
            <span>OFFICIAL QR CODE</span>
          </div>
          <h3 className="font-display text-2xl text-white tracking-wide">
            SCAN TO CONNECT
          </h3>
          <p className="text-xs text-gray-400 mt-1 max-w-xs mx-auto">
            Scan at anime conventions, meetups, or screen share to open our official community hub
          </p>
        </div>

        {/* QR Code Container */}
        <div className="mt-5 p-4 rounded-2xl bg-[#0C0C0C] border border-[#F3B334]/20 flex flex-col items-center justify-center shadow-inner relative group">
          <div className="relative w-56 h-56 rounded-xl overflow-hidden bg-[#0C0C0C] flex items-center justify-center">
            <img
              src={qrImageUrl}
              alt="Odisha Anime Community Official QR Code"
              className="w-full h-full object-contain"
              loading="eager"
            />
            {/* Center Logo watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-[#0C0C0C] border border-[#F3B334] p-1 shadow-md">
                <img
                  src={getAssetUrl('/images/oac-logo-transparent.png')}
                  alt="OAC"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <span className="text-[11px] font-mono text-[#F3B334]/70 mt-2 truncate max-w-[240px]">
            {url}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-5">
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors active:scale-95"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            <span>{copied ? 'Copied URL!' : 'Copy Link'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#D91515] hover:bg-[#F3B334] text-white hover:text-[#0C0C0C] text-xs font-semibold transition-all shadow-glow-red active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}
