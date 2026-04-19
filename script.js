/* ══════════════════════════════════════
   THEME TOGGLE — Light/Dark
══════════════════════════════════════ */
(function() {
  const html = document.documentElement;
  const STORAGE_KEY = 'pulse-theme';
  const saved = localStorage.getItem(STORAGE_KEY) || 'light';
  html.setAttribute('data-theme', saved);

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function initToggle() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    btn.textContent = saved === 'dark' ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggle);
  } else {
    initToggle();
  }
})();

const S={
  stories:[
    {n:"priya_k",e:"🌸",s:14,bg:"#EEEDFE",tc:"#534AB7"},
    {n:"dev_arc",e:"🚀",s:7,bg:"#E1F5EE",tc:"#0F6E56"},
    {n:"aisha.m",e:"🎵",s:32,bg:"#FBEAF0",tc:"#993556"},
    {n:"rohan_x",e:"⚡",s:5,bg:"#FAEEDA",tc:"#854F0B"},
    {n:"zara.ui",e:"🎨",s:21,bg:"#E6F1FB",tc:"#185FA5"},
    {n:"kai_fit",e:"💪",s:9,bg:"#EAF3DE",tc:"#3B6D11"},
    {n:"leo_v",e:"🎮",s:3,bg:"#FCEBEB",tc:"#A32D2D"},
  ],
  posts:[
    {id:1,u:"priya_k",e:"🌸",bg:"#EEEDFE",tc:"#534AB7",t:"2 min ago",body:"Morning light hitting different today. Some moments are just meant to be captured.",mood:"happy",sent:"positive",tags:["#morningvibes","#photography"],likes:142,comments:18,shares:7,img:"images/Sunrise.jpg"},
    {id:2,u:"dev_arc",e:"🚀",bg:"#E1F5EE",tc:"#0F6E56",t:"5 min ago",body:"Just shipped a feature cutting API response time by 60%. Open source drop next week!",mood:"excited",sent:"trending",tags:["#webdev","#performance"],likes:89,comments:34,shares:22,img:"images/F1.jpg"},
    {id:3,u:"aisha.m",e:"🎵",bg:"#FBEAF0",tc:"#993556",t:"12 min ago",body:"Stadium energy tonight was electric. Local team came back from 0-2 to win in overtime.",mood:"thrilled",sent:"trending",tags:["#sports","#overtime"],likes:305,comments:61,shares:44,img:"images/stadium.jpg"},
    {id:4,u:"rohan_x",e:"⚡",bg:"#FAEEDA",tc:"#854F0B",t:"19 min ago",body:"New climate policy announced today. Mixed reactions — thread with key points below.",mood:"thoughtful",sent:"neutral",tags:["#news","#climate"],likes:201,comments:88,shares:55,img:"images/climate.jpg"},
    {id:5,u:"zara.ui",e:"🎨",bg:"#E6F1FB",tc:"#185FA5",t:"26 min ago",body:"Collab with @kai_fit — redesigned our morning routine. Results dropping tomorrow.",mood:"motivated",sent:"positive",tags:["#collab","#wellness"],likes:178,comments:29,shares:15,img:"images/collab.jpg"},
  ],
  commentsData:{
    1:[
      {id:1,u:"leo_v",e:"🎮",bg:"#FCEBEB",t:"1 min ago",text:"This is absolutely stunning! What camera do you use?",likes:8,liked:false},
      {id:2,u:"dev_arc",e:"🚀",bg:"#E1F5EE",t:"3 min ago",text:"Golden hour hits so different. You have an eye for this.",likes:14,liked:false},
      {id:3,u:"kai_fit",e:"💪",bg:"#EAF3DE",t:"5 min ago",text:"Saving this for motivation every morning!",likes:6,liked:false},
    ],
    2:[
      {id:1,u:"priya_k",e:"🌸",bg:"#EEEDFE",t:"2 min ago",text:"That's incredible! Can't wait for the open source release.",likes:11,liked:false},
      {id:2,u:"aisha.m",e:"🎵",bg:"#FBEAF0",t:"4 min ago",text:"60% improvement is insane. What was the bottleneck?",likes:22,liked:false},
    ],
    3:[
      {id:1,u:"rohan_x",e:"⚡",bg:"#FAEEDA",t:"1 min ago",text:"I was there! The crowd energy was unreal 🔥",likes:31,liked:false},
      {id:2,u:"zara.ui",e:"🎨",bg:"#E6F1FB",t:"6 min ago",text:"Overtime wins hit different. Absolute scenes!",likes:18,liked:false},
      {id:3,u:"leo_v",e:"🎮",bg:"#FCEBEB",t:"10 min ago",text:"Classic comeback story. Legendary game.",likes:9,liked:false},
    ],
    4:[
      {id:1,u:"kai_fit",e:"💪",bg:"#EAF3DE",t:"3 min ago",text:"Important stuff. Sharing this thread with my community.",likes:5,liked:false},
    ],
    5:[
      {id:1,u:"dev_arc",e:"🚀",bg:"#E1F5EE",t:"4 min ago",text:"The collab content is always so good! When's the tracker dropping?",likes:7,liked:false},
      {id:2,u:"priya_k",e:"🌸",bg:"#EEEDFE",t:"8 min ago",text:"This is goals! Two of my faves collabing.",likes:19,liked:false},
    ],
  },
  reels:[
    {id:1,e:"🌊",u:"surfgirl",desc:"Biggest wave of my life!",views:"1.2M",likes:88400,bg:"#E6F1FB",live:false},
    {id:2,e:"🍜",u:"chefmiko",desc:"5-min ramen hack",views:"832K",likes:41200,bg:"#FAEEDA",live:false},
    {id:3,e:"🎸",u:"noiz_band",desc:"Jam session live",views:"Live",likes:3400,bg:"#EEEDFE",live:true},
    {id:4,e:"🐶",u:"pawsclub",desc:"Dog opened the door again",views:"2.1M",likes:195000,bg:"#EAF3DE",live:false},
    {id:5,e:"🏋️",u:"kai_fit",desc:"PR day deadlift 180kg",views:"540K",likes:29300,bg:"#E1F5EE",live:false},
    {id:6,e:"🎨",u:"zara.ui",desc:"Painting timelapse",views:"320K",likes:18700,bg:"#FBEAF0",live:false},
    {id:7,e:"🚀",u:"dev_arc",desc:"Full app in 60 seconds",views:"1.8M",likes:110000,bg:"#EEEDFE",live:false},
    {id:8,e:"🌸",u:"priya_k",desc:"Morning routine live",views:"Live",likes:6200,bg:"#FAECE7",live:true},
    {id:9,e:"🏄",u:"oceankid",desc:"Sunset at Bali",views:"710K",likes:52100,bg:"#E6F1FB",live:false},
  ],
  lives:[
    {id:1,e:"🎸",u:"noiz_band",topic:"Live concert — garage session",viewers:3421,bg:"#EEEDFE"},
    {id:2,e:"🌸",u:"priya_k",topic:"Morning yoga & meditation",viewers:1204,bg:"#FAECE7"},
    {id:3,e:"🎮",u:"leo_v",topic:"Gaming: ranked match live",viewers:8812,bg:"#FCEBEB"},
    {id:4,e:"👨‍🍳",u:"chefmiko",topic:"Cooking live: Thai street food",viewers:2119,bg:"#FAEEDA"},
  ],
  trending:[
    {t:"#morningvibes",c:"4.2K"},{t:"#webdev",c:"12.1K"},
    {t:"#climate",c:"8.7K"},{t:"#fitness",c:"6.4K"},{t:"#collab",c:"3.1K"},
  ],
  analytics:[
    {l:"Positive posts",p:68},{l:"Trending",p:24},{l:"Engagement",p:81},
  ],
  explores:[
    {e:"🌅",bg:"#E6F1FB",tag:"#sunrise",src:"images/Sunrise.jpg"},
    {e:"🏙️",bg:"#EEEDFE",tag:"#citylife",src:"images/city.jpg"},
    {e:"🎵",bg:"#FBEAF0",tag:"#music",src:"images/music.jpg"},
    {e:"⚽",bg:"#EAF3DE",tag:"#sports",src:"images/sports.jpg"},
    {e:"🍕",bg:"#FAEEDA",tag:"#foodie",src:"images/foodie.jpg"},
    {e:"💻",bg:"#E1F5EE",tag:"#tech",src:"images/tech.jpg"},
    {e:"🌿",bg:"#EAF3DE",tag:"#nature",src:"images/nature.jpg"},
    {e:"🎨",bg:"#EEEDFE",tag:"#art",src:"images/art.jpg"},
    {e:"✈️",bg:"#E6F1FB",tag:"#travel",src:"images/travel.jpg"},
  ],
  people:[
    {e:"🌍",n:"Nina Kovacs",h:"@nina.k",f:"12.4K",bg:"#FBEAF0",src:"images/Nina Kovacs.jpg"},
    {e:"🔧",n:"Sam Patel",h:"@sam_builds",f:"8.1K",bg:"#E1F5EE",src:"images/sam Patel.jpg"},
    {e:"✨",n:"Leila Arc",h:"@leila.arc",f:"31.2K",bg:"#EEEDFE",src:"images/Leila Arc.jpg"},
    {e:"🎬",n:"Miko Chen",h:"@chefmiko",f:"94.6K",bg:"#FAEEDA",src:"images/Miko Chen.jpg"},
  ],
  notifs:[
    {e:"🌸",n:"priya_k",text:"liked your post",t:"1m",unr:true,a:"♥"},
    {e:"🚀",n:"dev_arc",text:"started following you",t:"4m",unr:true,a:"👤"},
    {e:"🎵",n:"aisha.m",text:"commented on your post",t:"9m",unr:true,a:"💬"},
    {e:"⚡",n:"rohan_x",text:"shared your reel",t:"15m",unr:false,a:"↗"},
    {e:"🎨",n:"zara.ui",text:"mentioned you in a collab",t:"22m",unr:false,a:"📌"},
    {e:"💪",n:"kai_fit",text:"your streak is on fire! 🔥 21 days",t:"1h",unr:false,a:"🔥"},
    {e:"📡",n:"Pulse",text:"noiz_band just went LIVE",t:"2h",unr:false,a:"📡"},
  ],
  dms:[
    {e:"🌸",n:"priya_k",bg:"#EEEDFE",p:"Loved your post today!",t:"2m",u:3},
    {e:"🚀",n:"dev_arc",bg:"#E1F5EE",p:"Are you joining the collab?",t:"14m",u:1},
    {e:"🎮",n:"leo_v",bg:"#FCEBEB",p:"GG last night",t:"1h",u:0},
    {e:"🎵",n:"aisha.m",bg:"#FBEAF0",p:"That concert was amazing",t:"3h",u:0},
  ],
  cats:["All","News","Sports","Tech","Entertainment","Fashion","Food","Travel","Gaming"],
};

