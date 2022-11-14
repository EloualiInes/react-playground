const AllUser = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [data,setData] = React.useState(null);

    React.useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(d => setData(d))
    }, []);
    return (
        <div style={{padding:"0 20vw"}}>
            <h1 style={{textAlign:"center"}}>Fiche de renseignement</h1>
            {data && (
                data.map((elt) => <User key = {elt.id} info = {elt} />)
            )}
        </div>
    )

}

const User = ({info}) => {
    return (
        <div style={{border : "1px solid black", padding: "10px 15px"}}>
            <p>Nom : {info.name}</p>
            <p>E-mail : {info.email}</p>
            <p>Nom de la société : {info.company.name}</p>
            <p>Numéro de téléphone :{info.phone}</p>
            <p>site web : {info.website}</p>
        </div>
    );
}
  ReactDOM.render(
    <AllUser />,
    document.querySelector('#app')
  );