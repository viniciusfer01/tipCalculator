import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
    border-radius: 5px;
    border: solid 2px #000;
`;

function SearchBox(props) {

    const [texto, setText] = useState('');

    useEffect(()=>{
        props.onText(texto);
    }, [texto]);

    return (
        <InputBox placeholder='digite aqui'
        content={texto} 
        onChange={(e)=>setText(e.target.value)}/>
    )
}

export default SearchBox;