function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Veuillez vous inscrire.</h1>;
  }
  function Greeting({isLoggedIn}) {
    const [logIn, setLogIn] = React.useState(isLoggedIn);

    return (
        <div>
           { logIn ? <UserGreeting /> : <GuestGreeting />}
            <button onClick={ () => {setLogIn(!logIn)}}>Change</button>
        </div>
    );
  }
  
  ReactDOM.render(
    <Greeting isLoggedIn={false} />,
    document.getElementById('app')
  );