(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-195f1002"],{"175d":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide"}},[i("div",{staticClass:"face-recognition-main"},[i("c-nav-bar",{staticClass:"address-nav-bar"},[i("i",{staticClass:"nav-bar-left iconfont icon-fanhui1",attrs:{slot:"left"},slot:"left"}),i("span",{staticClass:"nav-bar-center",attrs:{slot:"center"},slot:"center"},[t._v("\n        人脸识别\n      ")])]),i("div",{staticClass:"face-recogition-content"},[i("video",{attrs:{id:"video",width:"375",height:"320","webkit-playsinline":"true",playsinline:"true"}}),i("canvas",{attrs:{id:"canvas",width:"375",height:"320"}}),i("button",{staticClass:"btnPicture",on:{click:t.picture}},[t._v("\n        获取图片\n      ")]),i("div",{staticClass:"submit-btn"},[i("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.isBegin,expression:"!isBegin"}],staticClass:"btn",attrs:{size:"large",type:"default"},on:{click:t.play}},[t._v("\n          开始\n        ")])],1)])],1)])},a=[],s=(i("ff66"),i("ea23"),i("dbff"),{data:function(){return{isBegin:!1}},mounted:function(){var t=this;setTimeout(function(){t.init()},20)},methods:{init:function(){var t=this;this.video=document.getElementById("video"),this.context=document.getElementById("canvas").getContext("2d"),navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"user"}}).then(function(e){t.getVideoStream(e)}).catch(function(t){alert(t)})},getVideoStream:function(t){this.video.srcObject=t},play:function(){this.video.play()},picture:function(){this.context.drawImage(this.video,0,0,375,320)}}}),c=s,o=(i("ad67"),i("048f")),r=Object(o["a"])(c,n,a,!1,null,"761429c5",null);r.options.__file="faceRecongnition.vue";e["default"]=r.exports},"199c":function(t,e,i){},ad67:function(t,e,i){"use strict";var n=i("199c"),a=i.n(n);a.a}}]);
//# sourceMappingURL=chunk-195f1002.9ee8e3da.js.map