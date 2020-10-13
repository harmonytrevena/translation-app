import React, { Component } from "react";
import rot13 from "rot-thirteen";

class Translator extends Component {
    state = {
        text: this.props.initialText || "",
        translatedText: ""
    };

    _handleChange = newText => {
        this.setState({
            text: newText,
        });
    };

    _handleClick = () => {
        const { text } = this.state;
        const translated = rot13(text);
        this.setState({
            text: "",
            translatedText: translated,
        });
    }

    render() {
        const { text, translatedText } = this.state;

        return (
            <>
                <h1>Translator!</h1>
                <form>
                    <label> Text to be Translatored: 
                    <input 
                        type="text" 
                        onChange={event => {
                        this._handleChange(event.target.value)}}
                        value={text}
                    />
                    </label>
                    <button 
                        type="button" 
                        onClick={this._handleClick}>Translate
                    </button>
                </form>
                {!!translatedText ? <p>Translatored Text: {translatedText}</p> : null}
            </>
        );
    }
}

export default Translator;