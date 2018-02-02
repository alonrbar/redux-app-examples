import * as React from 'react';
var debounce = require('lodash.debounce');

// https://medium.com/@justintulk/debouncing-reacts-controlled-textareas-w-redux-lodash-4383084ca090

export type TextChangedHandler = (text: string) => void;

export interface TextInputProps {
    onChange: TextChangedHandler;
    value: string;
    className?: string;
    placeholder?: string;
    /**
     * Default is 200ms.
     */
    debounceTime?: number;
}

interface TextInputViewState {
    value: string;
}

export class TextInput extends React.Component<TextInputProps, TextInputViewState> {

    public debouncedOnChange: TextChangedHandler;

    constructor(props: TextInputProps) {
        super(props);

        this.state = { value: props.value };
        this.debouncedOnChange = debounce(this.props.onChange, 200);
        this.handleChange = this.handleChange.bind(this);
    }

    public componentWillReceiveProps(nextProps: TextInputProps) {
        this.setState({ value: nextProps.value });
    }

    public handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const text = e.target.value;
        this.setState({ value: text }, () => {
            this.debouncedOnChange(text);
        });
    }

    public render() {
        return (
            <input
                type="text"
                value={this.state.value || this.props.value || ''}
                onChange={this.handleChange}
                className={this.props.className || ''}
                placeholder={this.props.placeholder || ''} />
        );
    }
}