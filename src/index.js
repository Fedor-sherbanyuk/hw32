import ReactDOM from 'react-dom/client';
import React, {Component} from 'react';

class Focus extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    focusInput = () => {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref={this.inputRef}
                    placeholder='input'
                    autoComplete='off'/>
                <button onClick={this.focusInput}>Focus input</button>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Focus/>
);
