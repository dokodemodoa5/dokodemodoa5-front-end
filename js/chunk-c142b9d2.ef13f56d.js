(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c142b9d2"],{"94aa":function(t,e,s){},bb51:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("toolbar"),s("v-parallax",{staticStyle:{height:"80vh"},attrs:{dark:"",src:"https://images.unsplash.com/photo-1510120845667-42d863b9568c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"}},[s("v-row",{attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("h1",{staticClass:"text-h4 font-weight-thin mb-4"},[t._v("DOKODEMODOA")]),s("h4",{staticClass:"subheading"},[t._v("All-in-One Blockchain Explorer")])])],1)],1)],1)},a=[],r=s("7546"),n={name:"Home",components:{toolbar:r["a"]},data(){return{}},methods:{},created:function(){}},l=n,o=s("2877"),h=s("6544"),c=s.n(h),d=s("62ad"),p=(s("94aa"),s("2b0e")),w=p["a"].extend({name:"translatable",props:{height:Number},data:()=>({elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}),computed:{imgHeight(){return this.objHeight()}},beforeDestroy(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions(){const t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight(){throw new Error("Not implemented !")},translate(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}}),g=s("58df");const m=Object(g["a"])(w);var f=m.extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:()=>({isBooted:!1}),computed:{styles(){return{display:"block",opacity:this.isBooted?1:0,transform:`translate(-50%, ${this.parallax}px)`}}},mounted(){this.init()},methods:{init(){const t=this.$refs.img;t&&(t.complete?(this.translate(),this.listeners()):t.addEventListener("load",()=>{this.translate(),this.listeners()},!1),this.isBooted=!0)},objHeight(){return this.$refs.img.naturalHeight}},render(t){const e={staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"},s=t("div",{staticClass:"v-parallax__image-container"},[t("img",e)]),i=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[s,i])}}),u=s("0fd9"),x=Object(o["a"])(l,i,a,!1,null,null,null);e["default"]=x.exports;c()(x,{VCol:d["a"],VParallax:f,VRow:u["a"]})}}]);
//# sourceMappingURL=chunk-c142b9d2.ef13f56d.js.map