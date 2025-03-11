import{_ as z}from"./Ayl6skaN.js";import{_ as L}from"./Du9jyi_Y.js";import{d as S,i as n,G as q,w as V,e as s,g as _,t as d,aj as T,ag as U,r as x,z as D,B as E,C as I,A as b,c as i,E as o,n as y,bq as W,F as $,an as C,f as k,br as F}from"./8t1FyMk-.js";import{r as A}from"./C38GaLwu.js";import{u as G}from"./CirMzhRv.js";import{q as M}from"./B_spMtqC.js";import"./DlAUqK2U.js";const O={class:"overflow-hidden rounded-md border border-white/10 shadow-md shadow-zinc-950/50 transition-colors duration-200 hover:border-white/20"},P={class:"flex flex-col"},R={class:"text-lg font-semibold"},H={class:"text-xs text-muted"},J=S({__name:"ArticleCard",props:{title:{type:String,required:!0},date:{type:String,required:!0},image:{type:String,required:!0},path:{type:String,required:!0}},setup(r){return(u,h)=>{const l=T,c=U;return n(),q(c,{to:r.path,"aria-label":r.title,class:"flex cursor-pointer flex-col gap-2"},{default:V(()=>[s("div",O,[_(l,{width:"1536",alt:`${r.title} article image`,class:"h-64 w-full object-cover transition-transform duration-200 hover:scale-105",src:r.image,"aria-label":`${r.title} article image`},null,8,["alt","src","aria-label"])]),s("div",P,[s("h3",R,d(r.title),1),s("span",H,d(r.date),1)])]),_:1},8,["to","aria-label"])}}}),K=Object.assign(J,{__name:"ArticleCard"}),Q={class:"mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20"},X={class:"font-newsreader italic text-white-shadow text-center text-4xl"},Y={class:"text-center text-lg font-extralight italic text-muted"},Z={key:0,class:"mb-4 flex flex-col gap-2"},tt={class:"my-4"},et={key:0,class:"mb-4 flex flex-wrap gap-2"},st=["onClick"],at={class:"font-extralight"},ot={key:2,class:"flex h-64 flex-col items-center justify-center gap-2"},nt={class:"text-2xl"},lt={class:"text-sm"},rt=S({__name:"Writing",async setup(r){let u,h;const l=x([]),c=x(""),m=x(!1),{locale:p}=D(),{data:g}=([u,h]=E(async()=>G("articles-"+p.value,async()=>{const t="articles_"+p.value;return await M(t).all()},{watch:[p]})),u=await u,h(),u);if(!g.value)throw I({statusCode:404,statusMessage:"Page not found"});const w=b(()=>{var t;return Array.from(new Set((t=g.value)==null?void 0:t.flatMap(a=>a.tags)))}),v=b(()=>{var t;return((t=g.value)==null?void 0:t.filter(a=>(l.value.length===0||l.value.some(f=>a.tags.includes(f)))&&(c.value===""||a.title.toLowerCase().includes(c.value.toLowerCase()))))??[]}),j=t=>{l.value=l.value.includes(t)?l.value.filter(a=>a!==t):[...l.value,t]};return(t,a)=>{const f=z,B=L,N=K;return n(),i("section",Q,[s("h1",X,[A(t.$slots,"title",{mdcUnwrap:"p"})]),s("h2",Y,[A(t.$slots,"subtitle",{mdcUnwrap:"p"})]),_(f,{class:"mb-8 mt-2"}),s("div",{class:y(o(m)?"":"mb-3")},[s("span",{class:"font-newsreader italic text-white-shadow cursor-pointer select-none text-lg",onClick:a[0]||(a[0]=e=>m.value=!o(m))},d(o(m)?t.$t("writing.hide_search"):t.$t("writing.show_search")),1)],2),o(m)?(n(),i("div",Z,[s("div",tt,[_(B,{modelValue:o(c),"onUpdate:modelValue":a[1]||(a[1]=e=>W(c)?c.value=e:null),class:"w-full sm:w-96",placeholder:t.$t("writing.search_article")},null,8,["modelValue","placeholder"])]),o(w).length>0?(n(),i("div",et,[(n(!0),i($,null,C(o(w),e=>(n(),i("div",{key:e,class:y(["hover:text-shadow-md flex cursor-pointer select-none items-center rounded-md bg-neutral-800 px-2 py-1 text-xs transition-colors duration-100 text-shadow-sm hover:bg-neutral-700 sm:text-sm",{"bg-zinc-700":o(l).includes(e)}]),onClick:it=>j(e)},[s("div",at,d(e),1)],10,st))),128))])):k("",!0)])):k("",!0),o(v).length?(n(),q(F,{key:1,name:"list",tag:"ul",class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},{default:V(()=>[(n(!0),i($,null,C(o(v),e=>(n(),i("li",{key:e.path},[_(N,{title:e.title,date:e.date,image:e.image,path:e.path},null,8,["title","date","image","path"])]))),128))]),_:1})):(n(),i("div",ot,[s("span",nt,d(t.$t("writing.not_found")),1),s("span",lt,d(t.$t("writing.not_found_description")),1)]))])}}}),gt=Object.assign(rt,{__name:"Writing"});export{gt as default};
