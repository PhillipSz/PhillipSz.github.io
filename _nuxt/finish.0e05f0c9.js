import{o as d,a as _,b as e,e as g}from"./entry.8481d83a.js";import{u as f}from"./cookie.bb47d2be.js";import"./app.config.7779a6fe.js";import{_ as p}from"./logo.b9df1dba.js";const x={class:"min-h-screen flex justify-center items-center"},h=e("div",{class:"flex justify-center"},[e("img",{src:p,class:"h-36",alt:"ModCo Logo"})],-1),v=e("h3",{class:"text-lg font-medium leading-6 text-gray-900"},"Test finished",-1),y=e("div",{class:"mt-2 max-w-xl text-sm text-gray-500"},[e("p",null,"Return to the survey and answer the remaining questions, by clicking on Continue below.")],-1),w=e("span",{"aria-hidden":"true",class:"ml-2"},"→",-1),B={__name:"finish",setup(b){var o,a,i,r,c,l;const s=f("responseData",{sameSite:!0});let n={};for(let t in(o=s.value)==null?void 0:o.res)n[t]=Number((a=s.value)==null?void 0:a.res[t]);const u=JSON.stringify({...n,...(i=s.value)==null?void 0:i.rating}),m=`https://wiwigoettingen.eu.qualtrics.com/jfe/form/SV_aas8aogRIY86eQC/?case=${(r=s.value)==null?void 0:r.case}&id=${(c=s.value)==null?void 0:c.id}&exp_g=${(l=s.value)==null?void 0:l.group}&Q_EED=${btoa(u)}`;return(t,k)=>(d(),_("div",x,[e("div",{class:"max-w-3xl"},[e("div",{class:"bg-white shadow sm:rounded-lg"},[e("div",{class:"px-4 py-5 sm:p-6"},[h,v,y,e("div",{class:"mt-3 text-sm"},[e("a",{href:m,class:"inline-flex items-center px-3 py-2 text-sm text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"},[g(" Continue "),w])])])])])]))}};export{B as default};
