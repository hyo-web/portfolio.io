(function(t){function e(e){for(var r,o,n=e[0],i=e[1],c=e[2],p=0,m=[];p<n.length;p++)o=n[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(m.length)m.shift()();return l.push.apply(l,c||[]),s()}function s(){for(var t,e=0;e<l.length;e++){for(var s=l[e],r=!0,n=1;n<s.length;n++){var i=s[n];0!==a[i]&&(r=!1)}r&&(l.splice(e--,1),t=o(o.s=s[0]))}return t}var r={},a={app:0},l=[];function o(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=r,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(s,r,function(e){return t[e]}.bind(null,r));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/portfolio/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],i=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=i;l.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Nav"),s("transition",{attrs:{name:"view",mode:"out-in"}},[s("router-view",{staticClass:"view-area"})],1)],1)},l=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"nav-wrap"},[s("ul",[s("li",[s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{href:"#"}},[t._v("About")])]),s("li",[s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],attrs:{href:"#"}},[t._v("Portfolio")])]),s("li",{staticClass:"active"},[s("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#visual",expression:"'#visual'"}],attrs:{href:"#"}},[s("strong",[t._v("TOP")])])])])])},n=[],i={name:"Nav",data:function(){return{}},mounted:function(){},methods:{}},c=i,u=s("2877"),p=Object(u["a"])(c,o,n,!1,null,"777b330b",null),m=p.exports,d={components:{Nav:m},data:function(){return{}},mounted:function(){},methods:{}},v=d,f=(s("5c0b"),Object(u["a"])(v,a,l,!1,null,null,null)),_=f.exports,b=s("8c4f"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[t._m(0),s("article",{staticClass:"about-wrap",attrs:{id:"about"}},[s("div",{staticClass:"inner-box"},[s("div",{staticClass:"about-box"},[t._m(1),s("div",{staticClass:"info-box"},[s("div",{staticClass:"detail-box"},[s("div",{staticClass:"box"},[s("div",{staticClass:"title-wrap"},[s("h2",{staticClass:"title-type"},[t._v("profile")]),s("span",{staticClass:"career"},[t._v(t._s(t.career)+"년차")])]),t._m(2)]),t._m(3),t._m(4)]),t._m(5)])])])]),s("article",{staticClass:"portfolio-wrap",attrs:{id:"portfolio"}},[t._m(6),s("ul",{staticClass:"list-portfolio"},t._l(t.portfolioList,(function(e,r){return s("li",{key:r},[s("a",{attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),t.modalOpen(e)}}},[s("div",{staticClass:"img-box"},[s("div",{staticClass:"summary-box"},[s("percent-box",{attrs:{percent:e.percent}}),s("div",{staticClass:"text-box"},[t._v(" "+t._s(e.type)+" ")])],1)]),s("div",{staticClass:"info-box"},[s("strong",[t._v(t._s(e.name))])])])])})),0)]),s("portfolio-modal",{attrs:{visible:t.modalVsible,portfolioItem:t.portfolioItem},on:{modalClose:t.modalClose}})],1)},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"visual-wrap",attrs:{id:"visual"}},[s("h1",[s("span",[t._v("Hyo")]),t._v("Portfolio")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"img-box"},[s("div",{staticClass:"img"}),s("div",{staticClass:"desc"},[t._v(" 김효영 33세 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" 디지털다임 UI개발팀 매니저 "),s("span",[t._v("2019.01 ~ 재직중")]),s("br"),t._v(" 해커스교육그룹 웹퍼블리셔팀 사원 "),s("span",[t._v("2015.09 - 2018.12")]),s("br"),t._v(" 모노라움 웹퍼블리셔과정 "),s("span",[t._v("2015.06 – 2015.08")]),s("br"),t._v(" 숭실대학교 글로벌미디어학부 졸업 "),s("span",[t._v("2012.03 - 2015.02")]),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{staticClass:"title-wrap"},[s("h2",{staticClass:"title-type"},[t._v("skill")])]),s("p",[t._v(" HTML5, 웹표준, 크로스브라우징, 반응형 웹, 시멘틱마크업"),s("br"),t._v(" CSS3, Sass"),s("br"),t._v(" Git, SVN, Redmine"),s("br"),t._v(" JavaScript, jQuery, TweenMax"),s("br"),t._v(" npm, Gulp, Webpack, Bootstrap"),s("br"),t._v(" Photoshop, Zeplin, WebStorm, Visual Studio Code"),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{staticClass:"title-wrap"},[s("h2",{staticClass:"title-type"},[t._v("license")])]),s("p",[t._v(" 정보처리기사 "),s("span",[t._v("2014.08")]),s("br"),t._v(" 사무자동화산업기사 "),s("span",[t._v("2011.06")]),s("br"),t._v(" 컴퓨터활용능력 2급 "),s("span",[t._v("2011.06")]),s("br"),t._v(" 멀티미디어콘텐츠제작전문가 "),s("span",[t._v("2009.10")]),s("br"),t._v(" 웹디자인기능사 "),s("span",[t._v("2007.05")]),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"list-about"},[s("li",[s("div",{staticClass:"icon-box"},[t._v("</>")]),s("p",[t._v(" 2015년 웹퍼블리셔 직군으로 시작하여 현재 웹에이전시에서 UI 개발팀 매니저 일하고 있습니다. "),s("br"),t._v("고등학생 때 웹디자인 기능대회에 학교 대표로 참가한 경험으로 나모 웹에디터, 드림위버, 플래시, 테이블 코딩하던 시절을 겪으며 빠르게 변화하는 웹을 가까이 느끼고 있습니다. "),s("br"),t._v("HTML5 시맨틱 구조로 작업을 진행하며 다양한 브라우저와 환경에 일관적인 페이지가 노출될 수 있도록 노력하고 있습니다."),s("br"),t._v(" 제 자리에 머무르는 것이 아닌 항상 웹 트렌드에 신경 쓰고 배우는 자세로 업무에 임하고 있습니다. ")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"title-wrap"},[s("h2",{staticClass:"title-type"},[t._v("portfolio")]),s("div",{staticClass:"side-box"},[s("span",{staticClass:"percent-line"}),t._v("기여도 ")])])}],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{staticClass:"circular-chart",attrs:{viewBox:"0 0 36 36"}},[s("path",{staticClass:"circle",attrs:{"stroke-dasharray":t.percent+", 100",d:"M18 2.0845\n\t\t\ta 15.9155 15.9155 0 0 1 0 31.831\n\t\t\ta 15.9155 15.9155 0 0 1 0 -31.831"}})])},w=[],x=(s("a9e3"),{name:"PercentBox",props:{percent:Number},data:function(){return{}},mounted:function(){},methods:{}}),k=x,S=Object(u["a"])(k,y,w,!1,null,"13c8deb5",null),O=S.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"modal-wrap",class:{active:t.visible}},[s("div",{staticClass:"dim",on:{click:t.modalClose}}),s("div",{staticClass:"modal-box"},[s("div",{staticClass:"modal-header"},[t._v(t._s(t.portfolioItem.name))]),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"info-box"},[s("dl",[s("dt",[t._v("기여도")]),s("dd",[t._v(t._s(t.portfolioItem.percent)+"%")])]),s("dl",[s("dt",[t._v("유형")]),s("dd",[t._v(t._s(t.portfolioItem.type))])]),s("dl",[s("dt",[t._v("기간")]),s("dd",[t._v(t._s(t.portfolioItem.term))])]),s("dl",[s("dt",[t._v("기술")]),s("dd",[t._v(t._s(t.portfolioItem.skill))])])]),s("p",{staticClass:"desc"},[t._v(t._s(t.portfolioItem.desc))]),s("div",{staticClass:"btn-wrap"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.portfolioItem.url,expression:"portfolioItem.url"}],attrs:{href:t.portfolioItem.url,target:"_blank"}},[t._v("페이지 이동")])])]),s("button",{staticClass:"btn-close",on:{click:t.modalClose}},[s("span",{staticClass:"hidden"},[t._v("닫기")])])])])])},g=[],M={name:"PortfolioModal",props:{portfolioItem:Object,visible:Boolean},data:function(){return{}},mounted:function(){},methods:{modalClose:function(){this.$emit("modalClose",!1)}}},j=M,I=Object(u["a"])(j,P,g,!1,null,"9805d016",null),E=I.exports,T=new Date,$={name:"Home",components:{PercentBox:O,PortfolioModal:E},data:function(){return{modalVsible:!1,portfolioItem:{},portfolioList:[{name:"SK텔레콤 T Factory Manager",type:"TABLET",term:"2021.08",percent:100,skill:"html, css",url:"https://code.d2.co.kr/2021/skt_manager/list/",desc:"태블릿 페이지 작업"},{name:"아우디폭스바겐코리아 VW 리드매니지먼트",type:"MO",term:"2021.07",percent:30,skill:"html,css,vuejs",url:"",desc:"vuejs 진행한 프로젝트, 레이아웃 컴포넌트 구조화, 공통 컴포넌트 작업"},{name:"SK텔레콤 T Place",type:"KIOSK / TABLET / 반응형",term:"2019.12 - 2020.02",percent:100,skill:"html,css",url:"",desc:"각종 모션과 차트작업, 키오스크와 태블릿 반응형 작업, 공통 가이드 작업 진행"},{name:"SK네트웍스 Nshop",type:"MO",term:"2019.12 - 2020.02",percent:100,skill:"html,css",url:"",desc:"공통 가이드 작업"},{name:"(주)카버코리아 AHC 국문 쇼핑몰",type:"PC",term:"2019.07 - 2019.10",percent:100,skill:"html,css",url:"",desc:"공통 가이드 작업"},{name:"신세계조선호텔 레스케이프",type:"MO",term:"2019.02 - 2019.04",percent:100,skill:"html,css",url:"",desc:"공통 가이드 작업"},{name:"해커스교육그룹 영문사이트 리뉴얼",type:"PC",term:"2018.09 - 2018.10",percent:100,skill:"html,css",url:"http://www.hackerseducation.com/",desc:"기존에 오래된 해커스닷컴 영문사이트를 새로 구축하는 작업을 하였습니다.\nCSS3와 jQuery를 활용해 다양한 효과를 주어, 기존에 텍스트 위주였던 페이지와 차별화가 느껴지도록 작업하였습니다.\n애니메이션의 각각 컨텐츠별로 간단하게 클래스를 추가하여 가져다 쓸수 있도록 분리 하였으며,\nSass모듈화를 통해 유지관리가 용이하도록 작업하였습니다"},{name:"해커스경영아카데미",type:"PC / MO",term:"2018.09 - 2018.10",percent:40,skill:"html,css",url:"",desc:"해커스교육그룹 템플릿 작업하였습니다.\n공통된 디자인 요소들을 Sass모듈화 작업 가이드화 하여 쉽게 유지보수와 코드의 재활용이 가능하도록 진행하였습니다.\n템플릿 작업으로써 CSS 사용하는 대표컬러와 Sprite 이미지 URL 변수로 사용하여 추후 간단하게 변경 가능하도록 작업 하였습니다.\n웹퍼블리셔 3명 투입 2번째 포지션으로 작업하였으며, 여러사람과 함께 작업하면서 모듈화의 중요성을 깨달았던 작업이었습니다."},{name:"해커스통합회원",type:"MO",term:"2018.06 - 2018.07",percent:40,skill:"html,css",url:"",desc:"해커스 회원 통합 관리하는 사이트이며, 모바일 구축에 참여하였습니다.\n해커스에서 처음으로 Sass를 도입한 프로젝트이며 Sass를 통한 코드 재사용, 변수선언, 모듈화등 배울 수 있어서 의미 있었던 프로젝트였습니다.\n웹퍼블리셔 3명이 투입되었으며, 나의정보 페이지를 작업진행하였습니다.\n그 외 단순한 아이콘을 CSS3로만 작업하여 컬러나 사이즈만 수정하여 재사용 가능하도록 가이드에 참여하였습니다."},{name:"위더스&한울 이러닝 템플릿",type:"PC",term:"2018.02 - 2018.03",percent:100,skill:"html,css",url:"",desc:"기존에 플래시로 되어있던 이러닝 컨텐츠를 HTML로 변환하는 프로젝트에 참여하였습니다.\n템플릿을 만드는 작업이기에 테마 변경이 효율적으로 가능하도록 대표컬러가 있는 모든이미지를 Sprite하여 한번에 수정가능하도록 작업하였습니다."},{name:"해커스 HRD 2017",type:"PC",term:"2017.10 - 2017.12",percent:100,skill:"html,css",url:"",desc:"해커스 교육 서비스(b2b) 템플릿 사이트 구축에 참여하였습니다.\n타이틀, 테이블, 버튼, 아이콘 등 유사한 디자인을 가이드페이지로 정리한 후 작업을 진행하였습니다.\n유사한 부분은 공통으로 선언하고 타입별로 재선언하여 재사용과 유지보수에 용이하도록 하였습니다."},{name:"해커스 중국어 인강 리뉴얼",type:"PC",term:"2018.03 - 2018.06",percent:100,skill:"html,css",url:"",desc:"해커스인강 템플릿 적용 오픈 / 메인 레이지로드 적용 / 이벤트페이지 이전업무 / Git 브랜치 버전관리"},{name:"해커스잡 공기업 리뉴얼",type:"PC / MO",term:"2017.12 - 2018.01",percent:100,skill:"html,css",url:"",desc:"해커스인강 템플릿 적용 오픈 / 메인 레이지로드 적용 / Git 브랜치 버전관리"},{name:"해커스영어 리뉴얼",type:"MO",term:"2017.09 - 2017.11",percent:100,skill:"html,css",url:"",desc:"해커스 커뮤니티 사이트인 해커스영어 모바일 메인 리뉴얼에 참여하였습니다.\n네이버와 유사한 형태로 기획되어 네이버를 참고 하였으며,메뉴 편집기능은 jQuery 플러그인을 커스텀하여 사용하였습니다.\n운영중인 서버에 영향이 가지않도록 브런치를 병합해 나가면서 작업진행을 하였습니다"},{name:"해커스 PREP 리뉴얼",type:"PC / MO",term:"2017.09 - 2017.10",percent:100,skill:"html,css",url:"",desc:"해커스인강 템플릿 적용 오픈 / 메인 레이지로드 적용 / 이벤트페이지 이전업무 / Git 브랜치 버전관리"},{name:"해커스 인강 리뉴얼",type:"PC / MO",term:"2016.03 - 2016.10",percent:30,skill:"html,css",url:"",desc:"페이지 검수 후 오류 수정 / 기존 모든 이벤트페이지 이전 및 관리 / 이벤트 페이지 최적화를 위해 이벤트내 스크립트 공통화, 이미지 용량체크 진행 / 이벤트 관리를 위한 가이드 진행 / 메인 레이지로드 적용"},{name:"해커스 HRD 2016",type:"PC",percent:100,skill:"html,css",url:"http://hackershrd.com/worksheet/guide/table.php",desc:"해커스 교육 서비스(b2b) 템플릿 사이트 구축에 참여하였습니다.\n사수 도움 아래 진행하였고, 그 과정에서 CSS 작성 순서와 방법, 네이밍룰을 배울 수 있었습니다.\n또한 개발자에게 전달해야할 이슈사항을 주석을 남기고, 기획자/디자이너/개발자와 원할하게 커뮤니케이션 하는 방법 등 기본 능력을 익힐 수 있었습니다.",term:"2016.01 ~ 2016.02"}]}},computed:{career:function(){return T.getFullYear()-2015+1}},mounted:function(){console.log(this.orderPortfolio)},methods:{modalOpen:function(t){this.modalVsible=!0,this.portfolioItem=t},modalClose:function(t){this.modalVsible=t}}},N=$,H=Object(u["a"])(N,h,C,!1,null,"4c80cb6c",null),L=H.exports;r["a"].use(b["a"]);var B=[{path:"/",name:"Home",component:L}],V=new b["a"]({mode:"history",base:"/portfolio/",routes:B}),G=V,K=s("2f62");r["a"].use(K["a"]);var R=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=s("f13c");r["a"].config.productionTip=!1,r["a"].use(A),new r["a"]({router:G,store:R,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"9c0c":function(t,e,s){}});
//# sourceMappingURL=app.5aeddc8f.js.map