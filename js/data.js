/**
 * AI Nexus Academy - 데이터셋
 * 강의 과정, 커리큘럼, 강사진, 후기, FAQ 데이터
 */

const COURSES_DATA = [
  {
    id: "generative-ai",
    title: "생성형 AI & 프롬프트 엔지니어링 마스터",
    subtitle: "비전공자도 4주 만에 업무 생산성 10배 달성하는 실무 생성 AI 활용법",
    category: "beginner",
    badge: "입문 추천 / 베스트셀러",
    level: "입문 (★☆☆☆☆)",
    duration: "4주 완성 (주 1회, 총 16시간)",
    schedule: "매주 토요일 14:00 ~ 18:00",
    format: "온/오프라인 병행 (강남 캠퍼스 + Zoom 라이브 + 다시보기 VOD 평생 무료)",
    priceNormal: "450,000원",
    priceDiscount: "320,000원",
    discountRate: "29%",
    icon: "sparkles",
    heroDesc: "단순한 ChatGPT 질문을 넘어, 현업 기획서·보고서·마케팅 카피·멀티모달 이미지 생성까지 한 번에 끝내는 실전 프롬프트 마스터클래스입니다. 비전공자도 당장 내일 업무에 바로 적용할 수 있습니다.",
    targets: [
      "ChatGPT를 써봤지만 기대만큼 좋은 결과가 나오지 않는 직장인",
      "반복적인 문서 작성, 리서치, 보고서 작업 시간을 80% 줄이고 싶은 분",
      "마케팅 카피, SNS 콘텐츠, 기획안을 단 10분 만에 만들고 싶은 기획/마케터",
      "AI 시대에 뒤처지지 않고 실무 무기를 장착하고 싶은 비전공자"
    ],
    skills: ["ChatGPT-4o", "Claude 3.5 Sonnet", "Prompt Architecture", "Midjourney v6", "Runway Gen-3", "Custom GPTs"],
    projects: [
      {
        title: "직무 맞춤형 고성과 프롬프트 템플릿 북 제작",
        desc: "내 업무(기획, 마케팅, 인사, 영업)에 특화된 실무용 프롬프트 라이브러리를 직접 빌드"
      },
      {
        title: "AI 멀티모달 브랜드 마케팅 패키지 제작",
        desc: "미드저니 이미지 + 런웨이 영상 + 카피라이팅이 결합된 종합 광고 크리에이티브 완성"
      },
      {
        title: "사내 업무 지원 전용 Custom GPTs 챗봇 구축",
        desc: "사내 규정 및 자주 묻는 질문을 학습시킨 노코드 전용 AI 비서 챗봇 배포"
      }
    ],
    curriculum: [
      {
        week: "1주차",
        title: "생성형 AI 패러다임의 이해와 프롬프트 엔지니어링 기초",
        details: [
          "LLM의 작동 원리와 할루시네이션(환각) 통제 메커니즘",
          "OpenAI ChatGPT, Anthropic Claude, Google Gemini 모델별 특성 비교 및 최적 활용법",
          "핵심 프롬프트 기법: Zero-shot, Few-shot, 역할 부여(Role-Playing) 기법",
          "생각의 사슬(Chain-of-Thought)과 구체화 전략을 활용한 답변 품질 5배 향상 실습"
        ]
      },
      {
        week: "2주차",
        title: "직무별 초밀착 프롬프트 프레임워크 & 문서 작성 자동화",
        details: [
          "경영/기획: 10분 만에 완성하는 비즈니스 전략 기획서 및 시장 조사 리서치",
          "마케팅: 페르소나 분석 기반 고전환 광고 카피 및 뉴스레터/블로그 자동 생성",
          "데이터 요약: 100페이지 분량의 PDF 논문/산업 보고서 3분 핵심 요약 및 표 추출",
          "고급 기법: 복합 맥락 유지 기법과 단계별 수정(Iterative Refinement) 기술"
        ]
      },
      {
        week: "3주차",
        title: "멀티모달 AI: 이미지, 영상, 오디오 생성 크리에이티브 실전",
        details: [
          "Midjourney v6: 시네마틱 제품 촬영, 웹 UI 시안, 일러스트레이션 전문 프롬프트 문법",
          "DALL-E 3 & FLUX: 정확한 텍스트 렌더링 및 로고/인포그래픽 디자인 기법",
          "Runway Gen-3 & Kling AI: 정지 이미지를 생동감 있는 4K 숏폼 영상으로 변환",
          "Suno AI & Udio: 영상 배경 음악 및 브랜드 CM송 1분 만에 작곡하기"
        ]
      },
      {
        week: "4주차",
        title: "나만의 Custom GPTs 빌딩과 지속 가능한 AI 워크플로우 완성",
        details: [
          "코딩 없이 클릭 몇 번으로 만드는 나만의 맞춤형 GPTs 빌더 실습",
          "개인 문서 및 사내 지식 베이스(Knowledge) 업로드 및 지식 검색 최적화",
          "Actions 연동 기초: 외부 웹 API와의 연동 메커니즘 이해",
          "최종 프로젝트 발표회 & 1:1 강사 맞춤형 포트폴리오 피드백"
        ]
      }
    ],
    detailPage: "course-generative-ai.html"
  },
  {
    id: "business-automation",
    title: "업무 자동화 & 노코드 AI 비즈니스 실전",
    subtitle: "Make, Zapier, n8n과 LLM을 연결하여 매일 3시간의 반복 업무를 0으로",
    category: "automation",
    badge: "직장인 만족도 1위",
    level: "초중급 (★★☆☆☆)",
    duration: "6주 완성 (주 1회, 총 18시간)",
    schedule: "매주 수요일 19:30 ~ 22:30",
    format: "온라인 실시간 라이브 + 슬랙 Q&A 핫라인 + 실습 코드 제공",
    priceNormal: "650,000원",
    priceDiscount: "480,000원",
    discountRate: "26%",
    icon: "cpu",
    heroDesc: "파이썬 코딩 한 줄 몰라도 가능합니다. 업계 최고 수준의 노코드 자동화 도구(Make, Zapier, n8n)에 AI 뇌(OpenAI/Claude API)를 장착하여, 이메일 분류부터 데이터 수집, 노션/슬랙 리포팅까지 완전 무인화합니다.",
    targets: [
      "매일 엑셀 복사-붙여넣기, 수작업 이메일 발송에 지친 실무자",
      "인건비를 절감하고 1인 기업/스타트업 업무 효율을 극대화하고 싶은 대표님",
      "노코드 도구에 생성형 AI를 결합해 차별화된 비즈니스 시스템을 구축하고 싶은 기획자",
      "팀 내 업무 자동화 프로세스를 주도하여 성과를 내고 싶은 PM/PO"
    ],
    skills: ["Make.com (Integromat)", "Zapier", "n8n", "OpenAI API", "Notion API", "Google Sheets Automation"],
    projects: [
      {
        title: "CS 고객 문의 24시간 실시간 AI 자동 분류 및 대응 봇",
        desc: "이메일/폼 접수 시 AI가 의도를 분석해 담당자 슬랙 알림 + 자동 회신 초안 생성"
      },
      {
        title: "경쟁사 트렌드 자동 크롤링 & 노션 일간 리포트 파이프라인",
        desc: "매일 아침 타겟 웹사이트 정보를 긁어와 AI로 요약 정리한 후 노션 대시보드 자동 발행"
      },
      {
        title: "원클릭 SNS 멀티 채널 자동 퍼블리싱 시스템",
        desc: "하나의 주제 입력으로 블로그, 링크드인, 인스타그램 카드뉴스 텍스트를 생성하여 스케줄 예약"
      }
    ],
    curriculum: [
      {
        week: "1주차",
        title: "업무 자동화 아키텍처 설계 및 Make.com 기초 마스터",
        details: [
          "반복 업무 분석법: 자동화 가능한 80% 업무 식별 및 프로세스 맵 작성",
          "Make.com의 구조: 트리거(Trigger), 액션(Action), 라우터(Router), 모듈 연동 원리",
          "구글 스프레드시트와 이메일을 연결하는 첫 번째 자동화 시나리오 구축",
          "에러 핸들링 및 디버깅 기본기 실습"
        ]
      },
      {
        week: "2주차",
        title: "LLM API 연동: 자동화 파이프라인에 AI 두뇌 탑재하기",
        details: [
          "OpenAI API Key 발급 및 토큰 비용 최적화 전략",
          "Make에서 ChatGPT 모듈 호출: 시스템 프롬프트 주입 및 JSON 정형 데이터 반환",
          "고객 문의 이메일 감성 분석(긍정/부정/불만) 및 카테고리 자동 라벨링",
          "자동 회신 템플릿과 연동한 맞춤형 답변 생성 자동화"
        ]
      },
      {
        week: "3주차",
        title: "데이터 자동 수집 및 스프레드시트 스마트 분석 대시보드",
        details: [
          "웹 스크래핑 모듈과 RSS 피드를 활용한 뉴스/시장 정보 자동 수집",
          "비정형 텍스트 데이터를 정제된 표(Table) 형태로 자동 구조화",
          "구글 시트 연동: 데이터 누적 시 AI가 전주 대비 변화율 요약 보고서 자동 작성",
          "정기 스케줄러를 활용한 배치(Batch) 작업 자동화"
        ]
      },
      {
        week: "4주차",
        title: "슬랙(Slack) & 노션(Notion) 연동 스마트 업무 비서 구축",
        details: [
          "Notion API 연결: 데이터베이스 페이지 자동 생성, 상태값 자동 변경",
          "Slack Webhook & Bot 연동: 슬랙 명령어(/ask)를 통한 실시간 사내 정보 검색 봇",
          "팀 회의 녹음본(Whisper) 텍스트 변환 -> 액션 아이템 추출 -> 노션 태스크 등록",
          "사내 업무 알림봇의 권한 설정과 보안 고려사항"
        ]
      },
      {
        week: "5주차",
        title: "오픈소스 셀프호스팅 n8n 및 고급 웹훅(Webhook) 처리",
        details: [
          "비용 무제한 절감을 위한 오픈소스 n8n 설치 및 환경 구성",
          "Webhook 기반 실시간 이벤트 수신과 조건 분기 필터링 기법",
          "소셜 미디어(LinkedIn, X, WordPress) 멀티 채널 자동 포스팅 파이프라인 구축",
          "대량 데이터 처리 시의 Rate Limit 극복 기법"
        ]
      },
      {
        week: "6주차",
        title: "실전 비즈니스 자동화 캡스톤 프로젝트 & 1:1 맞춤 컨설팅",
        details: [
          "수강생 본인 회사/업무의 실제 문제 해결 자동화 파이프라인 완성",
          "강사의 1:1 아키텍처 리뷰 및 최적화 피드백",
          "유지보수 및 장애 발생 시 비상 복구 매뉴얼 가이드",
          "수료증 수여 및 지속적인 알럼나이 커뮤니티 초대"
        ]
      }
    ],
    detailPage: "course-business-automation.html"
  },
  {
    id: "deep-learning",
    title: "파이썬 & 딥러닝/머신러닝 코어 부트캠프",
    subtitle: "수학적 원리부터 최신 PyTorch 모델 구현까지 탄탄하게 마스터하는 정통 AI 엔지니어링",
    category: "deeplearning",
    badge: "개발자 코어 트랙",
    level: "중급 (★★★☆☆)",
    duration: "8주 집중 (주 2회, 총 48시간)",
    schedule: "매주 화/목 19:30 ~ 22:30",
    format: "오프라인 강남 코칭 랩 + 전용 GPU 클라우드 인스턴스 무료 지원",
    priceNormal: "1,200,000원",
    priceDiscount: "890,000원",
    discountRate: "25%",
    icon: "code",
    heroDesc: "블랙박스처럼 쓰던 AI의 내부 원리를 명쾌하게 밝힙니다. 파이썬 기초 선형대수부터 손실함수 역전파, CNN, ResNet, Transformer 구현까지, 현업에서 즉시 기여할 수 있는 탄탄한 딥러닝 엔지니어로 거듭납니다.",
    targets: [
      "파이썬 기초는 알지만 딥러닝 프레임워크 실전 경험이 부족한 주니어 개발자",
      "이론 서적으로 공부하다가 실제 코드 구현에서 벽을 느낀 컴퓨터공학/인공지능 전공자",
      "데이터 분석가에서 머신러닝/딥러닝 모델링 엔지니어로 커리어 전환을 희망하는 분",
      "컴퓨터 비전과 자연어 처리 최신 논문을 코드로 구현해보고 싶은 엔지니어"
    ],
    skills: ["Python 3.12", "NumPy & Pandas", "PyTorch 2.x", "Scikit-Learn", "CNN / ResNet / YOLO", "Transformer Core", "Weights & Biases"],
    projects: [
      {
        title: "산업용 이미지 결함 탐지(Anomaly Detection) 시스템",
        desc: "제조 공정 비전 데이터를 활용하여 ResNet 기반 결함 분류 및 이상치 탐지 모델 개발"
      },
      {
        title: "한국어 뉴스 감정 분석 및 주제 분류 모델 구축",
        desc: "KoBERT 및 직접 구현한 Transformer 인코더를 활용한 고정밀 텍스트 분류기 구현"
      },
      {
        title: "엔드투엔드 머신러닝 파이프라인 및 클라우드 배포",
        desc: "MLflow로 실험을 추적하고 TorchScript로 모델 경량화 후 FastAPI 컨테이너 서빙"
      }
    ],
    curriculum: [
      {
        week: "1주차",
        title: "AI 엔지니어를 위한 필수 수학 및 데이터 조작 기법",
        details: [
          "선형대수학 핵심: 벡터, 행렬 곱, 고유값 및 텐서(Tensor)의 기하학적 의미",
          "NumPy 벡터화 연산과 브로드캐스팅(Broadcasting) 성능 최적화",
          "Pandas를 활용한 대용량 데이터 전처리 및 결측치/이상치 정제 기법",
          "데이터 시각화: Matplotlib & Seaborn을 활용한 심층 탐색적 데이터 분석(EDA)"
        ]
      },
      {
        week: "2주차",
        title: "정통 머신러닝 알고리즘의 원리와 Scikit-Learn 실전",
        details: [
          "지도학습 핵심: 선형 회귀, 로지스틱 회귀, 결정 트리(Decision Tree)",
          "앙상블 기법: Random Forest, Gradient Boosting, XGBoost, LightGBM 완벽 분석",
          "비지도학습: K-Means 클러스터링과 PCA 차원 축소",
          "과적합(Overfitting) 방지: 교차 검증(K-Fold), 정규화(L1/L2), 하이퍼파라미터 튜닝"
        ]
      },
      {
        week: "3주차",
        title: "인공신경망(ANN)의 수학적 기초와 역전파 직접 구현하기",
        details: [
          "퍼셉트론에서 다층 퍼셉트론(MLP)으로: 비선형 활성화 함수(ReLU, Sigmoid, GELU)",
          "손실 함수(Cross-Entropy, MSE)와 경사하강법(SGD, Adam, AdamW)",
          "순전파(Forward)와 연쇄 법칙(Chain Rule)을 통한 역전파(Backpropagation) 수학적 유도",
          "NumPy만으로 밑바닥부터 2층 신경망 직접 구현 실습"
        ]
      },
      {
        week: "4주차",
        title: "PyTorch 프레임워크 마스터 및 커스텀 파이프라인 구축",
        details: [
          "PyTorch 텐서 연산과 autograd(자동 미분) 시스템의 내부 구조",
          "torch.nn.Module, Dataset, DataLoader 커스텀 클래스 설계",
          "GPU 가속(CUDA/MPS) 설정 및 멀티 GPU 학습 기초",
          "Weights & Biases (WandB)를 활용한 실시간 학습 곡선 및 실험 로깅 추적"
        ]
      },
      {
        week: "5주차",
        title: "컴퓨터 비전(CV): CNN부터 현대 객체 탐지(YOLO)까지",
        details: [
          "합성곱(Convolution) 연산과 풀링(Pooling) 레이어의 시각적 특징 추출 메커니즘",
          "클래식 CNN(VGG, AlexNet)에서 현대 아키텍처(ResNet의 Skip Connection)로의 진화",
          "데이터 증강(Data Augmentation)과 사전학습 모델(Transfer Learning) 파인튜닝",
          "YOLO v8/v11 모델을 활용한 실시간 객체 탐지(Object Detection) 파이프라인"
        ]
      },
      {
        week: "6주차",
        title: "자연어 처리(NLP): 시퀀스 모델부터 Transformer 아키텍처까지",
        details: [
          "단어 임베딩: Word2Vec에서 사전학습 언어 모델의 원리",
          "RNN, LSTM, GRU의 한계와 시퀀스 투 시퀀스(Seq2Seq) 구조",
          "어텐션 메커니즘(Attention Is All You Need 논문 해독)",
          "Multi-Head Self-Attention 및 Positional Encoding을 파이토치 코드로 직접 작성"
        ]
      },
      {
        week: "7주차",
        title: "생성 모델 기초와 모델 경량화(Quantization)",
        details: [
          "생성 모델의 양대 산맥: VAE(변분 오토인코더)와 GAN(생성적 적대 신경망)",
          "최신 Diffusion 모델의 역확산(Denoising) 원리 개요",
          "모델 경량화 및 최적화: Pruning, 양자화(INT8/FP16), Knowledge Distillation",
          "ONNX 변환 및 TensorRT 가속 엔진 활용법"
        ]
      },
      {
        week: "8주차",
        title: "실전 딥러닝 캡스톤 프로젝트 & 서빙 배포",
        details: [
          "도메인 특화 데이터셋을 활용한 엔드투엔드 프로젝트 완성",
          "FastAPI 기반 고성능 모델 추론(Inference) 서버 구축",
          "Docker 컨테이너라이징 및 클라우드(AWS/GCP) 인프라 배포",
          "포트폴리오 코드 리뷰 및 기술 면접 대비 Q&A"
        ]
      }
    ],
    detailPage: "course-deep-learning.html"
  },
  {
    id: "llm-agent",
    title: "LLM 서비스 개발 & RAG·AI 에이전트 구축 실무",
    subtitle: "LangChain, LlamaIndex, Vector DB를 활용해 사내 지식 기반 RAG와 자율 에이전트 서비스를 만드는 실전 엔지니어링",
    category: "llm",
    badge: "최신 테크 트렌드 1위",
    level: "중고급 (★★★★☆)",
    duration: "8주 실전 (주 2회, 총 64시간)",
    schedule: "매주 토/일 13:00 ~ 17:00",
    format: "온/오프라인 하이브리드 + 팀 프로젝트 멘토링 + LangSmith 라이선스 지원",
    priceNormal: "1,500,000원",
    priceDiscount: "1,150,000원",
    discountRate: "23%",
    icon: "layers",
    heroDesc: "단순 래퍼(Wrapper) 앱을 넘어 엔터프라이즈 레벨의 AI 서비스를 만듭니다. 수천 페이지의 사내 비정형 문서를 정확하게 인덱싱하는 Advanced RAG와 도구를 스스로 판단하고 실행하는 자율 멀티 에이전트 시스템을 직접 개발합니다.",
    targets: [
      "실제 사내 데이터 기반 AI 챗봇 및 검색 서비스를 구축해야 하는 풀스택/백엔드 개발자",
      "LangChain, LlamaIndex를 다뤄봤으나 프로덕션 레벨 품질 튜닝에 애를 먹는 엔지니어",
      "AI 에이전트 기반의 차세대 SaaS 서비스를 런칭하고자 하는 테크 창업가",
      "최신 RAG(검색 증강 생성) 아키텍처와 LLMOps 파이프라인을 정복하고 싶은 AI 개발자"
    ],
    skills: ["LangChain v0.3", "LangGraph", "LlamaIndex", "Chroma & Pinecone", "Advanced RAG (HyDE, Re-ranking)", "FastAPI", "LangSmith"],
    projects: [
      {
        title: "엔터프라이즈 사내 문서 Q&A 및 고성능 RAG 엔진",
        desc: "복잡한 PDF/표/도표를 포함한 문서를 정밀 파싱하고 Re-ranking을 적용한 신뢰도 99% RAG 구축"
      },
      {
        title: "자율 웹 리서치 및 코드 작성 멀티 에이전트 시스템",
        desc: "기획자, 리서처, 코더 에이전트가 LangGraph로 소통하며 요구사항 명세서를 자동 구현하는 시스템"
      },
      {
        title: "상용 배포 가능한 LLM 애플리케이션 풀스택 서비스",
        desc: "Next.js 프론트엔드 + FastAPI 백엔드 + 스트리밍 응답(SSE) + LangSmith 모니터링 연동"
      }
    ],
    curriculum: [
      {
        week: "1주차",
        title: "모던 LLM 애플리케이션 아키텍처 및 API 생태계 심층 분석",
        details: [
          "OpenAI, Claude, 오픈소스 LLM(Llama 3, Mistral)의 API 파라미터 및 가격/성능 트레이드오프",
          "로컬 LLM 실행 환경: Ollama와 vLLM을 활용한 고속 추론 인프라 구축",
          "스트리밍 응답(Server-Sent Events)과 비동기 비즈니스 로직 설계",
          "토큰 최적화 및 레이트 리밋(Rate Limit) 대응 아키텍처"
        ]
      },
      {
        week: "2주차",
        title: "LangChain v0.3 핵심 컴포넌트 완벽 해부 (LCEL)",
        details: [
          "LangChain Expression Language (LCEL)의 선언적 파이프라인 구성법",
          "Prompt Templates, Output Parsers (Pydantic 객체 강제화)",
          "다양한 메모리 전략: ConversationBuffer, SummaryMemory, VectorStore Retreiver Memory",
          "비동기 배치 실행(abatch, astream)과 폴백(Fallback) 처리 전략"
        ]
      },
      {
        week: "3주차",
        title: "임베딩(Embedding) 원리와 Vector Database 정복",
        details: [
          "텍스트 임베딩 모델(OpenAI text-embedding-3, BGE, E5)의 원리와 성능 비교",
          "코사인 유사도, 유클리디안 거리, HNSW 인덱싱 알고리즘 이해",
          "오픈소스 Vector DB(Chroma, Qdrant)와 클라우드 관리형(Pinecone, Milvus) 실전 구축",
          "메타데이터 필터링(Hybrid Search)을 활용한 정확도 개선 실습"
        ]
      },
      {
        week: "4주차",
        title: "Advanced RAG: 검색 증강 생성의 품질 극대화 전략",
        details: [
          "청킹(Chunking) 전략: 고정 크기 청킹 vs 의미론적 청킹(Semantic Chunking)",
          "쿼리 변환 기법: 멀티 쿼리 생성, HyDE (Hypothetical Document Embeddings)",
          "Re-ranking: Cohere Rerank 및 Cross-Encoder를 활용한 검색 결과 순위 재조정",
          "컨텍스트 압축(Contextual Compression) 및 불필요 토큰 제거 기법"
        ]
      },
      {
        week: "5주차",
        title: "LlamaIndex를 활용한 비정형 문서 인덱싱 & 데이터 에이전트",
        details: [
          "LlamaParse: 복잡한 레이아웃의 PDF, 표, 차트 데이터 완벽 추출",
          "Document, Node, Index 계층 구조 설계 및 지식 그래프(Knowledge Graph) 인덱스",
          "SQL 데이터베이스와 비정형 문서를 결합한 하이브리드 쿼리 엔진 구축",
          "LlamaIndex 서브 퀘스천 쿼리 엔진(Sub-Question Query Engine) 실전"
        ]
      },
      {
        week: "6주차",
        title: "Function Calling과 LangGraph 기반 자율 AI 에이전트",
        details: [
          "LLM의 도구 사용 원리: OpenAI Tools API 및 구조화된 함수 호출",
          "LangGraph의 핵심: 노드(Node), 엣지(Edge), 상태(State) 기반 상태 기계(State Machine)",
          "루프 제어 및 휴먼 인 더 루프(Human-in-the-Loop) 승인 프로세스 설계",
          "에이전트 메모리 지속성(Checkpointer)을 활용한 세션 유지"
        ]
      },
      {
        week: "7주차",
        title: "멀티 에이전트 협업 시스템(Multi-Agent Collaboration)",
        details: [
          "계층형 에이전트 구조: 감독관(Supervisor) 에이전트와 전문 작업자(Worker) 에이전트",
          "에이전트 간 메시지 전달 프로토콜 및 합의 도출 알고리즘",
          "실전 예제: 주식 분석 리포트 자동 작성 멀티 에이전트 팀 구현",
          "FastAPI 기반의 REST API 엔드포인트 패키징"
        ]
      },
      {
        week: "8주차",
        title: "LLMOps: 평가(Evaluation), 모니터링, 프로덕션 배포",
        details: [
          "Ragas 프레임워크를 활용한 RAG 정량 평가(충실도, 답변 관련성, 문맥 회상도)",
          "LangSmith를 활용한 트레이싱(Tracing), 레이턴시 분석, 비용 모니터링",
          "보안 및 안전장치: Prompt Injection 방어 및 PII(개인정보) 마스킹 가드레일",
          "최종 프로젝트 라이브 데모데이 및 기술 포트폴리오 완성"
        ]
      }
    ],
    detailPage: "course-llm-agent.html"
  }
];

