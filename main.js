//const helloWorld = React.createElement('h1', {}, 'Hello world!');

// const firstName = 'r0ulito';
// const lastName = 'formateur';


// // Solution sans bonus
// const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;



/**
 * 
 * Solution avec bonus
 */

/*
 const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

 const formatLastName = (value) => value.toUpperCase();
 
 // Solution avec bonus
 const helloWorld = (
   <h1>
     Hello{" "}
     <span className="red-text">{formatLastName(lastName)}</span>
   </h1>
 );

 */

const formatFirstName = (value) => value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase();
const formatLastName = (value) => value.toUpperCase();

const FirstName = ({firstName}) => {
    return <span>{formatFirstName(firstName)}</span>
}

const LastName = ({lastName}) => {
    return <span className="red-text">{formatLastName(lastName)}</span>
}

const helloWorld = (
    <h1>
        Hello {FirstName("inès")} {LastName("el ouali")} 
    </h1>
);

ReactDOM.render(helloWorld, document.querySelector('#app'));
