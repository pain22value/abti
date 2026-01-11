import BackgroundGradients from '@/components/home/BackgroundGradients';
import HeroSection from '@/components/home/HeroSection';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex flex-col">
      <BackgroundGradients />
      <Header />
      <main className="relative z-10 flex-1 flex items-center justify-center px-6">  {/* bg-white 제거! */}
        <HeroSection />
      </main>
      <Footer />
    </div>
  );
}