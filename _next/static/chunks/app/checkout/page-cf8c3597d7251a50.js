(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{3786:(e,s,a)=>{Promise.resolve().then(a.bind(a,8242))},8242:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>n});var r=a(5155),l=a(2115),d=a(9076),i=a(8173),t=a.n(i);let n=()=>{let[e,s]=(0,l.useState)({nombre:"",apellido:"",email:"",direccion:"",ciudad:"",codigoPostal:"",pais:"Espa\xf1a",metodoPago:"tarjeta"}),[a]=(0,l.useState)([{id:1,nombre:"RTX 4070 Ti",precio:899.99,cantidad:1,imagen:"/img/omenmax.png"},{id:3,nombre:"ASUS ROG Strix Z790",precio:429.99,cantidad:1,imagen:"/img/omenmax.png"}]),i=e=>{let{name:a,value:r}=e.target;s(e=>({...e,[a]:r}))},n=a.reduce((e,s)=>e+s.precio*s.cantidad,0),o=.21*n,c=n+o+15.99;return(0,r.jsxs)("div",{className:"min-h-screen bg-black text-white",children:[(0,r.jsx)("header",{className:"bg-gray-900 shadow-md",children:(0,r.jsx)("div",{className:"container mx-auto px-6 py-4",children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)(t(),{className:"hover:animate-pulse",href:"/",children:(0,r.jsx)("div",{className:"text-2xl font-ka1 font-bold",children:(0,r.jsxs)("span",{className:"text-white",children:["Los ",(0,r.jsx)("span",{className:"text-red-500",children:"Miserables"})]})})}),(0,r.jsx)("div",{className:"flex items-center space-x-4",children:(0,r.jsx)(t(),{className:"hover:animate-pulse",href:"/catalogo",children:(0,r.jsxs)("button",{className:"flex items-center text-gray-400 hover:text-white transition-colors",children:[(0,r.jsx)(d.QVr,{className:"mr-2"}),(0,r.jsx)("span",{children:"Volver a la tienda"})]})})})]})})}),(0,r.jsx)("main",{className:"container mx-auto px-4 py-8",children:(0,r.jsxs)("div",{className:"flex flex-col lg:flex-row gap-8",children:[(0,r.jsx)("div",{className:"lg:w-2/3",children:(0,r.jsxs)("div",{className:"bg-gray-900 rounded-xl p-6 shadow-lg mb-6",children:[(0,r.jsxs)("h2",{className:"text-xl font-bold mb-6 flex items-center",children:[(0,r.jsx)(d.AsH,{className:"mr-2 text-red-500"}),"Finalizar Compra"]}),(0,r.jsxs)("form",{onSubmit:s=>{s.preventDefault(),console.log("Datos del pedido:",{formData:e,productos:a,total:c}),alert("\xa1Pedido realizado con \xe9xito!")},children:[(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold mb-4 pb-2 border-b border-gray-800",children:"Informaci\xf3n Personal"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-400 text-sm font-medium mb-2",htmlFor:"nombre",children:"Nombre"}),(0,r.jsx)("input",{type:"text",id:"nombre",name:"nombre",value:e.nombre,onChange:i,className:"w-full py-2 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-400 text-sm font-medium mb-2",htmlFor:"apellido",children:"Apellido"}),(0,r.jsx)("input",{type:"text",id:"apellido",name:"apellido",value:e.apellido,onChange:i,className:"w-full py-2 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",required:!0})]}),(0,r.jsxs)("div",{className:"md:col-span-2",children:[(0,r.jsx)("label",{className:"block text-gray-400 text-sm font-medium mb-2",htmlFor:"email",children:"Email"}),(0,r.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:i,className:"w-full py-2 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",required:!0})]})]})]}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold mb-4 pb-2 border-b border-gray-800",children:"Direcci\xf3n de Env\xedo"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"md:col-span-2",children:[(0,r.jsx)("label",{className:"block text-gray-400 text-sm font-medium mb-2",htmlFor:"direccion",children:"Direcci\xf3n"}),(0,r.jsx)("input",{type:"text",id:"direccion",name:"direccion",value:e.direccion,onChange:i,className:"w-full py-2 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-400 text-sm font-medium mb-2",htmlFor:"ciudad",children:"Ciudad"}),(0,r.jsx)("input",{type:"text",id:"ciudad",name:"ciudad",value:e.ciudad,onChange:i,className:"w-full py-2 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-400 text-sm font-medium mb-2",htmlFor:"codigoPostal",children:"C\xf3digo Postal"}),(0,r.jsx)("input",{type:"text",id:"codigoPostal",name:"codigoPostal",value:e.codigoPostal,onChange:i,className:"w-full py-2 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",required:!0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-400 text-sm font-medium mb-2",htmlFor:"pais",children:"Pa\xeds"}),(0,r.jsxs)("select",{id:"pais",name:"pais",value:e.pais,onChange:i,className:"w-full py-2 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",required:!0,children:[(0,r.jsx)("option",{value:"Espa\xf1a",children:"Espa\xf1a"}),(0,r.jsx)("option",{value:"M\xe9xico",children:"M\xe9xico"}),(0,r.jsx)("option",{value:"Argentina",children:"Argentina"}),(0,r.jsx)("option",{value:"Colombia",children:"Colombia"}),(0,r.jsx)("option",{value:"Chile",children:"Chile"})]})]})]})]}),(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold mb-4 pb-2 border-b border-gray-800",children:"M\xe9todo de Pago"}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{type:"radio",id:"tarjeta",name:"metodoPago",value:"tarjeta",checked:"tarjeta"===e.metodoPago,onChange:i,className:"h-4 w-4 text-red-500 focus:ring-red-500 border-gray-700 bg-gray-800"}),(0,r.jsxs)("label",{htmlFor:"tarjeta",className:"ml-2 flex items-center text-white",children:[(0,r.jsx)(d.x1c,{className:"mr-2 text-red-500"})," Tarjeta de Cr\xe9dito/D\xe9bito"]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{type:"radio",id:"paypal",name:"metodoPago",value:"paypal",checked:"paypal"===e.metodoPago,onChange:i,className:"h-4 w-4 text-red-500 focus:ring-red-500 border-gray-700 bg-gray-800"}),(0,r.jsxs)("label",{htmlFor:"paypal",className:"ml-2 flex items-center text-white",children:[(0,r.jsx)(d.SnG,{className:"mr-2 text-blue-500"})," PayPal"]})]}),(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("input",{type:"radio",id:"transferencia",name:"metodoPago",value:"transferencia",checked:"transferencia"===e.metodoPago,onChange:i,className:"h-4 w-4 text-red-500 focus:ring-red-500 border-gray-700 bg-gray-800"}),(0,r.jsxs)("label",{htmlFor:"transferencia",className:"ml-2 flex items-center text-white",children:[(0,r.jsx)(d.XVP,{className:"mr-2 text-green-500"})," Transferencia Bancaria"]})]})]})]}),"tarjeta"===e.metodoPago&&(0,r.jsxs)("div",{className:"mb-6 p-4 bg-gray-800 rounded-lg",children:[(0,r.jsx)("h4",{className:"text-md font-medium mb-4",children:"Detalles de la Tarjeta"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"md:col-span-2",children:[(0,r.jsx)("label",{className:"block text-gray-400 text-sm font-medium mb-2",children:"N\xfamero de Tarjeta"}),(0,r.jsx)("input",{type:"text",className:"w-full py-2 px-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",placeholder:"1234 5678 9012 3456"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-400 text-sm font-medium mb-2",children:"Fecha de Expiraci\xf3n"}),(0,r.jsx)("input",{type:"text",className:"w-full py-2 px-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",placeholder:"MM/AA"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-400 text-sm font-medium mb-2",children:"C\xf3digo de Seguridad (CVV)"}),(0,r.jsx)("input",{type:"text",className:"w-full py-2 px-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",placeholder:"123"})]})]})]}),(0,r.jsx)("div",{className:"mt-8",children:(0,r.jsx)("button",{type:"submit",className:"w-full py-3 px-6 bg-gradient-to-r from-red-600 to-red-500 text-white font-medium rounded-lg shadow-md hover:from-red-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors",children:"Completar Pedido"})})]})]})}),(0,r.jsx)("div",{className:"lg:w-1/3",children:(0,r.jsxs)("div",{className:"bg-gray-900 rounded-xl p-6 shadow-lg sticky top-6",children:[(0,r.jsx)("h2",{className:"text-xl font-bold mb-6 pb-2 border-b border-gray-800",children:"Resumen del Pedido"}),(0,r.jsx)("div",{className:"space-y-4 mb-6",children:a.map(e=>(0,r.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,r.jsx)("div",{className:"w-16 h-16 bg-gray-800 rounded-lg overflow-hidden flex-shrink-0",children:(0,r.jsx)("img",{src:e.imagen,alt:e.nombre,className:"w-full h-full object-cover",onError:e=>{e.target.onerror=null,e.target.src="https://via.placeholder.com/150"}})}),(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("h3",{className:"text-sm font-medium",children:e.nombre}),(0,r.jsxs)("p",{className:"text-xs text-gray-400",children:["Cantidad: ",e.cantidad]})]}),(0,r.jsx)("div",{className:"text-right",children:(0,r.jsxs)("p",{className:"font-medium",children:["$",e.precio.toFixed(2)]})})]},e.id))}),(0,r.jsxs)("div",{className:"space-y-2 py-4 border-t border-b border-gray-800",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("span",{className:"text-gray-400",children:"Subtotal"}),(0,r.jsxs)("span",{children:["$",n.toFixed(2)]})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("span",{className:"text-gray-400",children:"Impuestos (21%)"}),(0,r.jsxs)("span",{children:["$",o.toFixed(2)]})]}),(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("span",{className:"text-gray-400",children:"Env\xedo"}),(0,r.jsxs)("span",{children:["$","15.99"]})]})]}),(0,r.jsxs)("div",{className:"flex justify-between items-center mt-4 pt-2",children:[(0,r.jsx)("span",{className:"text-lg font-bold",children:"Total"}),(0,r.jsxs)("span",{className:"text-xl font-bold text-red-500",children:["$",c.toFixed(2)]})]}),(0,r.jsx)("div",{className:"mt-6 text-sm text-gray-400",children:(0,r.jsxs)("p",{children:["Al completar tu pedido, aceptas nuestros ",(0,r.jsx)("a",{href:"#",className:"text-red-500 hover:underline",children:"T\xe9rminos y Condiciones"})," y nuestra ",(0,r.jsx)("a",{href:"#",className:"text-red-500 hover:underline",children:"Pol\xedtica de Privacidad"}),"."]})})]})})]})})]})}}},e=>{var s=s=>e(e.s=s);e.O(0,[504,532,441,517,358],()=>s(3786)),_N_E=e.O()}]);