import{j as e}from"./index-D5mxoMXg.js";const x=({onClick:n,color:r="#333",space:s="20px"})=>{const t={container:{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"},arrow:{width:"30px",height:"30px",borderRight:`10px solid ${r}`,borderBottom:`10px solid ${r}`,transform:"rotate(45deg)",animation:"bounce 2s infinite",margin:`${s}`},keyframes:`
      @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: rotate(45deg) translateY(0);
        }
        40% {
          transform: rotate(45deg) translateY(-10px);
        }
        60% {
          transform: rotate(45deg) translateY(-5px);
        }
      }
    `};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:t.keyframes}),e.jsx("div",{style:t.container,onClick:n,children:e.jsx("div",{style:t.arrow})})]})},d="/assets/Lemon-Milk-Pro-Regular--lNgIMbx.otf",p=({lines:n=["Where Bright","Ideas Come","to Play."],size:r=120,align:s="center",color:t="white",topOffset:o=0,lineSpacing:i=1.1,customSpacing:a="2px 2px"})=>e.jsxs("div",{style:{marginTop:o,textAlign:s,color:t,fontSize:r,fontFamily:"'Lemon Milk', sans-serif",fontWeight:500,lineHeight:i},children:[e.jsx("style",{children:`
          @font-face {
            font-family: 'Lemon Milk';
            src: url('${d}') format('opentype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `}),n.map((l,m)=>e.jsx("div",{style:{display:"block",padding:a},children:l},m))]});export{x as D,p as T};
