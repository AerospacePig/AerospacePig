import{u as R,o as d,c as p,a as t,b as H,w as _,v as f,n as S,r as v,d as O,e as q,F as W,f as Y,g as x,t as C,h as F,i as N,p as B,j as T,k as se,l as ae,m as ne,q as oe,s as le,x as k,y as re,z as ce,A as ie}from"./vendor-BY7s2W-i.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const $=(o,c)=>{const s=o.__vccOpts||o;for(const[a,e]of c)s[a]=e;return s},ue={class:"header-describe"},de={__name:"PageHeader",props:{screenSize:String},setup(o){const c=R(),s=()=>{c.push("/")},a=o;return(e,n)=>(d(),p("div",{class:S(["header",{smallWindow:a.screenSize==="small"}])},[t("p",{class:"header-titel",onClick:s},"AerospacePig"),t("p",ue,[H("Write down programming notes, essays, "),_(t("br",null,null,512),[[f,a.screenSize==="small"]]),H("reading notes, and Galgame-related notes.")])],2))}},pe=$(de,[["__scopeId","data-v-58acc721"]]),ve=o=>(B("data-v-67a4d413"),o=o(),T(),o),he={class:"container"},me={key:0},_e=["onClick"],fe=["onClick"],ge=ve(()=>t("hr",null,null,-1)),be={class:"paging"},ye={class:"omit"},Se=["onClick"],$e={class:"omit"},Ce={__name:"Items",props:{classify:String,screenSize:String},setup(o){const c=v(-1),s=v([]),a=v([]),e=v(0),n=R(),u=()=>n.currentRoute.value.name,y=o,I=()=>{n.push("/")},P=l=>{c.value=l,n.push({name:"itemPage",params:{id:l}})},w=l=>{let i=[],m=10;for(let b=0;b<l.length;b+=10)i.push(l.slice(b,m)),m+=10;return i},g=l=>{let i=l.filter(m=>m.top),r=l.filter(m=>!m.top);return[...i,...r]},h=()=>{F.get("/jsons/db_1.json",{headers:{"Content-Type":"application/json"}}).then(l=>{let i=Object.values(l.data);i.shift(),i=g(i),s.value=w(i),a.value=s.value[0],L()})},A=l=>{F.get("/jsons/db_1.json",{headers:{"Content-Type":"application/json"}}).then(i=>{I();let r=Object.values(i.data);r.shift(),r=g(r);const m=r.filter(b=>b.classify===l);s.value=w(m),a.value=s.value[0],L()})};O(()=>y.classify,l=>{l==="首页"?h():A(l)});const j=()=>{e.value>0&&(e.value-=1,a.value=s.value[e.value]),L()},ee=()=>{e.value<s.value.length-1&&(e.value+=1,a.value=s.value[e.value]),L()},E=l=>{(l||l===0)&&(e.value=l,a.value=s.value[l]),L()},D=v(!1),G=v(!1),U=v(!1),K=v(!1),z=v([]),L=()=>{if(z.value=[],s.value.length>=5)D.value=!0,G.value=e.value-1>1,U.value=s.value.length-1>e.value+2,K.value=!0,e.value<=1?z.value.push(2,3):s.value.length-2<=e.value?z.value.push(s.value.length-2,s.value.length-1):z.value.push(e.value,e.value+1,e.value+2);else for(let l=1;l<=s.value.length;l++)z.value.push(l)},te=l=>u()==="home"?!0:c.value===l,V=l=>e.value+1===l;return q(()=>{h()}),(l,i)=>(d(),p("div",he,[(d(!0),p(W,null,Y(a.value,(r,m)=>(d(),p("div",{class:"item",key:m},[te(r.id)?(d(),p("div",me,[t("div",{class:S(["header",{"small-header":y.screenSize==="small"}])},[_(t("span",null,"[置顶]",512),[[f,r.top&&u()==="home"]]),t("h2",{class:S(["title",{"title-1":u()==="home"}]),onClick:b=>P(r.id)},C(r.titel),11,_e)],2),t("div",{class:S(["basic-inf",{"small-basic-inf":y.screenSize==="small"}])},[t("span",{onClick:i[0]||(i[0]=b=>P(l.id=0))},[H("作者: "),t("a",null,C(r.author),1)]),t("span",null,"日期: "+C(r.date),1),t("span",{onClick:b=>A(r.classify)},[H("分类: "),t("a",null,C(r.classify),1)],8,fe)],2),t("div",{class:S(["describe",{"small-describe":y.screenSize==="small"}])},C(r.describe),3),ge])):N("",!0)]))),128)),_(t("div",be,[_(t("button",{onClick:j},"« 前一页",512),[[f,e.value>0]]),_(t("button",{onClick:i[1]||(i[1]=r=>E(0)),style:x({backgroundColor:V(1)?"rgba(0, 0, 0, 0.08)":"transparent"}),class:"pageCount"},"1",4),[[f,D.value]]),_(t("button",ye,"...",512),[[f,G.value]]),(d(!0),p(W,null,Y(z.value,(r,m)=>(d(),p("button",{key:m,onClick:b=>E(r-1),style:x({backgroundColor:V(r)?"rgba(0, 0, 0, 0.08)":"transparent"}),class:"pageCount"},C(r),13,Se))),128)),_(t("button",$e,"...",512),[[f,U.value]]),_(t("button",{onClick:i[2]||(i[2]=r=>E(s.value.length-1)),style:x({backgroundColor:V(s.value.length)?"rgba(0, 0, 0, 0.08)":"transparent"}),class:"pageCount"},C(s.value.length),5),[[f,K.value]]),_(t("button",{onClick:ee},"后一页 »",512),[[f,e.value<s.value.length-1]])],512),[[f,u()==="home"]])]))}},ke=$(Ce,[["__scopeId","data-v-67a4d413"]]),J=o=>(B("data-v-57712b49"),o=o(),T(),o),Pe={class:"page-sidebar"},we=J(()=>t("li",{class:"item-caprice"},[t("h4",null,"随想:"),t("p",{class:"caprice"},"“ 最近对伪娘上瘾, 想穿女装... ”")],-1)),ze={class:"classify"},Ie=J(()=>t("h4",null,"分类:",-1)),Ae=se('<li class="item-blogroll" data-v-57712b49><h4 data-v-57712b49>友链:</h4><p data-v-57712b49>注: 以下链接如觉冒犯, 恳请链主抽空联系我, 我会立马删除, 并致以诚挚歉意。</p><p data-v-57712b49><a href="https://nicebowl.fun/" data-v-57712b49>NiceBowl的博客</a></p><p data-v-57712b49><a href="https://rosmontis.com/" data-v-57712b49>迷迭香的博客</a></p><p data-v-57712b49><a href="https://www.fufugal.com/" data-v-57712b49>初音的青葱</a></p><p data-v-57712b49><a href="https://cd-yurigame.com/" data-v-57712b49>Yuritopia</a></p><p data-v-57712b49><a href="https://qingjuacg.top/" data-v-57712b49>青桔网(不是共享单车)</a></p></li><li class="item-about" data-v-57712b49><h4 data-v-57712b49>关于:</h4><p data-v-57712b49>声明: 这个网站的UI是直接模仿<a href="https://nicebowl.fun/" data-v-57712b49>@NiceBowl </a>的博客(这位是真大佬, 是我只能仰望的存在), 当初看到这个作者的博客那精简的UI一眼就爱上了, 所以自己用Vue3也模仿了一个...(我已经尽可能去还原了), <a href="https://github.com/AerospacePig/AerospacePig" data-v-57712b49>附: 源码: GitHub</a></p></li>',2),Le={__name:"Sidebar",emits:["transitive-classify"],setup(o,{emit:c}){const s=c,a=e=>{s("transitive-classify",e)};return(e,n)=>(d(),p("div",Pe,[t("ul",null,[we,t("li",ze,[Ie,t("p",{onClick:n[0]||(n[0]=u=>a("编程生涯"))},"编程生涯"),t("p",{onClick:n[1]||(n[1]=u=>a("闲言碎语"))},"闲言碎语"),t("p",{onClick:n[2]||(n[2]=u=>a("书籍阅读"))},"阅读笔记"),t("p",{onClick:n[3]||(n[3]=u=>a("Galgame相关"))},"二次元相关"),t("p",{class:"home-page",onClick:n[4]||(n[4]=u=>a("首页"))},"首页")]),Ae])]))}},xe=$(Le,[["__scopeId","data-v-57712b49"]]),He={},M=o=>(B("data-v-af07e067"),o=o(),T(),o),Oe={class:"foot-content"},Ne=M(()=>t("p",null,[t("a",{href:"https://github.com/AerospacePig"},"@AerospacePig "),H("的博客, 只为自己用心写好每一篇博文")],-1)),Re=M(()=>t("p",null,"本博客文章皆为原创, 版权归作者AerospacePig所有。",-1)),Be=M(()=>t("p",null,"所有文章从未向任何个人或组织授权转载过, 严禁任何人以任何形式转载或抄袭文章内容！",-1)),Te=[Ne,Re,Be];function je(o,c){return d(),p("div",Oe,Te)}const Ee=$(He,[["render",je],["__scopeId","data-v-af07e067"]]),Ve=["innerHTML"],We={__name:"ItemPage",props:{screenSize:String},emits:["loading"],setup(o,{emit:c}){const s=v(!1),a=v(null),e=ae(),n=R(),u=()=>n.currentRoute.value.name,y=o,I=c,P=()=>{I("loading",s.value)};O(s,()=>{P()});function w(g){s.value=!0,F.get(`/markdowns/${g}.md`).then(h=>{s.value=!1;const A={gfm:!0,breaks:!0,sanitize:!1,smartLists:!1,smartypants:!1,highlight:function(j){return oe.hljs.highlightAuto(j).value}};a.value=ne(h.data,A)}).catch(h=>{console.error(a.value=h)})}return q(()=>{O(()=>e.params,g=>{Object.keys(e.params).length!==0&&w(g.id)}),O(u,()=>{a.value=null})}),(g,h)=>(d(),p("div",{class:"item-container",style:x({fontSize:y.screenSize==="small"?"13px":"15px"})},[_(t("div",{class:"item-content",innerHTML:a.value},null,8,Ve),[[f,a.value]])],4))}},Q=$(We,[["__scopeId","data-v-09485b08"]]),Fe={},qe=o=>(B("data-v-b4c1ecdc"),o=o(),T(),o),Me={class:"container"},De=qe(()=>t("div",{class:"loading-spinner"},null,-1)),Ge=[De];function Ue(o,c){return d(),p("div",Me,Ge)}const Ke=$(Fe,[["render",Ue],["__scopeId","data-v-b4c1ecdc"]]),Ye={class:"page-content"},Je={key:0,class:"sidebar"},Qe={key:0,class:"page-foot"},Xe={__name:"Home",emits:["screen-size"],setup(o,{emit:c}){const s=v(!1),a=v(""),e=v(""),n=R(),u=()=>{n.push("/")},y=()=>n.currentRoute.value.name,I=c,P=h=>{u(),a.value=h},w=h=>{s.value=h},g=()=>{e.value=window.innerWidth>600?"large":"small",I("screen-size",e.value)};return q(()=>{window.addEventListener("resize",g),g()}),le(()=>{window.removeEventListener("resize",g)}),(h,A)=>(d(),p(W,null,[t("div",{class:S(["page-header",{"small-header":e.value==="small"}])},[k(pe,{screenSize:e.value},null,8,["screenSize"])],2),t("div",Ye,[t("div",{class:"main",style:x({width:e.value==="large"?"65%":"100%"})},[_(t("div",null,[k(ke,{classify:a.value,screenSize:e.value},null,8,["classify","screenSize"])],512),[[f,!s.value]]),_(t("div",null,[k(Q,{onLoading:w,screenSize:e.value},null,8,["screenSize"])],512),[[f,y()==="itemPage"]])],4),e.value==="large"?(d(),p("div",Je,[k(xe,{onTransitiveClassify:P})])):N("",!0)]),e.value==="large"?(d(),p("div",Qe,[k(Ee)])):N("",!0),s.value?(d(),p("div",{key:1,class:S(["loading",{"small-loading":e.value==="small"}])},[k(Ke)],2)):N("",!0)],64))}},X=$(Xe,[["__scopeId","data-v-3adfa5dd"]]),Ze={__name:"App",setup(o){const c=v(""),s=a=>{c.value=a};return(a,e)=>(d(),p("div",{class:S(["mainWindow",{smallWindow:c.value==="small"}])},[k(X,{onScreenSize:s})],2))}},et=$(Ze,[["__scopeId","data-v-bd23590a"]]),tt=[{path:"/",name:"home",component:X},{path:"/itemPage/:id",name:"itemPage",component:Q,props:!0}],st=re({history:ce(),routes:tt}),Z=ie(et);Z.use(st);Z.mount("#app");