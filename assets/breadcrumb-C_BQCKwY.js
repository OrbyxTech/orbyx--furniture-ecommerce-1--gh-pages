import{f as o,r as t,j as s,d as c,t as n}from"./index-BOTl0g7u.js";/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=o("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=o("Slash",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]),l=t.forwardRef(({...a},e)=>s.jsx("nav",{ref:e,"aria-label":"breadcrumb",...a}));l.displayName="Breadcrumb";const p=t.forwardRef(({className:a,...e},r)=>s.jsx("ol",{ref:r,className:c("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",a),...e}));p.displayName="BreadcrumbList";const u=t.forwardRef(({className:a,...e},r)=>s.jsx("li",{ref:r,className:c("inline-flex items-center gap-1.5",a),...e}));u.displayName="BreadcrumbItem";const f=t.forwardRef(({asChild:a,className:e,...r},d)=>{const m=a?n:"a";return s.jsx(m,{ref:d,className:c("transition-colors hover:text-foreground",e),...r})});f.displayName="BreadcrumbLink";const x=t.forwardRef(({className:a,...e},r)=>s.jsx("span",{ref:r,role:"link","aria-disabled":"true","aria-current":"page",className:c("font-normal text-foreground",a),...e}));x.displayName="BreadcrumbPage";const b=({children:a,className:e,...r})=>s.jsx("li",{role:"presentation","aria-hidden":"true",className:c("[&>svg]:size-3.5",e),...r,children:a??s.jsx(i,{})});b.displayName="BreadcrumbSeparator";export{l as B,h as S,p as a,u as b,f as c,b as d};
