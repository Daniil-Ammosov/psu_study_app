(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AddNote"],{5952:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("note",{attrs:{note:t.note},on:{add:t.addNote}})},a=[],r=n("1da1"),s=(n("96cf"),n("3723")),c=n("bc3a"),u=n.n(c),d={name:"AddNote",components:{Note:s["a"]},data:function(){return{note:{title:null,text:null}}},methods:{addNote:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.a.post("http://localhost:8000/api/note/",t.note);case 2:t.$toast.success("Note successful added"),t.$router.push("/");case 4:case"end":return e.stop()}}),e)})))()}}},i=d,l=n("2877"),p=Object(l["a"])(i,o,a,!1,null,"03308122",null);e["default"]=p.exports}}]);
//# sourceMappingURL=AddNote.52770a6d.js.map