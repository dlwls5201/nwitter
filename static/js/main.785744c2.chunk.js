(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{48:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(29),i=n.n(a),s=n(9),u=n(18),o=n(5),j=n(32),l=n(19);n(37),n(49),n(50);l.a.initializeApp({apiKey:"AIzaSyDgOUYPIZM93r9HcyRCkjf3-BnYByRabj0",authDomain:"nwitter-d9b7e.firebaseapp.com",projectId:"nwitter-d9b7e",storageBucket:"nwitter-d9b7e.appspot.com",messagingSenderId:"711242048966",appId:"1:711242048966:web:111f0e8d82eddb58163ec7"});var b=l.a,d=l.a.auth(),p=l.a.firestore(),O=l.a.storage(),h=n(7),f=n.n(h),x=n(14),v=n(1),m=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(r.useState)(!1),a=Object(s.a)(c,2),i=a[0],u=a[1],o=Object(r.useState)(t.text),j=Object(s.a)(o,2),l=j[0],b=j[1],d=function(){var e=Object(x.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window.confirm("Are you sure you want to delete this nweet?"),console.log(n),!n){e.next=7;break}return e.next=5,p.doc("nweets/".concat(t.id)).delete();case 5:return e.next=7,O.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){return u((function(e){return!e}))},m=function(){var e=Object(x.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p.doc("nweets/".concat(t.id)).update({text:l});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{children:i?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:m,children:[Object(v.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:l,required:!0,onChange:function(e){var t=e.target.value;b(t)}}),Object(v.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(v.jsx)("button",{onClick:h,children:"Cancel"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(v.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("button",{onClick:d,children:"Delete Nweet"}),Object(v.jsx)("button",{onClick:h,children:"Edit Nweet"})]})]})})},g=n(30),w=function(e){var t=e.userObj,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],i=c[1],u=Object(r.useState)(""),o=Object(s.a)(u,2),j=o[0],l=o[1],b=function(){var e=Object(x.a)(f.a.mark((function e(n){var r,c,s,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""===j){e.next=10;break}return c=O.ref().child("".concat(t.uid,"/").concat(Object(g.v4)())),e.next=6,c.putString(j,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:r=e.sent;case 10:return u={text:a,createdAt:Date.now(),createdId:t.uid,attachmentUrl:r},e.next=13,p.collection("nweets").add(u);case 13:i(""),l("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:b,children:[Object(v.jsx)("input",{value:a,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind",maxLength:120}),Object(v.jsx)("input",{onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;l(t)},n.readAsDataURL(t)},type:"file",accept:"image/*"}),Object(v.jsx)("input",{type:"submit",value:"Nweet"}),j&&Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:j,width:"50px",height:"50px"}),Object(v.jsx)("button",{onClick:function(){return l(null)},children:"Clear"})]})]})},y=function(e){var t=e.userObj,n=Object(r.useState)([]),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){p.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(j.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)(w,{userObj:t}),Object(v.jsx)("div",{children:a.map((function(e){return Object(v.jsx)(m,{nweetObj:e,isOwner:t.uid===e.createdId},e.id)}))})]})},k=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(s.a)(a,2),u=i[0],o=i[1],j=Object(r.useState)(!0),l=Object(s.a)(j,2),b=l[0],p=l[1],O=Object(r.useState)(""),h=Object(s.a)(O,2),m=h[0],g=h[1],w=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?c(r):"password"===n&&o(r)},y=function(){var e=Object(x.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!b){e.next=8;break}return e.next=5,d.createUserWithEmailAndPassword(n,u);case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,d.signInWithEmailAndPassword(n,u);case 10:r=e.sent;case 11:console.log(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:y,children:[Object(v.jsx)("input",{name:"email",type:"text",placeholder:"Email",value:n,onChange:w,required:!0}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"password",value:u,onChange:w,required:!0}),Object(v.jsx)("input",{type:"submit",value:b?"Create Account":"Log In"})]}),Object(v.jsx)("span",{onClick:function(){return p((function(e){return!e}))},children:b?"Sign In":"Create Account"}),m]})},S=function(){var e=function(){var e=Object(x.a)(f.a.mark((function e(t){var n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new b.auth.GoogleAuthProvider:"github"===n&&(r=new b.auth.GithubAuthProvider),e.next=4,b.auth().signInWithPopup(r);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsx)(k,{}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:e,name:"google",children:"Continue with Google"}),Object(v.jsx)("button",{onClick:e,name:"github",children:"Continue with Github"})]})]})},C=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsxs)(u.b,{to:"/profile",children:[t.displayName," Profile"]})})]})})},I=function(e){var t=e.refreshUser,n=e.userObj,c=Object(o.f)(),a=Object(r.useState)(n.displayName),i=Object(s.a)(a,2),u=i[0],j=i[1],l=function(){var e=Object(x.a)(f.a.mark((function e(r){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n.displayName===u){e.next=5;break}return e.next=4,n.updateProfile({displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.collection("nweets").where("creatorId","==",n.uid).orderBy("createdAt").get();case 2:t=e.sent,console.log(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){b()}),[]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:l,children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",placeholder:"Display name",value:u}),Object(v.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(v.jsx)("button",{onClick:function(){d.signOut(),c.push("/")},children:"Log Out"})]})},U=function(e){var t=e.refreshUser,n=e.isLoggedIn,r=e.userObj;return Object(v.jsxs)(u.a,{children:[n&&Object(v.jsx)(C,{userObj:r}),Object(v.jsx)(o.c,{children:n?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(y,{userObj:r})}),Object(v.jsx)(o.a,{exact:!0,path:"/profile",children:Object(v.jsx)(I,{refreshUser:t,userObj:r})})]}):Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(S,{})})})]})};var A=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),i=Object(s.a)(a,2),u=i[0],o=i[1];return Object(r.useEffect)((function(){d.onAuthStateChanged((function(e){o(e||null),c(!0)}))})),Object(v.jsx)("div",{children:n?Object(v.jsx)(U,{refreshUser:function(){var e=d.currentUser;o(e)},isLoggedIn:Boolean(u),userObj:u}):"Initializing..."})};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(A,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.785744c2.chunk.js.map