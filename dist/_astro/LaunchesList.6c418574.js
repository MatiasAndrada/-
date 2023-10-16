import{j as e}from"./jsx-runtime.391947bd.js";import{r as i}from"./index.ed373d49.js";const v="https://api.spacexdata.com/latest";class L{order="asc";page=0;limit=10}async function S(r=new L){try{const{order:s,limit:n,page:o}=r,a=await fetch(`${v}/launches/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:{"links.patch.small":{$ne:null},"links.patch.large":{$ne:null}},options:{sort:{flight_number:s},pagination:!0,page:o,limit:n}})});if(!a.ok)throw new Error("La solicitud no fue exitosa.");return await a.json()}catch(s){throw console.error("Error en la solicitud:",s),s}}const E=({id:r,name:s,img:n,launch_date_utc:o,launch_success:a})=>{const c=o?new Date(o).toLocaleDateString():"No date";return e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"link-card",children:e.jsxs("a",{href:`/launches/${r}`,className:"card-link",children:[e.jsx("img",{className:"card-image",src:n,alt:s}),e.jsxs("div",{className:"card-content",children:[e.jsxs("div",{className:"info",children:[e.jsx("h2",{className:"text-white text-md md:text-xl",children:s}),e.jsx("p",{className:"text-sm md:text-md text-center",children:c})]}),e.jsx("div",{className:"status",children:a?e.jsx("p",{className:"success",children:"Success"}):e.jsx("p",{className:"failure",children:"Failure"})})]})]})}),e.jsx("style",{children:`
  .link-card {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6px;
    margin: 4px;
    background-color: #334155;
    background-image: none;
    background-size: 400%;
    border-radius: 7px;
    background-position: 100%;
    transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: inset 0 0 0 1px rgba(21, 20, 20, 0.538);
  }

  .card-link {
    text-decoration: none;
    position: relative;
    display: block;
    border-radius: 7px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .card-image {
    max-width: 350px;
    min-width: 150px;
    padding: 1em;
    padding-top: 60px;
    margin: auto;
    object-fit: cover;
  }

  .card-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    padding: 10px;
    box-sizing: border-box;
  }

  .info {
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.671);
    padding: 5px;
    border-radius: 5px;
  }

  .status {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  .success {
    background-color: green;
    color: white;
    border-radius: 50px;
    display: inline-block;
    padding: 6px 12px;
    font-size: 18px;
  }

  .failure {
    background-color: red;
    color: white;
    border-radius: 50px;
    display: inline-block;
    padding: 6px 12px;
    font-size: 18px;
  }

  .link-card:is(:hover, :focus-within) {
    background-position: 0;
    background-image: var(--accent-blue-white);
  }

  .link-card:is(:hover, :focus-within) .text-accent {
    color: var(--accent-blue);
  }

  @media (max-width: 768px) {
    .link-card {
      width: 45%; /* Ajusta el ancho de la tarjeta para dispositivos medianos */
    }
  }
  @media (max-width: 480px) {
    .link-card {
      width: 100%; /* Ocupa todo el ancho en dispositivos pequeños */
    }
    .status {
      bottom: 0;
      right: 10px;
      top: 10px;
      padding: 4px, 8px;
    }
    .success {
      font-size: 1em;
    }
    .failure {
      font-size: 1em;
    }
  }`})]})},O=()=>{const[r,s]=i.useState([]),[n,o]=i.useState("asc"),[a,c]=i.useState(1),[f,u]=i.useState(!1),[x,w]=i.useState(null),[b,j]=i.useState(!0),y=10,p=i.useRef(),d=i.useRef(!1),h=()=>{!f&&!d.current&&b&&(d.current=!0,u(!0),S({order:n,page:a,limit:y}).then(t=>{s(l=>[...l,...t.docs]),j(t.hasNextPage),c(l=>l+1)}).catch(t=>{w(t)}).finally(()=>{u(!1),d.current=!1}))},m=()=>{const t=p.current;if(!t)return;const l=window.scrollY,k=t.offsetTop+t.clientHeight,N=window.innerHeight;l+200>=k-N&&h()};i.useEffect(()=>(a===1&&h(),window.addEventListener("scroll",m),()=>{window.removeEventListener("scroll",m)}),[a,n]);const g=t=>{o(t),s([]),c(1)};return e.jsxs("div",{ref:p,children:[e.jsxs("h3",{className:"text-lg text-white text-center my-4",children:["Loaded pages: ",a-1]}),x&&e.jsxs("p",{children:["Error: ",x.message]}),e.jsxs("div",{className:"w-full flex flex-col sm:flex-row justify-center items-center sm:space-x-10",children:[e.jsx("h3",{className:"text-lg text-white",children:"Order:"}),e.jsx("button",{className:`rounded-full p-2 ${n==="asc"?"bg-blue-500 text-white":"bg-slate-400 text-white"} mt-2 sm:mt-0
          w-fit
          `,onClick:()=>g("asc"),children:"Ascendant"}),e.jsx("button",{className:`rounded-full p-2 ${n==="desc"?"bg-blue-500 text-white":"bg-slate-400 text-white"} mt-2 sm:mt-0 w-fit`,onClick:()=>g("desc"),children:"Descendant"})]}),e.jsx("ul",{className:"launch-list",children:r.map(t=>e.jsx(E,{id:t.id,img:t.links.patch.small,name:t.name,launch_date_utc:t.date_utc,launch_success:t.success},t.id))}),e.jsx("style",{children:`
          .launch-list {
            list-style: none;
            padding: 0;
            margin: 1em;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            height: auto;
          }

          @media (max-width: 768px) {
            .launch-list .LaunchCard {
              flex-basis: calc(50% - 2rem);
            }
          }

          @media (max-width: 480px) {
            .launch-list .LaunchCard {
              flex-basis: 100%;
            }
          }
        `})]})};export{O as default};
