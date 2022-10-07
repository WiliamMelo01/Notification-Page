import styled from 'styled-components';

export const header = styled.div`
    width:95%;
    height:6.25rem;
    margin: 0 auto;
    display:flex;
    align-items:center;
    justify-content: space-between;   
`;
export const containerNotification = styled.div`
    display:flex;
    align-items:center;
    gap:0.9375rem;
`;
export const title = styled.h1`
`;
export const buttonNotification = styled.button`
    width: 2.1875rem;
    height: 1.875rem;
    background:hsl(219, 85%, 26%);
    border:none;
    color:#FFF;
    font-size:1.1em;
    font-weight:bold;
    border-radius:0.3125rem;
    text-align:center;
`;
export const buttonMarkAllAsRead = styled.button`
    background:transparent;
    border:none;
    font-size:1.05em;
    color:hsl(219, 12%, 42%);
    font-weight:500;
    cursor:pointer
`;
