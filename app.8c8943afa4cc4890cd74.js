webpackJsonp([0,2],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n(1);var a=n(5),o=r(a),u=n(157),i=r(u),l=n(158),c=r(l),f=n(254),s=r(f),d=n(352),p=r(d),v=n(353),y=r(v);(0,y["default"])(s["default"],p["default"],"app"),i["default"].render(o["default"].createElement(c["default"],null),document.getElementById("app"))},1:function(e,t){},158:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i,l,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var f=n(159),s=r(f),d=n(5),p=r(d),v=n(170),y=r(v),h=n(253),b=r(h),g=n(294),m=r(g),O=n(175),_=n(297),E=r(_),j=(i=(0,O.DragDropContext)(E["default"]),i(l=function(e){function t(){return a(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return p["default"].createElement("div",null,p["default"].createElement("button",{className:"add-note",onClick:this.addLane},"+"),p["default"].createElement(s["default"],{stores:[m["default"]],inject:{lanes:function(){return m["default"].getState().lanes||[]}}},p["default"].createElement(y["default"],null)))}},{key:"addLane",value:function(){b["default"].create({name:"New lane"})}}]),t}(p["default"].Component))||l);t["default"]=j},170:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),o=r(a),u=n(171),i=r(u);t["default"]=function(e){var t=e.lanes;return o["default"].createElement("div",{className:"lanes"},t.map(function(e){return o["default"].createElement(i["default"],{className:"lane",key:e.id,lane:e},o["default"].createElement(i["default"].Header,{name:e.name}),o["default"].createElement(i["default"].Notes,{notes:e.notes}))}))}},171:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var s=n(159),d=r(s),p=n(5),v=r(p),y=n(172),h=r(y),b=n(268),g=r(b),m=n(269),O=r(m),_=n(253),E=r(_),j=n(173),k=r(j),w=n(175),N=n(252),P=r(N),S={hover:function(e,t){var n=t.getItem(),r=n.id;e.lane.notes.length||(console.log("source",r,"target",e),E["default"].attachToLane({laneId:e.lane.id,noteId:r}))}},M=(l=(0,w.DropTarget)(P["default"].NOTE,S,function(e){return{connectDropTarget:e.dropTarget()}}),l(c=function(e){function t(e){o(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e)),r=e.lane.id;return n.addNote=n.addNote.bind(n,r),n.deleteNote=n.deleteNote.bind(n,r),n.editName=n.editName.bind(n,r),n.deleteLane=n.deleteLane.bind(n,r),n.activateLaneEdit=n.activateLaneEdit.bind(n,r),n}return i(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.connectDropTarget,n=e.lane,r=a(e,["connectDropTarget","lane"]);return t(v["default"].createElement("div",r,v["default"].createElement("div",{className:"lane-header",onClick:this.activateLaneEdit},v["default"].createElement("div",{className:"lane-add-note"},v["default"].createElement("button",{onClick:this.addNote},"+")),v["default"].createElement(k["default"],{className:"lane-name",editing:n.editing,value:n.name,onEdit:this.editName}),v["default"].createElement("div",{className:"lane-delete"},v["default"].createElement("button",{onClick:this.deleteLane},"x"))),v["default"].createElement(d["default"],{stores:[O["default"]],inject:{notes:function(){return O["default"].getNotesByIds(n.notes)}}},v["default"].createElement(h["default"],{onValueClick:this.activateNoteEdit,onEdit:this.editNote,onDelete:this.deleteNote}))))}},{key:"addNote",value:function(e,t){t.stopPropagation();var n=g["default"].create({task:"New task"});E["default"].attachToLane({noteId:n.id,laneId:e})}},{key:"editNote",value:function(e,t){g["default"].update({id:e,task:t,editing:!1})}},{key:"deleteNote",value:function(e,t){E["default"].detachFromLane({laneId:e,noteId:t}),g["default"]["delete"](t)}},{key:"editName",value:function(e,t){E["default"].update({id:e,name:t,editing:!1})}},{key:"deleteLane",value:function(e){E["default"]["delete"](e)}},{key:"activateLaneEdit",value:function(e){E["default"].update({id:e,editing:!0})}},{key:"activateNoteEdit",value:function(e){g["default"].update({id:e,editing:!0})}}]),t}(v["default"].Component))||c);M.Header=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(v["default"].Component),M.Notes=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(v["default"].Component),t["default"]=M},172:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),o=r(a),u=n(173),i=r(u),l=n(174),c=r(l),f=n(253),s=r(f);t["default"]=function(e){var t=e.notes,n=e.onValueClick,r=e.onEdit,a=e.onDelete;return o["default"].createElement("ul",{className:"notes"},t.map(function(e){return o["default"].createElement(c["default"],{className:"note",id:e.id,key:e.id,onMove:s["default"].move},o["default"].createElement(i["default"],{editing:e.editing,value:e.task,onValueClick:n.bind(null,e.id),onEdit:r.bind(null,e.id),onDelete:a.bind(null,e.id)}))}))}},173:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var c=n(5),f=r(c),s=function(e){function t(){var e,n,r,a;o(this,t);for(var i=arguments.length,l=Array(i),c=0;i>c;c++)l[c]=arguments[c];return n=r=u(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.renderEdit=function(){return f["default"].createElement("input",{type:"text",ref:function(e){return e?e.selectionStart=r.props.value.length:null},autoFocus:!0,defaultValue:r.props.value,onBlur:r.finishEdit,onKeyPress:r.checkEnter})},r.renderValue=function(){var e=r.props.onDelete;return f["default"].createElement("div",{onClick:r.props.onValueClick},f["default"].createElement("span",{className:"value"},r.props.value),e?r.renderDelete():null)},r.renderDelete=function(){return f["default"].createElement("button",{className:"delete",onClick:r.props.onDelete},"x")},r.checkEnter=function(e){"Enter"===e.key&&r.finishEdit(e)},r.finishEdit=function(e){var t=e.target.value;r.props.onEdit&&t.trim()&&r.props.onEdit(t)},a=n,u(r,a)}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=(e.value,e.onEdit,e.onValueClick,e.editing),n=a(e,["value","onEdit","onValueClick","editing"]);return f["default"].createElement("div",n,t?this.renderEdit():this.renderValue())}}]),t}(f["default"].Component);t["default"]=s},174:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l,c,f,s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var p=n(5),v=r(p),y=n(175),h=n(252),b=r(h),g={beginDrag:function(e){return console.log("begin dragging note",e),{id:e.id}},isDragging:function(e,t){return e.id===t.getItem().id}},m={hover:function(e,t){var n=e.id,r=t.getItem(),a=r.id;a!==n&&e.onMove({sourceId:a,targetId:n}),console.log("dragging note",r,e)}},O=(l=(0,y.DragSource)(b["default"].NOTE,g,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}),c=(0,y.DropTarget)(b["default"].NOTE,m,function(e){return{connectDropTarget:e.dropTarget()}}),l(f=c(f=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.connectDragSource,n=e.connectDropTarget,r=e.isDragging,o=(e.id,e.onMove,a(e,["connectDragSource","connectDropTarget","isDragging","id","onMove"]));return t(n(v["default"].createElement("li",s({style:{opacity:r?0:1}},o),o.children)))}}]),t}(v["default"].Component))||f)||f);t["default"]=O},252:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={NOTE:"note"}},253:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(254),o=r(a);t["default"]=o["default"].generateActions("create","update","delete","attachToLane","detachFromLane","move")},254:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(255),o=r(a),u=new o["default"];t["default"]=u},268:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(254),o=r(a);t["default"]=o["default"].generateActions("create","update","delete")},269:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var u=n(270),i=r(u),l=n(254),c=r(l),f=n(268),s=r(f),d=function(){function e(){a(this,e),this.bindActions(s["default"]),this.notes=[],this.exportPublicMethods({getNotesByIds:this.getNotesByIds.bind(this)})}return o(e,[{key:"create",value:function(e){var t=this.notes;return e.id=i["default"].v4(),this.setState({notes:t.concat(e)}),e}},{key:"update",value:function(e){var t=this.notes.map(function(t){return t.id===e.id?Object.assign({},t,e):t});this.setState({notes:t})}},{key:"delete",value:function(e){this.setState({notes:this.notes.filter(function(t){return t.id!==e})})}},{key:"getNotesByIds",value:function(e){var t=this;return(e||[]).map(function(e){return t.notes.filter(function(t){return t.id===e})}).filter(function(e){return e.length}).map(function(e){return e[0]})}}]),e}();t["default"]=c["default"].createStore(d,"NoteStore")},294:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var u=n(270),i=r(u),l=n(254),c=r(l),f=n(253),s=r(f),d=n(295),p=r(d),v=function(){function e(){a(this,e),this.bindActions(s["default"]),this.lanes=[]}return o(e,[{key:"attachToLane",value:function(e){var t=e.laneId,n=e.noteId,r=this.lanes.map(function(e){return e.notes.indexOf(n)>=0&&(e.notes=e.notes.filter(function(e){return e!==n})),e.id===t&&(-1===e.notes.indexOf(n)?e.notes.push(n):console.warn("Already attached note to lane",r)),e});this.setState({lanes:r})}},{key:"detachFromLane",value:function(e){var t=e.laneId,n=e.noteId,r=this.lanes.map(function(e){return e.id===t&&(e.notes=e.notes.filter(function(e){return e!==n})),e});this.setState({lanes:r})}},{key:"create",value:function(e){var t=this.lanes;e.id=i["default"].v4(),e.notes=e.notes||[],this.setState({lanes:t.concat(e)})}},{key:"update",value:function(e){var t=this.lanes.map(function(t){return t.id===e.id?Object.assign({},t,e):t});this.setState({lanes:t})}},{key:"delete",value:function(e){this.setState({lanes:this.lanes.filter(function(t){return t.id!==e})})}},{key:"move",value:function(e){var t=e.sourceId,n=e.targetId,r=this.lanes,a=r.filter(function(e){return e.notes.indexOf(t)>=0})[0],o=r.filter(function(e){return e.notes.indexOf(n)>=0})[0],u=a.notes.indexOf(t),i=o.notes.indexOf(n);a===o?a.notes=(0,p["default"])(a.notes,{$splice:[[u,1],[i,0,t]]}):(a.notes.splice(u,1),o.notes.splice(i,0,t)),this.setState({lanes:r})}}]),e}();t["default"]=c["default"].createStore(v,"LaneStore")},352:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={get:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}}},353:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t,n){var r=(0,o["default"])(e);try{e.bootstrap(t.get(n))}catch(a){console.error("Failed to bootstrap data",a)}r.listen(function(){t.get("debug")||t.set(n,e.takeSnapshot())})};var a=n(354),o=r(a)},354:function(e,t){"use strict";function n(){var e=this;this.dispatcher.register(function(t){var n=Object.keys(e.alt.stores).reduce(function(t,n){return t.push(e.alt.stores[n].dispatchToken),t},[]);e.waitFor(n),e.setState({payload:t}),e.emitChange()})}function r(e){return e.FinalStore?e.FinalStore:e.FinalStore=e.createUnsavedStore(n)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r,e.exports=t["default"]}});