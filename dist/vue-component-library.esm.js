import{resolveComponent as n,openBlock as t,createElementBlock as o,Fragment as e,createVNode as u,createTextVNode as m}from"vue";import{Quasar as r,QBtn as a}from"quasar";var s={__name:"DemoComponent",setup:function(r){return function(r,a){var s=n("q-btn");return t(),o(e,null,[u(s,{label:"Button",size:"lg"}),m(" //Just a comment ")],64)}},__file:"src/components/DemoComponent.vue"},p=function(n){n.use(r,{components:{QBtn:a,MyButton:s}}),n.component("MyButton",s)};export{s as MyButton,p as default};