let state={
  liked:new Set(),lks:{},followed:new Set(),pfollowed:new Set(),
  activeLive:null,liveViewers:{},liveChatMsgs:[],liveChatTimer:null,
  activeReel:null,reelTimer:null,reelProg:0,
  activeCat:"All",commentPostId:null,
  gameActive:null,
  wsWords:[{w:"PULSE",hint:"A social platform"},{w:"STREAM",hint:"Live video"},{w:"REEL",hint:"Short video"},{w:"VIBE",hint:"A mood or feeling"},{w:"STREAK",hint:"Daily activity"},{w:"COLLAB",hint:"Working together"}],
  wsIdx:0,wsScore:0,wsScrambled:"",
  memCards:[],memFlipped:[],memMatched:new Set(),memLock:false,memMoves:0,
  rsState:"idle",rsTimeout:null,rsStart:0,rsTimes:[],
  tvIdx:0,tvScore:0,tvAnswered:false,
  tvQs:[
    {q:"Which country invented Instagram?",opts:["Brazil","USA","UK","Germany"],a:1},
    {q:"What does 'reel' mean in social media?",opts:["A post","A short video","A live stream","A story"],a:1},
    {q:"What is a 'streak' on Snapchat?",opts:["A filter","Daily message exchange","A post type","A story"],a:1},
    {q:"Which platform launched 'Stories' first?",opts:["Instagram","Facebook","Snapchat","Twitter"],a:2},
    {q:"What does DM stand for?",opts:["Direct Message","Digital Media","Daily Memo","Data Mode"],a:0},
  ],
  lbScores:[
    {n:"kai_fit",s:1840},{n:"zara.ui",s:1620},{n:"priya_k",s:1410},{n:"dev_arc",s:980},{n:"You",s:0},
  ],
};
S.posts.forEach(p=>{state.lks[p.id]=p.likes});
S.lives.forEach(l=>{state.liveViewers[l.id]=l.viewers});

