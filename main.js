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
            <div className="allCards">
                {data && (
                    data.map((elt) => <User key = {elt.id} info = {elt} />)
                )}
            </div>
            
        </div>
    )

}

const User = ({info}) => {
    return (
        <div className="card">
            <p><strong>Nom</strong> : {info.name}</p>
            <p><strong>E-mail</strong> : {info.email}</p>
            <p><strong>Nom de la société</strong> : {info.company.name}</p>
            <p><strong>Numéro de téléphone</strong> :{info.phone}</p>
            <p><strong>site web</strong> : {info.website}</p>
        </div>
    );
}
  ReactDOM.render(
    <AllUser />,
    document.querySelector('#app')
  );