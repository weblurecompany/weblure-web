import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-8 pb-12 relative">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md shadow-primary/20">
                <span className="text-white font-black text-sm">W</span>
              </div>
              <div>
                <span className="font-extrabold text-text text-sm">Weblure Company</span>
                <p className="text-text-soft text-xs flex items-center gap-1">
                  Diseño web profesional <Heart className="w-3 h-3 text-red-400 fill-current" />
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {['Política de privacidad', 'Aviso legal', 'Instagram', 'LinkedIn'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-text-soft text-sm font-medium hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <p className="text-center text-text-soft/60 text-xs mt-8">
            © {new Date().getFullYear()} Weblure Company. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
