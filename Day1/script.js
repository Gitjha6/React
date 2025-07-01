const React={
    createElement:function(tag,styles,children){
        const element=document.createElement(tag);
        for(let key in styles)
        {
            element.style[key]=styles[key];
        }
        element.innerText=children;
        return element;
    }
}
const ReactDOM={
    render:function(element,root){
        root.append(element);
    }
}
// const header1=document.createElement('h1');
// header1.innerText="Hello";
// header1.style.fontSize="30px";
// header1.style.backgroundColor="blue";
// header1.style.color="white";

// const header2=document.createElement('h1');
// header2.innerText="World";
// header2.style.fontSize="30px";
// header2.style.backgroundColor="blue";
// header2.style.color="white";
const header1=React.createElement("h1",{fontsize:"30px", backgroundColor:"blue",color:"white"},"Hello");
const header2=React.createElement("h2",{fontsize:"30px", backgroundColor:"blue",color:"white"},"World");
const header3=React.createElement("h3",{fontsize:"30px", backgroundColor:"blue",color:"white"},"Ankit");

const root=document.getElementById("root");
// root.append(header1);
// root.append(header2);
// root.append(header3);
ReactDOM.render(header1,root);
ReactDOM.render(header2,root);
ReactDOM.render(header3,root);



