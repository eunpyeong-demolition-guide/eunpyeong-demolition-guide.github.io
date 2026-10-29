# 은평구 철거업체 — 반응형 홈페이지

전달받은 원고와 실제 시공 사진 4장으로 제작한, 별도 서버가 필요 없는 정적 반응형 홈페이지입니다.

## 수정 사항 (2026-10-29)

- 헤더를 `position: fixed`로 변경. 스크롤 중 헤더, 사이트명, 견적 상담 버튼이 화면 상단에 유지됩니다. 1440/390/320px 화면에서 확인했습니다.
- 사이트명 **은평구 철거업체**를 헤더·H1·`title`·`application-name`·`og:site_name`·WebSite 스키마에 일치시켰습니다.
- 과도한 업체명 반복을 제거하되 **실제 서비스 제공 업체는 점포리턴**임을 실적 안내와 푸터에 유지합니다. 사이트명을 독립적인 법적 업체명으로 오인시키지 않도록 합니다.
- 철거 견적 상담 준비 목록을 새로 추가해 은평구 검색 이용자가 실제로 필요한 정보를 확인하도록 했습니다.
- 누적 실적/실제 시공 사진/정부지원 FAQ 및 상담 링크는 기존 내용과 대조하여 유지했습니다.
- **검색 1위, 인덱싱 및 사이트명 표시를 보장하지 않습니다.** 네이버는 고유성·유용성·수집 가능성 등을 종합적으로 평가합니다.


## 파일 구성

- `index.html` — SEO 메타, 구조화 데이터, 홈페이지 콘텐츠
- `style.css` — 반응형 디자인
- `script.js` — 모바일 메뉴
- `assets/hero-demolition.webp` — 생성한 일반 철거 설명 이미지
- `assets/service-*.webp` — 생성한 상가/식당/사무실/원상복구 안내 이미지
- `assets/before_01.webp`, `assets/after_01.webp` — 실제 첫 번째 현장 (동일 쌍)
- `assets/before_02.webp`, `assets/after_02.webp` — 실제 두 번째 현장 (동일 쌍)
- `assets/og-eunpyeong-demolition.webp` — 1200×630 공유 이미지
- `assets/logo.svg`, `favicon.ico`, `favicon.png` — 사이트명 브랜드 아이콘
- `robots.txt`, `sitemap.xml` — 검색엔진 수집 파일

## 확정된 공개 대표 URL

- **사이트명:** 은평구 철거업체
- **공개 대표 URL:** https://eunpyeong-demolition-guide.github.io/
- **GitHub Organization:** `eunpyeong-demolition-guide`
- **GitHub Repository:** `eunpyeong-demolition-guide.github.io`
- 이 ZIP에서는 해당 주소를 **배포 여부와 관계없이 확정된 대표 URL**로 사용합니다. 아직 배포 전이라 주소가 404로 표시될 수 있습니다. 이것은 URL 미확정의 근거가 아닙니다.

## 대표 URL 기반 SEO 적용 현황

- `index.html`: canonical, og:url, og:image, twitter:image, favicon, apple-touch-icon을 위 도메인 기준 절대 URL로 설정했습니다.
- JSON-LD: WebSite / WebPage / Organization / Service의 `@id` 참조, WebSite / WebPage / Service URL, 로고 URL 및 대표 이미지 URL을 위 도메인 기준으로 통일했습니다.
- `robots.txt`: `https://eunpyeong-demolition-guide.github.io/sitemap.xml`을 명시합니다.
- `sitemap.xml`: `https://eunpyeong-demolition-guide.github.io/` 한 개의 주소를 기재했습니다.
- 앞으로 다른 주소를 대표 URL로 사용할 계획이 없다면, 이 값을 임의로 변경하지 마세요.
- **사이트명을 검색결과에 그대로 표시하거나 1위를 달성하는 것은 보장되지 않습니다.**

## GitHub 저장소에 파일 올리기

1. ZIP 압축을 풀어 나온 **모든 파일과 `assets` 폴더**를 저장소 루트에 업로드합니다. ZIP 파일 자체를 올리지 마세요.
2. 최상위에 `index.html`, `style.css`, `assets`가 있어야 합니다.
3. GitHub에서 `Add file → Upload files → Commit changes`를 사용합니다. 기존 파일이 있으면 교체합니다.
4. 저장소 이름은 `eunpyeong-demolition-guide.github.io`입니다. GitHub Pages에 공개하려는 경우 GitHub Pages 설정을 직접 진행하세요.
5. GitHub Pages는 **상업적 거래 유도가 주 목적인 사이트를 무료 호스팅하기 위한 서비스가 아니므로**, 실제 영업용 사용에 앞서 GitHub 정책 적합 여부를 확인하세요: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
6. **이 ZIP은 요청하신 GitHub Pages 도메인용으로 SEO 설정되어 있습니다.** Netlify 등 다른 호스팅 주소에서 홈페이지를 공개할 경우에는 canonical, og:url, robots.txt, sitemap.xml, JSON-LD의 URL을 새로 지정해야 합니다. 대표 URL을 다른 도메인과 혼용하지 마세요.

## 공개 후 URL 및 검색엔진 검증

1. `https://eunpyeong-demolition-guide.github.io/`에서 실제 페이지가 HTTP 200으로 응답하는지 확인합니다.
2. `https://eunpyeong-demolition-guide.github.io/robots.txt`, `https://eunpyeong-demolition-guide.github.io/sitemap.xml`, `https://eunpyeong-demolition-guide.github.io/favicon.png`, `https://eunpyeong-demolition-guide.github.io/assets/og-eunpyeong-demolition.webp`가 공개 접근되는지 확인합니다.
3. 네이버 서치어드바이저/Google Search Console에 실제 공개 사이트를 등록하고 소유 확인을 진행합니다.
4. 제출 사이트맵: `https://eunpyeong-demolition-guide.github.io/sitemap.xml`.
5. URL 검사에서 대표 페이지의 수집/색인/메타를 확인합니다. 필요한 경우 수집 요청을 합니다.
6. 검색 반영에는 시간이 걸리며 색인·검색 순위·사이트명 표시는 검색엔진이 결정합니다.

## 운영 전 확인사항

- 정부지원사업 FAQ 문장은 제공된 2026-10-20 마감 안내를 그대로 반영했습니다. 실제 공식 공고를 다시 확인하고 이후 모집/변경 시 즉시 갱신하세요. 공식 확인 URL: https://sbiz.or.kr/nhrp/pblanc/pblancView.do?directCall=Y
- 누적 실적 5,540건 이상 / 1,850건 / 2,190건은 **전체 지역 실적**입니다. 집계 기준일과 항목별 중복 여부를 확인하세요.
- 실제 현장 사진은 1↔1, 2↔2로만 비교합니다. 현장 위치·공사비·업종은 표시하지 않습니다.
- 견적 상담 구글폼 URL의 실제 접수 담당자 및 점포리턴과의 운영 관계를 공개 전에 확인하세요.
- 연락처·사업자등록번호·지사 운영 여부 등 확인되지 않은 사실은 게시하지 않았습니다.
- 서비스 영역의 이미지와 히어로 이미지는 생성한 설명용 이미지이며 시공 실적 증빙으로 사용하지 않습니다.
- 구글폼 상담 링크는 상단/히어로/비용/하단에 연결했고 상세페이지 링크는 푸터에 한 번만 연결했습니다.
- 로컬 미리보기: `index.html`을 브라우저에서 열면 대부분의 스타일과 이미지를 확인할 수 있습니다. 검색엔진 테스트는 실제 호스팅 배포 이후에 진행하세요.