const liveChatPool=[
  ["surfgirl","This is amazing!!"],["leo_v","first time watching"],
  ["nina.k","keep going!!!"],["sam_b","🔥🔥🔥"],["kai_fit","absolute banger"],
  ["rohan_x","sharing this"],["aisha.m","love the energy"],
  ["zara.ui","can't stop watching"],["dev_arc","hits different"],["priya_k","stream more please!"],
];

function toast(msg){
  const t=document.getElementById("toast");
  t.textContent=msg;t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2200);
}

function go(tab){
  document.querySelectorAll(".ntab").forEach(b=>b.classList.remove("on"));
  const tb=document.querySelector(`[data-t="${tab}"]`);
  if(tb)tb.classList.add("on");
  document.querySelectorAll(".panel").forEach(p=>p.classList.remove("on"));
  document.getElementById("p-"+tab).classList.add("on");
}

document.querySelectorAll(".ntab").forEach(b=>b.addEventListener("click",()=>go(b.dataset.t)));

/* avEl — emoji avatar (used for users without photos) */
function avEl(e,bg,tc,sz=32){
  return `<div class="av" style="width:${sz}px;height:${sz}px;background:${bg};color:${tc};font-size:${Math.round(sz*0.44)}px">${e}</div>`;
}

/* photoAvEl — avatar that shows a photo; falls back to emoji if image fails */
function photoAvEl(src,e,bg,tc,sz=48){
  return `<div class="av photo-av" style="width:${sz}px;height:${sz}px;background:${bg};color:${tc};font-size:${Math.round(sz*0.44)}px;overflow:hidden;position:relative;flex-shrink:0;">
    <span class="av-emoji" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:0">${e}</span>
    <img src="${src}" alt="" loading="lazy"
      style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;z-index:1;border-radius:50%;"
      onload="this.previousElementSibling.style.display='none'"
      onerror="this.style.display='none'"/>
  </div>`;
}

/* HOME */
function renderHome(){
  const p=document.getElementById("p-home");
  p.innerHTML=`
    <div class="stories-bar">
      <div class="add-s" onclick="toast('Create story!')">+</div>
      ${S.stories.map(s=>`
        <div class="sw" onclick="toast('${s.n} — 🔥 ${s.s} day streak!')">
          <div class="sr"><div class="sa" style="background:${s.bg};color:${s.tc}">${s.e}</div></div>
          <div class="sstr">🔥${s.s}</div>
          <div class="sn">${s.n}</div>
        </div>`).join("")}
    </div>
    <div class="home-wrap">
      <div class="feed" id="feedEl"></div>
      <div class="sb-wrap">
        <div class="card sb-card">
          <div class="sec-title">Trending</div>
          ${S.trending.map(t=>`<div class="trow"><span class="ttag">${t.t}</span><span class="tct">${t.c}</span></div>`).join("")}
        </div>
        <div class="card sb-card">
          <div class="sec-title">Analytics</div>
          ${S.analytics.map(a=>`<div class="brow"><span class="blbl">${a.l}</span><div class="bbg"><div class="bfl" style="width:${a.p}%"></div></div><span class="bvl">${a.p}%</span></div>`).join("")}
        </div>
        <div class="card sb-card">
          <div class="sec-title">Suggested</div>
          <div id="sugEl"></div>
        </div>
      </div>
    </div>`;
  renderFeed();
  renderSug();
}

function renderFeed(){
  const el=document.getElementById("feedEl");
  if(!el)return;
  el.innerHTML=S.posts.map(p=>`
    <div class="post">
      <div class="ph">
        ${avEl(p.e,p.bg,p.tc,34)}
        <div class="pm"><div class="un">${p.u}</div><div class="pt">${p.t}</div></div>
        <div><span class="badge ${p.sent==="positive"?"bp":p.sent==="trending"?"bt":"bn"}">${p.sent}</span></div>
      </div>
      ${p.img?`<div class="pi"><img src="${p.img}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.parentElement.style.display='none'"/></div>`:""}
      <div class="pb">${p.body}</div>
      <span class="pill">${p.mood}</span>
      <div class="tr">${p.tags.map(t=>`<span class="htag">${t}</span>`).join("")}</div>
      <div class="act-row">
        <button class="act${state.liked.has(p.id)?" liked":""}" onclick="toggleLike(${p.id},this)">
          ${state.liked.has(p.id)?"♥":"♡"} <span id="lk${p.id}">${state.lks[p.id]}</span>
        </button>
        <button class="act" onclick="openComments(${p.id})">💬 ${S.commentsData[p.id]?S.commentsData[p.id].length:0}</button>
        <button class="act" onclick="toast('Shared!')">↗ ${p.shares}</button>
        <button class="act" onclick="toast('Bookmarked!')">🔖</button>
        <button class="act" onclick="toast('Reaction sent!')">😄</button>
      </div>
    </div>`).join("");
}