const INSTRUCTORS_DATA = [
  {
    name: "produce 김정훈",
    role: "총괄 프로듀서 & AI 엔지니어",
    photo: "images/mentor-kim.svg",
    tags: ["현역 테크 AI R&D", "LLM/RAG 파이프라인", "AI 서비스 프로듀싱"],
    bio: "현역 테크 기업에서 대규모 언어 모델 서빙과 AI 서비스 파이프라인을 총괄 프로듀싱하고 있습니다. 단순한 이론에 그치지 않고, 비즈니스에 즉각 도입 가능한 살아있는 실전 결과물을 이끌어냅니다."
  },
  {
    name: "최수현 멘토",
    role: "생성형 AI & 비즈니스 자동화 수석 멘토",
    photo: "images/mentor-choi.svg",
    tags: ["현역 테크 자동화 리드", "No-Code 마스터", "업무 효율화 컨설턴트"],
    bio: "현역 테크 스타트업에서 자동화 시스템과 생성 AI 워크플로우를 주도하고 있습니다. 50개 이상의 실무 자동화 파이프라인을 구축한 노하우로 비전공자도 단기간에 AI를 무기화하도록 코칭합니다."
  },
  {
    name: "구영회 멘토",
    role: "딥러닝 & LLM 시스템 수석 연구 멘토",
    photo: "images/mentor-koo.svg",
    tags: ["현역 테크 AI 연구소", "컴퓨터 비전 & NLP", "PyTorch Core"],
    bio: "현역 테크 기업 연구소에서 최신 비전/자연어 딥러닝 연구와 산업체 프로젝트를 성공적으로 이끌어왔습니다. 수학적 원리의 명쾌한 시각화와 튼튼한 프로덕션 코드 구현 훈련을 제공합니다."
  }
];

