(this.webpackJsonpforma=this.webpackJsonpforma||[]).push([[0],{103:function(e,t,a){e.exports=a(138)},108:function(e,t,a){},109:function(e,t,a){},138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=(a(108),a(109),a(12)),s=a(18),u=a(184),i=a(185),m=a(86),d=a.n(m),p=a(83),g=a.n(p),b=a(84),f=a.n(b),E=a(85),h=a.n(E),v=a(187),k=a(191),O=a(190),j=a(186),x=a(188),w=a(189),T=a(140),y=a(183),C=a(87),S=a.n(C),N=a(88),_=a.n(N),F=a(40),q=a(19),D=a(41),I=a.n(D),M=function(){function e(){Object(F.a)(this,e),this.url="https://uxcandy.com/~shapoval/test-task-backend/v2"}return Object(q.a)(e,[{key:"getTasks",value:function(e,t,a){return I.a.get("".concat(this.url,"?developer=mariia&sort_direction=").concat(t,"&sort_field=").concat(e,"&page=").concat(a)).then((function(e){return e.data}))}},{key:"addTask",value:function(e){return I.a.post("".concat(this.url,"/create?developer=mariia"),e).then((function(e){return e.data}))}},{key:"updateTask",value:function(e,t){return I.a.post("".concat(this.url,"/edit/").concat(t,"?developer=mariia"),e).then((function(e){return e.data}))}}]),e}();var L=a(139),V=a(180),W=a(80),A=Object(W.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function B(){var e=A();return r.a.createElement("div",null,r.a.createElement(L.a,{className:e.backdrop,open:!0},r.a.createElement(V.a,{color:"inherit"})))}var z=Object(W.a)((function(e){return{root:{marginTop:20,width:"100%",backgroundColor:"#DCDCDC"},button:{width:"100%",marginTop:20,marginBottom:20,height:50},completed:{color:"red"},noCompleted:{"&:hover":{cursor:"pointer",color:"blue"}},pageNumber:{margin:5,"&:hover":{cursor:"pointer",color:"blue"}},activePageNumber:{color:"blue",fontSize:20},message:{color:"lightgrey",backgroundColor:"blue",position:"absolute",borderRadius:4,top:550,right:300,fontSize:30},pages:{margin:20},loginButton:{marginLeft:0,"&:hover":{cursor:"pointer",color:"blue"}}}}));function P(e){return function(t){t({type:"open_task_modal",data:e})}}function U(e){return function(t){t({type:"open_login_modal",data:e})}}var R=a(7),G=a(20),J=a(22),K=Object(W.a)((function(e){return{paper:{marginTop:e.spacing(7),display:"flex",flexDirection:"column",alignItems:"center"},button:{marginTop:50,marginLeft:40}}})),H=a(181),Q=a(141),X=a(182),Y=a(195),Z=a(194);function $(e){var t=e.reloadTasks,a=e.showMessage,l=Object(s.c)((function(e){return{modal:e.modal.task}})).modal,o=K(),u=Object(s.b)(),i=Object(n.useState)({username:"",email:"",text:"",status:""}),m=Object(c.a)(i,2),d=m[0],p=m[1],g=function(){P(!1)(u),p({username:"",email:"",text:"",status:""})},b=function(e){var t=e.target,a=t.value,n=t.name;p(Object(G.a)({},d,{},Object(R.a)({},n,a)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{open:l,onClose:g,fullWidth:!0,maxWidth:"xs"},r.a.createElement("div",{className:o.paper},"create"===l?r.a.createElement(Q.a,{component:"h1",variant:"h5"},"CREATE NEW TASK"):r.a.createElement(Q.a,{component:"h1",variant:"h5"},"UPDATE TASK"),r.a.createElement(J.ValidatorForm,{onSubmit:function(e){if(e.preventDefault(),g(),"create"===l){var n=new FormData;n.append("username",d.username),n.append("email",d.email),n.append("text",d.text),(new M).addTask(n).then((function(){return t()})),a("new task was created")}else{var r=new FormData;r.append("token",localStorage.getItem("token")),r.append("status",d.status||l.status),r.append("text",d.text||l.text),(new M).updateTask(r,l.id).then((function(){return t()})),a("task was updated")}p({username:"",email:"",text:"",status:""})}},"create"===l?r.a.createElement(r.a.Fragment,null,r.a.createElement(J.TextValidator,{label:"User name",onChange:b,name:"username",type:"text",value:d.username,validators:["required"],errorMessages:["this field is required"]}),r.a.createElement("br",null),r.a.createElement(J.TextValidator,{label:"Email",onChange:b,name:"email",type:"email",value:d.email,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),r.a.createElement("br",null),r.a.createElement(J.TextValidator,{label:"Task",onChange:b,name:"text",type:"text",value:d.text,validators:["required"],errorMessages:["this field is required"]}),r.a.createElement("br",null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{component:"h5",variant:"h5"},"username:",l.username),r.a.createElement(Q.a,{component:"h5",variant:"h5"},"email:",l.email),r.a.createElement(J.TextValidator,{label:"Task",onChange:b,name:"text",type:"text",value:d.text}),r.a.createElement("br",null),r.a.createElement(X.a,{control:r.a.createElement(Y.a,{onChange:b,name:"status",value:10,color:"default"}),label:"completed"})),r.a.createElement(y.a,{className:o.button,variant:"outlined",type:"submit"},"Submit"))),r.a.createElement(Z.a,{mt:8})))}var ee=function(){function e(){Object(F.a)(this,e),this.url="https://uxcandy.com/~shapoval/test-task-backend/v2"}return Object(q.a)(e,[{key:"postAuth",value:function(e){return I.a.post("".concat(this.url,"/login?developer=mariia"),e).then((function(e){return e.data}))}},{key:"logOut",value:function(){localStorage.removeItem("token")}}]),e}(),te=Object(W.a)((function(e){return{paper:{marginTop:e.spacing(7),display:"flex",flexDirection:"column",alignItems:"center"},button:{marginTop:50,marginLeft:40}}}));function ae(e){var t=e.setLogin,a=Object(s.c)((function(e){return{modal:e.modal.login}})).modal,l=te(),o=Object(s.b)(),u=Object(n.useState)({username:"",password:""}),i=Object(c.a)(u,2),m=i[0],d=i[1],p=function(){U(!1)(o),d({username:"",password:""})},g=function(e){var t=e.target,a=t.value,n=t.name;d(Object(G.a)({},m,{},Object(R.a)({},n,a)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{open:a,onClose:p,fullWidth:!0,maxWidth:"xs"},r.a.createElement("div",{className:l.paper},r.a.createElement(Q.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(J.ValidatorForm,{onSubmit:function(e){e.preventDefault(),p();var a=new FormData;a.append("username",m.username),a.append("password",m.password),(new ee).postAuth(a).then((function(e){localStorage.setItem("token",e.message.token),t(e.message.token)})),d({username:"",password:""})}},r.a.createElement(J.TextValidator,{label:"User name",onChange:g,name:"username",type:"text",value:m.username,validators:["required"],errorMessages:["this field is required"]}),r.a.createElement("br",null),r.a.createElement(J.TextValidator,{label:"Password",onChange:g,name:"password",type:"password",value:m.password,validators:["required"],errorMessages:["this field is required"]}),r.a.createElement("br",null),r.a.createElement(y.a,{className:l.button,variant:"outlined",type:"submit"},"Submit"))),r.a.createElement(Z.a,{mt:8})))}function ne(){var e=Object(s.c)((function(e){return{tasks:e.tasks.tasks,loaded:e.tasks.loaded,count:e.tasks.count}})),t=e.loaded,a=e.tasks,l=e.count,o=z(),m=Object(s.b)(),p=Object(n.useState)("username"),b=Object(c.a)(p,2),E=b[0],C=b[1],N=Object(n.useState)("asc"),F=Object(c.a)(N,2),q=F[0],D=F[1],I=Object(n.useState)(1),L=Object(c.a)(I,2),V=L[0],W=L[1],A=Object(n.useState)(!0),R=Object(c.a)(A,2),G=R[0],J=R[1],K=Object(n.useState)([]),H=Object(c.a)(K,2),Q=H[0],X=H[1],Y=Object(n.useState)(localStorage.getItem("token")),Z=Object(c.a)(Y,2),te=Z[0],ne=Z[1],re=Object(n.useState)(""),le=Object(c.a)(re,2),oe=le[0],ce=le[1],se=function(){!function(e,t,a){return function(n){n({type:"tasks_request_sent"}),(new M).getTasks(e,t,a).then((function(e){return n({type:"tasks_fetch",data:e})}))}}(E,q,V)(m)};Object(n.useEffect)((function(){return se()}),[E,q,V]),Object(n.useEffect)((function(){return function(){for(var e=Math.ceil(l/3),t=[],a=1;a<=e;a++)t.push(a);X(t)}()}),[l]),window.addEventListener("storage",(function(e){ne(localStorage.getItem("token"))}));var ue=function(e){W(e)},ie=function(e){P(e)(m)};return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{value:E,onChange:function(e,t){C(t)},className:o.root},r.a.createElement("h3",null,"sort by:"),r.a.createElement(i.a,{label:"id",value:"id",icon:r.a.createElement(g.a,null)}),r.a.createElement(i.a,{label:"username",value:"username",icon:r.a.createElement(f.a,null)}),r.a.createElement(i.a,{label:"email",value:"email",icon:r.a.createElement(h.a,null)}),r.a.createElement(i.a,{label:"status",value:"status",icon:r.a.createElement(d.a,null)}),te?r.a.createElement("h3",{className:o.loginButton,onClick:function(){(new ee).logOut(),ne("")}},"LOGOUT"):r.a.createElement("h3",{className:o.loginButton,onClick:function(){U(!0)(m)}},"SIGN IN")),r.a.createElement(y.a,{className:o.button,variant:"outlined",type:"submit",onClick:function(){D("asc"===q?"desc":"asc"),J(!G)}},G?r.a.createElement(S.a,null):r.a.createElement(_.a,null)),r.a.createElement(j.a,{component:T.a},r.a.createElement(v.a,{"aria-label":"simple table"},r.a.createElement(x.a,null,r.a.createElement(w.a,null,r.a.createElement(O.a,null,"Task"),r.a.createElement(O.a,{align:"right"},"id"),r.a.createElement(O.a,{align:"right"},"username"),r.a.createElement(O.a,{align:"right"},"email"),r.a.createElement(O.a,{align:"right"},"completed"))),r.a.createElement(k.a,null,a.map((function(e){return r.a.createElement(w.a,{key:e.id},r.a.createElement(O.a,{component:"th",scope:"row"},e.text),r.a.createElement(O.a,{align:"right"},e.id),r.a.createElement(O.a,{align:"right"},e.username),r.a.createElement(O.a,{align:"right"},e.email),r.a.createElement(O.a,{align:"right"},0===e.status?r.a.createElement(r.a.Fragment,null,te?r.a.createElement("div",{className:o.noCompleted,onClick:function(){return ie(e)}},"update"):r.a.createElement("div",null,"not complete")):r.a.createElement("div",{className:o.completed},"completed")))})))),r.a.createElement("div",{className:o.pages},Q.map((function(e){return r.a.createElement(r.a.Fragment,null,e===V?r.a.createElement("span",{className:o.activePageNumber,onClick:function(){ue(e)}},e):r.a.createElement("span",{className:o.pageNumber,onClick:function(){ue(e)}},e))})))),r.a.createElement("div",{className:o.message},oe),r.a.createElement(y.a,{className:o.button,variant:"outlined",onClick:function(){return ie("create")}},"create new task")):r.a.createElement(B,null),r.a.createElement($,{reloadTasks:se,showMessage:function(e){setTimeout((function(){return ce(e)}),700),setTimeout((function(){return ce("")}),5e3)}}),r.a.createElement(ae,{setLogin:ne}))}var re=a(192),le=a(193);var oe=a(24),ce=a(89),se=a(90),ue=a(91),ie={loaded:!1,tasks:[],count:0},me={task:!1,login:!1},de=Object(oe.combineReducers)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"tasks_request_sent":return Object(G.a)({},e,{},{loaded:!1});case"tasks_fetch":return Object(G.a)({},e,{},{loaded:!0,tasks:t.data.message.tasks,count:t.data.message.total_task_count});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"open_task_modal":return Object(G.a)({},e,{},{task:t.data});case"open_login_modal":return Object(G.a)({},e,{},{login:t.data});default:return e}}});var pe=function(e){var t=Object(ce.createLogger)();return Object(oe.createStore)(de,e,Object(ue.composeWithDevTools)(Object(oe.applyMiddleware)(t,se.a)))}();o.a.render(r.a.createElement(s.a,{store:pe},r.a.createElement((function(){return r.a.createElement(re.a,{component:"main",maxWidth:"md"},r.a.createElement(le.a,null),r.a.createElement(ne,null))}),null)),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.aa27db99.chunk.js.map