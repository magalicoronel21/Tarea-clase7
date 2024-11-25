(function(){"use strict";var t={2704:function(t,a,e){var s=e(6848),i=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary shadow-sm"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Gestor de Tareas")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav ms-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/","active-class":"active"}},[t._v("Inicio")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/addtask","active-class":"active"}},[t._v("Agregar Tarea")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/apitasks","active-class":"active"}},[t._v("Cargar Tareas (API)")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/combinedtasks","active-class":"active"}},[t._v("Vista Combinada")])],1)])])])]),a("div",{staticClass:"container my-4"},[a("router-view")],1)])},r=[function(){var t=this,a=t._self._c;t._self._setupProxy;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],n=(0,s.pM)({name:"App"}),o=n,c=e(1656),l=(0,c.A)(o,i,r,!1,null,"49ce4478",null),d=l.exports,u=e(6178),m=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("div",{staticClass:"card shadow"},[a("div",{staticClass:"card-body"},[t._m(0),a("h1",{staticClass:"card-title"},[t._v("Bienvenido al Gestor de Tareas de Magalí")]),a("p",{staticClass:"card-text"},[t._v("Administra tus tareas de manera fácil y eficiente.")]),a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/addtask"}},[a("i",{staticClass:"fas fa-plus"}),t._v(" Comenzar ")]),t._m(1)],1)])])},p=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"image-container"},[a("img",{staticClass:"img-fluid rounded mb-4",attrs:{src:e(5268),alt:"Gestor de Tareas"}})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"social-icons mt-4"},[a("a",{staticClass:"social-icon",attrs:{href:"https://www.facebook.com",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook"})]),a("a",{staticClass:"social-icon",attrs:{href:"https://twitter.com",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter"})]),a("a",{staticClass:"social-icon",attrs:{href:"https://www.linkedin.com",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})])])}],v={name:"HomeView"},f=v,h=(0,c.A)(f,m,p,!1,null,"4987b6ae",null),g=h.exports,b=function(){var t=this;t._self._c;return t._m(0)},k=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"about container text-center"},[a("h1",{staticClass:"my-4"},[a("span",{staticClass:"text-primary"},[t._v("Hola, soy Maga")]),t._v(" y este es mi "),a("strong",[t._v("Gestor de Tareas")])]),a("img",{staticClass:"img-fluid rounded mb-4",attrs:{src:e(5268),alt:"Gestor de Tareas",width:"400"}}),a("p",{staticClass:"lead"},[t._v(" En esta aplicación, podrás organizar tus actividades de estudio de manera eficiente. "),a("br"),t._v(" ¡Haz que cada tarea se convierta en un paso hacia tu éxito! ")]),a("div",{staticClass:"social-icons mt-4"},[a("a",{staticClass:"me-3",attrs:{href:"https://twitter.com",target:"_blank"}},[a("img",{attrs:{src:"https://img.icons8.com/ios-filled/50/000000/twitter.png",alt:"Twitter",width:"30"}})]),a("a",{staticClass:"me-3",attrs:{href:"https://linkedin.com",target:"_blank"}},[a("img",{attrs:{src:"https://img.icons8.com/ios-filled/50/000000/linkedin.png",alt:"LinkedIn",width:"30"}})]),a("a",{attrs:{href:"https://github.com",target:"_blank"}},[a("img",{attrs:{src:"https://img.icons8.com/ios-filled/50/000000/github.png",alt:"GitHub",width:"30"}})])])])}],C={},_=(0,c.A)(C,b,k,!1,null,"4922dca0",null),y=_.exports,T=function(){var t=this,a=t._self._c;return a("div",[a("h2",[t._v("Agregar Tarea")]),a("form",{on:{submit:function(a){return a.preventDefault(),t.addTask.apply(null,arguments)}}},[a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"task"}},[t._v("Nueva Tarea")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.taskName,expression:"taskName"}],staticClass:"form-control",attrs:{type:"text",id:"task",placeholder:"Escribe tu tarea aquí",required:""},domProps:{value:t.taskName},on:{input:function(a){a.target.composing||(t.taskName=a.target.value)}}})]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Agregar")])])])},w=[],x={data(){return{taskName:""}},methods:{addTask(){this.$emit("add-task",this.taskName),this.taskName=""}}},A=x,N=(0,c.A)(A,T,w,!1,null,null,null),P=N.exports,j=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container my-4"},[a("h2",{staticClass:"text-center mb-4"},[t._v("Vista de Tareas desde la API")]),a("div",{staticClass:"mb-4"},[a("h3",{staticClass:"mb-3"},[t._v("Tareas desde la API")]),a("ul",{staticClass:"list-group"},[0===t.apiTasks.length?[a("li",{staticClass:"list-group-item text-muted text-center"},[t._v(" No hay tareas disponibles. ")])]:t._l(t.apiTasks,(function(e){return a("li",{key:e.id,staticClass:"list-group-item d-flex justify-content-between align-items-center",class:{"bg-success text-white":e.completed}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"task.completed"}],attrs:{type:"checkbox"},domProps:{checked:e.completed,checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:[function(a){var s=e.completed,i=a.target,r=!!i.checked;if(Array.isArray(s)){var n=null,o=t._i(s,n);i.checked?o<0&&t.$set(e,"completed",s.concat([n])):o>-1&&t.$set(e,"completed",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(e,"completed",r)},function(a){return t.toggleCompletion(e)}]}}),t._v(" "+t._s(e.todo)+" ")]),a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(a){return t.removeTask(e)}}},[t._v("Eliminar")])])}))],2)])])},O=[],I=(e(8992),e(4520),{data(){return{apiTasks:[]}},mounted(){this.fetchTasks()},methods:{async fetchTasks(){try{const t=await fetch("https://dummyjson.com/todos"),a=await t.json();this.apiTasks=a.todos}catch(t){console.error("Error al cargar las tareas desde la API:",t)}},toggleCompletion(t){t.completed=!t.completed},removeTask(t){this.apiTasks=this.apiTasks.filter((a=>a.id!==t.id))}}}),$=I,E=(0,c.A)($,j,O,!1,null,"c0c750ca",null),G=E.exports,q=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container my-4"},[a("h2",{staticClass:"text-center mb-4"},[t._v("Vista Combinada de Tareas")]),a("div",{staticClass:"mb-4"},[a("h3",{staticClass:"mb-3"},[t._v("Agregar Nueva Tarea")]),a("form",{staticClass:"d-flex gap-2",on:{submit:function(a){return a.preventDefault(),t.addTask.apply(null,arguments)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingrese una tarea",required:""},domProps:{value:t.newTask},on:{input:function(a){a.target.composing||(t.newTask=a.target.value)}}}),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Agregar")])])]),a("div",{staticClass:"mb-4"},[a("h3",{staticClass:"mb-3"},[t._v("Tareas desde la API")]),a("ul",{staticClass:"list-group"},[0===t.apiTasks.length?[a("li",{staticClass:"list-group-item text-muted text-center"},[t._v(" No hay tareas disponibles. ")])]:t._l(t.apiTasks,(function(e){return a("li",{key:e.id,staticClass:"list-group-item d-flex justify-content-between align-items-center",class:{"bg-success text-white":e.completed}},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"task.completed"}],attrs:{type:"checkbox"},domProps:{checked:e.completed,checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:[function(a){var s=e.completed,i=a.target,r=!!i.checked;if(Array.isArray(s)){var n=null,o=t._i(s,n);i.checked?o<0&&t.$set(e,"completed",s.concat([n])):o>-1&&t.$set(e,"completed",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(e,"completed",r)},function(a){return t.toggleCompletion(e)}]}}),t._v(" "+t._s(e.todo)+" ")]),a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(a){return t.removeTask(e)}}},[t._v("Eliminar")])])}))],2)])])},H=[],M=(e(4114),{data(){return{apiTasks:[],newTask:""}},mounted(){this.fetchTasks()},methods:{async fetchTasks(){try{const t=await fetch("https://dummyjson.com/todos"),a=await t.json();this.apiTasks=a.todos}catch(t){console.error("Error al cargar las tareas desde la API:",t)}},addTask(){if(!this.newTask.trim())return void alert("Por favor ingrese una tarea válida.");const t={id:Date.now(),todo:this.newTask.trim(),completed:!1};this.apiTasks.push(t),this.newTask=""},toggleCompletion(t){t.completed=!t.completed},removeTask(t){this.apiTasks=this.apiTasks.filter((a=>a.id!==t.id))}}}),V=M,z=(0,c.A)(V,q,H,!1,null,"42049e1e",null),D=z.exports;s.Ay.use(u.Ay);const B=[{path:"/Tarea-clase7",component:g},{path:"/about",component:y},{path:"/addtask",component:P},{path:"/apitask",component:G},{path:"/combinedtasks",component:D}],F=new u.Ay({mode:"history",routes:B});var L=F;s.Ay.config.productionTip=!1,new s.Ay({render:t=>t(d),router:L}).$mount("#app")},5268:function(t,a,e){t.exports=e.p+"img/gestor-tareas.6801ec34.jpeg"}},a={};function e(s){var i=a[s];if(void 0!==i)return i.exports;var r=a[s]={exports:{}};return t[s].call(r.exports,r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(a,s,i,r){if(!s){var n=1/0;for(d=0;d<t.length;d++){s=t[d][0],i=t[d][1],r=t[d][2];for(var o=!0,c=0;c<s.length;c++)(!1&r||n>=r)&&Object.keys(e.O).every((function(t){return e.O[t](s[c])}))?s.splice(c--,1):(o=!1,r<n&&(n=r));if(o){t.splice(d--,1);var l=i();void 0!==l&&(a=l)}}return a}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[s,i,r]}}(),function(){e.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(a,{a:a}),a}}(),function(){e.d=function(t,a){for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){e.p="/Tarea-clase7/"}(),function(){var t={524:0};e.O.j=function(a){return 0===t[a]};var a=function(a,s){var i,r,n=s[0],o=s[1],c=s[2],l=0;if(n.some((function(a){return 0!==t[a]}))){for(i in o)e.o(o,i)&&(e.m[i]=o[i]);if(c)var d=c(e)}for(a&&a(s);l<n.length;l++)r=n[l],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(d)},s=self["webpackChunkgestor_tareas"]=self["webpackChunkgestor_tareas"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=e.O(void 0,[504],(function(){return e(2704)}));s=e.O(s)})();
//# sourceMappingURL=app.06628e64.js.map