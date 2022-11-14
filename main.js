const NameForm = (props) => {
    const [value, setValue] = React.useState("");
  
    const handleChange = (e) => {
      setValue(e.target.value)
    }
  
    const handleSubmit = (e) => {
      alert(`Le nom a été soumis : ${value}`);
      e.preventDefault();
    }
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label>
                Nom :
                <input type="text" value={value} onChange={e => handleChange(e)} />
            </label>
          <input type="submit" value="Envoyer" />
        </form>
      );
  }