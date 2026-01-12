"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import AiTool from "@/components/result/AiTool";
import AiUseCase from "@/components/result/AiUseCase";
import AiRecommendResult from "@/components/result/AiRecommendResult";

export default function RecommendResultPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <AiRecommendResult />
      <AiTool />
      <AiUseCase />
      <Footer />
    </main>
  );
}
