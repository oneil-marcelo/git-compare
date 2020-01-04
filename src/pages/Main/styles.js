import styled from 'styled-components';

export const Container = styled.div`
    width:980px;
    max-width:90%
    display: flex; 
    flex-direction:column;
    align-items:center; 
    margin:60px auto;
    
    h1 {
        color: #FFF;
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 400px;
    display:flex;
    padding-top:30px;

    input {
        flex: 1;
        height:55px;
        padding: 0 20px;
        font-size: 18px;
        color:#444;
        border:${props => (props.withError ? '1px solid #f00' : 0)};  
        border-radius: 3px;
    }

    button {
        width: 85px;
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        background: #63f5b0;
        border: 0;
        border-radius:3px;
        font-size:20px;
        font-weight:bold;
        color: #FFF;

    }
`;