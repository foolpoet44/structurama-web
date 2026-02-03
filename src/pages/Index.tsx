import { TrainingGrid } from "@/components/TrainingGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-muted">
      {/* Header */}
      <header className="py-8 px-8 bg-gradient-to-r from-[#a08070] to-[#c0a090] shadow-lg">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-sm text-white/80 mb-2">2026년도 생산기술 College</div>
          <h1 className="text-4xl font-bold text-white tracking-tight">제조 AX 육성 체계</h1>
          <p className="text-white/90 mt-2 text-sm">
            PRI '제조 AX 아카데미'를 통해 AI 기반의 일하는 문화와 역량을 구축하고, 현업 과제의 AX 기반 솔루션을 제공할 수 있는 조직 역량을 확보해 나가고자 합니다.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto py-8">
        <TrainingGrid />
      </main>

      {/* Footer */}
      <footer className="bg-muted-foreground/10 py-6 mt-8">
        <div className="max-w-[1400px] mx-auto px-8 text-center text-sm text-muted-foreground">
          © 2026 생산기술원 Employee Experience & Growth Team. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
