import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
`;

export const Logo = styled.img``;

export const Input = styled.input`
    margin-top: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 48px;
    padding: 0 20px;
    font-size: 16px;
    color: #666;
`;

export const Enter = styled.button`
    margin-top: 10px;
    border: 0;
    border-radius: 4px;
    height: 48px;
    font-size: 16px;
    background: #DF4723;
    font-weight: bold;
    color: #FFF;
    cursor: pointer;
`;
