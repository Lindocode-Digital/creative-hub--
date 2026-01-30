import{j as e}from"./index-CH5uPXDO.js";const f=({lines:n=["Where Bright","Ideas Come","to Play."],size:r=120,align:o="center",color:t="white",topOffset:s=0,lineSpacing:i=1.1,customSpacing:a="2px 2px"})=>e.jsxs("div",{style:{marginTop:s,textAlign:o,color:t,fontSize:r,fontFamily:"'Lemon Milk', sans-serif",fontWeight:500,lineHeight:i},children:[e.jsx("style",{children:`
          @font-face {
            font-family: 'Lemon Milk';
            src: url('/fonts/Lemon Milk Pro Regular.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
          }
        `}),n.map((l,m)=>e.jsx("div",{style:{display:"block",padding:`${a}`},children:l},m))]}),x=({onClick:n,color:r="#333",space:o="20px"})=>{const t={container:{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"},arrow:{width:"30px",height:"30px",borderRight:`10px solid ${r}`,borderBottom:`10px solid ${r}`,transform:"rotate(45deg)",animation:"bounce 2s infinite",margin:`${o}`},keyframes:`
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
    `};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:t.keyframes}),e.jsx("div",{style:t.container,onClick:n,children:e.jsx("div",{style:t.arrow})})]})};export{x as D,f as T};
