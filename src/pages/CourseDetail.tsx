import { useParams, Link } from "react-router-dom";
import { getCourseById } from "@/data/courseData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Users, Clock, Mail, User, BookOpen, Target, CheckCircle, ExternalLink } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = id ? getCourseById(id) : undefined;

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">과정을 찾을 수 없습니다</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              메인으로 돌아가기
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const levelLabels = {
    expert: "전문가",
    advanced: "고급",
    intermediate: "중급",
    beginner: "초급",
  };

  const categoryLabels = {
    offline: "집합 & e-러닝 과정",
    elice: "엘리스 온라인 과정",
    udemy: "Udemy",
    genai: "전사 생성형 AI 과정",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-8 px-8 shadow-lg">
        <div className="max-w-[1200px] mx-auto">
          <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            체계도로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
              {levelLabels[course.level]}
            </Badge>
            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
              {categoryLabels[course.category]}
            </Badge>
            {course.isNew && (
              <Badge className="bg-badge-new text-foreground">신규</Badge>
            )}
            {course.isSelection && (
              <Badge className="bg-badge-selection text-white">선발</Badge>
            )}
          </div>
          {/* Udemy 수강신청 버튼 */}
          {course.udemyUrl && (
            <div className="mt-4">
              <a href={course.udemyUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#a435f0] hover:bg-[#8710d8] text-white font-semibold px-6 py-2">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  과정 개요 확인 및 수강신청
                </Button>
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto py-8 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* 학습 목표 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  학습 목표
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {course.objectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 shrink-0" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* 커리큘럼 */}
            {course.modules && course.modules.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    커리큘럼
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {course.modules.map((module, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 bg-muted rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-primary bg-primary/10 px-2 py-1 rounded text-sm">
                            {module.id}
                          </span>
                          <span>{module.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{module.type}</Badge>
                          {module.hours && (
                            <span className="text-sm text-muted-foreground">
                              {module.hours}시간
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 이수기준 */}
            {course.criteria && (
              <Card>
                <CardHeader>
                  <CardTitle>이수기준</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-primary">
                        {course.criteria.standard}
                      </div>
                      <div className="text-sm text-muted-foreground">기준</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-sm font-medium">{course.criteria.ratio}</div>
                      <div className="text-sm text-muted-foreground">비율</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-sm font-medium">{course.criteria.passScore}</div>
                      <div className="text-sm text-muted-foreground">이수점수</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 특이사항 */}
            {course.notes && course.notes.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>특이사항</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {course.notes.map((note, idx) => (
                      <li key={idx}>• {note}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Info Sidebar */}
          <div className="space-y-6">
            {/* 교육 정보 */}
            <Card>
              <CardHeader>
                <CardTitle>교육 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">교육대상</div>
                    <div className="font-medium">{course.target}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">학습형태</div>
                    <div className="font-medium">{course.format}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">교육장소</div>
                    <div className="font-medium">{course.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">교육정원</div>
                    <div className="font-medium">{course.capacity}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">교육기간</div>
                    <div className="font-medium">{course.duration}</div>
                  </div>
                </div>
                {course.cost && (
                  <div className="flex items-start gap-3">
                    <span className="text-muted-foreground">₩</span>
                    <div>
                      <div className="text-sm text-muted-foreground">교육비용</div>
                      <div className="font-medium">{course.cost}</div>
                    </div>
                  </div>
                )}
                {course.requirements && (
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <div className="text-sm text-muted-foreground">참가요건</div>
                      <div className="font-medium">{course.requirements}</div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 일정 안내 */}
            {(course.schedule || course.scheduleNote) && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    일정 안내
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {course.schedule && course.schedule.length > 0 ? (
                    <div className="space-y-2">
                      {course.schedule.map((sched, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center p-2 bg-muted rounded"
                        >
                          <span className="font-medium">{sched.session}</span>
                          <span className="text-muted-foreground">{sched.period}</span>
                        </div>
                      ))}
                    </div>
                  ) : course.scheduleNote ? (
                    <p className="text-muted-foreground">{course.scheduleNote}</p>
                  ) : null}
                </CardContent>
              </Card>
            )}

            {/* 담당자 정보 */}
            {course.manager && (
              <Card>
                <CardHeader>
                  <CardTitle>담당자</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {course.instructor && (
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="text-sm text-muted-foreground">강사</div>
                        <div className="font-medium">{course.instructor}</div>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">담당자</div>
                      <div className="font-medium">{course.manager.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <div className="text-sm text-muted-foreground">이메일</div>
                      <a
                        href={`mailto:${course.manager.email}`}
                        className="font-medium text-primary hover:underline"
                      >
                        {course.manager.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* 후속과정 */}
            {course.nextCourses && course.nextCourses.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>권장 후속 과정</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {course.nextCourses.map((nextId, idx) => {
                      const nextCourse = getCourseById(nextId);
                      return nextCourse ? (
                        <Link
                          key={idx}
                          to={`/course/${nextId}`}
                          className="block p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                        >
                          <span className="text-primary hover:underline">
                            {nextCourse.title}
                          </span>
                        </Link>
                      ) : null;
                    })}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 mt-8">
        <div className="max-w-[1200px] mx-auto px-8 text-center text-sm text-muted-foreground">
          © 2026 Manufacturing AX Training System. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CourseDetail;
