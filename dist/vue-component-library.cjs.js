"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),t=require("quasar"),n={__name:"DemoComponent",setup:function(t){return function(t,n){var o=e.resolveComponent("q-btn");return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(o,{label:"Button",size:"lg"}),e.createTextVNode(" //Just a comment ")],64)}},__file:"src/components/DemoComponent.vue"};exports.MyButton=n,exports.default=function(e){e.use(t.Quasar,{components:{QBtn:t.QBtn,MyButton:n}}),e.component("MyButton",n)};