const REVIEWS_DATA = [
  {
    name: "김민지 님",
    role: "스타트업 프로덕트 디자이너 / 생성형 AI 마스터 수료",
    rating: 5,
    content: "비전공자라 처음엔 걱정했는데, 첫 주부터 바로 업무에 써먹을 수 있는 프롬프트 팁이 쏟아졌습니다. 지금은 미드저니로 시안을 만들고 카피라이팅까지 AI로 뚝딱 끝내서 야근이 완전히 사라졌어요!",
    tag: "업무시간 70% 단축"
  },
  {
    name: "최진우 님",
    role: "이커머스 운영 총괄 / 업무 자동화 실전 수료",
    rating: 5,
    content: "매일 아침 2시간씩 걸리던 재고 파악과 주문 CS 회신을 Make와 ChatGPT 연동으로 100% 자동화했습니다. 수강료가 전혀 아깝지 않고 첫 달에 바로 본전 뽑았습니다.",
    tag: "월 40시간 이상 절감"
  },
  {
    name: "이강민 님",
    role: "백엔드 3년차 개발자 / LLM 서비스 & RAG 수료",
    rating: 5,
    content: "사내에서 생성형 AI 기반 검색 프로젝트를 맡았는데 방향을 못 잡던 중 이 강의를 만났습니다. LangChain과 Advanced RAG의 본질을 짚어주셔서 회사 프로젝트를 완벽하게 배포했습니다.",
    tag: "사내 프로젝트 성공 배포"
  },
  {
    name: "박서연 님",
    role: "데이터 분석 희망 취준생 / 딥러닝 코어 부트캠프 수료",
    rating: 5,
    content: "책으로만 보던 역전파와 CNN, Transformer를 주차별로 손코딩하며 원리를 깨달았습니다. 완성한 포트폴리오 덕분에 원하던 AI 스타트업 머신러닝 엔지니어로 최종 합격했습니다!",
    tag: "원하던 AI 스타트업 취업"
  }
];

