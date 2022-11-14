

const getString = (s, uppercaseAll = false) => uppercaseAll ?  s.toUpperCase() : s.slice(0,1).toUpperCase() + s.slice(1).toLowerCase();

const lastName = "el ouali";
const firstName = "ines";
const res = (
    <p>
        {/* Normalement avec css...*/}
        <span style={{color:"red"}}>{getString(lastName, true)}</span> <span>{getString(firstName)}</span>
    </p>
)

ReactDOM.render(res, document.querySelector('#app'));

