(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,o){},12:function(e,t,o){"use strict";o.r(t);var a=o(1),i=o.n(a),r=o(4),s=o.n(r),n=(o(9),o(2));o(10);function h(){var e=Object(a.useState)(0),t=Object(n.a)(e,2),o=t[0],i=t[1],r=Object(a.useState)([{category:"christian",entries:[{text:"What do you think is the name of your guardian angel?"},{text:"If you got one chance to make the baby Jesus laugh what would you do?"},{text:"When\u2019s the last time you felt the Lord\u2019s presence in your life?"},{text:"If you could have any of the spiritual gifts which one would you pick and why?"},{text:"If you could have dinner with anyone from the Bible who would it be and why"},{text:"What would you do if it was your last night on earth?"},{text:"Share an example of a real life miracle you\u2019ve witnessed"},{text:"What does and does not count as masturbation?"},{text:"Which animal is best?"},{text:"What does giving 110% mean to you?"},{text:"What\u2019s your favorite lie to tell your kids?"},{text:"What celebrity would you want to pray with?"},{text:"What\u2019s your favorite clean joke?"},{text:"How many chairs can you carry after a church service?"},{text:"If you could change one thing about the world, what would it be?"},{text:"If you could ask God for anything and he HAD to give it to you what would you ask for?"},{text:"Could God create a burrito so big that even he couldn\u2019t eat it?"},{text:"What\u2019s your favorite psalm?"},{text:"When someone asks you these ice breakers where does it hurt in your body?"},{text:"Have you ever been so far as what to do or look more like?"},{text:"What is your least favorite Bible story?"},{text:"If you could bring any of the marvel superheroes to church with you who would it be?"},{text:"Would you rather make a gagging noise for 30 seconds or do another icebreaker?"},{text:"Do you think Jesus loves a hard worker or a good listener more?"},{text:"If you could catapult one unrepentant sinner into the sun who would it be and why?"},{text:"If the lord told you to vote for a specific orange president would you obey?"},{text:"Name 3 ways you can show Christ\u2019s love to your neighbors today"},{text:"When is the last time you turned the other cheek?"},{text:"How can you thoughtfully submit to your leaders today?"},{text:"Name 3 ways that you feel your work is pleasing to the lord"},{text:"Name 3 things you would rather be doing than this meeting"},{text:"For a fun little icebreaker activity I want you to turn to the person on your right and speak a prophetic word over them"},{text:"Word association time: what\u2019s the first thing that comes to mind when I say the following: 1) submission 2) obedience 3) stewardship 4) sowing 5) harvest"},{text:"What\u2019s the best part about saving yourself for marriage?"},{text:"What\u2019s something you had to guard your heart against today?"},{text:"Describe your testimony in five words or less"},{text:"What\u2019s your favorite curse word replacements/alternatives?"},{text:"What people group do you feel Christians have alienated the most?"},{text:"What Bible verse best describes your mood today?"}]},{category:"shame",entries:[{text:"Tell us three embarrassing things about yourself."},{text:"What's your least favorite attribute?"},{text:"What are you most ashamed of?"},{text:"How often do you find yourself repulsed by yourself?"},{text:"What's the worst rumor you've told?"},{text:"What's the worst rumor that's been told about you?"},{text:"Why are you awful?"},{text:"What's the most shameful thing you've done?"},{text:"Do you wish you were less ashamed?"},{text:"How could you? (How dare you?)"},{text:"Tell us two truths and a lie. All of them must be embarrassing."},{text:"What's the earliest you remember feeling ashamed?"},{text:"When you're in a group setting asking people to reveal shameful things about themselves, are you ashamed of yourself? (so meta)"}]},{category:"celebrities",entries:[{text:"If you could have lunch with any celebrity, who would it be?"},{text:"If you could have dinner with any celebrity, who would it be?"},{text:"If you could have breakfast with any celebrity, who would it be?"},{text:"If you could almost have lunch with any celebrity, who would it be? Why would it be Jeff Goldblum?"},{text:"How many celebrities have you met?"},{text:"How many celebrities have you never met?"},{text:"How badly do you wish you were famous?"},{text:"What is the best celebrity?"},{text:"Who is the hottest dude celebrity?"},{text:"Who is the ugliest dude celebrity?"},{text:"Which celebrity has the biggest muscles?"},{text:"How many celebrities do you want to make out with?"},{text:"Who would be the best celebrity to tickle?"},{text:"Why can't you be a celebrity?"},{text:"If you were casting Ocean's 11, who would be in it?"},{text:"Is Christian Bale actually a Christian?"},{text:"Which celebrity is the tallest?"},{text:"Which celebrity has the nicest arms?"},{text:"Which celebrity has the kindest eyes?"},{text:"Which celebrity has the strongest quads?"},{text:"Which celebrity has the gentlest touch?"},{text:"What celebrity would you want to pray with?"}]}]),s=Object(n.a)(r,2),h=s[0],u=s[1];return{next:function(e){i(o+1);var t=h.filter((function(t){return t.category===e}))[0].entries;return t[o%t.length]},shuffle:function(){u(h.map((function(e){return e.entries=function(e){for(var t=e.length-1;t>0;t--){var o=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[o],e[o]=a}return e}(e.entries),e})))}}}var u=o(0);var l=function(){var e=Object(a.useState)("christian"),t=Object(n.a)(e,2),o=t[0],i=t[1],r=h(),s=Object(a.useState)(""),l=Object(n.a)(s,2),c=l[0],y=l[1],d=Object(a.useState)(!1),b=Object(n.a)(d,2),x=b[0],f=b[1];return Object(a.useEffect)((function(){r.shuffle(),y(r.next(o))}),[]),Object(u.jsxs)("div",{className:"App p-4",children:[Object(u.jsxs)("select",{id:"categories",value:o,onChange:function(e){return function(e){i(e.value),y(r.next(e.value)),r.shuffle()}(e.target)},className:"bg-transparent text-gray-200 text-4xl",children:[Object(u.jsx)("option",{value:"christian",children:"Christian"}),Object(u.jsx)("option",{value:"shame",children:"Shame"}),Object(u.jsx)("option",{value:"celebrities",children:"Celebrities"})]}),Object(u.jsxs)("div",{className:"justify-center grid align-middle text-center",children:[Object(u.jsx)("div",{className:"my-12 max-w-xl",children:Object(u.jsx)("p",{className:"text-5xl text-gray-200 transition duration-700 ease-in-out ".concat(x&&"text-opacity-0"),children:c.text})}),Object(u.jsx)("button",{onClick:function(){f(!0),setTimeout((function(){y(r.next(o)),f(!1)}),1e3)},className:"px-6 bg-red-500 h-14 rounded-2xl text-4xl text-gray-200 shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50",children:"Next"})]})]})},c=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,13)).then((function(t){var o=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;o(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),c()},9:function(e,t,o){}},[[12,1,2]]]);
//# sourceMappingURL=main.68d1f38c.chunk.js.map