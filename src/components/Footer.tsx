import { Heart, ArrowUp, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-14 pb-8 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
      <div className="flex flex-col items-center gap-3">
        {/* Contact metadata */}
        <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
          <a
            href="mailto:info@joinoac.in"
            className="flex items-center gap-1 hover:text-[#F3B334] transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>info@joinoac.in</span>
          </a>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#D91515]" />
            <span>Bhubaneswar, Odisha</span>
          </span>
        </div>

        {/* Community line */}
        <p className="flex items-center justify-center gap-1.5 text-gray-400">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-[#D91515] fill-current" />
          <span>by Odisha Anime Community</span>
        </p>

        {/* Clean Copyright without studio credits */}
        <p className="text-[11px] text-gray-600">
          © 2020–2026 Odisha Anime Community. All rights reserved.
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white transition-colors text-xs"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
