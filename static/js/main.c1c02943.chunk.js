(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{1:function(e,t,a){e.exports={dataFooter:"Footer_dataFooter__22-Se",todoCount:"Footer_todoCount__1PuTS",filters:"Footer_filters__3dO_E",clear:"Footer_clear__3veQd",active:"Footer_active__EeWba",filterBtnJs:"Footer_filterBtnJs__2EB7K"}},10:function(e,t,a){e.exports={header:"FieldCreatingNewTasks_header__1NmQW",todosInput:"FieldCreatingNewTasks_todosInput__2t_Zs",toggleAll:"FieldCreatingNewTasks_toggleAll__ks75C",active:"FieldCreatingNewTasks_active__2-Sbv"}},17:function(e,t,a){e.exports={headerText:"TodoList_headerText__2jkBW",todo:"TodoList_todo__1CS5R"}},18:function(e,t,a){e.exports={main:"TaskList_main__1SuYp",todoList:"TaskList_todoList__2mKL_"}},24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},3:function(e,t,a){e.exports={item:"Task_item__JiYci",removeBtn:"Task_removeBtn__1sz5U",toggle:"Task_toggle__3fEH1",redactor:"Task_redactor__1I0yX",taskText:"Task_taskText__3Uucy",checkboxCustom:"Task_checkboxCustom__3Iipx",text:"Task_text__1RRNW",check:"Task_check__1LVuI",edit:"Task_edit__10Fv9",active:"Task_active__31Jxc"}},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),o=(a(29),a(9)),i=a(5),l=a(19),u=a(12),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):t},k=a(14);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var m=function(e,t){var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);return delete a[t],a},_=function(e,t){var a=e.indexOf(t);return e.splice(a,1),e},T=function(e){return JSON.parse(JSON.stringify(e))};function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O={tasks:f("todo")},p={tasks:[new k.b.Entity("tasks")]},v=Object(k.a)(O,p);O={tasks:{entities:v.entities.tasks||{},ids:v.result.tasks||[]},allSelected:!1,leftTasks:0,filter:f("filter","All")};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,a=b({},e.tasks.entities),n=Object(l.a)(e.tasks.ids),r=T(e.tasks),c=[],s=c[0],o=c[1],u=c[2];switch(t.type){case"ADD_TASK":var f=Object(i.a)(t.payload,2);return s=f[0],u=f[1],r.entities[s]={id:s,check:!1,title:u},r.ids=[].concat(Object(l.a)(r.ids),[s]),b({},e,{tasks:r});case"CHANGE__CHECK":var k=Object(i.a)(t.payload,3);return s=k[0],o=k[1],u=k[2],r.entities[s]={id:s,check:o,title:u},b({},e,{tasks:r});case"REMOVE_TASK":return b({},e,{tasks:b({},e.tasks,{entities:m(a,t.payload),ids:_(n,t.payload)})});case"REMOVE_SELECT_TASKS":return e.tasks.ids.map((function(e){a[e].check&&(delete a[e],n=_(n,e))})),b({},e,{tasks:{entities:a,ids:n}});case"SELECT_ALL_TASK":return n.map((function(t){return a[t].check=!e.allSelected})),b({},e,{tasks:{entities:a,ids:n}});case"CONTROL_ALL_SELECTED":return b({},e,{allSelected:!t.payload});case"LEFT_TASKS":return b({},e,{leftTasks:t.payload});case"END_EDIT_TASK":var d=Object(i.a)(t.payload,3);return s=d[0],o=d[1],u=d[2],r.entities[s]={id:s,check:o,title:u},b({},e,{tasks:r});case"FILTER_TASKS":return b({},e,{filter:t.payload});default:return e}},h=a(21),S=Object(o.combineReducers)({task:g}),j=Object(o.createStore)(S,Object(h.devToolsEnhancer)());j.subscribe((function(){localStorage.setItem("todo",JSON.stringify(j.getState().task.tasks.entities)),localStorage.setItem("filter",JSON.stringify(j.getState().task.filter))}));var C=j,y=a(7),A=a(6),N=function(e){return e.task.tasks.entities},L=Object(A.a)([N],(function(e){return e})),x=function(e){return e.task.tasks.ids},w=Object(A.a)([x],(function(e){return e})),F=Object(A.a)([function(e){return e.task.filter}],(function(e){return e})),D=Object(A.a)([x],(function(e){return e.length})),K=Object(A.a)([D],(function(e){return Boolean(e)})),P=Object(A.a)([N,x],(function(e,t){return t.some((function(t){return!e[t].check}))})),B=Object(A.a)([N,x],(function(e,t){return t.filter((function(t){return!e[t].check})).length})),I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(y.c)((function(a){return e(a,t)}))},J=function(e){var t=Object(y.b)();return Object(n.useCallback)((function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t({type:e,payload:a})}),[t,e])},R=a(17),V=a.n(R),M=a(18),H=a.n(M),W=a(3),G=a.n(W),Q=a(2),U=a.n(Q),Y=Object(n.memo)((function(e){var t=e.isCheck,a=e.id,n=e.task,c=e.editMode,s=e.cacheValueTask,o=e.currentEditTask,i=e.changeBox,l=e.removeTask,u=e.startChangeTask,f=e.changeValueTask,k=e.stopChangeTask;return r.a.createElement("li",{className:G.a.item,onDoubleClick:u},c?r.a.createElement("input",{ref:o,autoFocus:!0,className:U()(G.a.edit,c&&G.a.active),value:s,onChange:function(e){return f(e.currentTarget.value)},onBlur:function(e){return k(e,s)},onKeyDown:function(e){return k(e,s)}}):r.a.createElement("label",{className:G.a.toggle},r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{onClick:i,className:U()(G.a.checkboxCustom,t&&G.a.check)}),r.a.createElement("span",{className:G.a.text,id:a},n),r.a.createElement("button",{className:G.a.removeBtn,onClick:l}),r.a.createElement("button",{className:G.a.taskText})))})),z=function(e){var t=e.id,a=e.isCheck,c=e.task,s=Object(n.useState)(!1),o=Object(i.a)(s,2),l=o[0],u=o[1],f=Object(n.useState)(""),k=Object(i.a)(f,2),d=k[0],m=k[1],_=J("CHANGE__CHECK"),T=J("REMOVE_TASK"),E=J("END_EDIT_TASK"),b=Object(n.useRef)(null),O=Object(n.useCallback)((function(e){m(e)}),[m]),p=function(e){E([t,a,e]),""===e&&T(t),u(!1)};return r.a.createElement(Y,{isCheck:a,id:t,task:c,editMode:l,cacheValueTask:d,currentEditTask:b,changeBox:function(){_([t,!a,c])},removeTask:function(){T(t)},startChangeTask:function(){u(!0),m(c)},changeValueTask:O,stopChangeTask:function(e,t){"Enter"===e.key?p(t):e.currentTarget!==b.current||e.key?"Escape"===e.key&&p(c):p(t)}})},X=function(){var e=I(L),t=I(F),a=I(function(e,t){return Object(A.a)([x],(function(a){return a.filter((function(a){switch(e){case"All":return t[a];case"Active":return!t[a].check;case"Completed":return t[a].check;default:return t[a]}}))}))}(t,e));return e=a.map((function(t,a){return r.a.createElement(z,{key:a,id:e[t].id,isCheck:e[t].check,task:e[t].title,tasks:e})})),r.a.createElement("section",{className:H.a.main},r.a.createElement("ul",{className:H.a.todoList},e))},Z=a(10),q=a.n(Z),$=Object(n.memo)((function(e){var t=e.isTasks,a=e.changeValue,n=e.selectAll,c=e.value,s=e.isAllSelected;return r.a.createElement("div",{className:q.a.header},r.a.createElement("input",{onChange:a,onKeyPress:a,autoFocus:!0,className:q.a.todosInput,value:c,placeholder:"What needs to be done?"}),t&&r.a.createElement("button",{onClick:n,className:U()(q.a.toggleAll,!s&&q.a.active)}))})),ee=a(23),te=a.n(ee),ae=function(e){var t=e.countTasks,a=I(P),c=J("ADD_TASK"),s=J("SELECT_ALL_TASK"),o=Object(n.useState)(""),l=Object(i.a)(o,2),u=l[0],f=l[1],k=Object(n.useCallback)((function(e){f(e.currentTarget.value),"Enter"===e.key&&e.currentTarget.value.trim()&&(c([te()(),e.currentTarget.value]),f(""))}),[f,c]);return r.a.createElement($,{isTasks:t,selectAll:function(){s()},isAllSelected:a,value:u,changeValue:k})},ne=a(1),re=a.n(ne),ce=function(e){var t=e.leftTasks,a=e.removeSelectedTask,n=e.filter,c=e.filterTasks,s=Object(y.c)(D);return r.a.createElement("div",{className:re.a.dataFooter},r.a.createElement("span",{className:re.a.todoCount},r.a.createElement("strong",null,t),"item left"),r.a.createElement("ul",{className:re.a.filters},r.a.createElement("li",null,r.a.createElement("a",{href:"#/All",className:U()(re.a.filterBtnJs,"All"===n&&re.a.active),onClick:function(e){return c(e.currentTarget.innerText)}},"All")),r.a.createElement("li",null,r.a.createElement("a",{href:"#/Active",className:U()(re.a.filterBtnJs,"Active"===n&&re.a.active),onClick:function(e){return c(e.currentTarget.innerText)}},"Active")),r.a.createElement("li",null,r.a.createElement("a",{href:"#/Completed",className:U()(re.a.filterBtnJs,"Completed"===n&&re.a.active),onClick:function(e){return c(e.currentTarget.innerText)}},"Completed"))),r.a.createElement("button",{className:U()(re.a.clear,t<s&&re.a.active),onClick:function(){a()}},"Clear completed"))},se=function(){var e=I(B),t=I(F),a=J("REMOVE_SELECT_TASKS"),n=J("FILTER_TASKS");return r.a.createElement(ce,{leftTasks:e,removeSelectedTask:function(){a()},filter:t,filterTasks:function(e){n(e)}})},oe=function(){var e=I(K);return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:V.a.headerText},"todos"),r.a.createElement("div",{className:V.a.todo},r.a.createElement(ae,{countTasks:e}),r.a.createElement(X,null),e&&r.a.createElement(se,null)))};s.a.render(r.a.createElement(y.a,{store:C},r.a.createElement((function(){var e=I(P),t=I(L),a=I(F),c=I(w),s=J("CONTROL_ALL_SELECTED"),o=J("LEFT_TASKS"),i=I(B);return Object(n.useEffect)((function(){o(i),s(e)}),[t,c,s,o,i,e,a]),r.a.createElement(oe,null)}),null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c1c02943.chunk.js.map