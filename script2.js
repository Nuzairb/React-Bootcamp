function App() {
    function FriendsList (props) {
        return (
            <ul>
                {props.list.map((name) => (
                    <li key={name}>
                        {name}
                    </li>
                ))}
            </ul>
        )
    }

    const friends = ['Jordyn', 'Mikenzi', 'Jake']
    return (
        <div>
            <FriendsList list={friends} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)

