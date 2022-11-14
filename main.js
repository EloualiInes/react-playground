const formatFirstName = value => value ? value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase() : "";
const formatLastName = value => value ? value.toUpperCase() : "";

const FirstName = ({firstName}) => <span>{formatFirstName(firstName)}</span>
const LastName = ({lastName}) => <span className="red-text">{formatLastName(lastName)}</span>

const helloWorld = (
    <h1>
        Hello <FirstName firstName="Ines"/> <LastName lastName="El Ouali"/>
    </h1>
);

ReactDOM.render(helloWorld, document.querySelector('#app'));
