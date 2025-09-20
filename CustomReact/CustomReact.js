function customRender(reactElement,container){
   /* const domElment = document.createElement(reactElement.type);
    domElment.innerHTML = reactElement.Children;
    domElment.setAttribute('href',reactElement.props.href);
    domElment.setAttribute('target',reactElement.props.target);
    container.appendChild(domElment);
    */
   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.Children;
   for (const prop in reactElement.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop,reactElement.props[prop]);
    
   }
   container.appendChild(domElement);
}

const reactElement ={
    type : 'a',
    props: {
        href : 'https://www.google.com',
        target: '_blank',
    },
    Children: 'Click Me'
}


const mainCntainer=document.querySelector('#root')

customRender(reactElement,mainCntainer); 