function toggleLike(id,btn){
  if(state.liked.has(id)){state.liked.delete(id);state.lks[id]--;btn.classList.remove("liked");btn.innerHTML=`♡ <span id="lk${id}">${state.lks[id]}</span>`;}
  else{state.liked.add(id);state.lks[id]++;btn.classList.add("liked");btn.innerHTML=`♥ <span id="lk${id}">${state.lks[id]}</span>`;}
}

/* Suggested users in sidebar — use photoAvEl so photo shows, emoji is fallback */
function renderSug(){
  const el=document.getElementById("sugEl");
  if(!el)return;
  el.innerHTML=S.people.slice(0,3).map((u,i)=>`
    <div class="sugrow">
      ${photoAvEl(u.src,u.e,u.bg,"#534AB7",28)}
      <div class="sugi"><div class="sugn">${u.n}</div><div class="sugh">${u.h}</div></div>
      <button class="fb${state.followed.has(i)?" fw":""}" onclick="toggleFollow(${i},this)">${state.followed.has(i)?"Following":"Follow"}</button>
    </div>`).join("");
}

function toggleFollow(i,btn){
  if(state.followed.has(i)){state.followed.delete(i);btn.textContent="Follow";btn.classList.remove("fw");}
  else{state.followed.add(i);btn.textContent="Following";btn.classList.add("fw");}
}

/* COMMENTS */
function openComments(postId){
  state.commentPostId=postId;
  const post=S.posts.find(p=>p.id===postId);
  const cmts=S.commentsData[postId]||[];
  const cp=document.getElementById("p-comments");
  cp.innerHTML=`
    <button class="back-btn" onclick="go('home')">← Back to feed</button>
    <div class="comments-panel">
      <div class="cp-post">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          ${avEl(post.e,post.bg,post.tc,32)}
          <div><div class="un">${post.u}</div><div class="pt">${post.t}</div></div>
        </div>
        <div style="font-size:12px;color:var(--color-text-primary);line-height:1.5">${post.body}</div>
        <div style="margin-top:6px;display:flex;gap:5px;flex-wrap:wrap">${post.tags.map(t=>`<span class="htag">${t}</span>`).join("")}</div>
      </div>
      <div class="emoji-row">${["❤️","🔥","😂","😮","😢","👏"].map(e=>`<button class="eq" onclick="addEmojiReact('${e}')">${e}</button>`).join("")}</div>
      <div class="comments-list" id="cmtList">
        ${cmts.map(c=>renderComment(c)).join("")}
      </div>
      <div class="cmt-input-wrap">
        ${avEl("🧑‍💻","#EEEDFE","#534AB7",28)}
        <input type="text" id="cmtInput" placeholder="Add a comment..." />
        <button class="send-btn" onclick="submitComment()">Post</button>
      </div>
    </div>`;
  go("comments");
}

function renderComment(c){
  return `<div class="cmt" id="cmt${c.id}">
    ${avEl(c.e,c.bg,"#534AB7",30)}
    <div class="cmt-body">
      <div class="cmt-user">${c.u}</div>
      <div class="cmt-text">${c.text}</div>
      <div class="cmt-meta">
        <span class="cmt-time">${c.t}</span>
        <button class="cmt-like" onclick="likeCmt(${state.commentPostId},${c.id},this)">${c.liked?"♥":"♡"} <span>${c.likes}</span></button>
        <button class="cmt-reply" onclick="replyTo('${c.u}')">Reply</button>
      </div>
    </div>
  </div>`;
}

function likeCmt(postId,cmtId,btn){
  const cmts=S.commentsData[postId];
  const c=cmts.find(x=>x.id===cmtId);
  if(!c)return;
  c.liked=!c.liked;
  c.likes+=c.liked?1:-1;
  btn.innerHTML=`${c.liked?"♥":"♡"} <span>${c.likes}</span>`;
}

function replyTo(u){
  const inp=document.getElementById("cmtInput");
  if(inp){inp.value=`@${u} `;inp.focus();}
}

function addEmojiReact(e){toast(`Reacted with ${e}`);}

function submitComment(){
  const inp=document.getElementById("cmtInput");
  if(!inp||!inp.value.trim())return;
  const txt=inp.value.trim();
  const postId=state.commentPostId;
  if(!S.commentsData[postId])S.commentsData[postId]=[];
  const newCmt={id:Date.now(),u:"you",e:"🧑‍💻",bg:"#EEEDFE",t:"just now",text:txt,likes:0,liked:false};
  S.commentsData[postId].push(newCmt);
  const list=document.getElementById("cmtList");
  if(list){
    const div=document.createElement("div");
    div.innerHTML=renderComment(newCmt);
    list.appendChild(div.firstElementChild);
    list.scrollTop=list.scrollHeight;
  }
  inp.value="";
  toast("Comment posted!");
}

/* REELS */
function renderReels(){
  const p=document.getElementById("p-reels");
  p.innerHTML=`<div id="reelPlayerWrap"></div><div class="reels-grid">${S.reels.map((r,i)=>`
    <div class="rt" style="background:${r.bg}" onclick="playReel(${i})">
      <span style="font-size:28px">${r.e}</span>
      ${r.live?`<div class="rlb">LIVE</div>`:""}
      <div class="ro"><div class="play">▶</div></div>
      <div class="rv">${r.views}</div>
    </div>`).join("")}</div>`;
}

