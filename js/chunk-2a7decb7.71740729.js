(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a7decb7"],{"175d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide"}},[i("div",{staticClass:"face-recognition-main"},[i("c-nav-bar",{staticClass:"address-nav-bar"},[i("i",{staticClass:"nav-bar-left iconfont icon-fanhui1",attrs:{slot:"left"},slot:"left"}),i("span",{staticClass:"nav-bar-center",attrs:{slot:"center"},slot:"center"},[t._v("\n        人脸识别\n      ")])]),i("div",{staticClass:"face-recogition-content"},[i("video",{attrs:{id:"video","webkit-playsinline":"true",playsinline:"true"}}),i("canvas",{attrs:{id:"canvas",width:"375",height:"320"}}),i("div",{staticClass:"hole"}),i("div",{staticClass:"start-btn"},[i("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.isBegin,expression:"!isBegin"}],staticClass:"btn",attrs:{size:"large",type:"default"},on:{click:t.play}},[t._v("\n          开始识别\n        ")])],1)])],1)])},a=[],s=(i("ff66"),i("ea23"),i("dbff"),{data:function(){return{isBegin:!1}},mounted:function(){var t=this;setTimeout(function(){t.init()},20)},methods:{init:function(){var t=this;this.video=document.getElementById("video"),this.canvas=document.getElementById("canvas"),this.context=document.getElementById("canvas").getContext("2d"),navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then(function(e){t.getVideoStream(e)}).catch(function(t){alert(t)})},getVideoStream:function(t){this.video.srcObject=t},play:function(){this.isBegin=!0,this.video.play(),this.startDistinguish()},startDistinguish:function(){var t=this;setTimeout(function(){t.getPicture()},2e3)},getPicture:function(){this.context.drawImage(this.video,0,0,375,320);var t=this.canvas.toDataURL("image/jpeg",1);console.log(t)}}}),o=s,c=(i("826f"),i("048f")),r=Object(c["a"])(o,n,a,!1,null,"430b101e",null);r.options.__file="faceRecongnition.vue";e["default"]=r.exports},"70d8":function(t,e,i){},"826f":function(t,e,i){"use strict";var n=i("70d8"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-2a7decb7.71740729.js.map