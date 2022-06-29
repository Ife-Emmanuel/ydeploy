import styled from 'styled-components';

export const Container = styled.div`
  padding: 5px 10px;
  background: #282c34;
  border: 1px solid green;
  border-radius: 10px;
  margin: 0px 20px 20px 20px;
  // background: radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%);

  // @media (max-width: 1000px) {
  //   padding: 70px 30px;
  // }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;


  @media (max-width: 1000px) {
    flex-direction: column;
    text-align: center;
    margin: 2px 5px;
}

`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  // grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  // grid-gap: 20px;

  // @media (max-width: 1000px) {
  //   grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  // }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 5px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
      // below is another addition/modification to the already prepared styled component.
      text-decoration: none; 
  }

  @media (max-width: 1000px)
   {
    color: #fff;
    margin-bottom: 5px;
    font-size: 8px;
    -webkit-text-decoration: none;
    text-decoration: none;
}
   
}
`;

export const Title = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;

  @media (max-width: 1000px)
  {
    font-size: 10px;
    color: #fff;
    margin-bottom: 5px;
    font-weight: bold;
}
`;


// This are additional styling/modification to the prepared styled.div installed for online footer template
export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Copywright = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
}
 
`;


export const Text = styled.p`
  font-size: 15px;
  color: #fff;

  @media (max-width: 1000px) {
      font-size: 0.5rem;
      color: #fff;
  }
`;