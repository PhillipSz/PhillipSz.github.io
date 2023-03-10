import{i as p,o,a as i,b as t,t as h,e as f,F as X,r as ne,j as _,k as q,h as u,u as s,l as oe}from"./entry.14c3a878.js";import{u as ie}from"./cookie.fc0928f9.js";import"./app.config.37ebb9d4.js";const re={props:{name:String,desc:String,tag:String,iconURL:String}},ae={class:"flex flex-col"},ce={class:"flex p-1"},le=t("span",{class:"flex-none w-28 font-semibold"}," Website:",-1),de=["src"],ue={class:"flex p-1"},pe=t("span",{class:"flex-none w-28 font-semibold"},"Description: ",-1),_e={class:""},he={class:"flex p-1"},fe=t("span",{class:"flex-none w-28 font-semibold"},"Reported for: ",-1),ge={class:""};function me(r,n,e,c,d,a){return o(),i("div",ae,[t("div",ce,[le,t("img",{src:e.iconURL,class:"pr-1 h-5 self-center"},null,8,de),t("span",null,h(e.name),1)]),t("div",ue,[pe,t("span",_e,h(e.desc),1)]),t("div",he,[fe,t("span",ge,h(e.tag),1)])])}const we=p(re,[["render",me]]),be=""+globalThis.__publicAssetsURL("img/notice.svg"),xe={props:{group:String},data:function(){return{groupNoticeText:{Sdfp:"This moderation tool will open the website for convenience on the right-hand side.",jCRu:"This moderation tool enables a Browser Guard when opening external websites, as described on right!",Cfs3:"This moderation tool displays how many other participants have opened this website below.",d9In:"This moderation tool enables a Browser Guard when opening external websites, as described on right!"}}}},ve={class:"flex"},$e=t("span",null,[t("img",{class:"inline",src:be,alt:"Site Placeholder"})],-1),ye={class:"pl-1"},ke=t("p",null,"Do you want to open this websites on your device, to be able to rate it's safety? ",-1);function Ce(r,n,e,c,d,a){return o(),i("div",ve,[$e,t("span",ye,[f(h(r.groupNoticeText[e.group])+" ",1),ke])])}const Se=p(xe,[["render",Ce]]),Te={emits:["showNextCase"]},Be={class:"max-w-fit p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center"},Ne=t("p",{class:"mb-3 font-normal text-gray-700"},[f("I prefer "),t("b",null,"not"),f(" to "),t("br"),f("open this website.")],-1);function Re(r,n,e,c,d,a){return o(),i("section",null,[t("div",Be,[Ne,t("button",{onClick:n[0]||(n[0]=l=>r.$emit("showNextCase")),class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"}," Next Case ")])])}const Ae=p(Te,[["render",Re]]),Le={props:{group:String,numberOpened:Number},emits:["openSite"],data:function(){return{OpenSiteButtonText:{Sdfp:"I take the risk and <br> open this website.",jCRu:"The Browser Guard provides <br> enhanced privacy!",Cfs3:"Other participants <br> opened this website!",d9In:"Other participants <br> opened this website!"}}}},Oe={class:"max-w-fit p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center"},je={key:0,class:"flex items-center"},Me={class:"inline-flex"},Ie=t("svg",{class:"text-green-700 object-scale-down w-7",xmlns:"http://www.w3.org/2000/svg",fill:"green",viewBox:"0 0 24 24",strokeWidth:"{1.5}"},[t("path",{d:"M16.03,18.616l5.294-4.853a1,1,0,0,1,1.352,1.474l-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,0,1,1.414-1.414ZM1,20a9.01,9.01,0,0,1,5.623-8.337A4.981,4.981,0,1,1,10,13a7.011,7.011,0,0,0-6.929,6H10a1,1,0,0,1,0,2H2A1,1,0,0,1,1,20ZM7,8a3,3,0,1,0,3-3A3,3,0,0,0,7,8Z"})],-1),Fe={class:"text-green-700"},He=["innerHTML"],Ve=["innerHTML"];function Ge(r,n,e,c,d,a){return o(),i("section",null,[t("div",Oe,[e.group=="Cfs3"||e.group=="d9In"?(o(),i("div",je,[t("div",Me,[Ie,t("span",Fe,h(e.numberOpened),1)]),t("span",{class:"pl-2 mb-3",innerHTML:r.OpenSiteButtonText[e.group]},null,8,He)])):(o(),i("span",{key:1,class:"mb-3 font-normal text-gray-700",innerHTML:r.OpenSiteButtonText[e.group]},null,8,Ve)),t("button",{onClick:n[0]||(n[0]=l=>r.$emit("openSite")),class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"}," Open Website ")])])}const Pe=p(Le,[["render",Ge]]),De={props:{ratingValue:Number},emits:["rating","showNextCaseAfterRating"],data:function(){return{showratingneeded:!1}},methods:{checkrating:function(){this.ratingValue!=0?this.$emit("showNextCaseAfterRating"):this.showratingneeded=!0}}},Ue={class:"flex flex-col"},Ee=t("p",null,"How secure would you rate this website?",-1),We={class:"flex items-center p-5 justify-center"},ze=["onClick"],Ze=t("title",null,"First star",-1),Xe=t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},null,-1),qe=[Ze,Xe],Ke={key:0,class:"text-red-700"},Je={class:"self-end p-5"};function Qe(r,n,e,c,d,a){return o(),i("section",null,[t("div",Ue,[Ee,t("div",We,[(o(),i(X,null,ne(5,l=>t("button",{type:"button",onClick:g=>{e.ratingValue=l,r.$emit("rating",l)}},[(o(),i("svg",{"aria-hidden":"true",class:q(["w-10 h-10",[e.ratingValue>=l?"text-yellow-400":"text-gray-400"]]),fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},qe,2))],8,ze)),64))]),r.showratingneeded?(o(),i("p",Ke,"Please click on a star to rate this website!")):_("",!0),t("div",Je,[t("button",{onClick:n[0]||(n[0]=(...l)=>a.checkrating&&a.checkrating(...l)),class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300"}," Next Case ")])])])}const Ye=p(De,[["render",Qe]]),et=""+globalThis.__publicAssetsURL("img/notfound.png"),tt={props:{display:Boolean,url:String}},st={key:0,class:"flex flex-col items-center"},nt=t("img",{class:"object-scale-down w-7/12",src:et,alt:"Site Placeholder"},null,-1),ot=t("p",{class:"p-3"},"The website will open here.",-1),it=[nt,ot],rt=["src"];function at(r,n,e,c,d,a){return e.display?(o(),i("iframe",{key:1,src:e.url,class:"w-full h-full",sandbox:""},null,8,rt)):(o(),i("span",st,it))}const ct=p(tt,[["render",at]]),lt={props:{display:Boolean,url:String}},dt=t("div",{class:"overflow-visible left-0 top-0 absolute text-white bg-green-700 p-1 border-1"},"Browser Guard",-1),ut={key:0,class:"flex flex-col items-center"},pt=t("svg",{class:"text-green-700 object-scale-down w-4/12",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"{1.5}",stroke:"currentColor",className:"w-6 h-6"},[t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})],-1),_t=t("p",{class:"p-3 w-1/2 text-gray-500"},"The website will open here with Browser Guard enabled. This will enhance privacy by blocking known trackers!",-1),ht=[pt,_t],ft=["src"];function gt(r,n,e,c,d,a){return o(),i(X,null,[dt,e.display?(o(),i("iframe",{key:1,src:e.url,class:"w-full h-full",sandbox:""},null,8,ft)):(o(),i("span",ut,ht))],64)}const mt=p(lt,[["render",gt]]),wt={class:"basis-1/2 flex"},bt={class:"flex flex-col gap-6"},xt=t("hr",{class:"border-gray-200"},null,-1),vt={key:0},$t={class:"flex flex-row pt-6 justify-center gap-12"},yt={key:1},kt={key:0,class:"basis-1/2 flex items-center justify-center h-[27rem]"},Ct={key:1,class:"basis-1/2 flex items-center justify-center border-4 border-green-700 relative h-[27rem]"},Rt={__name:"moderation",setup(r){const n={1:[84,"/sites/Euronews.html","euronews","Find the latest breaking news and information on the top stories, weather, business, entertainment, politics, and more. For in-depth coverage, euronews provides special reports, video, audio, photo galleries, and interactive guides.","Spam","/sites/en.png"],2:[97,"/sites/bp.html","The Pirate Bay","The Pirate Bay is an illegal website, to download famous movies, games, and software for free via Bittorrent. Bittorrent is a network, where other people directly connect to your computer to access files.","Illegal Content","/sites/pb.bmp"],3:[87,"/sites/8kun.html","8kun","Anonymous free speech English-language imageboard website. Frequently used by hacker groups like Anonymous, trolls and alt-right groups, spreading scams and conspiracy theories. Blocked in multiple countries.","Fake News, Hate Content, Scam","/sites/8kun.ico"],4:[93,"/sites/Toronto.html","City of Toronto","Official website of city of Toronto. The source for information about city services, departments, programs and initiatives, and officials for Toronto residents, businesses, and visitors.","Fake News","/sites/toronto.ico"],5:[82,"/sites/Boing.html","Boing Boing","One of the web's earliest satirical blogs, sharing and celebrating interesting things. Common topics and themes include technology, futurism, science fiction, gadgets.","Phishing","/sites/boing.ico"],6:[105,"/sites/Streamworld.html","Streamworld","Illegal German video on demand website, to watch popular movies and series online for free! Known for the distribution of spyware in the past.","Illegal Content, Malware","/sites/streamworld.ico"],7:[74,"/sites/proxy.html","Proxyium","Free web proxy to visit websites while connecting from different countries, mostly used to circumvent security measures and to access forbidden and dangerous content.","Illegal Content, Phishing","/sites/proxy.ico"],8:[86,"/sites/edX.html","Edx","EdX is an online learning courses provider created by Harvard and MIT. Access 2000 free online courses from 140 leading institutions worldwide. Gain new skills and earn a certificate of completion.","Spam","/sites/edx.ico"]},e=ie("responseData",{sameSite:!0});function c(){if(e.value.case>Object.keys(e.value.res).length)return oe("/finish")}function d(){e.value.res[e.value.case]=!0}function a(){return e.value.res[e.value.case]=!1,e.value.case++,c()}function l(m){e.value.rating["r"+e.value.case]=m}function g(){return e.value.case++,c()}return(m,St)=>{var w,b,x,v,$,y,k,C,S,T,B,N,R,A,L,O,j,M,I,F,H,V,G,P,D,U,E,W,z,Z;const K=we,J=Se,Q=Ae,Y=Pe,ee=Ye,te=ct,se=mt;return o(),i("div",{class:q([((w=s(e))==null?void 0:w.group)=="Sdfp"||((b=s(e))==null?void 0:b.group)=="Cfs3"?"flex flex-row divide-x":"flex flex-row"])},[t("div",wt,[t("div",bt,[u(K,{name:(v=n[(x=s(e))==null?void 0:x.case])==null?void 0:v[2],desc:(y=n[($=s(e))==null?void 0:$.case])==null?void 0:y[3],tag:(C=n[(k=s(e))==null?void 0:k.case])==null?void 0:C[4],iconURL:(T=n[(S=s(e))==null?void 0:S.case])==null?void 0:T[5]},null,8,["name","desc","tag","iconURL"]),xt,(N=s(e))!=null&&N.res[(B=s(e))==null?void 0:B.case]?_("",!0):(o(),i("div",vt,[u(J,{group:(R=s(e))==null?void 0:R.group},null,8,["group"]),t("div",$t,[u(Q,{onShowNextCase:a}),u(Y,{onOpenSite:d,group:(A=s(e))==null?void 0:A.group,numberOpened:(O=n[(L=s(e))==null?void 0:L.case])==null?void 0:O[0]},null,8,["group","numberOpened"])])])),(M=s(e))!=null&&M.res[(j=s(e))==null?void 0:j.case]?(o(),i("div",yt,[u(ee,{onShowNextCaseAfterRating:g,onRating:l,ratingValue:0})])):_("",!0)])]),((I=s(e))==null?void 0:I.group)=="Sdfp"||((F=s(e))==null?void 0:F.group)=="Cfs3"?(o(),i("div",kt,[u(te,{display:(V=s(e))==null?void 0:V.res[(H=s(e))==null?void 0:H.case],url:(P=n[(G=s(e))==null?void 0:G.case])==null?void 0:P[1]},null,8,["display","url"])])):_("",!0),((D=s(e))==null?void 0:D.group)=="jCRu"||((U=s(e))==null?void 0:U.group)=="d9In"?(o(),i("div",Ct,[u(se,{display:(W=s(e))==null?void 0:W.res[(E=s(e))==null?void 0:E.case],url:(Z=n[(z=s(e))==null?void 0:z.case])==null?void 0:Z[1]},null,8,["display","url"])])):_("",!0)],2)}}};export{Rt as default};
