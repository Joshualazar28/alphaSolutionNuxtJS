import{_ as g,o as i,c as n,a as t,F as x,r as y,z as M,A as D,b as o,w as c,e as d,t as u,g as a}from"./entry.9b66c61f.js";import{c as E,a as S,b as k}from"./logo.a293d732.js";import O from"./PageTitle.672206ee.js";import{_ as T}from"./nuxt-link.612a8a56.js";import{a as C,b as I}from"./Footer.78eecd43.js";const V={data(){return{currentItem:4,portfolioData:[{imgSrc:"/images/portfolio/1.jpg",title:"Business Management",category:"business"},{imgSrc:"/images/portfolio/2.jpg",title:"Market Statics & Analysis.",category:"marketing"},{imgSrc:"/images/portfolio/3.jpg",title:"Digital Marketing",category:"consulting"},{imgSrc:"/images/portfolio/4.jpg",title:"Business Consultation",category:"digital"},{imgSrc:"/images/portfolio/5.jpg",title:"Link Building Services",category:"business"},{imgSrc:"/images/portfolio/6.jpg",title:"Social Media Marketing",category:"marketing"}]}},computed:{portfolios(){return this.portfolioData.slice(0,this.currentItem)}},methods:{loadMore(){this.currentItem+=2}}},L={class:"portfolio-area"},A={class:"container"},$={class:"row portfolio-grid gutter-50","data-aos":"fade-up","data-aos-duration":"1000"},B={class:"inner-content"},R={class:"thumb"},w=["src","alt"],F={class:"portfolio-info"},N={class:"content"},z=t("img",{class:"shape-line-img",src:E,alt:"shape image"},null,-1),H={class:"title"},W=t("i",{class:"icofont-long-arrow-right"},null,-1),q={class:"portfolio-footer text-center","data-aos":"fade-up","data-aos-duration":"1300"};function G(e,l,h,v,m,_){const s=T;return i(),n("section",L,[t("div",A,[t("div",$,[(i(!0),n(x,null,y(_.portfolios,(r,p)=>(i(),n("div",{class:D(["col-md-6 portfolio-item",r.category]),key:p},[t("div",B,[t("div",R,[o(s,{to:"/project-details"},{default:c(()=>[t("img",{src:r.imgSrc,alt:r.title},null,8,w)]),_:2},1024)]),t("div",F,[t("div",N,[z,t("h3",H,[o(s,{to:"/project-details"},{default:c(()=>[d(u(r.title),1)]),_:2},1024)]),o(s,{to:"/project-details",class:"category"},{default:c(()=>[d(u(r.category),1)]),_:2},1024)]),o(s,{to:"/project-details",class:"btn-icon"},{default:c(()=>[W]),_:1})])])],2))),128))]),t("div",q,[m.currentItem<m.portfolioData.length?(i(),n("button",{key:0,class:"btn btn-theme btn-lg mb-1",onClick:l[0]||(l[0]=(...r)=>_.loadMore&&_.loadMore(...r))},"Load More")):M("",!0)])])])}const f=g(V,[["render",G]]),J=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),K={components:{Header:()=>a(()=>import("./logo.a293d732.js").then(e=>e.H),["./logo.a293d732.js","./entry.9b66c61f.js","./entry.6a726c5e.css","./nuxt-link.612a8a56.js","./logo.fbbbbf35.css"],import.meta.url),OffCanvasMobileMenu:()=>a(()=>import("./logo.a293d732.js").then(e=>e.O),["./logo.a293d732.js","./entry.9b66c61f.js","./entry.6a726c5e.css","./nuxt-link.612a8a56.js","./logo.fbbbbf35.css"],import.meta.url),PageTitle:()=>a(()=>import("./PageTitle.672206ee.js"),["./PageTitle.672206ee.js","./nuxt-link.612a8a56.js","./entry.9b66c61f.js","./entry.6a726c5e.css","./logo.a293d732.js","./logo.fbbbbf35.css"],import.meta.url),PortfolioWrapper:()=>a(()=>Promise.resolve().then(()=>J),void 0,import.meta.url),ContactDevider:()=>a(()=>import("./Footer.78eecd43.js").then(e=>e.C),["./Footer.78eecd43.js","./nuxt-link.612a8a56.js","./entry.9b66c61f.js","./entry.6a726c5e.css","./logo.a293d732.js","./logo.fbbbbf35.css"],import.meta.url),Footer:()=>a(()=>import("./Footer.78eecd43.js").then(e=>e.F),["./Footer.78eecd43.js","./nuxt-link.612a8a56.js","./entry.9b66c61f.js","./entry.6a726c5e.css","./logo.a293d732.js","./logo.fbbbbf35.css"],import.meta.url)}},Q={class:"portfolio-page-wrapper"};function U(e,l,h,v,m,_){const s=S,r=k,p=O,b=f,P=C,j=I;return i(),n("div",Q,[o(s),o(r),o(p,{title:"Projects",breadcrumbTitle:"Projects"}),o(b),o(P),o(j)])}const et=g(K,[["render",U]]);export{et as default};
