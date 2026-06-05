import { useEffect, useMemo, useState } from "react";
import {
  Award,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  Cog,
  Database,
  FileText,
  Github,
  History,
  Image as ImageIcon,
  KeyRound,
  Layers,
  Mail,
  MapPin,
  Menu,
  MessageSquareText,
  Monitor,
  NotebookText,
  Phone,
  RefreshCw,
  Route,
  Search,
  Send,
  Server,
  ShieldCheck,
  ShoppingBag,
  Upload,
  Users,
  X,
} from "lucide-react";
import {
  awards,
  certificates,
  highlights,
  navigation,
  profile,
  projects,
  skills,
  timeline,
} from "./data/portfolio.js";
import { fashionMallDetail } from "./data/fashionmall.js";

function Header({ mode = "home" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const isDetail = mode === "detail";
  const scrollToSection = (section, behavior = "smooth") => {
    const top = Math.max(section.offsetTop - 88, 0);
    const scrollElement = document.scrollingElement || document.documentElement;

    if (behavior === "smooth") {
      window.scrollTo({ top, behavior });
      return;
    }

    window.scrollTo(0, top);
    scrollElement.scrollTop = top;
    document.documentElement.scrollTop = top;
    document.body.scrollTop = top;
  };

  useEffect(() => {
    if (isDetail) {
      setActiveId("projects");
      return undefined;
    }

    const sectionIds = navigation.map((item) => item.id);
    let frameId = 0;
    let hashTimerId = 0;
    let hashRetryTimerId = 0;
    let hashLateRetryTimerId = 0;

    const updateActiveSection = () => {
      const scrollPoint = window.scrollY + 140;
      let currentId = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= scrollPoint) {
          currentId = id;
        }
      });

      setActiveId(currentId);
    };

    const scrollToHashSection = () => {
      const targetId = window.location.hash.replace("#", "");

      if (!targetId || !sectionIds.includes(targetId)) {
        return false;
      }

      const section = document.getElementById(targetId);

      if (!section) {
        return false;
      }

      scrollToSection(section, "auto");
      setActiveId(targetId);
      return true;
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    const requestHashUpdate = () => {
      window.clearTimeout(hashTimerId);
      window.clearTimeout(hashRetryTimerId);
      window.clearTimeout(hashLateRetryTimerId);

      const syncHashSection = () => {
        if (scrollToHashSection()) {
          return;
        }

        updateActiveSection();
      };

      hashTimerId = window.setTimeout(syncHashSection, 80);
      hashRetryTimerId = window.setTimeout(syncHashSection, 320);
      hashLateRetryTimerId = window.setTimeout(syncHashSection, 900);
    };

    updateActiveSection();
    requestHashUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestHashUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(hashTimerId);
      window.clearTimeout(hashRetryTimerId);
      window.clearTimeout(hashLateRetryTimerId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestHashUpdate);
    };
  }, [isDetail]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const handleNavClick = (event, item) => {
    setActiveId(item.id);
    closeMenu();

    if (isDetail) {
      return;
    }

    const section = document.getElementById(item.id);

    if (!section) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", `#${item.id}`);
    scrollToSection(section);
  };

  return (
    <header className="site-header">
      <a className="brand" href={isDetail ? "/" : "#home"} onClick={closeMenu} aria-label="홈으로 이동">
        <span className="brand-mark">JP</span>
        <span>
          <strong>{profile.nameKo}</strong>
          <small>{profile.role}</small>
        </span>
      </a>

      <button
        className="icon-button menu-button"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav className={`nav-panel ${isOpen ? "is-open" : ""}`} aria-label="주요 메뉴">
        {navigation.map((item) => (
          <a
            key={item.id}
            className={activeId === item.id ? "is-active" : ""}
            href={isDetail ? `/#${item.id}` : `#${item.id}`}
            onClick={(event) => handleNavClick(event, item)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function FashionMallDetail() {
  return (
    <>
      <Header mode="detail" />
      <main>
        <section className="detail-hero section-shell">
          <div className="detail-hero-copy">
            <p className="eyebrow">Project Detail</p>
            <h1>{fashionMallDetail.title}</h1>
            <p>{fashionMallDetail.subtitle}</p>
            <div className="detail-meta-grid">
              <span>
                <strong>기간</strong>
                {fashionMallDetail.period}
              </span>
              <span>
                <strong>팀</strong>
                {fashionMallDetail.team}
              </span>
              <span>
                <strong>역할</strong>
                {fashionMallDetail.role}
              </span>
            </div>
            <div className="hero-actions">
              {fashionMallDetail.links.map((link) => {
                const isExternal = /^https?:\/\//.test(link.href);
                return (
                  <a
                    className={isExternal ? "secondary-button" : "primary-button"}
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                  >
                    {link.label}
                    <ArrowUpRight size={17} />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="detail-hero-media">
            <img src={fashionMallDetail.heroImage} alt="Fashion Mall 메인 화면" />
          </div>
        </section>

        <section className="section-shell detail-section">
          <SectionHeading
            kicker="Overview"
            title="쇼핑몰의 핵심 구매 흐름을 백엔드 중심으로 구현했습니다"
            description={fashionMallDetail.overview.join(" ")}
          />
          <div className="detail-grid three">
            {fashionMallDetail.techGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-title">
                  <Code2 size={20} aria-hidden="true" />
                  <h3>{group.title}</h3>
                </div>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-muted detail-section">
          <SectionHeading
            kicker="Features"
            title="회원부터 주문/결제까지 도메인을 나눠 구현했습니다"
            description="요구사항과 핵심 기능을 도메인 단위로 나누고, 각 기능이 주문 흐름 안에서 자연스럽게 이어지도록 구성했습니다."
          />
          <div className="feature-grid">
            {fashionMallDetail.features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <img src={feature.image} alt={`${feature.title} 요구사항`} />
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell detail-section">
          <SectionHeading
            kicker="Screens"
            title="화면 설계와 구현 흐름"
            description="주요 화면을 기능 단위로 정리해 사용자가 상품을 탐색하고 주문하는 경로를 확인할 수 있도록 했습니다."
          />
          <div className="screen-grid">
            {fashionMallDetail.screens.map((screen) => (
              <article className="screen-card" key={screen.title}>
                <img src={screen.image} alt={screen.title} />
                <h3>{screen.title}</h3>
                <p>{screen.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-muted detail-section">
          <SectionHeading
            kicker="Flow"
            title="사용자 플로우별 구현 상세"
            description="기능 소개는 실제 화면과 함께 배치해 어떤 백엔드 기능이 어떤 사용자 행동과 연결되는지 드러나도록 정리했습니다."
          />
          <div className="flow-list">
            {fashionMallDetail.flows.map((flow) => (
              <article className="flow-card" key={flow.title}>
                <div className="flow-images">
                  {flow.images.map((image) => (
                    <img src={image} alt={`${flow.title} 화면`} key={image} />
                  ))}
                </div>
                <div>
                  <h3>{flow.title}</h3>
                  <p>{flow.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell detail-section">
          <SectionHeading
            kicker="Database"
            title="도메인 관계를 중심으로 DB를 설계했습니다"
            description="회원, 상품, 옵션, 쿠폰, 주문, 결제, 리뷰 등 쇼핑몰 핵심 도메인의 관계를 기준으로 데이터 구조를 정리했습니다."
          />
          <div className="wide-image-card">
            <img src={fashionMallDetail.dbImage} alt="Fashion Mall DB 설계" />
          </div>
        </section>

        <section className="section-shell section-muted detail-section">
          <SectionHeading
            kicker="Troubleshooting"
            title="타입 안정성과 배포 안정성을 개선했습니다"
            description="프로젝트 중 마주친 문제를 증상, 원인, 해결 방식으로 정리했습니다."
          />
          <div className="trouble-list">
            {fashionMallDetail.troubleshooting.map((item) => (
              <article className="trouble-card" key={item.title}>
                <h3>{item.title}</h3>
                <dl>
                  <div>
                    <dt>목표</dt>
                    <dd>{item.goal}</dd>
                  </div>
                  <div>
                    <dt>문제</dt>
                    <dd>{item.problem}</dd>
                  </div>
                  <div>
                    <dt>해결</dt>
                    <dd>{item.solution}</dd>
                  </div>
                </dl>
                {item.code ? <pre className="code-card"><code>{item.code}</code></pre> : null}
                {item.images ? (
                  <div className="trouble-images">
                    {item.images.map((image) => (
                      <img src={image} alt={`${item.title} 참고 이미지`} key={image} />
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="detail-closing section-shell">
          <ShoppingBag size={28} aria-hidden="true" />
          <h2>프로젝트를 마치며</h2>
          <p>{fashionMallDetail.reflection}</p>
          <a className="primary-button" href="/#projects">
            프로젝트 목록으로
            <ArrowUpRight size={17} />
          </a>
        </section>
      </main>
    </>
  );
}

function SectionHeading({ kicker, title, description }) {
  return (
    <div className="section-heading">
      <span>{kicker}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section section-shell">
      <div className="hero-copy">
        <p className="eyebrow">Backend · Web · Problem Solving</p>
        <h1>
          {profile.nameEn}
          <span>{profile.role}</span>
        </h1>
        <p className="hero-description">{profile.headline}</p>
        <div className="hero-actions" aria-label="프로필 링크">
          <a className="primary-button" href={`mailto:${profile.email}`}>
            <Mail size={18} />
            Email
          </a>
          <a className="secondary-button" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            GitHub
          </a>
          <a className="secondary-button" href={profile.blog} target="_blank" rel="noreferrer">
            <NotebookText size={18} />
            Blog
          </a>
        </div>
      </div>

      <div className="hero-profile" aria-label="프로필 사진">
        <img src={profile.image} alt={`${profile.nameKo} 프로필`} />
        <div>
          <strong>{profile.nameKo}</strong>
          <ul aria-label="간단 프로필 정보">
            {profile.personalInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        kicker="About"
        title="처음부터 끝까지 맥락을 놓치지 않는 개발자"
        description={profile.summary}
      />
      <div className="highlight-grid">
        {highlights.map((item) => (
          <article className="info-card" key={item.title}>
            <MessageSquareText size={22} aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell section-muted">
      <SectionHeading
        kicker="Skills"
        title="복잡한 서비스 상태를 백엔드 중심으로 설계합니다"
        description="Spring Boot와 FastAPI 기반 API 개발, 데이터 정합성, 실시간 동기화, 외부 시스템 연동, 운영 안정성까지 백엔드 플로우 전반을 다룹니다."
      />
      <div className="skill-grid">
        {skills.map((group) => (
          <article className="skill-card" key={group.category}>
            <div className="skill-card-title">
              <Code2 size={20} aria-hidden="true" />
              <h3>{group.category}</h3>
            </div>
            <div className="tag-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            {group.note ? <p className="skill-note">{group.note}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section id="credentials" className="section-shell">
      <SectionHeading
        kicker="Credentials"
        title="학습 성과와 프로젝트 결과로 검증했습니다"
        description="자격 취득과 SSAFY 프로젝트 수상 경험을 통해 학습한 내용을 실제 서비스 구현 결과로 연결했습니다."
      />
      <div className="credential-grid">
        <article className="credential-panel">
          <div className="credential-title">
            <BadgeCheck size={21} aria-hidden="true" />
            <h3>Certificates</h3>
          </div>
          <div className="credential-list">
            {certificates.map((item) => (
              <div className="credential-item" key={item.title}>
                <span>{item.date}</span>
                <strong>{item.title}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="credential-panel">
          <div className="credential-title">
            <Award size={21} aria-hidden="true" />
            <h3>Awards</h3>
          </div>
          <div className="credential-list">
            {awards.map((item) => (
              <div className="credential-item" key={`${item.date}-${item.title}`}>
                <span>{item.date}</span>
                <strong>{item.title}</strong>
                <small>{item.issuer}</small>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function ProjectCard({ project, priority }) {
  const [openDecision, setOpenDecision] = useState(project.decisions[0]?.title ?? "");
  const [isExpanded, setIsExpanded] = useState(false);
  const projectLinks = useMemo(
    () =>
      project.links.map((link) => ({
        ...link,
        isExternal: /^https?:\/\//.test(link.href),
      })),
    [project.links],
  );

  return (
    <article className="project-card">
      <div className="project-image-wrap">
        {project.image ? (
          <img src={project.image} alt={`${project.title} 화면`} loading={priority ? "eager" : "lazy"} />
        ) : (
          <div className="project-visual" aria-label={`${project.title} 프로젝트 요약 이미지`}>
            <span>{project.title}</span>
            <strong>{project.visualLabel ?? "Backend Project"}</strong>
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span>{project.period}</span>
          <span>{project.team}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-links">
          {projectLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noreferrer" : undefined}
            >
              {link.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>

        <div className="tag-list project-tags">
          {project.tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <button
          className="project-toggle"
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? "핵심 기여 접기" : "핵심 기여 보기"}
        </button>

        {isExpanded ? (
          <div className="project-foldout">
            <div>
              <h4>Contribution</h4>
              <ul className="contribution-list compact">
                {project.contributions.slice(0, 4).map((item) => {
                  const title = typeof item === "string" ? item : item.title;

                  return (
                    <li key={title}>
                      <strong>{title}</strong>
                    </li>
                  );
                })}
              </ul>
            </div>

            {project.decisions.length > 0 ? (
              <div>
                <h4>Decision</h4>
                <div className="decision-list">
                  {project.decisions.map((decision) => {
                    const isOpen = openDecision === decision.title;
                    return (
                      <div className="decision-item" key={decision.title}>
                        <button
                          type="button"
                          onClick={() => setOpenDecision(isOpen ? "" : decision.title)}
                          aria-expanded={isOpen}
                        >
                          {decision.title}
                        </button>
                        {isOpen ? <p>{decision.body}</p> : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function DetailText({ value }) {
  if (Array.isArray(value)) {
    return (
      <ul className="detail-bullet-list">
        {value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p>{value}</p>;
}

const diagramTones = ["blue", "mint", "violet", "amber", "teal"];

function getDiagramIcon(item = {}) {
  const iconText = [item.icon, item.label, item.detail].filter(Boolean).join(" ").toLowerCase();

  if (/telegram|bot|봇/.test(iconText)) return Bot;
  if (/admin|client|monitor|관리자|화면|사용자|요청/.test(iconText)) return Monitor;
  if (/ai|qwen|llm|ocr|vision|추론/.test(iconText)) return BrainCircuit;
  if (/image|이미지|사진/.test(iconText)) return ImageIcon;
  if (/csv|upload|업로드|파일/.test(iconText)) return Upload;
  if (/food|search|검색|조회|후보/.test(iconText)) return Search;
  if (/polygon|postgis|gps|map|distance|route|필지|위치|공간|거리/.test(iconText)) return MapPin;
  if (/redis|db|database|postgres|mysql|저장소|storage|writer/.test(iconText)) return Database;
  if (/history|revision|이력/.test(iconText)) return History;
  if (/config|layer|계층|service|서비스|policy|정책|rule|규칙/.test(iconText)) return Layers;
  if (/api|server|spring|fastapi|backend|백엔드/.test(iconText)) return Server;
  if (/lock|key|idempotency|guard|version|replay|검증|차단/.test(iconText)) return KeyRound;
  if (/security|shield|승인|보호|안전/.test(iconText)) return ShieldCheck;
  if (/worker|retry|재시도|dispatch|delivery|outbox|발송|전달/.test(iconText)) return Send;
  if (/presence|online|user|유저|참여/.test(iconText)) return Users;
  if (/완료|result|결과|확정|응답/.test(iconText)) return CheckCircle2;
  if (/정리|cleanup|refresh|복원|sync/.test(iconText)) return RefreshCw;
  if (/문서|document|로그|command/.test(iconText)) return FileText;
  if (/batch|processor|reader/.test(iconText)) return Cog;
  if (/route/.test(iconText)) return Route;

  return Code2;
}

function FlowDiagram({ visual }) {
  const flowColumns = visual.nodes
    .flatMap((_, index) => (index < visual.nodes.length - 1 ? ["minmax(0, 1fr)", "32px"] : ["minmax(0, 1fr)"]))
    .join(" ");

  return (
    <div className="trouble-visual flow-visual" aria-label={visual.title}>
      <div className="visual-title">{visual.title}</div>
      <div className="flow-chain" style={{ gridTemplateColumns: flowColumns }}>
        {visual.nodes.flatMap((node, index) => {
          const Icon = getDiagramIcon(node);
          const elements = [
            <div className="flow-segment" key={`${visual.title}-${node.label}`}>
              <div className={`flow-node tone-${node.tone ?? diagramTones[index % diagramTones.length]}`}>
                <span className="diagram-icon-badge">
                  <Icon size={26} strokeWidth={2.2} />
                </span>
                <span className="flow-node-copy">
                  <strong>{node.label}</strong>
                  {node.detail ? <span>{node.detail}</span> : null}
                </span>
              </div>
            </div>,
          ];

          if (index < visual.nodes.length - 1) {
            elements.push(
              <span className="flow-arrow" aria-hidden="true" key={`${visual.title}-${node.label}-arrow`}>
                <ArrowRight size={28} strokeWidth={3} />
              </span>,
            );
          }

          return elements;
        })}
      </div>
    </div>
  );
}

function StructureDiagram({ visual }) {
  return (
    <div className="trouble-visual structure-visual" aria-label={visual.title}>
      <div className="visual-title">{visual.title}</div>
      <div className="structure-stage">
        {visual.groups.map((group, groupIndex) => {
          const tone = group.tone ?? diagramTones[groupIndex % diagramTones.length];

          return (
            <div className="structure-segment" key={`${visual.title}-${group.title}`}>
              <div className={`structure-group group-tone-${tone}`}>
                <div className="structure-group-title">{group.title}</div>
                <div className="structure-items">
                  {group.items.map((item) => {
                    const Icon = getDiagramIcon(item);

                    return (
                      <div
                        className={`structure-item tone-${item.tone ?? tone}`}
                        key={`${group.title}-${item.label}`}
                      >
                        <span className="structure-item-icon">
                          <Icon size={24} strokeWidth={2.2} />
                        </span>
                        <span className="structure-item-copy">
                          <strong>{item.label}</strong>
                          <span>{item.detail}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {groupIndex < visual.groups.length - 1 ? (
                <span className="structure-arrow" aria-hidden="true">
                  <ArrowRight size={32} strokeWidth={3} />
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
      {visual.note ? <div className="diagram-note">{visual.note}</div> : null}
    </div>
  );
}

function TroubleVisual({ visual }) {
  if (!visual) {
    return null;
  }

  if (visual.type === "structure") {
    return <StructureDiagram visual={visual} />;
  }

  return <FlowDiagram visual={visual} />;
}

function GenericProjectDetail({ project }) {
  const projectLinks = project.links.filter((link) => link.label !== "Detail");
  const troubleshooting = project.troubleshooting ?? [];

  return (
    <>
      <Header mode="detail" />
      <main>
        <section className="detail-hero section-shell">
          <div className="detail-hero-copy">
            <p className="eyebrow">Project Detail</p>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="detail-meta-grid">
              <span>
                <strong>기간</strong>
                {project.period}
              </span>
              <span>
                <strong>역할</strong>
                {project.team}
              </span>
            </div>
            <div className="hero-actions">
              {projectLinks.map((link) => {
                const isExternal = /^https?:\/\//.test(link.href);
                return (
                  <a
                    className={isExternal ? "secondary-button" : "primary-button"}
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                  >
                    {link.label}
                    <ArrowUpRight size={17} />
                  </a>
                );
              })}
              <a className="primary-button" href="/#projects">
                Project List
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="detail-visual-card">
            <span>{project.title}</span>
            <strong>{project.visualLabel ?? "Backend Project"}</strong>
          </div>
        </section>

        <section className="section-shell detail-section">
          <SectionHeading
            kicker="Summary"
            title="핵심 백엔드 플로우"
            description={project.summaryLine ?? project.description}
          />
          <div className="tag-list detail-tags">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section-shell section-muted detail-section">
          <SectionHeading
            kicker="Contribution"
            title="주요 기여"
            description="카드에서는 접어둔 상세 구현 내용을 역할과 도메인 중심으로 정리했습니다."
          />
          <div className="detail-contribution-list">
            {project.contributions.map((item) => {
              const title = typeof item === "string" ? item : item.title;
              const body = typeof item === "string" ? "" : item.body;

              return (
                <article className="info-card" key={title}>
                  <Code2 size={22} aria-hidden="true" />
                  <h3>{title}</h3>
                  {body ? <p>{body}</p> : null}
                </article>
              );
            })}
          </div>
        </section>

        {troubleshooting.length > 0 ? (
          <section className="section-shell detail-section">
            <SectionHeading
              kicker="Troubleshooting"
              title="문제 상황을 구현 결과로 연결했습니다"
              description="PDF 포트폴리오의 트러블슈팅 내용을 웹에서도 읽기 쉽도록 문제, 해결 과정, 결과 중심으로 재구성했습니다."
            />
            <div className="trouble-list">
              {troubleshooting.map((item) => (
                <article className="trouble-card rich" key={item.title}>
                  <div className="trouble-card-header">
                    <span>Troubleshooting</span>
                    <h3>{item.title}</h3>
                  </div>

                  {item.metrics ? (
                    <div className="metric-grid">
                      {item.metrics.map((metric) => (
                        <div className="metric-item" key={`${item.title}-${metric.label}`}>
                          <strong>{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <TroubleVisual visual={item.visual} />

                  <dl>
                    <div>
                      <dt>문제</dt>
                      <dd>
                        <DetailText value={item.problem} />
                      </dd>
                    </div>
                    <div>
                      <dt>해결 과정</dt>
                      <dd>
                        <DetailText value={item.solution} />
                      </dd>
                    </div>
                    <div>
                      <dt>결과</dt>
                      <dd>
                        <DetailText value={item.result} />
                      </dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {project.decisions.length > 0 ? (
          <section className="section-shell section-muted detail-section">
            <SectionHeading
              kicker="Decisions"
              title="설계 판단"
              description="트러블슈팅 과정에서 안정성, 정합성, 운영성을 높이기 위해 선택한 설계 포인트입니다."
            />
            <div className="trouble-list">
              {project.decisions.map((decision) => (
                <article className="trouble-card" key={decision.title}>
                  <h3>{decision.title}</h3>
                  <p>{decision.body}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="detail-closing section-shell">
          <ShoppingBag size={28} aria-hidden="true" />
          <h2>{project.title}</h2>
          <p>{project.summaryLine ?? project.description}</p>
          <a className="primary-button" href="/#projects">
            프로젝트 목록으로
            <ArrowUpRight size={17} />
          </a>
        </section>
      </main>
    </>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        kicker="Projects"
        title="구현 경험을 문제 해결 과정까지 보여줍니다"
        description="단순 소개보다 맡은 역할, 의사결정, 개선 포인트가 바로 보이도록 프로젝트 정보를 정리했습니다."
      />
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="timeline" className="section-shell section-muted">
      <SectionHeading
        kicker="Timeline"
        title="학습과 실무 경험이 이어진 성장 과정"
        description="서비스 운영 현장에서 얻은 커뮤니케이션 경험을 개발 학습과 프로젝트로 확장하고 있습니다."
      />
      <div className="timeline">
        {timeline.map((item) => (
          <article className="timeline-item" key={`${item.period}-${item.title}`}>
            <div className="timeline-date">
              <CalendarDays size={18} aria-hidden="true" />
              <span>{item.period}</span>
            </div>
            <div className="timeline-body">
              <h3>{item.title}</h3>
              <strong>{item.subtitle}</strong>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section section-shell">
      <div>
        <SectionHeading
          kicker="Contact"
          title="기술로 실제 문제를 해결하는 일을 하고 싶습니다"
          description="백엔드 개발, 웹 서비스 구현, 프로젝트 협업과 관련된 이야기를 언제든 나눌 수 있습니다."
        />
      </div>
      <div className="contact-actions">
        <a href={`mailto:${profile.email}`}>
          <Mail size={20} />
          {profile.email}
        </a>
        <a href={`tel:${profile.phone.replaceAll("-", "")}`}>
          <Phone size={20} />
          {profile.phone}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github size={20} />
          GitHub
        </a>
        <a href={profile.blog} target="_blank" rel="noreferrer">
          <BriefcaseBusiness size={20} />
          Blog
        </a>
      </div>
    </section>
  );
}

export default function App() {
  const path = window.location.pathname;
  const isFashionMallPage = path.endsWith("/fashionmall.html");
  const detailProject = projects.find((project) => project.detailPath && path.endsWith(project.detailPath));

  if (isFashionMallPage) {
    return <FashionMallDetail />;
  }

  if (detailProject) {
    return <GenericProjectDetail project={detailProject} />;
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Credentials />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </>
  );
}
