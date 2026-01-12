import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      {/* 여기서 밑 ~ */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">유스케이스</h1>
          <p>개발 팀원분들! 여기에 유스케이스 페이지를 만들주세여 </p>
        </div>
      </main>
      {/* 여기 사이까지 다 지우시고 작업하시면 됩니다!! */}
      <Footer />
    </main>
  );
}