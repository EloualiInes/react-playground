const Formulaire = (props) => {
    const [name, setName] = React.useState("");
    const [parfum, setParfum] = React.useState("coconut");
    const [essay, setEssay] = React.useState("");
  
    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeParfum = (e) => {
        setParfum(e.target.value);
    }

    const handleChangeEssay = (e) => {
        setEssay(e.target.value);
    }
  
    const handleSubmit = (e) => {
      alert(`Le nom a été soumis : ${name} \n Le parfum a été soumis : ${parfum} \n Le texte saisi est le suivant : ${essay}`);
      e.preventDefault();
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label>
                Nom :
                <input type="text" value={name} onChange={e => handleChangeName(e)} />
            </label>
            <label>
                Essay:
                <textarea value={essay} onChange={e => handleChangeEssay(e)} />
            </label>
            <label>
                Choisissez votre parfum favori :
                <select value={parfum} onChange={e => handleChangeParfum(e)}>
                    <option value="grapefruit">Pamplemousse</option>
                    <option value="lime">Citron vert</option>
                    <option value="coconut">Noix de coco</option>
                    <option value="mango">Mangue</option>
                </select>
            </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
  }

  ReactDOM.render(
    <Formulaire />,
    document.querySelector('#app')
  );