function playReel(i){
  const r=S.reels[i];
  clearInterval(state.reelTimer);state.reelProg=0;
  document.getElementById("reelPlayerWrap").innerHTML=`
    <div class="reel-player">
      <div class="rp-inner">
        <div class="rp-thumb" style="background:${r.bg}">${r.e}</div>
        <div class="rp-info">
          <div class="rp-u">@${r.u}</div>
          <div class="rp-d">${r.desc}</div>
          <div class="rp-acts">
            <button class="ra" onclick="toast('Liked!')"><span class="rai">♥</span>${(r.likes/1000).toFixed(1)}K</button>
            <button class="ra" onclick="toast('Commented!')"><span class="rai">💬</span>Comment</button>
            <button class="ra" onclick="toast('Shared!')"><span class="rai">↗</span>Share</button>
            <button class="ra" onclick="toast('Saved!')"><span class="rai">🔖</span>Save</button>
          </div>
          <div class="prog-bg"><div class="prog-fill" id="rpf"></div></div>
        </div>
      </div>
    </div>`;
  state.reelTimer=setInterval(()=>{
    state.reelProg=Math.min(state.reelProg+2,100);
    const f=document.getElementById("rpf");
    if(f)f.style.width=state.reelProg+"%";
    if(state.reelProg>=100){clearInterval(state.reelTimer);toast("Reel ended!");}
  },80);
}

/* LIVE */
function renderLive(){
  const p=document.getElementById("p-live");
  p.innerHTML=`<div class="live-wrap">
    <div id="liveStageWrap"></div>
    <div style="font-size:12px;font-weight:500;color:var(--color-text-primary);margin-bottom:6px">Live now</div>
    <div class="live-grid">${S.lives.map(l=>`
      <div class="lc" onclick="joinLive(${l.id})">
        <div class="lt" style="background:${l.bg}">
          <span style="font-size:32px">${l.e}</span>
          <div class="llb">LIVE</div>
          <div class="lv" id="lv${l.id}">👁 ${state.liveViewers[l.id].toLocaleString()}</div>
        </div>
        <div class="li"><div class="lu">@${l.u}</div><div class="ltopic">${l.topic}</div></div>
      </div>`).join("")}
    </div>
  </div>`;
}

function joinLive(id){
  const l=S.lives.find(s=>s.id===id);
  state.activeLive=l;state.liveChatMsgs=[];
  clearInterval(state.liveChatTimer);
  let ci=0;
  renderLiveStage();
  state.liveChatTimer=setInterval(()=>{
    if(!state.activeLive||state.activeLive.id!==id){clearInterval(state.liveChatTimer);return;}
    const [u,msg]=liveChatPool[ci%liveChatPool.length];ci++;
    state.liveChatMsgs.push({u,msg});
    state.liveViewers[id]+=Math.floor(Math.random()*8)-2;
    if(state.liveViewers[id]<10)state.liveViewers[id]=10;
    renderLiveStage();
  },1800);
}

function renderLiveStage(){
  const l=state.activeLive;if(!l)return;
  const wrap=document.getElementById("liveStageWrap");if(!wrap)return;
  const chatHtml=state.liveChatMsgs.slice(-8).map(m=>`<div class="cm"><span class="cu">@${m.u}</span> ${m.msg}</div>`).join("");
  wrap.innerHTML=`<div class="live-stage" style="margin-bottom:10px">
    <div class="ls-screen" style="background:${l.bg}">
      <span style="font-size:52px">${l.e}</span>
      <div class="ls-badge">🔴 LIVE</div>
      <div class="ls-views">👁 ${state.liveViewers[l.id].toLocaleString()}</div>
    </div>
    <div style="padding:7px 11px;font-size:11px;font-weight:500;color:var(--color-text-primary)">@${l.u} — ${l.topic}</div>
    <div class="live-chat-box" id="lchat">${chatHtml}</div>
    <div class="lci">
      <input type="text" id="lchatInput" placeholder="Say something..." />
      <button class="send-btn" onclick="sendLiveChat()" style="font-size:11px;padding:5px 12px">Send</button>
    </div>
  </div>`;
  const box=document.getElementById("lchat");
  if(box)box.scrollTop=box.scrollHeight;
}

function sendLiveChat(){
  const inp=document.getElementById("lchatInput");
  if(!inp||!inp.value.trim())return;
  state.liveChatMsgs.push({u:"you",msg:inp.value.trim()});
  inp.value="";renderLiveStage();
}

/* EXPLORE
   - Tiles: full image, no emoji overlay on top (emoji only if image fails)
   - People: photo avatar, emoji fallback only
*/
function renderExplore(){
  const p=document.getElementById("p-explore");
  p.innerHTML=`<div class="explore-wrap">
    <div class="exp-search">
      <input type="text" id="expSearch" placeholder="Search users, posts, hashtags..." />
      <button class="sbtn" onclick="doSearch()">Search</button>
    </div>
    <div class="cats">${S.cats.map(c=>`<button class="cpill${c===state.activeCat?" on":""}" onclick="setCat('${c}')">${c}</button>`).join("")}</div>
    <div style="font-size:12px;font-weight:500;color:var(--color-text-primary)">Trending content</div>
    <div class="exp-grid">${S.explores.map(e=>`
      <div class="etile" onclick="toast('${e.tag} trending!')">
        <img src="${e.src}" alt="${e.tag}" loading="lazy"
          class="etile-img"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div class="etile-fallback" style="display:none;align-items:center;justify-content:center;font-size:28px;width:100%;height:100%">${e.e}</div>
        <div class="etag">${e.tag}</div>
      </div>`).join("")}
    </div>
    <div style="font-size:12px;font-weight:500;color:var(--color-text-primary)">People to follow</div>
    <div class="ppl-grid">${S.people.map((u,i)=>`
      <div class="pc">
        ${photoAvEl(u.src,u.e,u.bg,"#534AB7",52)}
        <div class="pn">${u.n}</div>
        <div class="ph2">${u.h}</div>
        <div class="pf">${u.f} followers</div>
        <button class="pfb${state.pfollowed.has(i)?" fw":""}" onclick="togglePFollow(${i},this)">${state.pfollowed.has(i)?"Following":"Follow"}</button>
      </div>`).join("")}
    </div>
  </div>`;
}

