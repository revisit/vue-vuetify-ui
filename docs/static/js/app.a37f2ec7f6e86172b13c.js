webpackJsonp([1],{"1nC/":function(e,t){},NHnr:function(e,t,a){"use strict";function n(e){a("l79c")}function r(e){a("1nC/")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("/5sW"),i=a("3EgV"),o=a.n(i),l=(a("QCv7"),a("Zzkc")),c={data:function(){return{isPlaying:!1,speed:1,timeEnd:10,time:0,drawer:null,selectedObject:null,objects:[{header:"Environment"},{group:"Environment",name:"Background"},{divider:!0},{header:"Scene"},{group:"Scene",name:"Box"}],scene:{Background:{color:"#770000",opacity:.75},Box:{color:"#007700",opacity:.5}},colors:{hex:"#194d33",a:1}}},mounted:function(){function e(){a.width=window.innerWidth,a.height=window.innerHeight,l.selectedObject&&(l.scene[l.selectedObject].color=l.colors.hex,l.scene[l.selectedObject].opacity=l.colors.a),n.fillStyle=l.scene.Background.color,n.fillRect(0,0,a.width,a.height),n.fillStyle=l.scene.Box.color,n.fillRect(a.width*(l.time/l.timeEnd),(a.height-r)/2,r,r)}function t(){!o&&l.isPlaying&&(l.time+=s*l.speed,l.time>l.timeEnd?l.time=0:l.time<0&&(l.time=l.timeEnd)),e()}var a=this.$refs.canvas,n=a.getContext("2d"),r=50,s=1/60,i=document.getElementById("timeline-slider"),o=!1;i.addEventListener("mousedown",function(){o=!0}),i.addEventListener("mouseup",function(){o=!1});var l=this;setInterval(t,1e3*s)},methods:{objectSelectionChange:function(e){this.colors={hex:this.scene[e].color,a:this.scene[e].opacity}}},filters:{formatTime:function(e){return e.toFixed(2)},formatSpeed:function(e){return"x "+e.toFixed(1)}},components:{"chrome-picker":l.Chrome}},v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{staticStyle:{opacity:"0.8"},attrs:{absolute:"","hide-overlay":"",height:"80%"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs6:""}},[a("v-subheader",[e._v("Object")])],1),e._v(" "),a("v-flex",{attrs:{xs6:""}},[a("v-select",{attrs:{label:"Select",items:e.objects,"item-text":"name","item-value":"name","single-line":""},on:{change:e.objectSelectionChange},model:{value:e.selectedObject,callback:function(t){e.selectedObject=t},expression:"selectedObject"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("chrome-picker",{staticStyle:{margin:"0 auto"},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)],1)],1)],1),e._v(" "),a("canvas",{ref:"canvas"}),e._v(" "),a("v-bottom-nav",{attrs:{absolute:"",value:!0,color:"transparent"}},[a("v-card",{attrs:{color:"white",raised:"",id:"player"}},[a("v-container",{staticClass:"pa-0",attrs:{"justify-space-between":"","fill-height":""}},[a("v-layout",{attrs:{row:"","align-center":"",id:"player"}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs1:""}},[a("v-btn",{attrs:{flat:""},on:{click:function(t){e.isPlaying=!e.isPlaying}}},[e.isPlaying?a("v-icon",[e._v("pause")]):a("v-icon",[e._v("play_arrow")])],1)],1),e._v(" "),a("v-flex",{staticClass:"text-xs-center",attrs:{xs1:""}},[a("span",[e._v(e._s(e._f("formatSpeed")(e.speed)))])]),e._v(" "),a("v-flex",{staticClass:"text-xs-center",attrs:{xs2:""}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.speed,expression:"speed",modifiers:{number:!0}}],attrs:{id:"speed-slider",type:"range",name:"playback-speed-slider",min:"-5",max:"5",step:"0.5"},domProps:{value:e.speed},on:{__r:function(t){e.speed=e._n(t.target.value)},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),a("v-flex",{staticClass:"text-xs-center",attrs:{xs1:""}},[a("v-btn",{attrs:{flat:""},on:{click:function(t){e.time=0}}},[a("v-icon",[e._v("replay")])],1)],1),e._v(" "),a("v-flex",{staticClass:"text-xs-center",attrs:{xs1:""}},[a("span",[e._v(e._s(e._f("formatTime")(e.time)))])]),e._v(" "),a("v-flex",{staticClass:"text-xs-center",attrs:{xs4:""}},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.time,expression:"time",modifiers:{number:!0}}],attrs:{id:"timeline-slider",type:"range",name:"timeline-slider",min:"0",max:"10",step:"0.01"},domProps:{value:e.time},on:{__r:function(t){e.time=e._n(t.target.value)},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),a("v-flex",{staticClass:"text-xs-center",attrs:{xs1:""}},[a("span",[e._v(e._s(e._f("formatTime")(e.timeEnd)))])]),e._v(" "),a("v-flex",{staticClass:"text-xs-center",attrs:{xs1:""}},[a("v-btn",{attrs:{flat:""},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[a("v-icon",[e._v("settings")])],1)],1)],1)],1)],1)],1)],1)},u=[],d={render:v,staticRenderFns:u},m=d,f=a("VU/8"),p=n,_=f(c,m,!1,p,null,null),h=_.exports,x=a("/ocq"),g={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),a("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("Community Chat")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),a("br"),e._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}],y={render:b,staticRenderFns:w},k=y,j=a("VU/8"),C=r,E=j(g,k,!1,C,"data-v-51cb6900",null),S=E.exports;s.a.use(x.a);var O=new x.a({routes:[{path:"/",name:"HelloWorld",component:S}]});s.a.use(o.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:O,render:function(e){return e(h)}})},QCv7:function(e,t){},l79c:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.a37f2ec7f6e86172b13c.js.map