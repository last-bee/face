(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5af0f9fc"],{"5ffd":function(e,t,a){"use strict";function i(e,t){var a=Date.parse(new Date)/1e3;e&&(a-=e),t&&(a-=t);var i=new Date(a),c=i.getFullYear(),o=i.getMonth()+1;o<10&&(o="0"+o);var s=i.getDay();s<10&&(s="0"+s);var n=i.getHours()<10?"0"+i.getHours():i.getHours(),r=i.getMinutes()<10?"0"+i.getMinutes():i.getMinutes();return c+"-"+o+"-"+s+" "+n+":"+r}function c(e){return!!new Date(e).getFullYear()}a.d(t,"b",function(){return i}),a.d(t,"a",function(){return c})},"6fa2":function(e,t,a){"use strict";var i=a("f054"),c=a.n(i);c.a},"86a5":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"firstStep-main"},[a("progress-bar",{attrs:{roleName:e.roleName}}),a("div",[e._v("\n    上傳圖片\n  ")]),a("div",{staticClass:"firstStep-item"},[a("c-cell",{attrs:{title:"预约查勘时间",rightType:"text",fontBold:800,value:e.get_investigativeInformationDto.appointTimeObj.value}}),a("c-cell",{attrs:{title:"事故类型",rightType:"select",mark:!0,value:e.get_investigativeInformationDto.accidentTypeObj.value},on:{clickSelect:function(t){e.clickSelect("accidentTypeArr","事故类型")}}}),a("c-cell",{attrs:{title:"事故处理部门",rightType:"select",mark:!0,value:e.get_investigativeInformationDto.accidentDepartmentObj.value},on:{clickSelect:function(t){e.clickSelect("accidentDepartmentArr","事故处理类型")}}}),a("c-cell",{attrs:{title:"交警姓名",rightType:"input",mark:!0,value:e.get_investigativeInformationDto.policyNameObj.value}}),a("c-cell",{attrs:{title:"交警电话",rightType:"input",mark:!0,value:e.get_investigativeInformationDto.policyTelObj.value}}),a("c-cell",{attrs:{title:"交警队",rightType:"input",mark:!0,value:e.get_investigativeInformationDto.policyTeamObj.value}}),a("c-cell",{attrs:{title:"出险原因",rightType:"select",mark:!0,value:e.get_investigativeInformationDto.riskCauseObj.value},on:{clickSelect:function(t){e.clickSelect("riskCauseArr","出险原因")}}}),a("c-cell",{attrs:{title:"责任类型/比例",rightType:"select",mark:!0,value:e.get_investigativeInformationDto.responsibilityObj.value},on:{clickSelect:function(t){e.clickSelect("responsibilityTypeArr","责任类型/比例")}}}),a("c-cell",{attrs:{title:"查勘方式",rightType:"select",mark:!0,value:e.get_investigativeInformationDto.surveyMethodObj.value},on:{clickSelect:function(t){e.clickSelect("surveyMethodArr","查勘方式")}}}),a("c-cell",{attrs:{title:"查勘地点",rightType:"text",mark:!0,value:e.get_investigativeInformationDto.policyTeamObj.value}})],1),a("van-popup",{attrs:{closeOnClickOverlay:!1,position:"bottom"},model:{value:e.selectShow,callback:function(t){e.selectShow=t},expression:"selectShow"}},[a("van-picker",{attrs:{showToolbar:!0,valueKey:"codeName",title:e.selectTitle,columns:e.selectItem},on:{cancel:e.baseInfoCancel,confirm:e.baseInfoConfirm}})],1),a("div",{staticClass:"firstStep-footer",on:{click:e.goSecondStep}},[e._v("\n    下一步\n  ")])],1)},c=[],o=a("7ea5"),s=(a("ff66"),a("ea23"),a("dbff"),a("a202")),n=a("5ffd"),r=a("f2de"),l={name:"firstStep",components:{"progress-bar":s["a"]},data:function(){return{roleName:"李哈哈",selectTitle:"",selectItem:[],selectShow:!1,baseInfoIndex:"",selectList:{accidentTypeArr:[{codeName:"单车",code:"01"},{codeName:"多车",code:"02"},{codeName:"多方",code:"03"}],accidentDepartmentArr:[{codeName:"保险公司处理",code:"01"},{codeName:"自行协商",code:"02"},{codeName:"交管正常处理",code:"03"},{codeName:"交警简易程序处理",code:"04"},{codeName:"其他",code:"05"}],riskCauseArr:[{codeName:"碰撞",code:"01"},{codeName:"倾覆",code:"02"},{codeName:"玻璃破碎",code:"03"},{codeName:"车身划伤",code:"04"},{codeName:"盗抢",code:"05"}],responsibilityTypeArr:[{codeName:"全责100%",code:"01"},{codeName:"主责90%",code:"02"},{codeName:"同责80%",code:"03"},{codeName:"次责70%",code:"04"},{codeName:"无0%",code:"05"}],surveyMethodArr:[{codeName:"第一现场查勘",code:"01"},{codeName:"复勘",code:"02"},{codeName:"未查勘",code:"03"},{codeName:"第二现场查勘",code:"04"}]}}},created:function(){this.$store.dispatch("change_investigativeInformationDto",{value:Object(n["b"])(),key:"appointTimeObj"})},computed:Object(o["a"])({},Object(r["c"])(["get_investigativeInformationDto"])),methods:Object(o["a"])({},Object(r["b"])(["change_investigativeInformationDto"]),{clickSelect:function(e,t){this.selectItem=this.selectList[e],this.selectShow=!0,this.selectTitle=t},baseInfoConfirm:function(e){switch(this.selectTitle){case"事故类型":this.$store.dispatch("change_investigativeInformationDto",{value:e.codeName,key:"accidentTypeObj"});break;case"事故处理类型":this.$store.dispatch("change_investigativeInformationDto",{value:e.codeName,key:"accidentDepartmentObj"});break;case"出险原因":this.$store.dispatch("change_investigativeInformationDto",{value:e.codeName,key:"riskCauseObj"});break;case"责任类型/比例":this.$store.dispatch("change_investigativeInformationDto",{value:e.codeName,key:"responsibilityObj"});break;case"查勘方式":this.$store.dispatch("change_investigativeInformationDto",{value:e.codeName,key:"surveyMethodObj"});break}this.selectShow=!1},baseInfoCancel:function(){this.selectShow=!1},goSecondStep:function(){this.$router.push({name:"进度二"})}})},u=l,m=(a("6fa2"),a("048f")),d=Object(m["a"])(u,i,c,!1,null,"55488e2a",null);d.options.__file="firstStep.vue";t["default"]=d.exports},a202:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"progressBar-main"},[a("ul",{ref:"progressBar",staticClass:"content"},[a("li",{staticClass:"item"}),a("li",{staticClass:"item"}),a("li",{staticClass:"item"}),a("li",{staticClass:"item"}),a("li",{staticClass:"item"})]),a("span",{staticClass:"message"},[e._v("\n    "+e._s(e.roleName)+"您好！还有"+e._s(e.notStepNum)+"步完成任务，请继续加油哦！\n  ")])])},c=[],o={name:"progressBar",props:{progressNum:{type:Array,default:function(){return[1]}},roleName:{type:String,default:"李哈哈"}},data:function(){return{notStepNum:5}},mounted:function(){this.getProgress()},methods:{getProgress:function(){for(var e in this.progressNum)this.$refs.progressBar.children[e].className="item active";this.notStepNum-=this.progressNum.length}}},s=o,n=(a("f480"),a("048f")),r=Object(n["a"])(s,i,c,!1,null,"274fd1aa",null);r.options.__file="progressBar.vue";t["a"]=r.exports},edda:function(e,t,a){},f054:function(e,t,a){},f480:function(e,t,a){"use strict";var i=a("edda"),c=a.n(i);c.a}}]);
//# sourceMappingURL=chunk-5af0f9fc.356b7a8c.js.map