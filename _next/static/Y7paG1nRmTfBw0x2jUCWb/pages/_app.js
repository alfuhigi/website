(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{0:function(e,t,n){n("ho59"),e.exports=n("nOHt")},"59Bn":function(e,t,n){},H5hU:function(e,t,n){e.exports={mainFooter:"TheFooter_mainFooter__25LhW"}},Sgnq:function(e,t,n){e.exports={header:"TheHeader_header__1ysWv",headerMid:"TheHeader_headerMid__s36RE",headerLeft:"TheHeader_headerLeft__39jDn",logo:"TheHeader_logo__2Pde3",hamburgerOpener:"TheHeader_hamburgerOpener__RnF43",opened:"TheHeader_opened__3IFUr"}},cha2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var r=n("q1tI"),a=n.n(r),o=(n("59Bn"),n("sWSx"),n("1OyB")),i=n("vuIU"),c=n("Ji7U"),s=n("md7G"),u=n("foSv"),l=n("H5hU"),p=n.n(l),f=a.a.createElement;function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var d=function(e){Object(c.a)(n,e);var t=m(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return f("a",{href:this.props.url,target:"_blank"},this.props.text)}}]),n}(r.Component),g=function(){return f(d,{url:"https://github.com/fenny",text:"Fenny"})},h=function(){return f(d,{url:"https://github.com/gofiber/fiber/graphs/contributors",text:"Contributors"})},b=function(){return f(d,{url:"https://github.com/gofiber/fiber/blob/master/LICENSE",text:"MIT License"})},y=function(){return f(d,{url:"https://github.com/koddr",text:"Vic Sh\xf3stak"})},_=function(){return f(d,{url:"https://creativecommons.org/licenses/by-sa/4.0",text:"Creative Commons"})},v=function(){return f(d,{url:"https://gitbook.com",text:"GitBook.com"})},w=function(){return f(d,{url:"https://sallai.me",text:"J\xf3zsef Sallai"})},O=function(e){Object(c.a)(n,e);var t=m(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return f("footer",{className:p.a.mainFooter},f("div",{className:"mid"},"Copyright (c) 2019-present ",f(g,null)," and ",f(h,null),". Fiber is free and open-source software licensed under the ",f(b,null),". Official logo was created by ",f(y,null)," and distributed under the ",f(_,null)," license (CC BY-SA 4.0 International). Fiber Documentation is hosted by ",f(v,null),". Website by ",f(w,null),"."))}}]),n}(r.Component),x=n("JX7q"),E=n("rePB"),N=n("Sgnq"),k=n.n(N),C=n("IP2g"),j=n("wHSu"),R=a.a.createElement;function T(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(s.a)(this,n)}}var H=function(e){Object(c.a)(n,e);var t=T(n);function n(e){var r;return Object(o.a)(this,n),r=t.call(this,e),Object(E.a)(Object(x.a)(r),"links",[{url:"https://docs.gofiber.io",text:"\ud83d\udcd6 Docs"},{url:"https://github.com/gofiber/recipes",text:"\ud83c\udf73 Examples"},{url:"https://github.com/gofiber/fiber",text:"\ud83d\udcdd GitHub"},{url:"https://www.buymeacoffee.com/fenny",text:"\u2615 Buy a Coffee"},{url:"/discord",text:"\ud83d\udcac Discord"}]),r.state={opened:!1},r.toggleHamburger=r.toggleHamburger.bind(Object(x.a)(r)),r}return Object(i.a)(n,[{key:"toggleHamburger",value:function(){this.setState({opened:!this.state.opened})}},{key:"render",value:function(){return R("header",{className:k.a.header},R("div",{className:"mid ".concat(k.a.headerMid)},R("div",{className:k.a.headerLeft},R("a",{href:"/"},R("img",{src:"/assets/images/logo.svg",alt:"Fiber",className:k.a.logo}))),R("div",null,R("nav",{className:this.state.opened?k.a.opened:void 0},this.links.map((function(e,t){return R("a",{href:e.url,key:t},e.text)}))))),R("div",{className:k.a.hamburgerOpener},R("a",{href:"#",onClick:this.toggleHamburger},R(C.a,{icon:j.b}))))}}]),n}(r.Component),M=n("pw5m"),S=n.n(M),D=function(e){var t={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",literal:"true false iota nil",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{aliases:["golang"],keywords:t,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,{begin:"'",end:"[^\\\\]'"},{begin:"`",end:"`"}]},{className:"number",variants:[{begin:e.C_NUMBER_RE+"[dflsi]",relevance:1},e.C_NUMBER_MODE]},{className:"symbol",begin:/:=/},{className:"function",beginKeywords:"func",end:/\s*\{/,excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:t,illegal:/["']/,contains:[{className:"symbol",begin:/\*/},{className:"class",begin:/Ctx/}]}]}]}},F=n("8Kt/"),B=n.n(F),I=a.a.createElement;function L(e){var t=e.Component,n=e.pageProps;return S.a.registerLanguage("go",D),I("main",null,I(B.a,null,I("meta",{name:"viewport",content:"width=device-width,initial-scale=1,user-scalable=no"}),I("meta",{name:"title",content:"Fiber"}),I("meta",{name:"description",content:"An Express-inspired web framework written in Go."}),I("meta",{property:"og:title",content:"Fiber"}),I("meta",{property:"og:description",content:"An Express-inspired web framework written in Go."}),I("meta",{property:"og:image",content:"https://gofiber.io/assets/images/embed.png"}),I("meta",{property:"og:site_name",content:"Fiber"}),I("meta",{property:"og:url",content:"https://gofiber.io"}),I("meta",{content:"website",property:"og:type"}),I("meta",{name:"twitter:card",content:"summary_large_image"}),I("meta",{name:"twitter:image",content:"https://gofiber.io/assets/images/embed.png"}),I("link",{rel:"icon",type:"image/png",href:"/assets/images/icon.png"})),I(H,null),I("section",{className:"wrapper"},I(t,n)),I(O,null))}},ho59:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},sWSx:function(e,t,n){}},[[0,0,1,4,3,2]]]);