function setCat(c){state.activeCat=c;renderExplore();toast("Showing "+c);}
function togglePFollow(i,btn){
  if(state.pfollowed.has(i)){state.pfollowed.delete(i);btn.textContent="Follow";btn.classList.remove("fw");}
  else{state.pfollowed.add(i);btn.textContent="Following";btn.classList.add("fw");}
}
function doSearch(){
  const q=document.getElementById("expSearch");
  if(q&&q.value.trim())toast("Searching: "+q.value.trim());
}

/* NOTIFICATIONS */
function renderNotifs(){
  document.getElementById("p-notifs").innerHTML=`<div class="nw">${S.notifs.map(n=>`
    <div class="ni2${n.unr?" unr":""}">
      <div class="av" style="width:32px;height:32px;font-size:15px;background:#EEEDFE">${n.e}</div>
      <div class="nt"><span style="font-weight:500">${n.n}</span> ${n.text}</div>
      <div class="ntm">${n.t}</div>
      <div class="nact">${n.a}</div>
    </div>`).join("")}</div>`;
}

/* PROFILE */
function renderProfile(){
  const emojis=["🌅","🏟️","🤝","💻","🎨","🌸","🚀","🎵","⚡","🌊","🎮","🍕","✈️","🏋️","🎸","🌿","📸","🎬","🧪","🎯","💡","🌙","🏄","🔥"];
  document.getElementById("p-profile").innerHTML=`
    <div class="prof-head">
      <div class="prof-top">
        <div class="prof-av" style="background:#EEEDFE">🧑‍💻</div>
        <div>
          <div class="prof-name">Your Name</div>
          <div class="prof-h">@yourhandle</div>
          <div class="prof-bio">Building cool stuff. Living on Pulse.</div>
        </div>
      </div>
      <div class="pstats">
        <div class="pst"><div class="pstv">24</div><div class="pstl">Posts</div></div>
        <div class="pst"><div class="pstv">1.4K</div><div class="pstl">Followers</div></div>
        <div class="pst"><div class="pstv">312</div><div class="pstl">Following</div></div>
        <div class="pst"><div class="pstv">21</div><div class="pstl">🔥 Streak</div></div>
      </div>
      <div class="pbtns">
        <button class="pbtn pri">Edit profile</button>
        <button class="pbtn" onclick="toast('Profile link copied!')">Share</button>
        <button class="pbtn" onclick="toast('Settings coming soon!')">Settings</button>
      </div>
    </div>
    <div class="sk-card-ui">
      <div style="font-size:24px">🔥</div>
      <div class="sk-info"><div class="sk-t">Active streak</div><div class="sk-s">Post daily to keep it alive!</div></div>
      <div class="sk-n">21</div>
    </div>
    <div class="ptabs">
      <button class="ptab on" onclick="toast('Posts')">Posts</button>
      <button class="ptab" onclick="toast('Reels')">Reels</button>
      <button class="ptab" onclick="toast('Saved')">Saved</button>
      <button class="ptab" onclick="toast('Collabs')">Collabs</button>
    </div>
    <div class="pgrid">${emojis.map(e=>`<div class="ptile" onclick="toast('Post opened!')">${e}</div>`).join("")}</div>`;
}

/* DMs — use photoAvEl for DM contacts */
function renderDMs(){
  document.getElementById("p-dm").innerHTML=`<div class="dm-wrap">
    <input type="text" class="dm-srch" placeholder="Search messages..." />
    ${S.dms.map(d=>{
      const person=S.people.find(p=>p.h==="@"+d.n||p.n===d.n);
      const src=person?person.src:"";
      return `
      <div class="dmi" onclick="toast('Chat with ${d.n} opened!')">
        ${photoAvEl(src,d.e,d.bg,"#534AB7",38)}
        <div class="dmi-info"><div class="dmi-n">${d.n}</div><div class="dmi-p">${d.p}</div></div>
        <div class="dmi-meta">
          <div class="dmi-t">${d.t}</div>
          ${d.u>0?`<div class="dmi-u">${d.u}</div>`:""}
        </div>
      </div>`;
    }).join("")}
  </div>`;
}

/* GAMES */
function renderGames(){
  document.getElementById("p-games").innerHTML=`<div class="games-wrap">
    <div style="font-size:12px;font-weight:500;color:var(--color-text-primary);margin-bottom:2px">Mini games</div>
    <div style="font-size:11px;color:var(--color-text-secondary);margin-bottom:6px">Play & earn points on your profile</div>
    <div class="game-cards">
      <div class="gc" onclick="launchGame('scramble')">
        <div class="gc-icon">🔤</div>
        <div class="gc-name">Word scramble</div>
        <div class="gc-desc">Unscramble social media words</div>
        <button class="gc-play">Play</button>
      </div>
      <div class="gc" onclick="launchGame('memory')">
        <div class="gc-icon">🧠</div>
        <div class="gc-name">Emoji memory</div>
        <div class="gc-desc">Match the emoji pairs</div>
        <button class="gc-play">Play</button>
      </div>
      <div class="gc" onclick="launchGame('reaction')">
        <div class="gc-icon">⚡</div>
        <div class="gc-name">Reaction speed</div>
        <div class="gc-desc">Tap when it turns green</div>
        <button class="gc-play">Play</button>
      </div>
      <div class="gc" onclick="launchGame('trivia')">
        <div class="gc-icon">❓</div>
        <div class="gc-name">Social trivia</div>
        <div class="gc-desc">Test your social media knowledge</div>
        <button class="gc-play">Play</button>
      </div>
    </div>
    <div id="gameArea"></div>
    <div class="card" style="padding:12px">
      <div class="sec-title">Leaderboard</div>
      <div class="lb">${state.lbScores.sort((a,b)=>b.s-a.s).map((r,i)=>`
        <div class="lbr">
          <div class="lbrank">${i===0?"🥇":i===1?"🥈":i===2?"🥉":i+1}</div>
          <div class="lbn">${r.n}</div>
          <div class="lbs">${r.s.toLocaleString()} pts</div>
        </div>`).join("")}
      </div>
    </div>
  </div>`;
}

