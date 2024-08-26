import{_ as p,o as l,c as d,F as m,E as h,j as o,t as a,p as w,l as _,a4 as u}from"./framework.Dpm9aktK.js";const c=e=>(w("data-v-5d0196e5"),e=e(),_(),e),v={class:"download-list"},b=c(()=>o("div",{class:"header"},[o("span",{class:"name"},"Name"),o("span",{class:"platform"},"Platform"),o("span",{class:"published"},"Published")],-1)),f={class:"name-section"},x={class:"icon"},y={class:"name-info"},g={class:"name"},k={class:"version"},C={class:"platform"},q={class:"published"},L={class:"downloads"},I={class:"actions"},j=["onClick"],V=c(()=>o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[o("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),o("polyline",{points:"7 10 12 15 17 10"}),o("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)),B=[V],S=u('<button class="more" aria-label="More options" data-v-5d0196e5><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-5d0196e5><circle cx="12" cy="12" r="1" data-v-5d0196e5></circle><circle cx="12" cy="5" r="1" data-v-5d0196e5></circle><circle cx="12" cy="19" r="1" data-v-5d0196e5></circle></svg></button>',1),U={__name:"DownloadList",props:{items:{type:Array,default:()=>[]}},setup(e){const r=[{name:"XybLauncherCLI",gameVersion:"0.5",platforms:"Windows",published:"25.08.2024",downloads:"0",downloadUrl:"https://www.dropbox.com/scl/fi/m996mhjy77qn2t3bfxq6l/Cobalt.dll?rlkey=6araxm5ngyznp4fmvxqtgm9a7&st=2kawl9mp&dl=1"},{name:"XybLauncherCLI",gameVersion:"0.4",platforms:"Windows",published:"25.08.2024",downloads:"0",downloadUrl:"https://www.dropbox.com/scl/fi/m996mhjy77qn2t3bfxq6l/Cobalt.dll?rlkey=6araxm5ngyznp4fmvxqtgm9a7&st=2kawl9mp&dl=1"},{name:"XybLauncherCLI",gameVersion:"0.3",platforms:"Windows",published:"25.08.2024",downloads:"0",downloadUrl:"https://www.dropbox.com/scl/fi/m996mhjy77qn2t3bfxq6l/Cobalt.dll?rlkey=6araxm5ngyznp4fmvxqtgm9a7&st=2kawl9mp&dl=1"}],i=(t,n)=>{const s=document.createElement("a");s.href=t,s.download=n,document.body.appendChild(s),s.click(),document.body.removeChild(s)};return(t,n)=>(l(),d("div",v,[b,(l(),d(m,null,h(r,s=>o("div",{key:s.name,class:"item"},[o("div",f,[o("div",x,a(s.name[0].toUpperCase()),1),o("div",y,[o("span",g,a(s.name),1),o("span",k,a(s.gameVersion),1)])]),o("span",C,a(s.platforms),1),o("span",q,a(s.published),1),o("span",L,a(s.downloads),1),o("div",I,[o("button",{onClick:z=>i(s.downloadUrl,s.name+".zip"),class:"download","aria-label":"Download"},B,8,j),S])])),64))]))}},E=p(U,[["__scopeId","data-v-5d0196e5"]]);export{E as default};
