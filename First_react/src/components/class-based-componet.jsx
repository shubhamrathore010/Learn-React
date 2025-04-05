import { Component } from "react";

class ClassBasedComponent extends Component {

state = {
    showText: false,
    count : 0,
    changeCountStyle: false,
};

handleClick = () => {
    console.log("Button Clicked");
    
    this.setState({
        showText: !this.state.showText,
    });
};

handleCount = () => {
    this.setState({
        ...this.setState,
        count : this.state.count + 1
    })
}

componentDidUpdate(prevProps, prevState) {
    if (
        prevState && 
        prevState.count !== this.state.count &&
        this.state.count === 10
    ) {
        this.setState({
            ...this.state,
            changeCountStyle: true,
        })
    }
}

    render() {
        console.log(this.state);

        const { showText, count ,changeCountStyle} = this.state;
        
        return (
        <div>
           
            {showText ? <h4>Class based component</h4> : null}
            
            <button onClick={this.handleClick}>Toggle Text</button>
             <button onClick={this.handleCount}>Increase Count Value</button>
             <h3 style={{color: changeCountStyle ? 'blue' : 'black', fontSize: changeCountStyle ? '30px' : '12px'}}>Count is {count}</h3>
        </div>
        );    
}
}

export default ClassBasedComponent;