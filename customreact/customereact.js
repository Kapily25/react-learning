function customRender(reactElement, container) {
   /* const domelement = document.createElement(reactElement.type)
    domelement.innerHTML = reactElement.children
    domelement.setAttribute('href', reactElement.props.href)
    domelement.setAttribute('target', reactElement.props.target)
    container.appendChild(domelement)*/ //create basic javascript react render

    const domelement = document.createElement(reactElement.type)

    domelement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'childre') continue;//its moduler to not repet the line of code 
        domelement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domelement)//create moduler javascript react render 
}
const reactElement = {//create custome(manual) element
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}
const maincontainer = document.querySelector('#root')
customRender(reactElement, maincontainer)//create render to the custome react 'it is in react project to use render '