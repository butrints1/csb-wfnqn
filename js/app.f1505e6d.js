(function(t){function e(e){for(var o,a,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)a=s[u],r[a]&&f.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),r=n("5c96"),i=n.n(r),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen w-full bg-gray-200",attrs:{id:"app"}},[n("main",{staticClass:"flex flex-col"},t._l(t.page.components,(function(e,o){return n("ComponentEditor",{key:e.name+o,attrs:{active:e.name===t.activeComponentName,component:e,index:o,total:t.page.components.length},on:{action:t.handleEditorAction}},[n("component-renderer",{attrs:{component:e},nativeOn:{click:function(n){return t.toggleActiveComponent(e)}}})],1)})),1)])},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"z-0 h-full w-full absolute",class:{"border-4 border-teal-400 ":t.active}},[n("div",{staticClass:"flex justify-between w-full mt-3 px-2"},[n("div",[n("ColorPicker",{on:{"active-change":t.onColorChange},model:{value:t.selectedColor,callback:function(e){t.selectedColor=e},expression:"selectedColor"}})],1),n("div",[t.index<t.total-1?n("button",{staticClass:"text-xs font-semibold inline-block py-2 px-3 uppercase rounded text-teal-600 bg-teal-200 mr-2 focus:bg-teal-600 focus:text-white",on:{click:function(e){return t.emitAction("move-down")}}},[n("i",{staticClass:"fas fa-arrow-down",attrs:{"aria-hidden":"true"}})]):t._e(),t.index>0?n("button",{staticClass:"text-xs font-semibold inline-block py-2 px-3 uppercase rounded text-teal-600 bg-teal-200 mr-2 focus:bg-teal-600 focus:text-white",on:{click:function(e){return t.emitAction("move-up")}}},[n("i",{staticClass:"fas fa-arrow-up",attrs:{"aria-hidden":"true"}})]):t._e(),n("button",{staticClass:"text-xs font-semibold inline-block py-2 px-3 uppercase rounded text-red-600 bg-red-200 mr-2 focus:bg-red-600 focus:text-white",on:{click:function(e){return t.emitAction("delete")}}},[n("i",{staticClass:"fas fa-trash",attrs:{"aria-hidden":"true"}})]),n("button",{staticClass:"text-xs font-semibold inline-block py-2 px-3 uppercase rounded text-gray-600 bg-gray-200 ml-16 focus:bg-gray-600 focus:text-white",on:{click:function(e){return t.emitAction("close")}}},[n("i",{staticClass:"fas fa-times",attrs:{"aria-hidden":"true"}})])])])]),t._t("default")],2)},c=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-color-picker",t._g(t._b({attrs:{"show-alpha":"",predefine:t.colors}},"el-color-picker",t.$attrs,!1),t.$listeners))},u=[],f={inheritAttrs:!1,name:"color-picker",data(){return{colors:["#fff","#FFF5F5","#EDF2F6","#FFFAF0","#FFFFF0","#F0FFF4","#E6FFFA","#EBF8FF","#EBF4FF","#FAF5FF"]}}},d=f,m=n("2877"),g=Object(m["a"])(d,p,u,!1,null,null,null),h=g.exports,x={components:{ColorPicker:h},props:{active:Boolean,component:Object,index:Number,total:Number},data(){return{selectedColor:this.component.props.backgroundColor}},methods:{emitAction(t,e={}){this.$emit("action",{name:t,component:this.component,data:e})},onColorChange(t){this.emitAction("color-change",{value:t})}}},b=x,C=Object(m["a"])(b,l,c,!1,null,null,null),v=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.component.name,t._b({tag:"component",style:t.componentStyles},"component",t.component.props,!1))},y=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"py-20 bg-gray-300"},[n("div",{staticClass:"container mx-auto px-4 relative"},[n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center"},[n("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"},[n("div",{staticClass:"px-4 py-5 flex-auto"},[n("IconSelect",{attrs:{value:t.getComponentProperty("feature1.icon")},on:{input:function(e){return t.setComponentProperty("feature1.icon",e)}}},[n("div",{staticClass:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"},[n("i",{class:t.getComponentProperty("feature1.icon")})])]),n("TextEdit",{staticClass:"text-xl font-semibold",attrs:{tag:"h6",value:t.getComponentProperty("feature1.title")},on:{input:function(e){return t.setComponentProperty("feature1.title",e)}}}),n("TextEdit",{staticClass:"mt-2 mb-4 text-gray-600",attrs:{tag:"p",value:t.getComponentProperty("feature1.description")},on:{input:function(e){return t.setComponentProperty("feature1.description",e)}}})],1)])]),n("div",{staticClass:"w-full md:w-4/12 px-4 text-center"},[n("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"},[n("div",{staticClass:"px-4 py-5 flex-auto"},[n("IconSelect",{attrs:{value:t.getComponentProperty("feature2.icon")},on:{input:function(e){return t.setComponentProperty("feature2.icon",e)}}},[n("div",{staticClass:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"},[n("i",{class:t.getComponentProperty("feature2.icon")})])]),n("TextEdit",{staticClass:"text-xl font-semibold",attrs:{tag:"h6",value:t.getComponentProperty("feature2.title")},on:{input:function(e){return t.setComponentProperty("feature2.title",e)}}}),n("TextEdit",{staticClass:"mt-2 mb-4 text-gray-600",attrs:{tag:"p",value:t.getComponentProperty("feature2.description")},on:{input:function(e){return t.setComponentProperty("feature2.description",e)}}})],1)])]),n("div",{staticClass:"pt-6 w-full md:w-4/12 px-4 text-center"},[n("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"},[n("div",{staticClass:"px-4 py-5 flex-auto"},[n("IconSelect",{attrs:{value:t.getComponentProperty("feature3.icon")},on:{input:function(e){return t.setComponentProperty("feature3.icon",e)}}},[n("div",{staticClass:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"},[n("i",{class:t.getComponentProperty("feature3.icon")})])]),n("TextEdit",{staticClass:"text-xl font-semibold",attrs:{tag:"h6",value:t.getComponentProperty("feature3.title")},on:{input:function(e){return t.setComponentProperty("feature3.title",e)}}}),n("TextEdit",{staticClass:"mt-2 mb-4 text-gray-600",attrs:{tag:"p",value:t.getComponentProperty("feature3.description")},on:{input:function(e){return t.setComponentProperty("feature3.description",e)}}})],1)])])]),n("div",{staticClass:"flex flex-wrap items-center mt-32"},[n("div",{staticClass:"w-full md:w-5/12 px-4 mr-auto ml-auto"},[n("IconSelect",{attrs:{value:t.getComponentProperty("work.icon")},on:{input:function(e){return t.setComponentProperty("work.icon",e)}}},[n("div",{staticClass:"text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"},[n("i",{staticClass:"text-xl",class:t.getComponentProperty("work.icon")})])]),n("TextEdit",{staticClass:"text-xl font-semibold",attrs:{tag:"h3",value:t.getComponentProperty("work.title")},on:{input:function(e){return t.setComponentProperty("work.title",e)}}}),n("TextEdit",{staticClass:"text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700",attrs:{tag:"p",value:t.getComponentProperty("work.description")},on:{input:function(e){return t.setComponentProperty("work.description",e)}}})],1),n("div",{staticClass:"w-full md:w-4/12 px-4 mr-auto ml-auto"},[n("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600"},[n("img",{staticClass:"w-full align-middle rounded-t-lg",attrs:{alt:"...",src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"}}),n("blockquote",{staticClass:"relative p-8 mb-4"},[n("svg",{staticClass:"absolute left-0 w-full block",staticStyle:{height:"95px",top:"-94px"},attrs:{preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 583 95"}},[n("polygon",{staticClass:"text-pink-600 fill-current",attrs:{points:"-30,95 583,95 583,65"}})]),n("TextEdit",{staticClass:"text-xl font-bold text-white",attrs:{tag:"h4",value:t.getComponentProperty("work.imageTitle")},on:{input:function(e){return t.setComponentProperty("work.imageTitle",e)}}}),n("TextEdit",{staticClass:"text-md font-light mt-2 text-white",attrs:{tag:"p",value:t.getComponentProperty("work.imageDescription")},on:{input:function(e){return t.setComponentProperty("work.imageDescription",e)}}})],1)])])])])])},P=[],F=n("0f5c"),_=n.n(F),T=n("9b02"),E=n.n(T);let O=A(),j=O||{components:[{name:"Features",props:{id:4,feature1:{title:"Awarded Agency",icon:"fas fa-award",description:"Divide details about your product or agency work into parts. A paragraph describing a feature will be enough."},feature2:{title:"Free revisions",icon:"fas fa-retweet",description:"Keep your user engaged by providing meaningful information. Remember that by this time, the user is curious"},feature3:{title:"Verified Company",icon:"fas fa-fingerprint",description:"Write few lines about each one. A paragraph describing a feature will be enough. Keep your user engaged!"},work:{icon:"fas fa-book-open",title:"Working with us is a pleasure",description:"Don't let your uses guess by attaching tooltips and popoves to any element. Just make sure you enable them first via JavaScript. The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. Just make sure you enable them first via JavaScript.",checkText:"Check tailwind starter kit",imageTitle:"Top Notch Services",imageDescription:"The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens."}}}]};function S(t,e,n){const o=j.components.findIndex(e=>e.props.id===t),r=`components[${o}].props.${e}`;return _()(j,r,n),$(),j}function $(){localStorage.setItem("page-state",JSON.stringify(j))}function A(){return JSON.parse(localStorage.getItem("page-state"))}function I(t,e){return E()(t,e,"")}$();var N={methods:{getComponentProperty(t){return I(this.$attrs,t)},setComponentProperty(t,e){S(this.$attrs.id,t,e)}}},J=N,R=Object(m["a"])(J,k,P,!1,null,null,null),B=R.exports,D={components:{Features:B},props:{component:Object},computed:{componentStyles(){let t=["backgroundColor"],e={};return t.forEach(t=>{this.component.props[t]&&(e[t]=this.component.props[t])}),console.log(e),e}}},M=D,z=Object(m["a"])(M,w,y,!1,null,null,null),W=z.exports,q={name:"App",components:{ComponentEditor:v,ComponentRenderer:W},data(){return{activeComponentName:"",page:j}},methods:{toggleActiveComponent(t){this.activeComponentName=t.name},handleEditorAction(t){const{name:e,component:n,data:o}=t,r=this.page.components.findIndex(t=>t.name===n.name);let i=r;"close"===e?this.activeComponentName="":"move-down"===e?(i=r+1,this.reOrderComponent(r,i)):"move-up"===e?(i=r-1,this.reOrderComponent(r,i)):"delete"===e?this.page.components.splice(r,1):"color-change"===e&&this.$set(n.props,"backgroundColor",o.value)},reOrderComponent(t,e){if(t===e)return;const n=this.page.components[e],o=this.page.components[t];this.page.components.splice(e,1,o),this.page.components.splice(t,1,n)}}},K=q,H=Object(m["a"])(K,a,s,!1,null,null,null),Q=H.exports,V=n("b2d6"),Y=n.n(V),G=n("4897"),L=n.n(G),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-tooltip",{attrs:{content:"Click to edit",placement:"top","open-delay":400,"hide-after":1500}},[n(t.htmlTag,t._g(t._b({ref:"inputRef",tag:"component",staticClass:"cursor-pointer",attrs:{autosize:{minRows:2,maxRows:20},type:"textarea"},on:{click:t.onClick,blur:t.onBlur}},"component",t.$attrs,!1),t.$listeners),[t._v(t._s(t.$attrs.value))])],1)},X=[],Z={inheritAttrs:!1,name:"TextEdit",props:{tag:{type:String,default:"div"}},data(){return{componentType:this.tag}},computed:{htmlTag(){return"el-input"===this.componentType?"el-input":this.tag},isEditMode(){return"el-input"===this.componentType}},methods:{onClick(){"el-input"!==this.componentType&&(this.componentType="el-input",this.$nextTick(this.focusInput))},focusInput(){this.$refs.inputRef&&this.$refs.inputRef.focus&&this.$refs.inputRef.focus()},onBlur(){"el-input"===this.componentType&&(this.componentType=this.tag)}}},tt=Z,et=Object(m["a"])(tt,U,X,!1,null,null,null),nt=et.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dropdown",{attrs:{trigger:"click"},scopedSlots:t._u([{key:"dropdown",fn:function(){return[n("el-dropdown-menu",t._l(t.icons,(function(e){return n("el-dropdown-item",{key:e,staticClass:"flex justify-center items-center h-8 w-24",class:{"bg-blue-200":t.value===e},nativeOn:{click:function(n){return t.onClick(e)}}},[n("i",{staticClass:"text-gray-700 text-2xl text-center",class:e})])})),1)]},proxy:!0}])},[t._t("default")],2)},rt=[],it={name:"IconSelect",props:{value:String},data(){return{icons:["fas fa-award","fas fa-retweet","fas fa-fingerprint","fas fa-check","fas fa-bell","fas fa-book-open","fas fa-heart"]}},methods:{onClick(t){this.$emit("input",t),console.log("icon",t)}}},at=it,st=Object(m["a"])(at,ot,rt,!1,null,null,null),lt=st.exports;o["default"].component(nt.name,nt),o["default"].component(lt.name,lt),o["default"].config.productionTip=!1,o["default"].use(i.a),L.a.use(Y.a),new o["default"]({el:"#app",render:t=>t(Q)})}});
//# sourceMappingURL=app.f1505e6d.js.map