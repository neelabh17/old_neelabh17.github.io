(this.webpackJsonpportydisplay=this.webpackJsonpportydisplay||[]).push([[0],{142:function(e,a,t){e.exports=t(366)},365:function(e,a,t){},366:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(13),r=t.n(i),o=(t(87),t(127)),s=t(128),c=t.n(s),m=function(e){var a=e.name,t=e.label,n=e.img,i=e.initScroll;return l.a.createElement("div",{className:"portfolioPage1"},l.a.createElement(c.a,{className:"particles-bg",params:{particles:{number:{value:200,density:{enable:!0}},size:{value:5,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!0},move:{random:!0,speed:1,direction:"top",out_mode:"out"}},interactivity:{events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!0,mode:"repulse"}},modes:{bubble:{distance:250,duration:2,size:0,opacity:0},repulse:{distance:400,duration:4}}}}}),l.a.createElement("div",{className:"portfolioPage1Details"},l.a.createElement("img",{className:"portfolioUserImage",src:n,alt:"user profile representation"}),l.a.createElement("div",{className:"portfolioUserDetails"},l.a.createElement("span",{className:"portfolioUserName"},a)," ",l.a.createElement("span",{className:"portfolioUserLabel"},"| ",t),l.a.createElement("div",{className:"miniLine"}))),l.a.createElement("div",{className:"portfolioPage1SocialHolder"},l.a.createElement("div",{className:"portfolioBtn",onClick:i,onKeyPress:i,role:"button",tabIndex:0},"Learn More")))},d=function(e){var a=e.summary.summary;return l.a.createElement("div",{className:"portfolioPage aboutPage"},l.a.createElement("div",{className:"portfolioPageSplit leftAbout"},l.a.createElement("div",{className:"aboutCard"},"About Me")),l.a.createElement("div",{className:"portfolioPageSplit rightAbout"},l.a.createElement("div",{className:"portfolioUserSummary"},l.a.createElement("div",{className:"miniLine"}),a,l.a.createElement("div",{className:"miniLine"}))))},p=function(e){var a=e.institution,t=e.degree,n=e.area,i=e.children,r=e.grade,o=e.startDate,s=e.endDate;return l.a.createElement("div",{className:"portfolioFlat"},l.a.createElement("div",{className:"portfolioCardTitle"},l.a.createElement("span",{className:"portfolioCardTitleMain"},a," |")," ",l.a.createElement("span",{className:"portfolioCardTitleSub"},t),l.a.createElement("div",{className:"portfolioFlatSubTitle"},n)),l.a.createElement("div",{className:"portfolioFlatContent"},l.a.createElement("div",{className:"portfolioFlatContentSummary"},i),l.a.createElement("div",{className:"portfolioFlatSubTitle"},"Grade Pt: ",r)),l.a.createElement("div",{className:"portfolioCardDateContainer"},o," - ",s))},u=function(e){var a=e.education;return l.a.createElement("div",{className:"portfolioPage portfolioEducationPage"},l.a.createElement("div",{className:"portfolioPageTitle"},l.a.createElement("div",{className:"titleCard"},"Education")),l.a.createElement("div",{className:"portfolioFlatContainer"},a.map((function(e){return l.a.createElement(p,{institution:e.institution,degree:e.qualification,area:e.area,grade:e.gpa,startDate:e.startdate,endDate:e.enddate,className:"eduCard"},e.details)}))))},E=function(e){var a=e.company,t=e.position,n=e.children,i=e.website,r=e.startDate,o=e.endDate;return l.a.createElement("div",{className:"portfolioCard portfolioWorkCard"},l.a.createElement("div",{className:"portfolioCardTitle"},l.a.createElement("span",{className:"portfolioCardTitleMain"},a)," ",l.a.createElement("span",{className:"portfolioCardTitleSub"},"| ",t)),l.a.createElement("div",{className:"miniLine miniCardLine"}),l.a.createElement("div",{className:"portfolioCardContent"},n),l.a.createElement("div",{className:"miniLine miniCardLine"}),l.a.createElement("div",{className:"portfolioCardWebsite"},l.a.createElement("span",null,"Website |")," ",l.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"Link to page")),l.a.createElement("div",{className:"portfolioCardDateContainer"},r," - ",o))},f=function(e){var a=e.work;return l.a.createElement("div",{className:"portfolioPage workPage"},l.a.createElement("div",{className:"portfolioPageTitle"},l.a.createElement("div",{className:"titleCard"},"Work")),l.a.createElement("div",{className:"portfolioCardContainer portfolioWorkCardContainer"},a.map((function(e){return l.a.createElement(E,{company:e.company,position:e.position,website:e.website,startDate:e.startdate,endDate:e.enddate,className:"workCard"},e.summary)}))))},v=t(54),g=t(55),h=t(29),b=t(63),N=t(62),C=t(402),D=t(393),w=t(404),x=t(130),y=t.n(x),P=t(132),k=function(e){var a=e.organisation,t=e.position,n=e.children,i=e.website,r=e.startDate,o=e.endDate,s=e.handlePanelChange,c=e.expanded,m=e.id;return l.a.createElement(C.a,{expanded:c==="panel".concat(m),onChange:function(){return s("panel".concat(m))},className:"portfolioVolunteerExpansionPanel"},l.a.createElement(w.a,{expandIcon:l.a.createElement(y.a,{className:"expandIcon"}),"aria-controls":"panel1bh-content",id:"panel1bh-header",className:"expansionSummary"},l.a.createElement("div",{className:"portfolioExpansionPanelTitle"},a),l.a.createElement(P.a,{className:"portfolioExpansionPanelSubTitle"},t)),l.a.createElement(D.a,{className:"expansionExpanded"},l.a.createElement("div",{className:"portfolioExpansionPanelDetails"},l.a.createElement(P.a,null,n),l.a.createElement("div",{className:"miniLine miniCardLine"}),l.a.createElement("div",{className:"portfolioExpansionPanelWebsite"},l.a.createElement("span",null,"Website |")," ",l.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"Link to page")),l.a.createElement("div",{className:"portfolioCardDateContainer"},r," | ",o))))},O=function(e){Object(b.a)(t,e);var a=Object(N.a)(t);function t(e){var n;return Object(v.a)(this,t),(n=a.call(this,e)).state={expanded:!1},n.handlePanelChange=n.handlePanelChange.bind(Object(h.a)(n)),n}return Object(g.a)(t,[{key:"handlePanelChange",value:function(e){this.state.expanded===e?this.setState({expanded:!1}):this.setState({expanded:e})}},{key:"render",value:function(){var e=this,a=this.state.expanded,t=this.props.volunteer;return l.a.createElement("div",{className:"portfolioPage volunteerPage"},l.a.createElement("div",{className:"portfolioPageSplit leftVolunteer"},t.map((function(t,n){return l.a.createElement(k,{organisation:t.organisation,position:t.position,website:t.website,startDate:t.startdate,endDate:t.enddate,handlePanelChange:e.handlePanelChange,expanded:a,id:n},t.summary)}))),l.a.createElement("div",{className:"portfolioPageSplit rightVolunteer"},"Volunteering | POR"))}}]),t}(l.a.Component),S=t(394),T=t(395),L=t(403),I=function(e){var a=e.title,t=e.items,n=e.handleDialogOpen;return l.a.createElement(S.a,{className:"portfolioExtraCard"},l.a.createElement("div",{className:"portfolioExtraDetails"},l.a.createElement(T.a,{className:"portfolioExtraContent"},l.a.createElement(P.a,{component:"h5",variant:"h5",style:{textTransform:"capitalize"}},a),t.map((function(e){return l.a.createElement(L.a,{className:"chip",variant:"outlined",label:e.title,onClick:function(){return n(a,e)}})})))),l.a.createElement("div",{className:"portfolioExtraImage miniAwardImage"}))},W=function(e){var a=e.title,t=e.items;return l.a.createElement(S.a,{className:"portfolioExtraCard"},l.a.createElement("div",{className:"portfolioExtraDetails"},l.a.createElement(T.a,{className:"portfolioExtraContent"},l.a.createElement(P.a,{component:"h5",variant:"h5",style:{textTransform:"capitalize"}},a),t.map((function(e){return l.a.createElement(L.a,{className:"chip",variant:"outlined",label:e.language})})))),l.a.createElement("div",{className:"portfolioExtraImage miniLanguageImage"}))},j=function(e){var a=e.title,t=e.items,n=e.handleDialogOpen;return l.a.createElement(S.a,{className:"portfolioExtraCard"},l.a.createElement("div",{className:"portfolioExtraDetails"},l.a.createElement(T.a,{className:"portfolioExtraContent"},l.a.createElement(P.a,{component:"h5",variant:"h5",style:{textTransform:"capitalize"}},a),t.map((function(e){return l.a.createElement(L.a,{className:"chip",variant:"outlined",label:e.name,onClick:function(){return n(a,e)}})})))),l.a.createElement("div",{className:"portfolioExtraImage miniPublicationImage"}))},A=function(e){var a=e.title,t=e.items;return l.a.createElement(S.a,{className:"portfolioExtraCard"},l.a.createElement("div",{className:"portfolioExtraDetails"},l.a.createElement(T.a,{className:"portfolioExtraContent"},l.a.createElement(P.a,{component:"h5",variant:"h5",style:{textTransform:"capitalize"}},a),t.map((function(e){return l.a.createElement(L.a,{className:"chip",variant:"outlined",label:e.name})})))),l.a.createElement("div",{className:"portfolioExtraImage miniSkillImage"}))},F=t(400),z=t(401),M=t(399),B=t(397),U=t(398),_=t(396),H=t(405),R=l.a.forwardRef((function(e,a){return l.a.createElement(H.a,Object.assign({direction:"up",ref:a},e))}));function V(e){var a=e.open,t=e.handleDialogClose,n=e.title,i=e.children,r=e.date,o=e.publisher,s=e.website;return l.a.createElement("div",null,l.a.createElement(z.a,{open:a,TransitionComponent:R,fullWidth:!0,maxWidth:"sm",keepMounted:!0,onClose:function(){return t({title:n})},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",style:{padding:"50px"}},l.a.createElement(_.a,{id:"alert-dialog-slide-title"},n),l.a.createElement(B.a,null,l.a.createElement(U.a,{id:"alert-dialog-slide-description"},l.a.createElement("div",{className:"portfolioPublishCompany"},l.a.createElement("span",null,"Published By -")," ",o),l.a.createElement("div",{className:"portfolioPublishDate"},l.a.createElement("span",null,"Released On -")," ",r),l.a.createElement("br",null),l.a.createElement("div",{className:"portfolioPublishSummary"},i),l.a.createElement("br",null),l.a.createElement("div",{className:"portfolioPublishWebsite"},l.a.createElement("span",null,"Website -")," ",l.a.createElement("a",{href:s},"Link to page")))),l.a.createElement(M.a,null,l.a.createElement(F.a,{onClick:function(){return t({title:n})}},"Close"))))}var J=l.a.forwardRef((function(e,a){return l.a.createElement(H.a,Object.assign({direction:"up",ref:a},e))}));function q(e){var a=e.open,t=e.handleDialogClose,n=e.title,i=e.children,r=e.date,o=e.awarder;return l.a.createElement("div",null,l.a.createElement(z.a,{open:a,TransitionComponent:J,fullWidth:!0,maxWidth:"sm",keepMounted:!0,onClose:function(){return t({title:n})},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",style:{padding:"50px"},className:"awardDialog"},l.a.createElement(_.a,{className:"awardDialogTitle",id:"alert-dialog-slide-title"},n),l.a.createElement(B.a,null,l.a.createElement(U.a,{id:"alert-dialog-slide-description",style:{overflowWrap:"normal"}},l.a.createElement("div",{className:"portfolioAwardCompany"},l.a.createElement("span",null,"Awarded By -")," ",o),l.a.createElement("div",{className:"portfolioAwardDate"},l.a.createElement("span",null,"On -")," ",r),l.a.createElement("br",null),l.a.createElement("div",{className:"portfolioAwardSummary"},i))),l.a.createElement(M.a,null,l.a.createElement(F.a,{onClick:function(){return t({title:n})}},"Close"))))}var G=function(e){Object(b.a)(t,e);var a=Object(N.a)(t);function t(e){var n;Object(v.a)(this,t);var l=(n=a.call(this,e)).props,i=l.awards,r=l.publications,o=l.languages,s=l.skills;return n.state={openPublishDialog:!1,openAwardDialog:!1,userAwards:i,userPublication:r,userLanguages:o,userSkills:s,title:"",company:"",date:"",website:"",text:""},n.handleDialogOpen=n.handleDialogOpen.bind(Object(h.a)(n)),n.handleDialogClose=n.handleDialogClose.bind(Object(h.a)(n)),n}return Object(g.a)(t,[{key:"handleDialogOpen",value:function(e,a){"publications"===e?this.setState({openPublishDialog:!0,title:a.name,company:a.publisher,date:a.releaseDate,website:a.website,text:a.summary}):"awards"===e&&this.setState({openAwardDialog:!0,title:a.title,company:a.awarder,date:a.date,text:a.details})}},{key:"handleDialogClose",value:function(){this.setState({openAwardDialog:!1,openPublishDialog:!1})}},{key:"render",value:function(){var e,a,t,n=this.state,i=n.title,r=n.openPublishDialog,o=n.openAwardDialog,s=n.company,c=n.date,m=n.website,d=n.text,p=n.userAwards,u=n.userLanguages,E=n.userSkills,f=n.userPublication;return p.length>0&&""!==p[0].title&&(e=l.a.createElement(I,{title:"awards",items:p,handleDialogOpen:this.handleDialogOpen})),f.length>0&&""!==f[0].name&&(a=l.a.createElement(j,{title:"publications",items:f,handleDialogOpen:this.handleDialogOpen})),E.length>0&&""!==E[0].name&&(t=l.a.createElement(A,{title:"skills",items:E})),l.a.createElement("div",{className:"portfolioPage extrasPage"},l.a.createElement("div",{className:"portfolioPageTitle floodFill"},"Extras"),l.a.createElement("div",{className:"portfolioExtrasContainer"},e,a,t,l.a.createElement(W,{title:"languages",items:u,handleDialogOpen:this.handleDialogOpen})),l.a.createElement(V,{title:i,handleDialogClose:this.handleDialogClose,open:r,publisher:s,date:c,website:m},d),l.a.createElement(q,{title:i,handleDialogClose:this.handleDialogClose,open:o,awarder:s,date:c},d))}}]),t}(l.a.Component),K=function(e){var a=e.email,t=e.phone,n=e.location;return l.a.createElement("div",{className:"portfolioPage contactPage"},l.a.createElement("div",{className:"portfolioPageTitle"},l.a.createElement("div",{className:"titleCard"},"Contact Me")),l.a.createElement("div",{className:"portfolioContactCard"},l.a.createElement("div",{className:"miniLine"}),l.a.createElement("li",null,l.a.createElement("span",{className:"portfolioContactCardInfo"},l.a.createElement("span",{className:"portfolioContactCardInfoTitle"},"Email ID -")," ",l.a.createElement("span",{className:"portfolioContactCardInfoDetails"},a))),l.a.createElement("li",null,l.a.createElement("span",{className:"portfolioContactCardInfo"},l.a.createElement("span",{className:"portfolioContactCardInfoTitle"},"Contact No -")," ",l.a.createElement("span",{className:"portfolioContactCardInfoDetails"},t))),l.a.createElement("div",{className:"miniLine"})),l.a.createElement("div",{className:"portfolioContactCard"},l.a.createElement("div",{className:"miniLine"}),l.a.createElement("div",{className:"portfolioContactCardAddress"},l.a.createElement("span",null,n.addressline1),l.a.createElement("br",null),l.a.createElement("span",null,n.addressline2),l.a.createElement("br",null),n.city,l.a.createElement("br",null),n.country," | ",n.pincode),l.a.createElement("div",{className:"miniLine"})))};t(365);var $=function(e){var a=e.appData.profile;return l.a.createElement("div",{className:"portfolioContainerFull"},l.a.createElement(m,{name:a.user.name,label:a.about.label,img:a.about.imgUrl,initScroll:function(){return o.animateScroll.scrollTo(window.innerHeight)}}),l.a.createElement("div",{className:"portfolioBodyCont",style:{top:"".concat(window.innerHeight,"px")}},l.a.createElement(d,{summary:a.about,top:window.innerHeight}),l.a.createElement(u,{education:a.education}),l.a.createElement(f,{work:a.work}),l.a.createElement(O,{volunteer:a.volunteer}),l.a.createElement(G,{awards:a.awards,publications:a.publications,languages:a.languages,skills:a.skills}),l.a.createElement(K,{email:a.user.email,phone:a.about.number,location:a.location})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));fetch("./Data/file.json").then((function(e){return e.json()})).then((function(e){r.a.render(l.a.createElement($,{appData:e}),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},87:function(e,a,t){}},[[142,1,2]]]);
//# sourceMappingURL=main.d2040e80.chunk.js.map