import { TrainingGrid } from "@/components/TrainingGrid";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#e8e8e8' }}>
      {/* Header */}
      <header className="py-8 px-8" style={{ backgroundColor: '#b89a8a' }}>
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl font-bold text-white">제조 AX 육성 체계</h1>
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
