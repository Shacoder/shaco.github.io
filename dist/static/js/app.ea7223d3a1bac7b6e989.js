webpackJsonp([1],{"1uuo":function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("nav",[t("div",{staticClass:"nav-wrapper purple"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Manejador de Empleados\n    ")])],1)])])},staticRenderFns:[]},r={name:"App",components:{navBar:a("VU/8")(null,n,!1,null,null,null).exports}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("navBar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},i=a("VU/8")(r,s,!1,null,null,null).exports,l=a("/ocq"),d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._v(" "),a("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),a("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),a("br"),e._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},d,!1,function(e){a("1uuo")},"data-v-d8ec41bc",null).exports;var m=a("Sazm"),c=a.n(m),u=(a("3VHS"),c.a.initializeApp({apiKey:"AIzaSyBqE292gCZtW89BxijEh47J4YP1dSsiE7Q",authDomain:"vue-proyecto.firebaseapp.com",databaseURL:"https://vue-proyecto.firebaseio.com",projectId:"vue-proyecto",storageBucket:"vue-proyecto.appspot.com",messagingSenderId:"810494567859"}).firestore()),p={name:"dashboard",data:function(){return{empleadoA:[]}},created:function(){var e=this;u.collection("Empleados").orderBy("NumeroEmp").get().then(function(t){t.forEach(function(t){console.log(t.data());var a={id:t.id,empleados_id:t.data().NumeroEmp,nombre:t.data().Nombre,departamento:t.data().Departamento,posicion:t.data().sha};e.empleadoA.push(a)})})}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.empleadoA,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v("\n              "+e._s(t.departamento)+"\n           ")]),e._v("\n           "+e._s(t.nombre)+"\n           "+e._s(t.empleados_id)+"\n           "+e._s(t.posicion)+"\n            "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"mostrandoEmpleado",params:{empleados_id:t.empleados_id}}}},[a("i",{staticClass:"fa fa-eye"},[e._v("Ver Empleado")])])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/nuevoEmpleado"}},[e._v(" Nuevo\n")])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h3",[this._v("Listado de Empleados")])])}]},_=a("VU/8")(p,v,!1,null,null,null).exports,h={name:"nuevoEmp",data:function(){return{empleados_id:null,Nombre:null,departamento:null,posicion:null}},methods:{Agregar:function(){var e=this;u.collection("Empleados").add({NumeroEmp:this.empleados_id,Nombre:this.nombre,Departamento:this.departamento,sha:this.posicion}).then(function(t){console.log("Client added: ",t.id),e.$router.push("/")}).catch(function(e){console.error("Error agregando el empleado: ",e)})}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"nuevoEmp"}},[a("h3",[e._v("New Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.Agregar(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.empleados_id,expression:"empleados_id"}],attrs:{type:"number",required:""},domProps:{value:e.empleados_id},on:{input:function(t){t.target.composing||(e.empleados_id=t.target.value)}}}),e._v(" "),a("label",[e._v("ID del empleado ")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nombre,expression:"nombre"}],attrs:{type:"text",required:""},domProps:{value:e.nombre},on:{input:function(t){t.target.composing||(e.nombre=t.target.value)}}}),e._v(" "),a("label",[e._v(" Nombre")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.departamento,expression:"departamento"}],attrs:{type:"text",required:""},domProps:{value:e.departamento},on:{input:function(t){t.target.composing||(e.departamento=t.target.value)}}}),e._v(" "),a("label",[e._v("Departamento")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.posicion,expression:"posicion"}],attrs:{type:"text",required:""},domProps:{value:e.posicion},on:{input:function(t){t.target.composing||(e.posicion=t.target.value)}}}),e._v(" "),a("label",[e._v("Posicion ")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},b=a("VU/8")(h,f,!1,null,null,null).exports,g={name:"editarE",data:function(){return{empleados_id:null,Nombre:null,departamento:null,posicion:null}},beforeRouteEnter:function(e,t,a){u.collection("Empleados").where("NumeroEmp","==",e.params.empleados_id).get().then(function(e){e.forEach(function(e){a(function(t){t.empleados_id=e.data().NumeroEmp,t.nombre=e.data().Nombre,t.posicion=e.data().sha,t.departamento=e.data().Departamento})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;u.collection("Empleados").where("NumeroEmp","==",this.$route.params.empleados_id).get().then(function(t){t.forEach(function(t){e.empleados_id=t.data().NumeroEmp,e.nombre=t.data().Nombre,e.posicion=t.data().sha,e.departamento=t.data().Departamento})})},Actualizar:function(){var e=this;confirm("¿Seguro de Actualizar?")&&u.collection("Empleados").where("NumeroEmp","==",this.$route.params.empleados_id).get().then(function(t){t.forEach(function(t){t.ref.update({NumeroEmp:e.empleados_id,Nombre:e.nombre,Departamento:e.departamento,sha:e.posicion}).then(function(){e.$router.push({name:"mostrandoEmpleado",params:{empleados_id:e.empleados_id}})})})})}}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"editarE"}},[a("h2",[e._v("Editar Empleados")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.Actualizar(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.empleados_id,expression:"empleados_id"}],attrs:{type:"number",required:""},domProps:{value:e.empleados_id},on:{input:function(t){t.target.composing||(e.empleados_id=t.target.value)}}}),e._v(" "),a("label",[e._v(e._s(e.empleados_id)+" ")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.nombre,expression:"nombre"}],attrs:{type:"text",required:""},domProps:{value:e.nombre},on:{input:function(t){t.target.composing||(e.nombre=t.target.value)}}}),e._v(" "),a("label",[e._v(e._s(e.nombre))])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.departamento,expression:"departamento"}],attrs:{type:"text",required:""},domProps:{value:e.departamento},on:{input:function(t){t.target.composing||(e.departamento=t.target.value)}}}),e._v(" "),a("label",[e._v(e._s(e.departamento))])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.posicion,expression:"posicion"}],attrs:{type:"text",required:""},domProps:{value:e.posicion},on:{input:function(t){t.target.composing||(e.posicion=t.target.value)}}}),e._v(" "),a("label",[e._v(e._s(e.posicion))])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},C=a("VU/8")(g,E,!1,null,null,null).exports,w={name:"mostrandoEmpleado",data:function(){return{empleados_id:null,nombre:null,posicion:null,departamento:null}},beforeRouteEnter:function(e,t,a){u.collection("Empleados").where("NumeroEmp","==",e.params.empleados_id).get().then(function(e){e.forEach(function(e){a(function(t){t.empleados_id=e.data().NumeroEmp,t.nombre=e.data().Nombre,t.posicion=e.data().sha,t.departamento=e.data().Departamento})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;u.collection("Empleados").where("NumeroEmp","==",this.$route.params.empleados_id).get().then(function(t){t.forEach(function(t){e.empleados_id=t.data().NumeroEmp,e.nombre=t.data().Nombre,e.posicion=t.data().sha,e.departamento=t.data().Departamento})})},borrarEmpleado:function(){var e=this;confirm("Segudo de Borrar")&&u.collection("Empleados").where("NumeroEmp","==",this.$route.params.empleados_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},N={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(e._s(e.nombre))])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Numero de id: "+e._s(e.empleados_id))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Departamento: "+e._s(e.departamento))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Posicion: "+e._s(e.posicion))])]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v(" Atras ")]),e._v(" "),a("button",{staticClass:"btn red",on:{click:e.borrarEmpleado}},[e._v("Borrar")]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"editarEmpleado",params:{empleados_id:e.empleados_id}}}},[a("i",{staticClass:"fa fa-pencil"},[e._v("Editar")])])],1)],1)},staticRenderFns:[]},y=a("VU/8")(w,N,!1,null,null,null).exports;o.a.use(l.a);var x=new l.a({routes:[{path:"/",name:"dash",component:_},{path:"/nuevoEmpleado",name:"nuevomEpleado",component:b},{path:"/:empleados_id",name:"mostrandoEmpleado",component:y},{path:"/edit/:empleados_id",name:"editarEmpleado",component:C}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:x,components:{App:i},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.ea7223d3a1bac7b6e989.js.map