const FAQS_DATA = [
  {
    q: "비전공자나 코딩을 전혀 모르는 사람도 수강할 수 있나요?",
    a: "네, 물론입니다! '생성형 AI & 프롬프트 엔지니어링 마스터' 과정과 '업무 자동화 & 노코드 실전' 과정은 코딩 지식이 전혀 없는 입문자/직장인을 위해 설계되었습니다. 마우스 클릭과 자연어 프롬프트만으로 강력한 AI 도구를 다룰 수 있도록 1:1 맞춤 지도해 드립니다."
  },
  {
    q: "실시간 수업을 놓치면 어떻게 하나요? 다시보기가 제공되나요?",
    a: "모든 수업은 고화질 녹화본이 제공되며, 수강생 전용 학습 대시보드에서 평생 무제한으로 다시 보실 수 있습니다. 부득이하게 결석하시더라도 복습 영상과 전용 슬랙 Q&A 핫라인을 통해 진도를 완벽히 따라잡을 수 있습니다."
  },
  {
    q: "온라인과 오프라인 중 어떻게 참여하나요?",
    a: "본인의 일정에 맞게 자유롭게 선택하실 수 있는 하이브리드 방식입니다. 강남 메인 캠퍼스에서 현장 직강으로 참여하시거나, 실시간 양방향 Zoom 라이브로 원격 참여하실 수 있으며 주차별로 교차 참석도 가능합니다."
  },
  {
    q: "준비해야 할 노트북이나 사양이 있나요?",
    a: "기본적인 웹 브라우저(Chrome 권장)가 구동되는 일반 노트북이면 충분합니다. 딥러닝 및 LLM 고급 과정의 경우, 고사양 하드웨어 구매 부담을 덜어드리기 위해 무료 GPU 클라우드 인스턴스를 수강 기간 동안 무상 지원해 드립니다."
  },
  {
    q: "기업 맞춤 단체 교육이나 세금계산서 발행도 가능한가요?",
    a: "네, 기업 출강 및 단체 수강 할인이 지원되며, 법인카드 결제 및 세금계산서/현금영수증 발행이 모두 가능합니다. 1:1 맞춤 상담 신청서를 남겨주시면 기업 전담 매니저가 당일 안내해 드립니다."
  }
];
