import styled from 'styled-components';

export const Container = styled.i`
    font-size: 1rem;
    margin-right: 16px;

`

// export const BrandContainer = styled.i`
//     font-size: 1rem;
//     margin-right: 16px;
//     justify-self: flex-start;

// `

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // color: white;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const IconA = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const Row = styled.div`
    display: flex;
    flex-direction: Row;
    justify-content: center;
`


export const Trash = styled.div`
    display: flex;
    justify-content: center;
    color: black;

`


export const Home = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // color: white;
`


export const Link = styled.a`
  color: #fff;
//   margin-bottom: 5px;
  font-size: 1rem;
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
    font-size: 1rem;
    -webkit-text-decoration: none;
    text-decoration: none;
}
   
}
`;


export const Brand = styled.a`
//   margin-bottom: 5px;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  justify-self: start;
  margin-left: 5px;
  margin-right: 20px;
  cursor: pointer;

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
    font-size: 1rem;
    -webkit-text-decoration: none;
    text-decoration: none;
}
   
}
`;


export const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    // color: white;
`