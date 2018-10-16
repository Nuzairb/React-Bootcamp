const name = 'Nuzair'
const handle = '@nuzair'

const nameElement = React.createElement(
    'h1',
    null,
    name
)

const handleElement = React.createElement(
    'h3',
    null,
    handle
)

const wrapprElement = React.createElement(
    'div',
    {id: 'container'},
    nameElement,
    handleElement
)

ReactDOM.render(
    wrapprElement,
    document.getElementById('app')
)