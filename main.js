const name = 'Nuzair'
const handle = '@nuzair'

function NameComponent (props) {
    return React.createElement(
        'h1',
        null,
        props.name,
    )
}

function HandleComponent (props) {
    return React.createElement(
        'h3',
        null,
        props.handle,
    )
}


const wrapperElement = React.createElement(
  "div",
  { id: "container" },
  React.createElement(NameComponent, { name: "Nuzair" }),
  React.createElement(HandleComponent, { handle: "@nuzair" })
);

console.log('wrapperElement', wrapperElement)

ReactDOM.render(
    wrapperElement,
    document.getElementById('app')
)