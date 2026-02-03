import { CourseCard } from "./CourseCard";
import { LevelIndicator } from "./LevelIndicator";

export const TrainingGrid = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1200px] p-6">
        {/* Header */}
        <div className="grid grid-cols-[180px_1fr_1fr_180px_200px] gap-2 mb-4">
          <div className="col-span-1"></div>
          <div className="text-center font-bold text-lg text-white py-3 rounded-t-lg bg-[hsl(0,0%,35%)] shadow-md">
            집합 & e-러닝 과정
          </div>
          <div className="text-center font-bold text-lg text-white py-3 rounded-t-lg bg-[hsl(0,0%,35%)] shadow-md">
            엘리스 온라인 과정
          </div>
          <div className="text-center font-bold text-lg text-white py-3 rounded-t-lg bg-[hsl(0,0%,35%)] shadow-md">
            Udemy
          </div>
          <div className="text-center font-bold text-lg text-white py-3 rounded-t-lg bg-[hsl(0,0%,35%)] shadow-md">
            전사 생성형 AI 과정
          </div>
        </div>

        {/* Expert Level */}
        <div className="grid grid-cols-[180px_1fr_1fr_180px_200px] gap-2 mb-3">
          <LevelIndicator
            level="expert"
            title="AI 직무자"
            subtitle="(전문가과정 별도 문의)"
          />
          <div className="bg-card p-3 rounded-lg border space-y-2">
            <div className="flex gap-2 flex-wrap">
              <CourseCard
                title="LG AI 대학원 (석사 9개월 / 박사 18개월)"
                badges={[{ type: "selection", label: "선발" }]}
                variant="prd"
                size="sm"
                courseId="lg-ai-graduate"
              />
              <CourseCard
                title="인공지능 고급 (2주)"
                badges={[{ type: "selection", label: "선발" }]}
                variant="cto"
                size="sm"
                courseId="lg-ai-advanced"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              <CourseCard
                title="LG AI Expert Course (12주) (현업 문제 해결 코칭)"
                badges={[{ type: "selection", label: "선발" }]}
                variant="prd"
                size="sm"
                courseId="lg-ai-expert-course"
              />
              <CourseCard
                title="빅데이터 DS 고급 (7주)"
                badges={[{ type: "selection", label: "선발" }]}
                variant="cto"
                size="sm"
                courseId="big-data-ds-advanced"
              />
            </div>
          </div>
          <div className="bg-card p-3 rounded-lg border"></div>
          <div className="bg-card p-3 rounded-lg border"></div>
          <div className="bg-card p-3 rounded-lg border">
            <CourseCard
              title="LLM Agent고급 챗봇 개발"
              variant="ai"
              size="sm"
              courseId="genai-llm-agent"
            />
          </div>
        </div>

        {/* Advanced Level */}
        <div className="grid grid-cols-[180px_1fr_1fr_180px_200px] gap-2 mb-3">
          <LevelIndicator
            level="advanced"
            title="AI 업무수행자"
            subtitle="또는 AI 공통 역량 확보"
          />
          <div className="bg-card p-3 rounded-lg border space-y-2">
            <CourseCard
              title="Physical AI 리더 양성과정"
              badges={[
                { type: "selection", label: "선발" },
                { type: "new", label: "신규" },
              ]}
              variant="prd"
              size="sm"
              courseId="physical-ai-leader"
            />
            <CourseCard
              title="AI Jump Up Camp(9일)"
              badges={[{ type: "selection", label: "선발" }]}
              variant="prd"
              courseId="ai-jump-up-camp"
            />
            <CourseCard
              title="AI Scientist 중급"
              variant="sw"
              size="sm"
              courseId="ai-scientist-intermediate"
            />
          </div>
          <div className="bg-card p-3 rounded-lg border">
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <CourseCard title="머신 러닝 II" isOnline variant="sw" size="sm" courseId="elice-machine-learning-2" />
                <CourseCard title="머신 러닝 I" isOnline variant="sw" size="sm" courseId="elice-machine-learning-1" />
              </div>
              <div className="space-y-2">
                <div className="flex gap-1">
                  <CourseCard title="CNN/RNN 활용하기" isOnline variant="sw" size="sm" courseId="elice-cnn-rnn-application" />
                  <CourseCard title="YOLO를 이용한 객체 인식" isOnline variant="sw" size="sm" courseId="elice-yolo-object-detection" />
                </div>
                <div className="flex gap-1">
                  <CourseCard title="CNN/RNN 이해하기" isOnline variant="sw" size="sm" courseId="elice-cnn-rnn-understanding" />
                  <CourseCard title="이미지 처리 알고리즘" isOnline variant="sw" size="sm" courseId="elice-image-processing" />
                </div>
                <CourseCard title="딥러닝 기초" isOnline variant="sw" size="sm" courseId="elice-deep-learning-basic" />
              </div>
            </div>
          </div>
          <div className="bg-card p-3 rounded-lg border space-y-2">
            <CourseCard title="RAG기초와 파이프 라인" variant="udemy" size="sm" courseId="udemy-rag-basics" />
            <CourseCard title="RAG를 위한 Langchain" variant="udemy" size="sm" courseId="udemy-rag-langchain" />
            <CourseCard 
              title="바이브 코딩과 MCP_커서로 시작하기" 
              badges={[{ type: "new", label: "신규" }]}
              variant="udemy" 
              size="sm" 
              courseId="udemy-vibe-coding-mcp" 
            />
          </div>
          <div className="bg-card p-3 rounded-lg border">
            <CourseCard 
              title="MS 코파일럿 고급 활용법" 
              variant="ai" 
              size="sm" 
              courseId="genai-ms-copilot-advanced" 
            />
          </div>
        </div>

        {/* Intermediate Level */}
        <div className="grid grid-cols-[180px_1fr_1fr_180px_200px] gap-2 mb-3">
          <LevelIndicator
            level="intermediate"
            title=""
            subtitle="전사 AX 인증체계"
            description="연계 예정"
          />
          <div className="bg-card p-3 rounded-lg border space-y-2">
            <CourseCard
              title="바이브 코딩 기반의 MVP 구축(1일)"
              badges={[{ type: "new", label: "신규" }]}
              variant="prd"
              size="sm"
              courseId="vibe-coding-mvp"
            />
            <CourseCard
              title="바이브 코딩 기반의 AX 문제 해결(2일)"
              badges={[{ type: "new", label: "신규" }]}
              variant="prd"
              size="sm"
              courseId="vibe-coding-ax-problem-solving"
            />
            <CourseCard
              title="AI Literacy & AX Problem Solving (2일)"
              badges={[{ type: "new", label: "신규" }]}
              variant="prd"
              size="sm"
              courseId="ai-literacy-ax-problem-solving"
            />
          </div>
          <div className="bg-card p-3 rounded-lg border">
            <div className="grid grid-cols-2 gap-2">
              <CourseCard title="파이썬 데이터 분석 기초 (2주)" isOnline variant="sw" size="sm" courseId="elice-python-data-analysis" />
              <CourseCard title="파이썬 데이터 분석 기초_Training (2주)" isOnline variant="sw" size="sm" courseId="elice-python-data-analysis-training" />
            </div>
          </div>
          <div className="bg-card p-3 rounded-lg border space-y-2">
            <CourseCard title="인공지능 이해를 위한 머신러닝 기초 다지기" variant="udemy" size="sm" courseId="udemy-ml-basics" />
            <CourseCard title="딥러닝의 모든 것 with Python, Tensorflow, Pytorch" variant="udemy" size="sm" courseId="udemy-deep-learning-all" />
            <CourseCard title="비즈니스 분석 및 DS를 위한 핵심통계학" variant="udemy" size="sm" courseId="udemy-statistics-ds" />
          </div>
          <div className="bg-card p-3 rounded-lg border space-y-2">
            <CourseCard title="비즈니스 콘텐츠 제작 AI이미지/영상만들기" variant="ai" size="sm" courseId="genai-business-content" />
            <CourseCard title="생성형 AI를 활용한 업무 자동화" variant="ai" size="sm" courseId="genai-automation" />
          </div>
        </div>

        {/* Beginner Level */}
        <div className="grid grid-cols-[180px_1fr_1fr_180px_200px] gap-2 mb-4">
          <LevelIndicator level="beginner" title="" />
          <div className="bg-card p-3 rounded-lg border space-y-2">
            <CourseCard title="MS Copilot 마스터 (1일)" isOnline variant="hr" size="sm" courseId="ms-copilot-master" />
            <CourseCard title="데이터 리터러시와 데이터기반 문제해결" isOnline variant="hr" size="sm" courseId="data-literacy-problem-solving" />
          </div>
          <div className="bg-card p-3 rounded-lg border">
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <CourseCard title="생성형 AI 입문" isOnline variant="sw" size="sm" courseId="genai-intro" />
                <CourseCard title="파이썬 기초 (파이썬 기초1, 2, NumPy/Pandas 기초)" isOnline variant="sw" size="sm" courseId="elice-python-basic" />
              </div>
              <CourseCard title="파이썬 기초_Training (파이썬 기초문제집, NumPy/Pandas 작습서)" isOnline variant="sw" size="sm" courseId="elice-python-training" />
            </div>
          </div>
          <div className="bg-card p-3 rounded-lg border">
            <CourseCard title="MS365 Copilot 마스터 클래스" variant="udemy" size="sm" courseId="udemy-ms365-copilot" />
          </div>
          <div className="bg-card p-3 rounded-lg border">
            <CourseCard title="세일즈&마케팅 프로세스 AI 리터칭 과정" variant="ai" size="sm" courseId="genai-sales-marketing" />
          </div>
        </div>

        {/* Footer - Common Course */}
        <div className="bg-secondary/50 p-4 rounded-lg border text-center mb-6">
          <div className="font-medium">Ⓞ 생산기술원 제조 DX 의 이해</div>
          <div className="text-xs text-muted-foreground mt-1">*해당과정은 러닝넷에서 온라인 수강</div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 justify-center items-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 bg-course-prd border-2 border-foreground/20 rounded"></div>
            <span>PRI R&D College</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 bg-course-cto border-l-4 border-l-foreground/40 rounded"></div>
            <span>CTO / SW College</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 bg-course-hr rounded"></div>
            <span>인화원 주관</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 bg-course-sw border border-accent/50 rounded"></div>
            <span>(On)SW_College</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 bg-course-udemy rounded"></div>
            <span>(On)Udemy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 bg-course-ai rounded"></div>
            <span>전사 생성형 AI 과정</span>
          </div>
        </div>
      </div>
    </div>
  );
};
