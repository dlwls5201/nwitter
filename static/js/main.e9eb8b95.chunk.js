(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(34),s=n.n(r),i=n(8),o=n(22),l=n(6),u=n(37),j=n(23);n(42),n(57),n(58);j.a.initializeApp({apiKey:"AIzaSyDgOUYPIZM93r9HcyRCkjf3-BnYByRabj0",authDomain:"nwitter-d9b7e.firebaseapp.com",projectId:"nwitter-d9b7e",storageBucket:"nwitter-d9b7e.appspot.com",messagingSenderId:"711242048966",appId:"1:711242048966:web:111f0e8d82eddb58163ec7"});var d=j.a,b=j.a.auth(),p=j.a.firestore(),x=j.a.storage(),f=n(9),O=n.n(f),h=n(16),m=n(12),v=n(19),g=n(1),y=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(a.useState)(t.text),u=Object(i.a)(l,2),j=u[0],d=u[1],b=function(){var e=Object(h.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.confirm("Are you sure you want to delete this nweet?"),console.log(n),!n){e.next=7;break}return e.next=5,p.doc("nweets/".concat(t.id)).delete();case 5:return e.next=7,x.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){return o((function(e){return!e}))},y=function(){var e=Object(h.a)(O.a.mark((function e(n){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p.doc("nweets/".concat(t.id)).update({text:j});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{className:"nweet",children:s?Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-center text-lg font-bold",children:"Modify"}),Object(g.jsxs)("form",{style:{position:"relative"},className:"mt-5 mb-8",onSubmit:y,children:[Object(g.jsx)("input",{style:{width:"100%"},className:"formInput mb-5 mr-5",type:"text",placeholder:"Edit your nweet",value:j,required:!0,onChange:function(e){var t=e.target.value;d(t)}}),Object(g.jsxs)("div",{style:{position:"absolute",right:"0"},children:[Object(g.jsx)("button",{className:"cancelBtn mr-3",onClick:f,children:"Cancel"}),Object(g.jsx)("input",{className:"myBlueBtn",type:"submit",value:"Update Nweet"})]})]})]}):Object(g.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[t.attachmentUrl&&Object(g.jsx)("img",{className:"rounded-full mr-5 w-12",src:t.attachmentUrl}),Object(g.jsx)("h4",{className:"pr-10",children:t.text}),n&&Object(g.jsxs)("div",{className:"nweet__actions",children:[Object(g.jsx)("span",{onClick:b,children:Object(g.jsx)(m.a,{icon:v.e})}),Object(g.jsx)("span",{onClick:f,children:Object(g.jsx)(m.a,{icon:v.b})})]})]})})},w=n(35);var N=function(){return Object(g.jsxs)("div",{className:"lds-roller",children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]})},I=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),u=l[0],j=l[1],d=Object(a.useState)(!1),b=Object(i.a)(d,2),f=b[0],y=b[1],I=function(){var e=Object(h.a)(O.a.mark((function e(n){var a,c,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),y(!0),a="",""===u){e.next=13;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(w.v4)())),e.next=9,c.putString(u,"data_url");case 9:return i=e.sent,e.next=12,i.ref.getDownloadURL();case 12:a=e.sent;case 13:return o={text:r,createdAt:Date.now(),createdId:t.uid,attachmentUrl:a},e.next=16,p.collection("nweets").add(o);case 16:s(""),j(""),y(!1);case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("form",{onSubmit:I,className:"factoryForm",children:[Object(g.jsxs)("div",{className:"factoryInput__container",children:[Object(g.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind",maxLength:120}),Object(g.jsx)("input",{className:"factoryInput__submit",type:"submit",value:"\u2192"}),f&&Object(g.jsx)(N,{}),Object(g.jsxs)("label",{className:"factoryInput__label",children:[Object(g.jsx)("span",{children:"Add photos"}),Object(g.jsx)(m.a,{icon:v.c}),Object(g.jsx)("input",{style:{display:"none"},onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;j(t)},n.readAsDataURL(t)},type:"file",accept:"image/*"})]})]}),u&&Object(g.jsxs)("div",{className:"factoryForm__attachment",children:[Object(g.jsx)("img",{src:u,width:"50px",height:"50px"}),Object(g.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return j("")},children:[Object(g.jsx)("span",{children:"Remove"}),Object(g.jsx)(m.a,{icon:v.d})]})]})]})},S=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){p.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(u.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(g.jsxs)("div",{style:{marginTop:"30px",display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(g.jsx)(I,{userObj:t}),Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100vw",marginTop:"30px"},children:r.map((function(e){return Object(g.jsx)(y,{nweetObj:e,isOwner:t.uid===e.createdId},e.id)}))})]})},k=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(!0),j=Object(i.a)(u,2),d=j[0],p=j[1],x=Object(a.useState)(""),f=Object(i.a)(x,2),m=f[0],v=f[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&l(a)},w=function(){var e=Object(h.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=8;break}return e.next=5,b.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,b.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:w,className:"container",children:[Object(g.jsx)("input",{className:"authInput",name:"email",type:"text",placeholder:"Email",value:n,onChange:y,required:!0}),Object(g.jsx)("input",{className:"authInput",name:"password",type:"password",placeholder:"password",value:o,onChange:y,required:!0}),Object(g.jsx)("input",{className:"authInput authSubmit",type:"submit",value:d?"Create Account":"Log In"})]}),m&&Object(g.jsx)("span",{className:"authError",children:m}),Object(g.jsx)("span",{onClick:function(){return p((function(e){return!e}))},className:"authSwitch",children:d?"Sign In":"Create Account"})]})},C=n(25),D=function(){var e=function(){var e=Object(h.a)(O.a.mark((function e(t){var n,a,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new d.auth.GoogleAuthProvider:"github"===n&&(a=new d.auth.GithubAuthProvider),e.next=4,d.auth().signInWithPopup(a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("div",{style:{background:"linear-gradient(#190e1f,#190e1f,#190e1f,#3C1951,#3C1951,#EF9A93,#ffddda)",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[Object(g.jsx)("p",{style:{fontSize:"25px",color:"var(--android-color)",textShadow:"0 0 22px"},children:"Happy Handal Member \u2665\ufe0f"}),Object(g.jsx)(m.a,{icon:C.a,color:"var(--android-color)",size:"3x",style:{marginBottom:"30px"}}),Object(g.jsx)(k,{}),Object(g.jsxs)("div",{style:{width:"320px",display:"flex",justifyContent:"space-between"},children:[Object(g.jsxs)("button",{className:"bg-white rounded-full text-xs py-2 px-2",onClick:e,name:"google",children:["Continue with Google ",Object(g.jsx)(m.a,{icon:C.c})]}),Object(g.jsxs)("button",{className:"bg-white rounded-full text-xs py-2 px-2",onClick:e,name:"github",children:["Continue with Github ",Object(g.jsx)(m.a,{icon:C.b})]})]})]})},U=function(e){var t=e.userObj;return Object(g.jsx)("nav",{children:Object(g.jsxs)("ul",{style:{background:"white",display:"flex",justifyContent:"center",paddingTop:"30px",paddingBottom:"10px",marginBottom:"0px"},children:[Object(g.jsx)("li",{children:Object(g.jsxs)(o.b,{to:"/",style:{marginRight:"20px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"12px"},children:[Object(g.jsx)(m.a,{icon:v.a,color:"var(--navigation-color)",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:"10px",color:"var(--navigation-color)"},children:"Home"})]})}),Object(g.jsx)("li",{children:Object(g.jsxs)(o.b,{to:"/profile",style:{marginLeft:"10px",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"12px"},children:[Object(g.jsx)(m.a,{icon:v.f,color:"var(--navigation-color)",size:"2x"}),Object(g.jsx)("span",{style:{marginTop:"10px",color:"var(--navigation-color)"},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},A=function(e){var t=e.refreshUser,n=e.userObj,c=Object(l.f)(),r=Object(a.useState)(n.displayName),s=Object(i.a)(r,2),o=s[0],u=s[1],j=function(){var e=Object(h.a)(O.a.mark((function e(a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===o){e.next=5;break}return e.next=4,n.updateProfile({displayName:o});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){}),[]),Object(g.jsxs)("div",{className:"profileContainer",children:[Object(g.jsxs)("form",{onSubmit:j,className:"profileForm",children:[Object(g.jsx)("input",{className:"formInput",onChange:function(e){var t=e.target.value;u(t)},type:"text",placeholder:"Display name",value:o,autoFocus:!0}),Object(g.jsx)("input",{className:"myBlueBtn",type:"submit",value:"Update Profile"})]}),Object(g.jsx)("span",{className:"mt-10 cancelBtn",onClick:function(){b.signOut(),c.push("/")},children:"Log Out"})]})},B=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(g.jsxs)(o.a,{children:[n&&Object(g.jsx)(U,{userObj:a}),Object(g.jsx)(l.c,{children:n?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(l.a,{exact:!0,path:"/",children:Object(g.jsx)(S,{userObj:a})}),Object(g.jsx)(l.a,{exact:!0,path:"/profile",children:Object(g.jsx)(A,{refreshUser:t,userObj:a})})]}):Object(g.jsx)(l.a,{exact:!0,path:"/",children:Object(g.jsx)(D,{})})})]})};var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],l=s[1];return Object(a.useEffect)((function(){b.onAuthStateChanged((function(e){l(e||null),c(!0)}))})),Object(g.jsx)("div",{children:n?Object(g.jsx)(B,{refreshUser:function(){var e=b.currentUser;console.log(e),l({uid:e.uid,displayName:e.displayName})},isLoggedIn:Boolean(o),userObj:o}):"Initializing..."})};n(54),n(55);s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(_,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.e9eb8b95.chunk.js.map