function launchGame(g){
  state.gameActive=g;
  const el=document.getElementById("gameArea");
  if(!el)return;
  if(g==="scramble")renderScramble(el);
  else if(g==="memory")renderMemory(el);
  else if(g==="reaction")renderReaction(el);
  else if(g==="trivia")renderTrivia(el);
}

/* WORD SCRAMBLE */
function scramble(w){
  const a=w.split("");
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a.join("");
}
function renderScramble(el){
  const wd=state.wsWords[state.wsIdx%state.wsWords.length];
  let sc=scramble(wd.w);
  while(sc===wd.w)sc=scramble(wd.w);
  state.wsScrambled=sc;
  el.innerHTML=`<div class="card game-area" style="margin-top:8px">
    <div class="ga-title">Word scramble <button class="ga-close" onclick="renderGames()">Close</button></div>
    <div class="ws-word" id="wsScrambled">${sc}</div>
    <div class="ws-hint">Hint: ${wd.hint}</div>
    <input class="ws-input" type="text" id="wsInput" placeholder="Type the word..." maxlength="10" />
    <div class="ws-score" id="wsScore">Score: ${state.wsScore}</div>
    <div class="ws-btns" style="margin-top:8px">
      <button class="gbtn" onclick="checkScramble()">Submit</button>
      <button class="gbtn sec" onclick="nextScramble()">Skip</button>
    </div>
  </div>`;
  document.getElementById("wsInput").addEventListener("keydown",e=>{if(e.key==="Enter")checkScramble();});
}
function checkScramble(){
  const inp=document.getElementById("wsInput");
  if(!inp)return;
  const wd=state.wsWords[state.wsIdx%state.wsWords.length];
  if(inp.value.trim().toUpperCase()===wd.w){
    state.wsScore+=100;state.wsIdx++;
    updateLBScore("You",state.wsScore);
    toast("Correct! +100 pts");
    nextScramble();
  } else {toast("Try again!");}
}
function nextScramble(){
  state.wsIdx++;
  const el=document.getElementById("gameArea");
  if(el)renderScramble(el);
}

/* EMOJI MEMORY */
const memEmojis=["🌸","🚀","🎵","⚡","🎨","💪","🎮","🍕"];
function renderMemory(el){
  const pool=[...memEmojis,...memEmojis];
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  state.memCards=pool.map((e,i)=>({id:i,e,flipped:false,matched:false}));
  state.memFlipped=[];state.memMatched=new Set();state.memMoves=0;state.memLock=false;
  renderMemoryBoard(el);
}
function renderMemoryBoard(el){
  el=el||document.getElementById("gameArea");
  if(!el)return;
  el.innerHTML=`<div class="card game-area" style="margin-top:8px">
    <div class="ga-title">Emoji memory — Moves: <span id="memMoves">${state.memMoves}</span> <button class="ga-close" onclick="renderGames()">Close</button></div>
    <div class="memory-grid">${state.memCards.map(c=>`
      <div class="mc${c.flipped||c.matched?" flip":""}${c.matched?" matched":""}" id="mc${c.id}" onclick="flipCard(${c.id})">
        ${c.flipped||c.matched?c.e:""}
      </div>`).join("")}
    </div>
    <div style="font-size:11px;color:var(--color-text-secondary);text-align:center">Match all pairs to win!</div>
  </div>`;
}
function flipCard(id){
  if(state.memLock)return;
  const c=state.memCards[id];
  if(c.flipped||c.matched)return;
  c.flipped=true;state.memFlipped.push(id);
  const el=document.getElementById("mc"+id);
  if(el){el.classList.add("flip");el.textContent=c.e;}
  if(state.memFlipped.length===2){
    state.memMoves++;
    const mm=document.getElementById("memMoves");
    if(mm)mm.textContent=state.memMoves;
    state.memLock=true;
    setTimeout(()=>{
      const [a,b]=state.memFlipped;
      const ca=state.memCards[a],cb=state.memCards[b];
      if(ca.e===cb.e){
        ca.matched=cb.matched=true;state.memMatched.add(a);state.memMatched.add(b);
        const ea=document.getElementById("mc"+a),eb=document.getElementById("mc"+b);
        if(ea)ea.classList.add("matched");if(eb)eb.classList.add("matched");
        if(state.memMatched.size===state.memCards.length){
          const pts=Math.max(0,500-state.memMoves*20);
          updateLBScore("You",pts);
          toast("You won! +"+pts+" pts");
        }
      } else {
        ca.flipped=cb.flipped=false;
        const ea=document.getElementById("mc"+a),eb=document.getElementById("mc"+b);
        if(ea){ea.classList.remove("flip");ea.textContent="";}
        if(eb){eb.classList.remove("flip");eb.textContent="";}
      }
      state.memFlipped=[];state.memLock=false;
    },700);
  }
}

