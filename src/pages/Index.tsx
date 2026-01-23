import { TrainingGrid } from "@/components/TrainingGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-8 px-8 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">제조 AX 육성 체계</h1>
          <p className="text-primary-foreground/90 text-lg font-medium">
            AI 역량 강화를 위한 체계적인 교육 로드맵
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto py-8">
        <TrainingGrid />
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 mt-8">
        <div className="max-w-[1400px] mx-auto px-8 text-center text-sm text-muted-foreground">
          © 2024 Manufacturing AX Training System. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
