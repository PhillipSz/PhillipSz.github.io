import{o as c,a as l,b as e,e as d}from"./entry.04b6c014.js";import{u as m}from"./cookie.d990b320.js";import"./app.config.c1167cf8.js";import{_ as u}from"./logo.844f9fe1.js";const f={class:"min-h-screen flex justify-center items-center"},p=e("div",{class:"flex justify-center"},[e("img",{src:u,class:"h-36",alt:"ModCo Logo"})],-1),_=e("h3",{class:"text-lg font-medium leading-6 text-gray-900"},"Experiment finished",-1),g=e("div",{class:"mt-2 max-w-xl text-sm text-gray-500"},[e("p",null,"Continue with the questionare, by click on Continue below.")],-1),h=e("span",{"aria-hidden":"true",class:"ml-2"},"→",-1),E={__name:"finish",setup(x){var t,o,i,n;const s=m("responseData"),a=JSON.stringify({...(t=s.value)==null?void 0:t.res,...(o=s.value)==null?void 0:o.rating}),r=`https://wiwigoettingen.eu.qualtrics.com/jfe/form/SV_56KOM9Lp7hHJOFo/?case=${(i=s.value)==null?void 0:i.case}&exp_g=${(n=s.value)==null?void 0:n.group}&Q_EED=${btoa(a)}`;return(v,w)=>(c(),l("div",f,[e("div",{class:"max-w-3xl"},[e("div",{class:"bg-white shadow sm:rounded-lg"},[e("div",{class:"px-4 py-5 sm:p-6"},[p,_,g,e("div",{class:"mt-3 text-sm"},[e("a",{href:r,class:"inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"},[d(" Continue "),h])])])])])]))}};export{E as default};
