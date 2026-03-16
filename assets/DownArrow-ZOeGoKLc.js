import{j as t}from"./index-DlA9RNj8.js";const a=({onClick:n,color:e="#333",space:s="20px"})=>{const r={container:{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"},arrow:{width:"30px",height:"30px",borderRight:`10px solid ${e}`,borderBottom:`10px solid ${e}`,transform:"rotate(45deg)",animation:"bounce 2s infinite",margin:`${s}`},keyframes:`
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
    `};return t.jsxs(t.Fragment,{children:[t.jsx("style",{children:r.keyframes}),t.jsx("div",{style:r.container,onClick:n,children:t.jsx("div",{style:r.arrow})})]})};export{a as D};
