import styled from 'styled-components';

const Inputs = styled.div`
    
    
    display         : flex;
    flex-direction  : row;
    align-items: center;
    
`;
const Label = styled.label`
    font-size: 14px!important;
`;
const Field = styled.div`
    font-size: 14px!important;
    
    &.no-flex{
        display:initial!important;
    }
`;
const Input = styled.input``;
const Form = styled.form`
    width:50%;
    margin-top:15px;
`;
const CenterForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

`;
const Button = styled.button``;
export { Input, Button, Inputs, Label, Field, Form};