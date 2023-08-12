import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        <header>
            <h1>待办事项</h1>
            <InputWrapper {...props}/>
        </header>
    );
}
