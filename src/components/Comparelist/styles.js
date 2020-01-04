import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    margin-top:60px;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;

`;

export const Repository = styled.div`
    width: 240px;
    max-width:90%;
    background:#FFF;
    &:nth-child(n+1) {
        margin-top:5px;
        margin-left: 5px;
    }

    header {

        display:flex;
        flex-direction:column;
        align-items:center;
        padding:30px;

        img {

            width:70px;

        }

        strong {
            font-size:23px;
            margin-top:10px;
        }

        small {
            font-size: 14px;
            color:#666;
        }
    }

    ul {

        list-style:none;

        li {

            font-weight: bold;
            padding: 12px 20px;
            &:nth-child(2n-1){
                background:#f4f4f4;
            }

            small {
                font-size:11px;
                font-weight:normal;
                color:#888;
                margin-left:5px;

            }
        }

    }

    div {
        display:flex;
        justify-content:center;

        button {
            color:#FFF
            border:0;
            padding:10px 20px;
            margin: 10px 5px;
            font-size:14px;
            border-radius:4px;
        }

        button.btn-refresh {
            background:#20CC74;
            
        }

        button.btn-trash {
            background:#D9186F;
        }
    }


`;