import { TrainingGrid } from "@/components/TrainingGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 px-8 shadow-lg">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-3xl font-bold tracking-tight">제조 AX 육성 체계</h1>
          <p className="text-primary-foreground/80 mt-2 text-sm">
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
