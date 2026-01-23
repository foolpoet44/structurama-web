export interface CourseSchedule {
  session: string;
  period: string;
}

export interface CourseModule {
  id: string;
  title: string;
  type: string;
  hours?: number;
}

export interface CourseDetail {
  id: string;
  title: string;
  category: "offline" | "elice" | "udemy" | "genai";
  level: "expert" | "advanced" | "intermediate" | "beginner";
  variant: "prd" | "cto" | "hr" | "sw" | "udemy" | "ai";
  isNew?: boolean;
  isSelection?: boolean;
  isOnline?: boolean;

  // 개요
  objectives: string[];
  target: string;
  format: string;
  requirements?: string;
  location: string;
  capacity: string;
  duration: string;
  cost?: string;

  // 이수기준
  criteria?: {
    standard: number;
    ratio: string;
    passScore: string;
  };

  // 커리큘럼
  modules?: CourseModule[];

  // 일정
  schedule?: CourseSchedule[];
  scheduleNote?: string;

  // 담당자
  instructor?: string;
  manager?: {
    name: string;
    email: string;
  };

  // 특이사항
  notes?: string[];

  // 후속과정
  nextCourses?: string[];
}

export const courseData: CourseDetail[] = [
  // =====================
  // 오프라인 집합교육 과정
  // =====================
  {
    id: "vibe-coding-mvp",
    title: "바이브 코딩 기반의 MVP 구축",
    category: "offline",
    level: "intermediate",
    variant: "prd",
    isNew: true,
    objectives: [
      "바이브 코딩 핵심 개념 및 프롬프트 작성법 습득",
      "업무 아이디어를 MVP로 만드는 구조화 기법(SCQ·RICE 등) 학습",
      "바이브 코딩으로 구현하는 MVP 실습(Lovable, Glide 등)"
    ],
    target: "생산기술원 구성원",
    format: "오프라인 (사내)",
    requirements: "선택",
    location: "평택 러닝센터",
    capacity: "30",
    duration: "1일",
    cost: "-",
    criteria: {
      standard: 100,
      ratio: "참여 50% / 태도 50%",
      passScore: "70"
    },
    modules: [
      { id: "M1", title: "바이브 코딩 핵심 개념 및 프롬프트 작성법", type: "강의", hours: 1 },
      { id: "M2", title: "업무 아이디어를 MVP로 만드는 구조화 기법 (SCQ·RICE 등)", type: "강의 실습", hours: 1 },
      { id: "M3", title: "바이브 코딩으로 구현하는 MVP 실습 (Lovable, Glide 등)", type: "강의 실습", hours: 1 }
    ],
    schedule: [
      { session: "1차", period: "4/6" },
      { session: "2차", period: "5/25" },
      { session: "3차", period: "7/6" }
    ],
    instructor: "사외강사",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    notes: ["상기 일정은 강의를 준비 중에 여러 요인에 인하여 일정이 변경될 수 있으며, 정확한 일정은 러닝넷 홈페이지를 참조 부탁 드립니다."]
  },
  {
    id: "ai-literacy-ax-problem-solving",
    title: "AI Literacy & AX Problem Solving",
    category: "offline",
    level: "intermediate",
    variant: "prd",
    isNew: true,
    objectives: [
      "AI·AX의 기본 개념을 이해하고, 업무 현장에서 활용 가능한 AI Literacy 기반의 업무 관점을 내재화 한다.",
      "실제 현업 문제를 AX 관점에서 구조화하고, AI를 활용해 해결 방안을 제안할 수 있다."
    ],
    target: "생산기술원 구성원",
    format: "오프라인 (사내)",
    requirements: "선택",
    location: "평택 러닝센터",
    capacity: "30",
    duration: "2일",
    cost: "교육비용 이체 건은 사전에 안내 예정",
    criteria: {
      standard: 100,
      ratio: "참여 50% / 태도 50%",
      passScore: "70"
    },
    schedule: [
      { session: "1차", period: "6/8~9" },
      { session: "2차", period: "8/10~11" },
      { session: "3차", period: "11/2~3" }
    ],
    instructor: "마소캠퍼스",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    notes: ["상기 일정은 강의를 준비 중에 여러 요인에 인하여 일정이 변경될 수 있으며, 정확한 일정은 러닝넷 홈페이지를 참조 부탁 드립니다."]
  },
  {
    id: "vibe-coding-ax-problem-solving",
    title: "바이브 코딩 기반의 AX 문제 해결",
    category: "offline",
    level: "intermediate",
    variant: "prd",
    isNew: true,
    objectives: [
      "코드 없이 문제 해결 과정을 설계·구현하는 Vibe Coding 사고체계를 습득한다",
      "단순 자동화를 넘어, 업무 플로우 자체를 재설계하는 AX 문제 해결 역량을 확보한다."
    ],
    target: "생산기술원 구성원",
    format: "오프라인 (사내)",
    requirements: "선택",
    location: "평택 러닝센터",
    capacity: "30",
    duration: "2일",
    cost: "교육비용 이체 건은 사전에 안내 예정",
    criteria: {
      standard: 100,
      ratio: "참여 50% / 태도 50%",
      passScore: "70"
    },
    schedule: [
      { session: "1차", period: "6/22~23" },
      { session: "2차", period: "8/31~9/1" }
    ],
    instructor: "사외강사",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    notes: ["상기 일정은 강의를 준비 중에 여러 요인에 인하여 일정이 변경될 수 있으며, 정확한 일정은 러닝넷 홈페이지를 참조 부탁 드립니다."]
  },
  {
    id: "ai-jump-up-camp",
    title: "AI Jump Up Camp",
    category: "offline",
    level: "advanced",
    variant: "prd",
    isSelection: true,
    objectives: [
      "데이터 분석 방법론과 AI 핵심 기술을 학습하고, 현업 데이터 기반으로 프로젝트를 실제 수행하여, AI 프로젝트를 리딩 할 수 있다."
    ],
    target: "생산기술원 구성원",
    format: "집합교육",
    requirements: "파이썬 활용 데이터분석 Basic 이수자 수준 AX 역량 확보, 본 학습 현업 DX 과제 인터뷰 진행",
    location: "러닝센터 복합동",
    capacity: "선발",
    duration: "10일",
    cost: "교육비용 이체 건은 사전에 안내 예정",
    criteria: {
      standard: 100,
      ratio: "평가 80% / 참여도 20%",
      passScore: "80"
    },
    modules: [
      { id: "실습", title: "현업 AX 과제 실습 / 전문가 멘토링 지원", type: "실습" },
      { id: "발표", title: "모델 정의서 발표, 피드백 및 수정", type: "발표" },
      { id: "최종", title: "시험 운영, 성능 개선, 최적화, 최종 발표", type: "발표" }
    ],
    schedule: [
      { session: "1차수", period: "4월 ~ 5월 (대상자 별도 안내)" }
    ],
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    notes: [
      "현업문제를 가지고 실습하면서 실제 활용에 대한 자신감을 얻을 수 있었음",
      "현업 문제에 활용할 수 있는 다양한 예제와 최신 기술동향을 배울 수 있어 도움이 되었으며, 향후에 활용해보고 싶다는 의지가 생겼음"
    ]
  },
  {
    id: "physical-ai-leader",
    title: "Physical AI 리더 양성과정",
    category: "offline",
    level: "advanced",
    variant: "prd",
    isNew: true,
    isSelection: true,
    objectives: [
      "물리 기반 AI(Physical AI)의 개념과 적용 기술을 이해하고, 스마트팩토리·제조 현장에서 활용 가능한 분석·예측 역량을 확보한다."
    ],
    target: "생산기술원 구성원",
    format: "집합",
    requirements: "선택",
    location: "사외 대학기관",
    capacity: "선발",
    duration: "6주",
    cost: "별도안내",
    criteria: {
      standard: 100,
      ratio: "평가 80% / 태도 20%",
      passScore: "70"
    },
    modules: [
      { id: "M1", title: "Physical AI 개념 및 필요성 / CPS 기반 스마트 제조 구조 이해", type: "강의" },
      { id: "M2", title: "설비·공정 데이터 수집 및 신호 해석 기초 / IoT/센서 기반 계측 기술", type: "강의 실습" },
      { id: "M3", title: "디지털 트윈 모델링 & 운영 시뮬레이션", type: "강의 실습" },
      { id: "M4", title: "머신러닝/딥러닝 기반 물리 데이터 분석 / 로보틱스 제조 현장 적용", type: "강의 실습" }
    ],
    schedule: [
      { session: "1차수", period: "별도 안내" }
    ],
    instructor: "외부대학교 교수진",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "lg-ai-graduate",
    title: "LG AI 대학원",
    category: "offline",
    level: "expert",
    variant: "prd",
    isSelection: true,
    objectives: [
      "인공지능 분야 석·박사 학위 취득을 통한 AI 전문가 양성"
    ],
    target: "생산기술원 구성원 (전문가과정 별도 문의)",
    format: "대학원 과정",
    requirements: "선발",
    location: "LG AI 대학원",
    capacity: "선발",
    duration: "석사 9개월 / 박사 18개월",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "lg-ai-expert-course",
    title: "LG AI Expert Course",
    category: "offline",
    level: "expert",
    variant: "prd",
    isSelection: true,
    objectives: [
      "현업 문제 해결 코칭을 통한 AI 전문가 양성"
    ],
    target: "생산기술원 구성원",
    format: "집합교육 + 코칭",
    requirements: "선발",
    location: "별도 안내",
    capacity: "선발",
    duration: "12주",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },

  // =====================
  // 엘리스 온라인 과정
  // =====================
  {
    id: "elice-python-basic",
    title: "파이썬 기초",
    category: "elice",
    level: "beginner",
    variant: "sw",
    isOnline: true,
    objectives: [
      "프로그램의 개념, 프로그램이 작동하는 원리와 배경을 이해하고 설명할 수 있다.",
      "튜플과 딕셔너리 등을 통해 상황에 맞는 자료형을 선택하여 자료를 관리할 수 있다.",
      "함수와 모듈 등을 이용해서 코드의 반복을 줄인 효율적인 프로그래밍을 할 수 있다.",
      "파이썬 라이브러리 Pandas, Numpy, Matplotlib의 사용법을 이해하여 데이터 분석/시각화 할 수 있다."
    ],
    target: "생산기술원 구성원 (파이썬 활용 데이터 분석을 스스로 학습하고 싶은 사람)",
    format: "E-Learning + 코딩실습",
    requirements: "선택",
    location: "LG PRI Elice 사이트",
    capacity: "제한 없음",
    duration: "3개월 (48시간)",
    cost: "308,000원 (이수시 본인/부서 부담금 없음, 미이수자 급여공제)",
    criteria: {
      standard: 100,
      ratio: "수강 50% / Quiz 50%",
      passScore: "진도 90% and 최종 TEST 70점 이상"
    },
    instructor: "엘리스",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    scheduleNote: "신청일로부터 3개월 간 자율 학습",
    nextCourses: ["elice-python-training"]
  },
  {
    id: "elice-python-training",
    title: "파이썬 기초_Training",
    category: "elice",
    level: "beginner",
    variant: "sw",
    isOnline: true,
    objectives: [
      "파이썬을 활용한 데이터 전처리 및 시각화 실습을 통해 대용량의 데이터를 빠르게 처리할 수 있다."
    ],
    target: "생산기술원 구성원 (파이썬 활용 데이터 분석을 스스로 학습하고 싶은 사람)",
    format: "E-Learning + 코딩실습",
    requirements: "ⓔ 파이썬 기초 이수자",
    location: "LG PRI Elice 사이트",
    capacity: "제한 없음",
    duration: "3개월",
    cost: "160,000원 (미이수자 급여공제)",
    criteria: {
      standard: 100,
      ratio: "수강 50% / Quiz 50%",
      passScore: "진도 90% and 최종 TEST 70점 이상"
    },
    instructor: "엘리스",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    scheduleNote: "신청일로부터 3개월 간 자율 학습"
  },
  {
    id: "elice-python-data-analysis",
    title: "파이썬 데이터 분석 기초",
    category: "elice",
    level: "intermediate",
    variant: "sw",
    isOnline: true,
    objectives: [
      "데이터 분석에 파이썬의 조건문, 반복문 이해 및 적용하여 실제적인 데이터들을 분석하고, 시각화 할 수 있다."
    ],
    target: "생산기술원 구성원 (파이썬 활용 데이터 분석을 스스로 학습하고 싶은 사람)",
    format: "E-Learning + 코딩실습",
    requirements: "선택",
    location: "LG PRI Elice 사이트",
    capacity: "제한 없음",
    duration: "2개월",
    cost: "109,000원 (미이수자 급여공제)",
    criteria: {
      standard: 100,
      ratio: "수강 50% / Quiz 50%",
      passScore: "진도 90% and 최종 TEST 70점 이상"
    },
    instructor: "엘리스",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    scheduleNote: "신청일로부터 2개월 간 자율 학습",
    nextCourses: ["elice-python-data-analysis-training", "elice-machine-learning-1"]
  },
  {
    id: "elice-python-data-analysis-training",
    title: "파이썬 데이터 분석 기초_Training",
    category: "elice",
    level: "intermediate",
    variant: "sw",
    isOnline: true,
    objectives: [
      "파이썬을 활용한 데이터 전처리 및 시각화 실습을 통해 대용량의 데이터를 빠르게 처리할 수 있다."
    ],
    target: "생산기술원 구성원 (파이썬 활용 데이터 분석을 스스로 학습하고 싶은 사람)",
    format: "E-Learning + 코딩실습",
    requirements: "ⓔ 파이썬 데이터 분석 기초 이수자",
    location: "LG PRI Elice 사이트",
    capacity: "제한 없음",
    duration: "3개월",
    cost: "270,000원 (미이수자 급여공제)",
    criteria: {
      standard: 100,
      ratio: "수강 50% / Quiz 50%",
      passScore: "진도 90% and 최종 TEST 70점 이상"
    },
    modules: [
      { id: "M1", title: "지하철 승하차 인원 정보를 활용한 역별 혼잡도 분석", type: "강의 실습", hours: 15 },
      { id: "M2", title: "자동차 리콜 현황 데이터를 활용한 데이터 분석", type: "강의 PT", hours: 15 },
      { id: "M3", title: "유가 데이터를 활용한 주유소 시장 분석 프로젝트", type: "강의 실습" }
    ],
    instructor: "엘리스",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    scheduleNote: "신청일로부터 3개월 간 자율 학습",
    notes: ["본 과정은 문법, 통계, 개념이해가 주 목적이 아닌, 숙련도 향상을 통한 자발적 현업활용을 위해 다양한 유형의 데이터를 활용한 [반복], [실습]에 목적을 둔 과정"]
  },
  {
    id: "elice-machine-learning-1",
    title: "머신 러닝 I",
    category: "elice",
    level: "advanced",
    variant: "sw",
    isOnline: true,
    objectives: [
      "인공지능/머신러닝 관련 수학-프로그래밍적 이론을 습득할 수 있다."
    ],
    target: "생산기술원 구성원 (파이썬 활용 데이터 분석을 스스로 학습하고 싶은 사람)",
    format: "E-Learning + 코딩실습",
    requirements: "선택",
    location: "LG PRI Elice 사이트",
    capacity: "제한 없음",
    duration: "2개월",
    cost: "144,000원 (미이수자 급여공제)",
    criteria: {
      standard: 100,
      ratio: "수강 50% / Quiz 50%",
      passScore: "진도 90% and 최종 TEST 70점 이상"
    },
    modules: [
      { id: "M1", title: "선형대수학 / Numpy", type: "강의" },
      { id: "M2", title: "회귀분석", type: "강의" },
      { id: "M3", title: "나이브 베이즈 분류", type: "강의" },
      { id: "M4", title: "K-means 클러스터링", type: "강의" },
      { id: "M5", title: "퍼셉트론", type: "강의" },
      { id: "M6", title: "텐서플로우와 인공신경망", type: "강의" }
    ],
    instructor: "엘리스",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    scheduleNote: "신청일로부터 2개월 간 자율 학습"
  },
  {
    id: "elice-machine-learning-2",
    title: "머신 러닝 II",
    category: "elice",
    level: "advanced",
    variant: "sw",
    isOnline: true,
    objectives: [
      "머신러닝 내에 존재하는 알고리즘의 종류 및 특징을 파악할 수 있다.",
      "주어진 데이터와 상황에 맞는 알고리즘 선택 활용법을 습득할 수 있다.",
      "다양한 문제 상황에 대한 해결 방안을 여러 관점에서 생각할 수 있다."
    ],
    target: "생산기술원 구성원 (파이썬 활용 데이터 분석을 스스로 학습하고 싶은 사람)",
    format: "E-Learning + 코딩실습",
    requirements: "선택",
    location: "LG PRI Elice 사이트",
    capacity: "제한 없음",
    duration: "2개월",
    cost: "156,000원 (미이수자 급여공제)",
    criteria: {
      standard: 100,
      ratio: "수강 50% / Quiz 50%",
      passScore: "진도 90% and 최종 TEST 70점 이상"
    },
    modules: [
      { id: "회귀", title: "회귀(Regression) 알고리즘", type: "강의 실습" },
      { id: "분류", title: "분류(Classification) 알고리즘", type: "강의 실습" },
      { id: "비지도", title: "비지도학습(Unsupervised-Learning) 알고리즘", type: "강의 실습" },
      { id: "의사결정", title: "의사결정 나무(Decision Tree) 알고리즘", type: "강의 실습" }
    ],
    instructor: "엘리스",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    scheduleNote: "신청일로부터 2개월 간 자율 학습"
  },
  {
    id: "elice-deep-learning-basic",
    title: "딥러닝 기초",
    category: "elice",
    level: "advanced",
    variant: "sw",
    isOnline: true,
    objectives: [
      "딥러닝의 기초 개념을 학습하며, 딥러닝이 의미하는 바가 무엇인지에 대해 알 수 있다.",
      "이미지, 텍스트와 같은 비정형 데이터를 처리하는 대표적인 딥러닝 모델의 구조 및 원리에 대해 이해할 수 있다.",
      "인공지능 모델 구축을 위한 프레임워크 Tensorflow에 대한 기초적인 활용 방법을 학습할 수 있다."
    ],
    target: "생산기술원 구성원 (파이썬 활용 데이터 분석을 스스로 학습하고 싶은 사람)",
    format: "E-Learning + 코딩실습",
    requirements: "선택",
    location: "LG PRI Elice 사이트",
    capacity: "제한 없음",
    duration: "2개월 (15시간)",
    cost: "146,000원 (미이수자 급여공제)",
    criteria: {
      standard: 100,
      ratio: "수강 50% / Quiz 50%",
      passScore: "진도 90% and 최종 TEST 70점 이상"
    },
    instructor: "엘리스",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    scheduleNote: "신청일로부터 2개월 간 자율 학습"
  },
  {
    id: "elice-cnn-rnn-understanding",
    title: "CNN/RNN 이해하기",
    category: "elice",
    level: "advanced",
    variant: "sw",
    isOnline: true,
    objectives: [
      "이미지 데이터를 이해하고 이를 CNN에 적용하는 방법을 이해할 수 있다.",
      "CNN과 RNN에 실제 많이 사용하는 데이터셋을 적용하여 학습하는 Tensorflow 코드를 이해할 수 있다."
    ],
    target: "생산기술원 구성원 (파이썬 활용 데이터 분석을 스스로 학습하고 싶은 사람)",
    format: "E-Learning + 코딩실습",
    requirements: "선택",
    location: "LG PRI Elice 사이트",
    capacity: "제한 없음",
    duration: "2개월",
    cost: "154,000원 (미이수자 급여공제)",
    criteria: {
      standard: 100,
      ratio: "수강 50% / Quiz 50%",
      passScore: "진도 90% and 이수점수 70점 이상"
    },
    instructor: "엘리스",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    scheduleNote: "신청일로부터 2개월 간 자율 학습"
  },
  {
    id: "elice-cnn-rnn-application",
    title: "CNN/RNN 활용하기",
    category: "elice",
    level: "advanced",
    variant: "sw",
    isOnline: true,
    objectives: [
      "CNN, RNN 모델의 학습부터 직접 서비스하기까지의 구조와 과정을 이해할 수 있습니다",
      "딥러닝 모델을 실제로 서비스하는 방법과 유의해야 할 점을 이해할 수 있습니다."
    ],
    target: "생산기술원 구성원 (파이썬 활용 데이터 분석을 스스로 학습하고 싶은 사람)",
    format: "E-Learning + 코딩실습",
    requirements: "선택",
    location: "LG PRI Elice 사이트",
    capacity: "제한 없음",
    duration: "2개월",
    cost: "129,000원 (미이수자 급여공제)",
    criteria: {
      standard: 100,
      ratio: "수강 50% / Quiz 50%",
      passScore: "진도 90% and 최종 TEST 70점 이상"
    },
    instructor: "엘리스",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    scheduleNote: "신청일로부터 2개월 간 자율 학습"
  },
  {
    id: "elice-image-processing",
    title: "이미지 처리 알고리즘",
    category: "elice",
    level: "advanced",
    variant: "sw",
    isOnline: true,
    objectives: [
      "이미지 데이터를 이해하고 다양한 전처리 방식을 구현할 수 있습니다.",
      "이미지 처리 딥러닝 모델을 이해하고 알고리즘의 원리를 수학적으로 이해할 수 있습니다.",
      "다양한 CNN 기반 모델들을 이해하고 전이 학습을 수행할 수 있습니다."
    ],
    target: "생산기술원 구성원 (파이썬 활용 데이터 분석을 스스로 학습하고 싶은 사람)",
    format: "E-Learning + 코딩실습",
    requirements: "선택",
    location: "LG PRI Elice 사이트",
    capacity: "제한 없음",
    duration: "2개월",
    cost: "134,000원 (미이수자 급여공제)",
    criteria: {
      standard: 100,
      ratio: "수강 50% / Quiz 50%",
      passScore: "진도 90% and 최종 TEST 70점 이상"
    },
    modules: [
      { id: "M1", title: "이미지 데이터 이해하기 / Image Data Preprocessing", type: "강의 PT" },
      { id: "M2", title: "CNN 없이 이미지 분류하기", type: "실습" }
    ],
    instructor: "엘리스",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    scheduleNote: "신청일로부터 2개월 간 자율 학습"
  },
  {
    id: "elice-yolo-object-detection",
    title: "YOLO를 이용한 객체 인식",
    category: "elice",
    level: "advanced",
    variant: "sw",
    isOnline: true,
    objectives: [
      "OpenCV가 무엇인지 알고 간단하게 사용할 수 있다.",
      "Tensorflow를 이용해 인공지능 모델을 구현할 수 있다.",
      "YOLOv3를 이용해 객체 인식을 할 수 있다."
    ],
    target: "생산기술원 구성원 (파이썬 활용 데이터 분석을 스스로 학습하고 싶은 사람)",
    format: "E-Learning + 코딩실습",
    requirements: "선택",
    location: "LG PRI Elice 사이트",
    capacity: "제한 없음",
    duration: "2개월",
    cost: "미이수자 급여공제",
    criteria: {
      standard: 100,
      ratio: "수강 50% / Quiz 50%",
      passScore: "진도 90% and 최종 TEST 70점 이상"
    },
    modules: [
      { id: "M1", title: "OpenCV로 배우는 영상처리", type: "강의" },
      { id: "M2", title: "영상 처리와 컴퓨터 비전", type: "강의" },
      { id: "M3", title: "개발환경 구축하기", type: "실습" },
      { id: "M4", title: "이미지 위에 정보 표시하기", type: "실습" }
    ],
    instructor: "엘리스",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    scheduleNote: "신청일로부터 2개월 간 자율 학습"
  },

  // =====================
  // Udemy 과정
  // =====================
  {
    id: "udemy-rag-basics",
    title: "RAG기초와 파이프라인",
    category: "udemy",
    level: "advanced",
    variant: "udemy",
    objectives: [
      "RAG(Retrieval Augmented Generation)의 기초 개념 이해",
      "RAG 파이프라인 구축 방법 학습"
    ],
    target: "생산기술원 구성원",
    format: "온라인 (Udemy)",
    location: "Udemy",
    capacity: "제한 없음",
    duration: "자율 학습",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" },
    notes: ["Udemy 컨텐츠 큐레이션은 연중 업데이트 됩니다."]
  },
  {
    id: "udemy-rag-langchain",
    title: "RAG를 위한 Langchain",
    category: "udemy",
    level: "advanced",
    variant: "udemy",
    objectives: [
      "Langchain을 활용한 RAG 시스템 구축",
      "LLM과 외부 데이터 연동 방법 학습"
    ],
    target: "생산기술원 구성원",
    format: "온라인 (Udemy)",
    location: "Udemy",
    capacity: "제한 없음",
    duration: "자율 학습",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "udemy-vibe-coding-mcp",
    title: "바이브 코딩과 MCP",
    category: "udemy",
    level: "advanced",
    variant: "udemy",
    objectives: [
      "바이브 코딩의 개념과 커서(Cursor) 활용법 학습",
      "MCP(Model Context Protocol) 이해 및 적용"
    ],
    target: "생산기술원 구성원",
    format: "온라인 (Udemy)",
    location: "Udemy",
    capacity: "제한 없음",
    duration: "자율 학습",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "udemy-ml-basics",
    title: "인공지능 이해를 위한 머신러닝 기초 다지기",
    category: "udemy",
    level: "intermediate",
    variant: "udemy",
    objectives: [
      "머신러닝의 기초 개념 이해",
      "인공지능 기술의 원리 학습"
    ],
    target: "생산기술원 구성원",
    format: "온라인 (Udemy)",
    location: "Udemy",
    capacity: "제한 없음",
    duration: "자율 학습",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "udemy-deep-learning-all",
    title: "딥러닝의 모든 것 with Python, Tensorflow, Pytorch",
    category: "udemy",
    level: "intermediate",
    variant: "udemy",
    objectives: [
      "Python, Tensorflow, Pytorch를 활용한 딥러닝 전반 학습",
      "실무에 적용 가능한 딥러닝 모델 구현"
    ],
    target: "생산기술원 구성원",
    format: "온라인 (Udemy)",
    location: "Udemy",
    capacity: "제한 없음",
    duration: "자율 학습",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "udemy-statistics-ds",
    title: "비즈니스 분석 및 DS를 위한 핵심통계학",
    category: "udemy",
    level: "intermediate",
    variant: "udemy",
    objectives: [
      "비즈니스 분석을 위한 통계학 기초 학습",
      "데이터 사이언스에 필요한 핵심 통계 개념 이해"
    ],
    target: "생산기술원 구성원",
    format: "온라인 (Udemy)",
    location: "Udemy",
    capacity: "제한 없음",
    duration: "자율 학습",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "udemy-ms365-copilot",
    title: "MS365 Copilot 마스터 클래스",
    category: "udemy",
    level: "beginner",
    variant: "udemy",
    objectives: [
      "MS365 Copilot의 기능 이해 및 활용법 학습",
      "업무 생산성 향상을 위한 AI 도구 활용"
    ],
    target: "생산기술원 구성원",
    format: "온라인 (Udemy)",
    location: "Udemy",
    capacity: "제한 없음",
    duration: "자율 학습",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },

  // =====================
  // 전사 생성형 AI 과정
  // =====================
  {
    id: "genai-llm-agent",
    title: "LLM Agent 고급 챗봇 개발",
    category: "genai",
    level: "expert",
    variant: "ai",
    objectives: [
      "LLM Agent를 활용한 고급 챗봇 개발 역량 확보",
      "생성형 AI 기반 대화형 시스템 구축"
    ],
    target: "생산기술원 구성원",
    format: "온라인",
    location: "전사 생성형 AI 플랫폼",
    capacity: "제한 없음",
    duration: "자율 학습",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "genai-business-content",
    title: "비즈니스 콘텐츠 제작 AI이미지/영상만들기",
    category: "genai",
    level: "intermediate",
    variant: "ai",
    objectives: [
      "AI를 활용한 비즈니스 콘텐츠 제작",
      "이미지/영상 생성 AI 도구 활용법 학습"
    ],
    target: "생산기술원 구성원",
    format: "온라인",
    location: "전사 생성형 AI 플랫폼",
    capacity: "제한 없음",
    duration: "자율 학습",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "genai-automation",
    title: "생성형 AI를 활용한 업무 자동화",
    category: "genai",
    level: "intermediate",
    variant: "ai",
    objectives: [
      "생성형 AI를 활용한 업무 자동화 방법 학습",
      "반복 업무의 AI 기반 효율화"
    ],
    target: "생산기술원 구성원",
    format: "온라인",
    location: "전사 생성형 AI 플랫폼",
    capacity: "제한 없음",
    duration: "자율 학습",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "genai-sales-marketing",
    title: "세일즈&마케팅 프로세스 AI 리터칭 과정",
    category: "genai",
    level: "beginner",
    variant: "ai",
    objectives: [
      "세일즈 및 마케팅 프로세스에 AI 적용",
      "AI 리터칭 기술 활용법 학습"
    ],
    target: "생산기술원 구성원",
    format: "온라인",
    location: "전사 생성형 AI 플랫폼",
    capacity: "제한 없음",
    duration: "자율 학습",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "lg-ai-advanced",
    title: "인공지능 고급",
    category: "offline",
    level: "expert",
    variant: "cto",
    isSelection: true,
    objectives: ["인공지능 핵심 알고리즘 심화 학습", "최신 AI 기술 트렌드 및 현업 적용 사례 연구"],
    target: "AI 직무 전문가",
    format: "집합교육",
    location: "마곡 LG 사이언스파크",
    capacity: "선발",
    duration: "2주",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "big-data-ds-advanced",
    title: "빅데이터 DS 고급",
    category: "offline",
    level: "expert",
    variant: "cto",
    isSelection: true,
    objectives: ["대규모 데이터 기반 의사결정 모델링", "복잡한 비즈니스 문제 해결을 위한 데이터 사이언스 심화"],
    target: "데이터 사이언티스트 전문가",
    format: "집합교육",
    location: "마곡 LG 사이언스파크",
    capacity: "선발",
    duration: "7주",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "ai-scientist-intermediate",
    title: "AI Scientist 중급",
    category: "offline",
    level: "advanced",
    variant: "sw",
    objectives: ["머신러닝/딥러닝 알고리즘의 실전 응용", "현업 데이터 기반 모델 학습 및 성능 최적화"],
    target: "AI 직무 수행자 및 희망자",
    format: "집합/혼합",
    location: "러닝센터",
    capacity: "30",
    duration: "별도안내",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "ms-copilot-master",
    title: "MS Copilot 마스터",
    category: "offline",
    level: "beginner",
    variant: "hr",
    isOnline: true,
    objectives: ["MS Copilot의 핵심 기능 이해 및 실무 적용", "AI 업무 비서를 통한 생산성 극대화"],
    target: "전사 임직원",
    format: "온라인",
    location: "러닝넷",
    capacity: "제한 없음",
    duration: "1일",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "data-literacy-problem-solving",
    title: "데이터 리터러시와 데이터기반 문제해결",
    category: "offline",
    level: "beginner",
    variant: "hr",
    isOnline: true,
    objectives: ["데이터 읽기, 쓰기, 분석 역량 함양", "데이터 기반의 논리적 문제 해결 프로세스 체득"],
    target: "전사 임직원",
    format: "온라인",
    location: "러닝넷",
    capacity: "제한 없음",
    duration: "자율",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  },
  {
    id: "genai-intro",
    title: "생성형 AI 입문",
    category: "elice",
    level: "beginner",
    variant: "sw",
    isOnline: true,
    objectives: ["생성형 AI의 기본 원리와 활용 가능성 이해", "프롬프트 엔지니어링 기초 습득"],
    target: "AI 입문 희망자",
    format: "E-Learning",
    location: "엘리스 플랫폼",
    capacity: "제한 없음",
    duration: "자율",
    manager: { name: "조대근 책임", email: "dk.cho@lge.com" }
  }
];

export const getCourseById = (id: string): CourseDetail | undefined => {
  return courseData.find(course => course.id === id);
};

export const getCoursesByLevel = (level: CourseDetail["level"]): CourseDetail[] => {
  return courseData.filter(course => course.level === level);
};

export const getCoursesByCategory = (category: CourseDetail["category"]): CourseDetail[] => {
  return courseData.filter(course => course.category === category);
};
