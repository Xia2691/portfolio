import{a as k,l as z,c as v,j as _,d as b,e as w,E as B,_ as C,g as A,w as P}from"./base-CS-XqFKT.js";import{t as d,r as I,k as i,w as N,o,c as u,B as f,u as n,x as m,y as j,I as L,H as T,A as q,Q as D}from"./index-Beew6MR1.js";const F=k({size:{type:[Number,String],values:z,default:"",validator:a=>v(a)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:_},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:b(String),default:"cover"}}),H={error:a=>a instanceof Event},Q=d({name:"ElAvatar"}),U=d({...Q,props:F,emits:H,setup(a,{emit:y}){const t=a,e=w("avatar"),c=I(!1),S=i(()=>{const{size:s,icon:l,shape:p}=t,r=[e.b()];return D(s)&&r.push(e.m(s)),l&&r.push(e.m("icon")),p&&r.push(e.m(p)),r}),h=i(()=>{const{size:s}=t;return v(s)?e.cssVarBlock({size:A(s)||""}):void 0}),E=i(()=>({objectFit:t.fit}));N(()=>t.src,()=>c.value=!1);function g(s){c.value=!0,y("error",s)}return(s,l)=>(o(),u("span",{class:q(n(S)),style:f(n(h))},[(s.src||s.srcSet)&&!c.value?(o(),u("img",{key:0,src:s.src,alt:s.alt,srcset:s.srcSet,style:f(n(E)),onError:g},null,44,["src","alt","srcset"])):s.icon?(o(),m(n(B),{key:1},{default:j(()=>[(o(),m(L(s.icon)))]),_:1})):T(s.$slots,"default",{key:2})],6))}});var V=C(U,[["__file","avatar.vue"]]);const J=P(V);export{J as E};
