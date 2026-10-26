import { X, Share2, PlusSquare, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNativeInstall?: () => void;
  hasNativePrompt?: boolean;
}

export default function InstallModal({
  isOpen,
  onClose,
  onNativeInstall,
  hasNativePrompt = false,
}: InstallModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="install-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-3xl bg-[#141414] border border-white/10 p-5 sm:p-6 shadow-aura text-center overflow-hidden animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Effects */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-44 h-44 bg-[#D91515]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-44 h-44 bg-[#F3B334]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* App Icon */}
        <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-[#0C0C0C] p-1.5 border border-[#F3B334]/40 shadow-glow-gold flex items-center justify-center">
          <img
            src={getAssetUrl('/images/oac-logo-badge.png')}
            alt="OAC App Icon"
            className="w-full h-full object-contain rounded-xl"
          />
        </div>

        <h3 id="install-modal-title" className="font-display text-2xl text-white tracking-wide">
          INSTALL OAC <span className="text-gradient-gold">APP</span>
        </h3>
        <p className="text-xs text-gray-300 mt-1 max-w-xs mx-auto">
          Fast passes, instant announcements, offline access, and zero address bar.
        </p>

        {/* If native prompt is supported (Chrome/Edge/Android) */}
        {hasNativePrompt && onNativeInstall ? (
          <div className="mt-5 space-y-3">
            <button
              onClick={() => {
                onNativeInstall();
                onClose();
              }}
              className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-[#D91515] to-[#F3B334] text-black font-bold text-sm hover:brightness-110 active:scale-95 transition-all shadow-glow-red flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Install Web App Now</span>
            </button>
            <p className="text-[11px] text-gray-400">
              Triggers the native Chrome Richer Install preview dialog.
            </p>
          </div>
        ) : (
          /* iOS / Safari Step-by-Step Guide */
          <div className="mt-4 space-y-2.5 text-left bg-white/[0.03] border border-white/10 rounded-2xl p-3.5">
            <div className="flex items-start gap-3 text-xs text-gray-200">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D91515]/30 text-[#F3B334] border border-[#F3B334]/30 flex items-center justify-center font-bold text-[10px]">
                1
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span>Tap the</span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 font-mono text-[11px] text-white">
                  <Share2 className="w-3 h-3 text-[#F3B334]" /> Share
                </span>
                <span>button in Safari.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-gray-200">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D91515]/30 text-[#F3B334] border border-[#F3B334]/30 flex items-center justify-center font-bold text-[10px]">
                2
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span>Scroll down and select</span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-white/10 font-mono text-[11px] text-white">
                  <PlusSquare className="w-3 h-3 text-[#F3B334]" /> Add to Home Screen
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-gray-200">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D91515]/30 text-[#F3B334] border border-[#F3B334]/30 flex items-center justify-center font-bold text-[10px]">
                3
              </span>
              <div className="flex items-center gap-1.5">
                <span>Tap</span>
                <span className="px-1.5 py-0.5 rounded bg-[#F3B334]/20 border border-[#F3B334]/40 font-semibold text-[11px] text-[#F3B334]">
                  Add
                </span>
                <span>in the top-right corner!</span>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-semibold text-gray-300 hover:text-white transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
