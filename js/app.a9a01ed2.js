(function(){"use strict";var t={4743:function(t,a,s){var e=s(6848),r=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary shadow-sm"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Gestor de Tareas")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav ms-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/","active-class":"active"}},[t._v("Inicio")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/addtask","active-class":"active"}},[t._v("Agregar Tarea")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/apitasks","active-class":"active"}},[t._v("Cargar Tareas (API)")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/combinedtasks","active-class":"active"}},[t._v("Vista Combinada")])],1)])])])]),a("div",{staticClass:"container my-4"},[a("router-view")],1)])},i=[function(){var t=this,a=t._self._c;t._self._setupProxy;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],n=(0,e.pM)({name:"App"}),o=n,l=s(1656),c=(0,l.A)(o,r,i,!1,null,"49ce4478",null),u=c.exports,d=s(6178),v=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-body"},[t._m(0),a("h1",{staticClass:"card-title"},[t._v("Bienvenido al Gestor de Tareas de Magalí")]),a("p",{staticClass:"card-text"},[t._v("Administra tus tareas de manera fácil y eficiente.")]),a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/addtask"}},[a("i",{staticClass:"fas fa-plus"}),t._v(" Comenzar ")]),t._m(1)],1)])])},f=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"image-container"},[a("img",{staticClass:"img-fluid rounded mb-4",attrs:{src:s(5268),alt:"Gestor de Tareas"}})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"social-icons mt-4"},[a("a",{staticClass:"social-icon",attrs:{href:"https://www.facebook.com",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook"})]),a("a",{staticClass:"social-icon",attrs:{href:"https://twitter.com",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter"})]),a("a",{staticClass:"social-icon",attrs:{href:"https://www.linkedin.com",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})])])}],m={name:"HomeView"},p=m,h=(0,l.A)(p,v,f,!1,null,"4987b6ae",null),g=h.exports,b=function(){var t=this;t._self._c;return t._m(0)},k=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"about container text-center"},[a("h1",{staticClass:"my-4"},[a("span",{staticClass:"text-primary"},[t._v("Hola, soy Maga")]),t._v(" y este es mi "),a("strong",[t._v("Gestor de Tareas")])]),a("img",{staticClass:"img-fluid rounded mb-4",attrs:{src:s(5268),alt:"Gestor de Tareas",width:"400"}}),a("p",{staticClass:"lead"},[t._v(" En esta aplicación, podrás organizar tus actividades de estudio de manera eficiente. "),a("br"),t._v(" ¡Haz que cada tarea se convierta en un paso hacia tu éxito! ")]),a("div",{staticClass:"social-icons mt-4"},[a("a",{staticClass:"me-3",attrs:{href:"https://twitter.com",target:"_blank"}},[a("img",{attrs:{src:"https://img.icons8.com/ios-filled/50/000000/twitter.png",alt:"Twitter",width:"30"}})]),a("a",{staticClass:"me-3",attrs:{href:"https://linkedin.com",target:"_blank"}},[a("img",{attrs:{src:"https://img.icons8.com/ios-filled/50/000000/linkedin.png",alt:"LinkedIn",width:"30"}})]),a("a",{attrs:{href:"https://github.com",target:"_blank"}},[a("img",{attrs:{src:"https://img.icons8.com/ios-filled/50/000000/github.png",alt:"GitHub",width:"30"}})])])])}],_={},C=(0,l.A)(_,b,k,!1,null,"4922dca0",null),w=C.exports,y=function(){var t=this,a=t._self._c;return a("div",[a("h2",[t._v("Agregar Tarea")]),a("form",{on:{submit:function(a){return a.preventDefault(),t.addTask.apply(null,arguments)}}},[a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"task"}},[t._v("Nueva Tarea")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.taskName,expression:"taskName"}],staticClass:"form-control",attrs:{type:"text",id:"task",placeholder:"Escribe tu tarea aquí",required:""},domProps:{value:t.taskName},on:{input:function(a){a.target.composing||(t.taskName=a.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Agregar")])])])},T=[],x={data(){return{taskName:""}},methods:{addTask(){this.$emit("add-task",this.taskName),this.taskName=""}}},A=x,N=(0,l.A)(A,y,T,!1,null,null,null),j=N.exports,O=function(){var t=this,a=t._self._c;return a("div",[a("h2",[t._v("Tareas desde la API")]),a("ul",t._l(t.tasks,(function(s){return a("li",{key:s.id},[t._v(t._s(s.todo))])})),0)])},P=[],I={data(){return{tasks:[]}},mounted(){this.fetchTasks()},methods:{async fetchTasks(){try{const t=await fetch("https://dummyjson.com/todos"),a=await t.json();this.tasks=a.todos}catch(t){console.error("Error al cargar las tareas:",t)}}}},G=I,E=(0,l.A)(G,O,P,!1,null,null,null),q=E.exports,H=function(){var t=this,a=t._self._c;return a("div",[a("h2",[t._v("Vista Combinada de Tareas")]),a("h3",[t._v("Tareas desde la API")]),a("ul",t._l(t.apiTasks,(function(s){return a("li",{key:s.id},[t._v(t._s(s.todo))])})),0),a("h3",[t._v("Agregar Nueva Tarea")]),a("form",{on:{submit:function(a){return a.preventDefault(),t.addTask.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],attrs:{type:"text",placeholder:"Ingrese una tarea",required:""},domProps:{value:t.newTask},on:{input:function(a){a.target.composing||(t.newTask=a.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Agregar")])])])},M=[],z=(s(4114),{data(){return{apiTasks:[],newTask:""}},mounted(){this.fetchTasks()},methods:{async fetchTasks(){try{const t=await fetch("https://dummyjson.com/todos"),a=await t.json();this.apiTasks=a.todos}catch(t){console.error("Error al cargar las tareas desde la API:",t)}},addTask(){this.newTask.trim()&&(this.apiTasks.push({id:Date.now(),todo:this.newTask}),this.newTask="")}}}),D=z,V=(0,l.A)(D,H,M,!1,null,null,null),$=V.exports;e.Ay.use(d.Ay);const B=[{path:"/",component:g},{path:"/about",component:w},{path:"/addtask",component:j},{path:"/apitask",component:q},{path:"/combinedtasks",component:$}],F=new d.Ay({mode:"history",routes:B});var L=F;e.Ay.config.productionTip=!1,new e.Ay({render:t=>t(u),router:L}).$mount("#app")},5268:function(t,a,s){t.exports=s.p+"img/gestor-tareas.6801ec34.jpeg"}},a={};function s(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(a,e,r,i){if(!e){var n=1/0;for(u=0;u<t.length;u++){e=t[u][0],r=t[u][1],i=t[u][2];for(var o=!0,l=0;l<e.length;l++)(!1&i||n>=i)&&Object.keys(s.O).every((function(t){return s.O[t](e[l])}))?e.splice(l--,1):(o=!1,i<n&&(n=i));if(o){t.splice(u--,1);var c=r();void 0!==c&&(a=c)}}return a}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[e,r,i]}}(),function(){s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,{a:a}),a}}(),function(){s.d=function(t,a){for(var e in a)s.o(a,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){s.p="/Tarea-clase7/"}(),function(){var t={524:0};s.O.j=function(a){return 0===t[a]};var a=function(a,e){var r,i,n=e[0],o=e[1],l=e[2],c=0;if(n.some((function(a){return 0!==t[a]}))){for(r in o)s.o(o,r)&&(s.m[r]=o[r]);if(l)var u=l(s)}for(a&&a(e);c<n.length;c++)i=n[c],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(u)},e=self["webpackChunkgestor_tareas"]=self["webpackChunkgestor_tareas"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=s.O(void 0,[504],(function(){return s(4743)}));e=s.O(e)})();
//# sourceMappingURL=app.a9a01ed2.js.map