/* REACTION SPEED */
function renderReaction(el){
  state.rsState="idle";state.rsTimes=[];
  el.innerHTML=`<div class="card game-area" style="margin-top:8px">
    <div class="ga-title">Reaction speed <button class="ga-close" onclick="renderGames()">Close</button></div>
    <div class="rs-area">
      <div class="rs-target" id="rsTarget" onclick="rsClick()">⏳</div>
      <div class="rs-msg" id="rsMsg">Tap Start to begin</div>
      <div class="rs-score" id="rsScore">${state.rsTimes.length>0?"Avg: "+Math.round(state.rsTimes.reduce((a,b)=>a+b,0)/state.rsTimes.length)+"ms":""}</div>
      <div class="ws-btns">
        <button class="gbtn" onclick="rsStart()">Start</button>
        <button class="gbtn sec" onclick="renderGames()">Close</button>
      </div>
    </div>
  </div>`;
}
function rsStart(){
  const tgt=document.getElementById("rsTarget");
  const msg=document.getElementById("rsMsg");
  if(!tgt||!msg)return;
  state.rsState="waiting";
  tgt.classList.remove("go");tgt.textContent="⏳";
  msg.textContent="Wait for green...";
  clearTimeout(state.rsTimeout);
  state.rsTimeout=setTimeout(()=>{
    tgt.classList.add("go");tgt.textContent="🟢";
    state.rsState="go";state.rsStart=Date.now();
    msg.textContent="Tap NOW!";
  },1000+Math.random()*3000);
}
function rsClick(){
  const tgt=document.getElementById("rsTarget");
  const msg=document.getElementById("rsMsg");
  const sc=document.getElementById("rsScore");
  if(!tgt||!msg)return;
  if(state.rsState==="go"){
    const t=Date.now()-state.rsStart;
    state.rsTimes.push(t);
    tgt.classList.remove("go");tgt.textContent="⏳";
    msg.textContent=`${t}ms — nice!`;
    if(sc&&state.rsTimes.length>0)sc.textContent="Avg: "+Math.round(state.rsTimes.reduce((a,b)=>a+b,0)/state.rsTimes.length)+"ms";
    const pts=Math.max(0,Math.round(500-t/2));
    updateLBScore("You",pts);
    state.rsState="idle";
    setTimeout(rsStart,800);
  } else if(state.rsState==="waiting"){
    clearTimeout(state.rsTimeout);
    msg.textContent="Too early! Wait for green.";
    state.rsState="idle";
    setTimeout(rsStart,1000);
  }
}

/* TRIVIA */
function renderTrivia(el){
  state.tvAnswered=false;
  const q=state.tvQs[state.tvIdx%state.tvQs.length];
  el.innerHTML=`<div class="card game-area" style="margin-top:8px">
    <div class="ga-title">Social trivia — Q${(state.tvIdx%state.tvQs.length)+1}/${state.tvQs.length} <button class="ga-close" onclick="renderGames()">Close</button></div>
    <div class="tv-score">Score: ${state.tvScore} pts</div>
    <div class="tv-q">${q.q}</div>
    <div class="tv-opts">${q.opts.map((o,i)=>`
      <button class="tv-opt" onclick="checkTrivia(${i})">${o}</button>`).join("")}
    </div>
  </div>`;
}
function checkTrivia(chosen){
  if(state.tvAnswered)return;
  state.tvAnswered=true;
  const q=state.tvQs[state.tvIdx%state.tvQs.length];
  document.querySelectorAll(".tv-opt").forEach((b,i)=>{
    b.classList.add(i===q.a?"correct":i===chosen&&chosen!==q.a?"wrong":"");
  });
  if(chosen===q.a){state.tvScore+=200;updateLBScore("You",200);toast("Correct! +200 pts");}
  else{toast("Wrong! The answer was: "+q.opts[q.a]);}
  setTimeout(()=>{
    state.tvIdx++;
    const el=document.getElementById("gameArea");
    if(el)renderTrivia(el);
  },1400);
}

function updateLBScore(name,add){
  const r=state.lbScores.find(x=>x.n===name);
  if(r){r.s+=add;}
  const lb=document.querySelector(".lb");
  if(lb){
    const sorted=state.lbScores.sort((a,b)=>b.s-a.s);
    lb.innerHTML=sorted.map((r,i)=>`
      <div class="lbr">
        <div class="lbrank">${i===0?"🥇":i===1?"🥈":i===2?"🥉":i+1}</div>
        <div class="lbn">${r.n}</div>
        <div class="lbs">${r.s.toLocaleString()} pts</div>
      </div>`).join("");
  }
}

document.getElementById("globalSearch").addEventListener("input",function(){
  if(this.value.trim())toast("Searching: "+this.value.trim());
});

setInterval(()=>{
  S.trending.forEach(t=>{
    const n=parseFloat(t.c)*1000+Math.floor(Math.random()*12);
    t.c=(n/1000).toFixed(1)+"K";
  });
},4500);

/* ══════════════════════════════════════
   STARTUP SEQUENCE
══════════════════════════════════════ */
function startupSequence() {
  const splash   = document.getElementById('splash');
  const skeleton = document.getElementById('skeleton');
  const app      = document.getElementById('app');
  const bar      = document.getElementById('splashBar');

  let progress = 0;
  const SPLASH_DURATION = 1500;
  const TICK = 40;
  const step = 100 / (SPLASH_DURATION / TICK);

  const fillBar = setInterval(() => {
    progress = Math.min(progress + step + (Math.random() * step * 0.5), 100);
    bar.style.width = progress + '%';
    if (progress >= 100) {
      clearInterval(fillBar);
      transitionToSkeleton();
    }
  }, TICK);

  function transitionToSkeleton() {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      skeleton.classList.remove('sk-hidden');
      skeleton.classList.add('sk-visible');
      renderHome();
      renderReels();
      renderLive();
      renderExplore();
      renderNotifs();
      renderProfile();
      renderDMs();
      renderGames();
      setTimeout(transitionToApp, 900);
    }, 500);
  }

  function transitionToApp() {
    skeleton.classList.add('sk-fade-out');
    app.classList.remove('app-hidden');
    app.classList.add('app-visible');
    setTimeout(() => {
      skeleton.style.display = 'none';
      app.classList.add('app-in');
    }, 400);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startupSequence);
} else {
  startupSequence();
}
