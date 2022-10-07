import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    min-height:5rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-bottom:0.3125rem;
    border-radius:0.3125rem;
    background:${props => props.unred ? "hsl(205, 33%, 90%)" : "transparent"};
    position:relative;
`;
export const ContainerHorizontal = styled.div`
    display:flex;
`;
export const UserImage = styled.img`
    height:50%;
    width:08%;
    margin: 0 1.25rem;
`;
export const line = styled.span`
    max-width:90%;
    height:100%;
    position:relative;
`;
export const name = styled.span`
    font-weight:bold
`;
export const action = styled.span`
    margin-left:0.4rem;
    font-weight:450;
    color: hsl(219, 12%, 42%);
    max-width:65%;
    word-wrap:break-word;
    padding-top: ${props => props.long ? "1.25rem" : "0rem"};
`;
export const post = styled.span`
    margin-left:0.4rem;
    font-weight:bold;
    color: hsl(219, 12%, 42%);
`;
export const group = styled.span`
    font-weight:bold;
    margin-left:0.4rem;
    color: hsl(219, 85%, 26%);
`;
export const newICon = styled.div`
    width:0.625rem;
    height:0.625rem;
    border-radius:50%;
    background:hsl(1, 90%, 64%);
    position:absolute;
    right:-1.25rem;
    top:50%;
    transform:translateY(-50%)
`;
export const date = styled.span`
    position:absolute;
    top:90%;
    left:0%;
    color: hsl(219, 12%, 42%);
    font-weight:500
`;
export const message = styled.div`
    min-height:50px;
    width:82%;
    border: 1px solid hsl(219, 12%, 42%);
    align-self:flex-end;
    padding: 20px;
    color: hsl(219, 12%, 42%);
    font-weight:500
`;