webpackJsonp([0],{"+WLy":function(t,s){},"+wGQ":function(t,s,a){t.exports=a.p+"static/media/Page1a4.72f5639.mp4"},"/aQe":function(t,s){},"2vUI":function(t,s){},"4XKb":function(t,s,a){t.exports=a.p+"static/img/auditory-comprehension.1615c10.jpg"},"5dCz":function(t,s,a){t.exports=a.p+"static/img/memory-span.5d9d629.jpg"},"9Gdx":function(t,s,a){t.exports=a.p+"static/img/visual-attention.a62d942.jpg"},AQB1:function(t,s){},Awzs:function(t,s){},CG5Z:function(t,s,a){t.exports=a.p+"static/img/syllable-classification.854837c.jpg"},E3yD:function(t,s,a){t.exports=a.p+"static/img/word-recognition.eeb0a3e.jpg"},"G6++":function(t,s){},GQES:function(t,s,a){t.exports=a.p+"static/img/Animal2.303977b.svg"},GcMe:function(t,s){},I9nx:function(t,s){},KG6K:function(t,s,a){t.exports=a.p+"static/img/end-portal.886d531.jpg"},LbnG:function(t,s,a){t.exports=a.p+"static/img/Animal1.8e4887d.svg"},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),n=a("xDXP");a("GcMe");e.default.use(n.b);var i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},i,!1,function(t){a("2vUI")},null,null).exports,o=a("/ocq"),c=Object(n.e)({User:{name:"",years:0,months:0}});var l={setName:function(t){c.value.User.name=t},setYears:function(t){c.value.User.years=t},setMonths:function(t){c.value.User.months=t},user:Object(n.a)(function(){return c.value.User})},u=a("Zrlr"),p=a.n(u),v=a("wxAW"),d=a.n(v),m=function(){function t(){p()(this,t),this.instance=null,this.companionList=[{name:"phoenix",path:a("LbnG")},{name:"unicorn",path:a("GQES")},{name:"dragon",path:a("cVcs")},{name:"fox",path:a("Ru0f")}],this.companion=Object(n.e)(this.companionList[3])}return d()(t,[{key:"setCompanion",value:function(t){this.companion.value=this.companionList[t]}}],[{key:"getInstance",value:function(){return this.instance?this.instance:(this.instance=new t,this.instance)}}]),t}(),_=Object(n.c)({props:{},setup:function(){var t=m.getInstance(),s=t.companion.value||t.companionList[0],a=Object(n.e)(s),e=Object(n.e)(!1),i=Object(n.a)(function(){return e.value?"age":"name"}),r=Object(n.a)(function(){return e.value&&l.user.value.name&&l.user.value.years&&l.user.value.months});return{showAge:e,toggleShowAge:function(){r.value&&Q.push({path:"/gamelist"}),e.value=!e.value},title:i,inputName:function(t){l.setName(t.detail.value)},inputYears:function(t){l.setYears(t.detail.value)},inputMonths:function(t){l.setMonths(t.detail.value)},companion:a,companionHook:t}}}),h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"main-container"},[e("div",[t.companion?e("img",{attrs:{src:t.companion.path,alt:t.companion.name}}):t._e()]),t._v(" "),e("div",{staticClass:"form-container"},[e("h1",[t._v("Hello! I'm Nazca!")]),t._v(" "),e("form",{attrs:{action:""}},[e("div",{staticClass:"form"},[e("h3",[t._v("What is your "+t._s(t.title)+"?")]),t._v(" "),t.showAge?t._e():e("div",{staticClass:"input-container"},[e("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),e("csm-input",{attrs:{type:"text"},on:{csmInput:t.inputName}})],1),t._v(" "),t.showAge?e("div",{staticClass:"inputs-container"},[e("div",{staticClass:"input-container"},[e("label",{staticClass:"form-label",attrs:{for:"years"}},[t._v("Years")]),t._v(" "),e("csm-input",{attrs:{type:"number",name:"years"},on:{csmInput:t.inputYears}})],1),t._v(" "),e("div",{staticClass:"input-container"},[e("label",{staticClass:"form-label",attrs:{for:"months"}},[t._v("Months")]),t._v(" "),e("csm-input",{attrs:{type:"number",name:"months"},on:{csmInput:t.inputMonths}})],1)]):t._e()])]),t._v(" "),e("div",{staticClass:"next-container"},[e("csm-button",{attrs:{primary:""},on:{csmClick:t.toggleShowAge}},[t._v("Next")])],1)]),t._v(" "),e("audio",{attrs:{src:a("m/1q"),autoplay:"true"}})])},staticRenderFns:[]};var f=a("VU/8")(_,h,!1,function(t){a("xlKL")},"data-v-6e8cd691",null).exports,C={name:"CompagnionChoice",setup:function(){var t=m.getInstance(),s=Object(n.e)(0);return{selected:s,goToForm:function(){t.setCompanion(s.value),Q.push({path:"/form"})}}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main-container"},[e("fieldset",{staticClass:"main-form"},[t._m(0),t._v(" "),e("div",{staticClass:"companion-wrapper"},[e("label",{staticClass:"companion-btn",attrs:{for:"PhoenixInput"}},[e("input",{staticClass:"radio sr-only",attrs:{id:"PhoenixInput",name:"avatar",type:"radio"},domProps:{checked:0===t.selected},on:{input:function(s){t.selected=0}}}),t._v(" "),e("img",{staticClass:"companion-img",attrs:{src:a("LbnG"),alt:"Phoenix"}})]),t._v(" "),e("label",{staticClass:"companion-btn",attrs:{for:"UnicornInput"}},[e("input",{staticClass:"radio sr-only",attrs:{id:"UnicornInput",name:"avatar",type:"radio"},domProps:{checked:1===t.selected},on:{input:function(s){t.selected=1}}}),t._v(" "),e("img",{staticClass:"companion-img",attrs:{src:a("GQES"),alt:"Unicorn"}})]),t._v(" "),e("label",{staticClass:"companion-btn",attrs:{for:"FoxInput"}},[e("input",{staticClass:"radio sr-only",attrs:{id:"FoxInput",name:"avatar",type:"radio"},domProps:{checked:2===t.selected},on:{input:function(s){t.selected=2}}}),t._v(" "),e("img",{staticClass:"companion-img",attrs:{src:a("cVcs"),alt:"Fox"}})]),t._v(" "),e("label",{staticClass:"companion-btn",attrs:{for:"DragonInput"}},[e("input",{staticClass:"radio sr-only",attrs:{id:"DragonInput",name:"avatar",type:"radio"},domProps:{checked:3===t.selected},on:{input:function(s){t.selected=3}}}),t._v(" "),e("img",{staticClass:"companion-img",attrs:{src:a("Ru0f"),alt:"Dragon"}})])]),t._v(" "),e("csm-button",{staticClass:"next",on:{csmClick:t.goToForm}},[t._v("Next")])],1),t._v(" "),e("audio",{attrs:{src:a("m/1q"),autoplay:"true"}})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("legend",[s("h1",{staticClass:"main-title"},[this._v("Before anything, choose your companion")])])}]};var w=a("VU/8")(C,g,!1,function(t){a("fs1T")},"data-v-4a722d7b",null).exports;function b(t){var s=Object(n.e)(null),a=Object(n.e)(0),e=Object(n.e)(!1),i=i||webkitSpeechRecognition,r=new i;return r.continuous=!1,r.lang="en-US",r.onstart=function(){console.log("start")},r.onspeechend=function(){e.value=!1},r.onresult=function(t){s.value=t.results[0][0].transcript,a.value=t.results[0][0].confidence},r.onend=function(){e.value=!1},Object(n.f)(t,function(t){t?(e.value=!0,r.start()):(e.value=!1,r.stop())}),{transcript:Object(n.a)(function(){return s.value}),confidence:Object(n.a)(function(){return a.value}),isRecording:Object(n.a)(function(){return e.value})}}var y=Object(n.c)({props:{},setup:function(){var t=Object(n.e)(!1),s=b(t),a=s.transcript,e=s.isRecording;return Object(n.f)(e,function(s){t.value=s}),{toogleVoice:function(){e.value||(t.value=!t.value)},start:t,isRecording:e,transcript:a}}}),k={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",[s("div",{staticClass:"container"}),this._v(" "),s("csm-button",{attrs:{icon:this.isRecording?"square-filled":"play"},on:{csmClick:this.toogleVoice}},[this._v("\n    "+this._s(this.isRecording?"stop":"Start"))])],1)},staticRenderFns:[]};var x=a("VU/8")(y,k,!1,function(t){a("paLO")},"data-v-ee32defc",null).exports,j={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"background"},[a("h1",{staticClass:"h1"},[a("span",{staticClass:"kidName"}),t._v("'s Game Playthrough Assessment")]),t._v(" "),a("h2",{staticClass:"h2"},[t._v("Your child's information")]),t._v(" "),a("ul",[a("li",{staticClass:"listitem"},[a("span",{staticClass:"kidDetail"},[t._v("Name :")]),t._v(" "),a("span",{staticClass:"kidName"})]),t._v(" "),a("li",{staticClass:"listitem"},[a("span",{staticClass:"kidDetail"},[t._v("Age:")]),t._v(" "),a("span",{staticClass:"kidyear"}),t._v(" years "),a("span",{staticClass:"kidmonth"}),t._v(" "),a("p",[t._v("month")])])]),t._v(" "),a("h2",{staticClass:"h2"},[t._v("Your child's assessment")]),t._v(" "),a("h3",{staticClass:"h3"},[t._v("1. Recognition skills")]),t._v(" "),a("table",{staticClass:"table"},[a("caption",{staticClass:"tableTitle"},[a("h4",{staticClass:"h4"},[t._v("Recognition skills: Words")]),t._v(" "),a("p",[a("span",{staticClass:"task"},[t._v("Task:")]),t._v(" Classifying words into 3 categories: regular word, irregular word and none sence words")])]),t._v(" "),a("tr",[a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[a("span",{staticClass:"sr-only"},[t._v("Score types")])]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Regular word\r\n      ")]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Irregular word\r\n      ")]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("None sence words\r\n      ")])]),a("tr"),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("% error\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])]),t._v(" "),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Norm\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])]),t._v(" "),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Standard error\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])])]),t._v(" "),a("table",{staticClass:"table"},[a("caption",{staticClass:"tableTitle"},[a("h4",{staticClass:"h4"},[t._v("Recognition skills: Syllables")]),t._v(" "),a("p",[a("span",{staticClass:"task"},[t._v("Task:")]),t._v(" Classifying texts into 2 categories: monosyllabic words and syllables")])]),t._v(" "),a("tr",[a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[a("span",{staticClass:"sr-only"},[t._v("Score types")])]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Word\r\n      ")]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Syllables\r\n      ")])]),a("tr"),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("% error\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])]),t._v(" "),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Norm\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])]),t._v(" "),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Standard error\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])])]),t._v(" "),a("table",{staticClass:"table"},[a("caption",{staticClass:"tableTitle"},[a("h3",{staticClass:"h3"},[t._v("2. Visual attention")]),t._v(" "),a("p",[a("span",{staticClass:"task"},[t._v("Task:")]),t._v(" Matching two lines following their spatial orientation")])]),t._v(" "),a("tr",[a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[a("span",{staticClass:"sr-only"},[t._v("Score types")])]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Score\r\n      ")])]),a("tr"),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("% error\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])]),t._v(" "),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Norm\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])]),t._v(" "),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Standard error\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])])]),t._v(" "),a("table",{staticClass:"table"},[a("caption",{staticClass:"tableTitle"},[a("h3",{staticClass:"h3"},[t._v("3. Auditory comprehension")]),t._v(" "),a("p",[a("span",{staticClass:"task"},[t._v("Task:")]),t._v(" Listening to a story and answering questions (if no answer, indicators)")])]),t._v(" "),a("tr",[a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[a("span",{staticClass:"sr-only"},[t._v("Score types")])]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Score\r\n      ")])]),a("tr"),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("% error\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])]),t._v(" "),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Norm\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])]),t._v(" "),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Standard error\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])])]),t._v(" "),a("table",{staticClass:"table"},[a("caption",{staticClass:"tableTitle"},[a("h3",{staticClass:"h3"},[t._v("4. Oral spelling")]),t._v(" "),a("p",[a("span",{staticClass:"task"},[t._v("Task:")]),t._v(" Spelling heard word")])]),t._v(" "),a("tr",[a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[a("span",{staticClass:"sr-only"},[t._v("Score types")])]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Global\r\n      ")]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Phonetic \r\n      ")]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Added / omitted (letter)\r\n      ")]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Total \r\n      ")])]),a("tr"),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Number of errors\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])]),t._v(" "),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Norm\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])]),t._v(" "),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Standard error\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])])]),t._v(" "),a("table",{staticClass:"table"},[a("caption",{staticClass:"tableTitle"},[a("h3",{staticClass:"h3"},[t._v("5. Writting")]),t._v(" "),a("p",[a("span",{staticClass:"task"},[t._v("Task:")]),t._v(" Free writing about an imaginary story, landscape description")])]),t._v(" "),a("tr",[a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[a("span",{staticClass:"sr-only"},[t._v("Score types")])]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Global\r\n      ")]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Phonetic \r\n      ")]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Added / omitted (letter)\r\n      ")]),t._v(" "),a("th",{staticClass:"colHeader",attrs:{scope:"col"}},[t._v("Total \r\n      ")])]),a("tr"),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Number of errors\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])]),t._v(" "),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Norm\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])]),t._v(" "),a("tr",[a("th",{staticClass:"rowHeader",attrs:{scope:"row"}},[t._v("Standard error\r\n      ")]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})]),t._v(" "),a("td",{staticClass:"row"},[a("span",{staticClass:"result"})])])]),t._v(" "),a("h3",{staticClass:"h3"},[t._v("6. Memory span")]),t._v(" "),a("ul",[a("li",{staticClass:"listitem"},[a("span",{staticClass:"task"},[t._v("Task:")]),t._v(" Remembering and repeating a string of digits")]),t._v(" "),a("li",{staticClass:"listitem"},[a("span",{staticClass:"task"},[t._v("Results:")]),t._v(" "),a("span",{staticClass:"kidyear"}),t._v(" years "),a("span",{staticClass:"kidmonth"}),t._v(" "),a("p",[t._v("month")])])]),t._v(" "),a("h3",{staticClass:"h3"},[t._v("General conclusion")]),t._v(" "),a("p",[a("span",{staticClass:"emphase"},[t._v("As a reminder, this game is only a test, not a diagnosis.")]),t._v(" "),a("br"),t._v("\r\n  For more precise results, see a healthcare professional.")]),t._v(" "),a("p",[t._v("Your results suggest that:")]),t._v(" "),a("span",{staticClass:"diagnostic"})])}]};var O=a("VU/8")({name:"GameAssessment"},j,!1,function(t){a("G6++")},null,null).exports,S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"background"},[a("div",{staticClass:"TxtBox"},[a("div",{staticClass:"Txtbox"},[a("h1",{staticClass:"h1"},[t._v("Information for parents and professionals")]),t._v(" "),a("p",[t._v("First of all, we believe it is important for you to congratulate your child on finishing this game! It is not always an easy thing for them, eventhough we made sure to make it as playful as possible.\r\n      ")]),t._v(" "),a("p",[t._v("This game allowed us to distinguish key difficulties your child may have when reading. "),a("br"),t._v("\r\n      We gathered a "),a("a",{staticClass:"link",attrs:{href:""}},[t._v("detailed report")]),t._v(" of the information we could gather from this game.")])]),t._v(" "),a("div",{staticClass:"ProfilePanel"},[a("h2",{staticClass:"h2"},[t._v("The best profile for your child")]),t._v(" "),a("p",[t._v("We have developed a tool that allows to adapt the text of a web page to alleviate the difficulties your child may encounter when reading."),a("br"),t._v("\r\n      We identified the 4 profiles appearing below that may suit your child's needs."),a("br"),t._v("\r\n      Review each of these profiles with him/her to identify which best suits his/her needs")]),t._v(" "),a("div",[a("div",[a("div",[a("h3",{staticClass:"h3"},[t._v("Profile 1")]),t._v(" "),a("p",[t._v("This profile uses the following functionalities:\r\n            "),a("ul",[a("li",{staticClass:"listitem"},[t._v("separated syllables")]),t._v(" "),a("li",{staticClass:"listitem"},[t._v("increased space between lines")]),t._v(" "),a("li",{staticClass:"listitem"},[t._v("increased space between words")])])]),t._v(" "),a("img",{staticClass:"ProfileImg",attrs:{src:"",alt:"Profile 1"}})])]),t._v(" "),a("div",[a("h3",{staticClass:"h3"},[t._v("Profile 2")]),t._v(" "),a("p",[t._v("This profile uses the following functionalities:\r\n            "),a("ul",[a("li",{staticClass:"listitem"},[t._v("separated syllables")]),t._v(" "),a("li",{staticClass:"listitem"},[t._v("increased space between lines")]),t._v(" "),a("li",{staticClass:"listitem"},[t._v("increased space between words")])])]),t._v(" "),a("img",{staticClass:"ProfileImg",attrs:{src:"",alt:"Profile 2"}})])]),t._v(" "),a("div",[a("div",[a("h3",{staticClass:"h3"},[t._v("Profile 3")]),t._v(" "),a("p",[t._v("This profile uses the following functionalities:\r\n            "),a("ul",[a("li",{staticClass:"listitem"},[t._v("separated syllables")]),t._v(" "),a("li",{staticClass:"listitem"},[t._v("increased space between lines")]),t._v(" "),a("li",{staticClass:"listitem"},[t._v("increased space between words")])])]),t._v(" "),a("img",{staticClass:"ProfileImg",attrs:{src:"",alt:"Profile 3"}})]),t._v(" "),a("div",[a("h3",{staticClass:"h3"},[t._v("Profile 4")]),t._v(" "),a("p",[t._v("This profile uses the following functionalities:\r\n            "),a("ul",[a("li",{staticClass:"listitem"},[t._v("separated syllables")]),t._v(" "),a("li",{staticClass:"listitem"},[t._v("increased space between lines")]),t._v(" "),a("li",{staticClass:"listitem"},[t._v("increased space between words")])])]),t._v(" "),a("img",{staticClass:"ProfileImg",attrs:{src:"",alt:"Profile 4"}})])])])])])}]};var I=a("VU/8")({name:"ParentsInfo"},S,!1,function(t){a("x9aF")},null,null).exports;var H=Object(n.c)({props:{},setup:function(){var t,s=Object(n.e)(!1),a=m.getInstance(),e=a.companion.value||a.companionList[0],i=Object(n.e)(e),r=Object(n.e)(["Word","Cow","Dog","paper","have","like","home","dad","little","goat","this"]),o=Object(n.e)(0),c=Object(n.e)([]),l=Object(n.e)(0),u=Object(n.a)(function(){return r.value[o.value]}),p=(t=Object(n.e)(null),window.speechSynthesis.onvoiceschanged=function(){var s=["Google US English Male"],a=speechSynthesis.getVoices().find(function(t){var a=t.name;return s.includes(a)});window.speechSynthesis.cancel(),t.value=a},{playOnWord:function(s){var a=new SpeechSynthesisUtterance(s);a.voice=t.value,a.lang="en-US",window.speechSynthesis.speak(a)}}).playOnWord,v=b(s),d=v.isRecording,_=v.transcript,h=v.confidence,f=function(){p(u.value)};return Object(n.f)(d,function(t){console.log(t),s.value=t}),Object(n.f)(_,function(t){console.log("trans",t),t&&t.includes(u.value)&&(c.value.push({word:u.value,speech:_.value}),++l.value,console.log("score",l.value))}),{play:f,companion:i,record:function(){s.value=!0,console.log("compare","ok")},transcript:_,nextWord:function(){o.value=++o.value,f()},confidence:h}}}),T={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"container"},[a("div",[a("div",[a("div",{staticClass:"spelling-box"},[a("h1",[t._v("Spelling")]),t._v(" "),a("p",[t._v("Here, I'll say a few words.")]),t._v(" "),a("p",[t._v("Can you help me spell them?")]),t._v(" "),a("div",{staticClass:"spelling"},[a("img",{attrs:{src:"/static/icons/Hear instructions.png",alt:"",srcset:""},on:{click:t.play}})]),t._v(" "),t.companion?a("img",{staticClass:"avatar",attrs:{src:t.companion.path,alt:t.companion.name}}):t._e()])])]),t._v(" "),a("div",{staticClass:"inputs-container"},[a("div",{staticClass:"inputs"},[a("div",{staticClass:"listen",on:{click:t.play}},[a("h2",[t._v("Listen")])]),t._v(" "),a("div",{staticClass:"speak",on:{click:t.record}},[a("h2",[t._v("Speak")])])]),t._v(" "),a("button",{staticClass:"next",on:{click:t.nextWord}},[t._v("NEXT WORD")])])])},staticRenderFns:[]};var A=a("VU/8")(H,T,!1,function(t){a("+WLy")},"data-v-47bff8af",null).exports,P=Object(n.c)({props:{},setup:function(){return{goToGameList:function(){return Q.push({path:"/gamelist"})}}}}),R={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",[s("div",{staticClass:"container"},[s("div",[this._v("IMAGE")]),this._v(" "),s("div",[s("div",[this._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique adipisci dignissimos fugit, nobis magnam quae illo ducimus iste numquam voluptatem. Tenetur neque eos facilis cupiditate, ex iste blanditiis deleniti doloribus.")]),this._v(" "),s("csm-button",{on:{csmClick:this.goToGameList}},[this._v("Let's Play")])],1)])])},staticRenderFns:[]};a("VU/8")(P,R,!1,function(t){a("PE8u")},"data-v-14cbc018",null).exports;var E={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h2",[t._v("Draggable Elements")]),t._v(" "),t._l(t.origin,function(s){return a("div",{key:s,staticClass:"draggable",attrs:{draggable:!0},on:{dragstart:function(a){return t.drag(a,s)},click:function(t){t.stopPropagation()}}},[t._v("\n    "+t._s(s)+"\n  ")])}),t._v(" "),a("div",{staticClass:"basket_container"},[a("div",{staticClass:"basket_column"},[a("h2",[t._v("Target1")]),t._v(" "),a("div",{attrs:{id:"target"},on:{dragover:function(t){t.preventDefault()},drop:t.drop}},t._l(t.target,function(s){return a("div",{key:s,staticClass:"draggable"},[t._v("\n        "+t._s(s)+"\n      ")])}),0)]),t._v(" "),a("div",{staticClass:"basket_column"},[a("h2",[t._v("Target2")]),t._v(" "),a("div",{attrs:{id:"target2"},on:{dragover:function(t){t.preventDefault()},drop:t.drop2}},t._l(t.target2,function(s){return a("div",{key:s,staticClass:"draggable"},[t._v("\n        "+t._s(s)+"\n      ")])}),0)])])],2)},staticRenderFns:[]};var G=a("VU/8")({name:"DragAndDrop",data:function(){return{origin:["apple","orange","grape"],target:[],target2:[]}},methods:{drag:function(t,s){t.dataTransfer.setData("text",s)},drop:function(t){var s=t.dataTransfer.getData("text"),a=this.origin.findIndex(function(t){return t===s});this.origin.splice(a,1),this.target.push(s)},drop2:function(t){var s=t.dataTransfer.getData("text"),a=this.origin.findIndex(function(t){return t===s});this.origin.splice(a,1),this.target2.push(s)}}},E,!1,function(t){a("Awzs")},"data-v-ea112c44",null).exports;var F=Object(n.c)({props:{},setup:function(t){var s=Object(n.e)(m.getInstance().companion);return{games:Object(n.e)([{id:1,name:"Words recognition",style:"grid-row: row-1 / span 1; grid-column: col-1 / span 2; background-image: url("+a("E3yD")+");",path:""},{id:2,name:"Syllable recognition",style:"grid-row: row-1 / span 1; grid-column: col-3 / span 2; background-image: url("+a("CG5Z")+");",path:""},{id:3,name:"Visual attention",style:"grid-row: row-1 / span 1; grid-column: col-5 / span 2; background-image: url("+a("9Gdx")+");",path:""},{id:4,name:"Auditory comprehension",style:"grid-row: row-2 / span 1; grid-column: col-2 / span 2; background-image: url("+a("4XKb")+");",path:""},{id:5,name:"Oral spelling",style:"grid-row: row-2 / span 1; grid-column: col-4 / span 2; background-image: url("+a("kKjB")+");",path:""},{id:6,name:"Memory span",style:"grid-row: row-3 / span 1; grid-column: col-1 / span 2; background-image: url("+a("5dCz")+");",path:""},{id:7,name:"game7",style:"grid-row: row-3 / span 1; grid-column: col-3 / span 2; background-image: url("+a("ZWRe")+");",path:""}]),companion:s,goToGame:function(t){Q.push({path:t.path})}}}}),D={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"main-container"},[e("aside",{staticClass:"sidebar"},[t._m(0),t._v(" "),e("img",{staticClass:"companion",attrs:{src:t.companion.path}})]),t._v(" "),e("ul",{staticClass:"game-list"},[t._l(t.games,function(s,a){return e("li",{key:a,staticClass:"game-item",style:s.style,on:{click:function(a){return t.goToGame(s)}}},[e("span",{staticClass:"play-btn"},[e("csm-icon",{staticClass:"play-btn-icon",attrs:{name:"play","size-xl":""}})],1)])}),t._v(" "),e("router-link",{staticClass:"link",staticStyle:{"grid-row":"row-3 / span 1","grid-column":"col-5 / span 2"},attrs:{to:"/portal"}},[e("li",{staticClass:"game-item game-item--locked",style:"background-image: url("+a("KG6K")+")"},[e("span",{staticClass:"lock-btn"},[e("csm-icon",{staticClass:"lock-btn-icon",attrs:{name:"lock","size-xl":""}})],1)])])],2),t._v(" "),e("audio",{attrs:{src:a("+wGQ"),autoplay:"true"}})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("article",{staticClass:"content"},[s("p",[this._v("\n        There is a door that can take me home but it needs 7 jewels to open.\n        To get these jewels, we need to solve a few puzzles.\n      ")]),this._v(" "),s("h4",[this._v("Do you want to play with me?")])])}]};var U=a("VU/8")(F,D,!1,function(t){a("xoOl")},"data-v-24d3fa5b",null).exports,L=function(){function t(){p()(this,t),this.config={number:150,speed:20,fireflies:[]},this.core={now:0,delta:0,then:0,isRunning:!1,animationFrame:void 0}}return d()(t,[{key:"init",value:function(t){this.setCanvas(t),this.createFireflies(),this.play()}},{key:"setCanvas",value:function(t){this.canvas=t,this.canvas.ctx=this.canvas.getContext("2d"),this.canvas.ctx.fillStyle="#2AA1DD",this.canvas.ctx.lineWidth=.1,this.canvas.ctx.strokeStyle="#2AA1DD",this.canvas.ctx.imageSmoothingEnabled=!0}},{key:"createFireflies",value:function(){for(var t=0;t<this.config.number;t++){var s={x:.1+Math.random()*this.canvas.width,y:.1+Math.random()*this.canvas.height,vx:Math.random()*(Math.random()<.5?-1:1)*this.config.speed,vy:Math.random()*(Math.random()<.5?-1:1)*this.config.speed,radius:3*Math.random()};this.config.fireflies.push(s)}}},{key:"play",value:function(){this.core.isRunning||(this.core.isRunning=!0,this.core.then=window.performance.now(),this.frameLoop())}},{key:"frameLoop",value:function(){this.setDelta(),this.update(),this.render(),this.core.animationFrame=window.requestAnimationFrame(this.frameLoop)}},{key:"setDelta",value:function(){this.core.now=window.performance.now(),this.core.delta=(this.core.now-this.core.then)/1e3,this.core.then=this.core.now}},{key:"update",value:function(){}},{key:"render",value:function(){}}]),t}();var N=Object(n.c)({props:{},setup:function(){Object(n.e)(null),Object(n.e)(!1),new L,Object(n.d)(function(){})}}),V={render:function(){var t=this.$createElement,s=this._self._c||t;return s("fragment",[s("canvas",{ref:"canvas",staticClass:"animated-background"}),this._v(" "),s("section",{staticClass:"content"},[s("h1",{staticClass:"title"},[this._v("Welcome to Nazka's adventure")]),this._v(" "),s("router-link",{staticClass:"link",attrs:{to:"/companion"}},[s("csm-button",{attrs:{primary:""}},[this._v("Press start")])],1)],1),this._v(" "),s("audio",{attrs:{src:a("m/1q"),autoplay:"true"}})])},staticRenderFns:[]};var W=a("VU/8")(N,V,!1,function(t){a("AQB1")},"data-v-3e7cc62d",null).exports;var M=Object(n.c)({props:{},setup:function(){var t=Object(n.e)(m.getInstance().companion),s=Object(n.e)([{text:"You've got all 7 jewels! Great work!",bold:"Now let's go to the portal!",action:"Let's go!"},{text:"",bold:"We made it! That was quite the hike!",action:"Place jewels"},{text:"",bold:"",action:""}]),a=Object(n.e)(s.value[0]),e=Object(n.e)(0),i=Object(n.a)(function(){var t="companion";return 1===e.value&&(t+=" step-1"),2===e.value&&(t+=" step-2"),t});return Object(n.a)(function(t){return t%7==0?{"jewel-full-columns":!0}:t%7<3?{"jewel-half-columns":!0}:{"jewel-single-column":!0}}),{activeStep:a,companion:t,steps:s,stepIndex:e,incrementStep:function(){e.value=e.value+1,a.value=s.value[e.value],2===e.value&&setTimeout(function(){Q.push({path:"/end-game"})},5e3)},getJewelClass:function(t){return t%7==0?{"jewel-full-columns":!0}:t%7<3?{"jewel-half-columns":!0}:{"jewel-single-column":!0}},companionClass:i}}}),$={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"main-container"},[e("aside",{staticClass:"sidebar"},[e("article",{class:{content:!0,hide:2===t.stepIndex}},[e("p",[t._v(t._s(t.activeStep.text))]),t._v(" "),e("h4",[t._v(t._s(t.activeStep.bold))]),t._v(" "),e("csm-button",{staticClass:"action",attrs:{primary:""},on:{csmClick:function(s){return t.incrementStep()}}},[t._v(t._s(t.activeStep.action))])],1),t._v(" "),e("img",{class:t.companionClass,attrs:{src:t.companion.path}})]),t._v(" "),e("div",{staticClass:"jewels-container"},t._l(new Array(7).fill(void 0),function(s,n){return e("div",{key:n,class:t.getJewelClass(n)},[e("img",{class:{jewel:!0,hidden:t.stepIndex<1,yeet:2===t.stepIndex},attrs:{src:a("jIYV"),alt:"A jewel that looks like a shiny diamond!"}})])}),0),t._v(" "),e("audio",{attrs:{src:a("bmEm"),autoplay:"true"}})])},staticRenderFns:[]};var q=a("VU/8")(M,$,!1,function(t){a("/aQe")},"data-v-6d5a54b4",null).exports;var Y=Object(n.c)({props:{},setup:function(){var t=Object(n.e)(m.getInstance().companion),s=Object(n.e)(m.getInstance().companionList.filter(function(s){return s.name!==t.value.name}));return{companion:t,notCompanions:s,seeReport:function(){},getJewelClass:function(t){return t%7==0?{"jewel-full-columns":!0}:t%7<3?{"jewel-half-columns":!0}:{"jewel-single-column":!0}}}}}),z={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"main-container"},[e("aside",{staticClass:"sidebar"},[e("article",{staticClass:"content"},[e("h4",[t._v("Thank you so much for helping me get home to my family and friends.")]),t._v(" "),e("p",[t._v("I really enjoyed our adventure. Please take care and be good!")]),t._v(" "),e("csm-button",{staticClass:"action",attrs:{primary:""},on:{csmClick:function(s){return t.seeReport()}}},[t._v("See the report")])],1),t._v(" "),e("img",{staticClass:"companion",attrs:{src:t.companion.path}})]),t._v(" "),e("section",{staticClass:"not-companions-container"},[t._l(t.notCompanions,function(t,s){return e("img",{key:s,class:"not-companion offset-"+s,attrs:{src:t.path,alt:t.name}})}),t._v(" "),e("div",{staticClass:"jewels-container"},t._l(new Array(7).fill(void 0),function(s,n){return e("div",{key:n,class:t.getJewelClass(n)},[e("img",{staticClass:"jewel",attrs:{src:a("jIYV"),alt:"A jewel that looks like a shiny diamond!"}})])}),0)],2),t._v(" "),e("audio",{attrs:{src:a("bmEm"),autoplay:"true"}})])},staticRenderFns:[]};var K=a("VU/8")(Y,z,!1,function(t){a("I9nx")},"data-v-a2a8fc04",null).exports;e.default.use(o.a);var Q=new o.a({routes:[{path:"/",name:"Welcome",component:W},{path:"/form",name:"Form",component:f},{path:"/DragAndDrop",name:"DragAndDrop",component:G},{path:"/gamelist",name:"gamelist",component:U},{path:"/companion",name:"CompanionChoice",component:w},{path:"/game10",name:"Game10",component:x},{path:"/gameAssessment",name:"GameAssessment",component:O},{path:"/parentsInfo",name:"ParentsInfo",component:I},{path:"/portal",name:"Portal",component:q},{path:"/end-game",name:"EndGame",component:K},{path:"/oralSpelling",name:"OralSpelling",component:A}]}),B=a("Z9LF");e.default.use(B.a.Plugin),e.default.config.productionTip=!1,e.default.config.ignoredElements=[/csm-\w*/],new e.default({el:"#app",router:Q,components:{App:r},template:"<App/>"})},PE8u:function(t,s){},Ru0f:function(t,s,a){t.exports=a.p+"static/img/Animal4.b9c58f0.svg"},ZWRe:function(t,s,a){t.exports=a.p+"static/img/test-7.067e130.jpg"},bmEm:function(t,s,a){t.exports=a.p+"static/media/Credits.5dd627f.mp4"},cVcs:function(t,s,a){t.exports=a.p+"static/img/Animal3.336a886.svg"},fs1T:function(t,s){},jIYV:function(t,s,a){t.exports=a.p+"static/img/jewel.3916b69.png"},kKjB:function(t,s,a){t.exports=a.p+"static/img/oral-spelling.a7b44b9.png"},"m/1q":function(t,s,a){t.exports=a.p+"static/media/MainMenu.1d7432c.mp4"},paLO:function(t,s){},x9aF:function(t,s){},xlKL:function(t,s){},xoOl:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.c8a6a1d99b19c9ddf865.js.map