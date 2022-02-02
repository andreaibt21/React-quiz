import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        height:100%;
    }
    
    body{
        margin:0;
        background-color: #8d6894;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        
    }

    *{
        box-sizing: border-box;
        font-family: 'Murecho', sans-serif;
    }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  flex: 1 auto;

  > p {
    color: #fff;
  }

a{
  img{
    width: 25px;
    position: absolute;
    top: 20px;
    left: 15px;
  }
}

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 5px;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 0;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff,#6c489c );
    border: 2px solid #451387;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin: 20px 0;
    padding: 20px;
    font-size: 17px;
  }
  .start{
    
  }
  .container-start {
    flex: 1;
    display: flex;
    align-items: center;
  }
  
  @media (max-width: 700px) {
    h1 {
      font-size:  65px;
    }
   
  }
`;
