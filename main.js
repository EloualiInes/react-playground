/* 
// Étape 1
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

ReactDOM.render(<Clock date={new Date()}/>, document.querySelector('#app')); 

*/


/* 

// Étape 2

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 


 */



// Étape 3

/* class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#app'));  */


function Clock(props) {
    const intervalRef = React.useRef();
    React.useEffect(() => {

        const interval = setInterval(() => {
            setDate(new Date())
          },1000);
          intervalRef.current = interval;
          return () => {
            console.log("clear")
            clearInterval(intervalRef.current);
          };
    });
    
    const [date, setDate] = React.useState(new Date());
    const [colorHorloge, setColorHorloge] = React.useState("#000000");

    const tick = (stop = false) => {
        if(stop) window.clearInterval(i);
        const i = setInterval(() => {
            setDate(new Date())
        }, 1000)
        
    }

    const randomColor = () => "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0,6);
    
    const handleClickColor = () => {
        setColorHorloge(randomColor());
        clearInterval(intervalRef.current);
    }

    const handleClickReinit = () => {
        setColorHorloge("#000000");
        clearInterval(intervalRef.current);
    }

    return (
        <div>
            <h1>Hello world</h1>
            <h2 style={{color:colorHorloge}}>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={handleClickColor}> color </button>
            <button onClick={handleClickReinit}> Reinit </button>
        </div>
        );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));





