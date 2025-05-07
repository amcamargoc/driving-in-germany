import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const TITLE = 'INFORMATION IS FREE'
  // const searchParams = useSearchParams();
  // const lang = searchParams.get('lang') || 'en';

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-3 sm:h-16">
          <div className="flex-shrink-0 mb-3 sm:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-white font-bold text-lg sm:text-xl md:text-2xl text-center sm:text-left">
                { TITLE }
                 {/* <span className="hidden sm:inline">Klasse B</span>
                <span className="sm:hidden">B</span> */}
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-2 shadow-inner">
              <LanguageSwitcher/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
