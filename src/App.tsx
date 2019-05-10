import * as React from 'react';
import './App.css';
import styled from 'styled-components';
import Emoji from 'react-emoji-render';

const Wrapper = styled.div`
   max-width: 1000px;
   height: 100%;
   margin: 30px;
`;

const Name = styled.h1`
   font-family: 'Arvo', serif;
   font-size: 120px;
   margin: 0 30px 40px 30px;
`;

const Content = styled.div`
   background-color: #fff;
   padding: 30px;
   height: 100%;
`;

export default class App extends React.Component {
   render() {
      return (
         <Wrapper>
            <Name>Steve Boyer</Name>
            <Content>
               <h2>
                  Hi, I'm Steve. <Emoji text=":wave:" />
               </h2>
               <p>
                  I'm a full-stack Javascript/Typescript developer. Nice to meet
                  you!
               </p>
               <p>
                  I'm passionate about creating simple products that delight
                  users. I believe the user experience half the product!
               </p>
               <p>
                  My favorite tools are React and React Native and think they're
                  the &nbsp;f u t u r e.
               </p>
            </Content>
         </Wrapper>
      );
   }
}
