import * as React from 'react';
import './App.css';
import styled from 'styled-components';
import Emoji from 'react-emoji-render';

const mobileBreakpoint = '700px';

const Wrapper = styled.div`
   max-width: 900px;
   height: 100%;
   margin: 30px auto;
`;

const NameRow = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 0 30px;
`;

const Photo = styled.img`
   width: 20%;
   max-width: 150px;
   border-radius: 100px;
`;

const Name = styled.h1`
   font-family: 'Arvo', serif;
   font-size: 80px;
   margin-top: 20px;

   @media screen and (max-width: ${mobileBreakpoint}) {
      font-size: 40px;
   }
`;

const IconCircle = styled.div`
   background-color: #fff;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   font-size: 1em;

   span:first-child {
      display: block;
      font-size: 1.2em;
      font-weight: bold;
      line-height: 0.9em;
   }
`;

const Social = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 30px;

   a {
      text-decoration: none;
      color: #fff;
   }

   img,
   ${IconCircle} {
      width: 45px;
      height: 45px;
      margin: 0 10px;
      border-radius: 25px;
      font-size: 10px;
   }
`;

const ContentRow = styled.div`
   display: flex;
   margin: 30px;

   &:nth-child(odd) {
      justify-content: flex-start;
   }

   &:nth-child(even) {
      justify-content: flex-end;
   }

   @media screen and (max-width: ${mobileBreakpoint}) {
      margin: 20px;
   }
`;

const Content = styled.div`
   background-color: #fff;
   padding: 30px;
   width: 75%;

   @media screen and (max-width: ${mobileBreakpoint}) {
      width: 100%;
   }

   i {
      display: inline-block;
   }
`;

const Columns = styled.p`
   display: flex;
   flex-wrap: wrap;

   span {
      display: block;
      position: relative;
      width: calc(50% - 10px);
      padding-left: 18px;
      box-sizing: border-box;

      &:before {
         position: absolute;
         left: 0;
         top: calc(50% - 4px);
         display: block;
         content: '';
         width: 8px;
         height: 8px;
         background-color: #ff6c6b;
         border-radius: 5px;
      }

      @media screen and (max-width: ${mobileBreakpoint}) {
         width: 100%;
      }
   }
`;

const Contents = styled.div``;

const skillz = [
   'Javascript',
   'ES2015/16',
   'Typescript',
   'React',
   'Redux',
   'React Native',
   'CSS/SASS',
   'Responsive Design',
   'Cross-browser styling',
   'REST APIs',
   'C#',
   '.Net',
   'Relational databases',
   'NoSQL databases',
   'Entity Framework',
   'Node.js',
   'Git/Mercurial/TFS'
];

export default class App extends React.Component {
   render() {
      return (
         <Wrapper>
            <NameRow>
               <Photo src="./steve.jpg" />
               <Name>Steve Boyer</Name>
               <Social>
                  <a
                     href="https://linkedin.com/in/stevejboyer"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img src="./linkedin.svg" alt="linkedin profile" />
                  </a>
                  <a
                     href="https://twitter.com/stevejboyer"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img src="./twitter.svg" alt="twitter profile" />
                  </a>
                  <a
                     href="https://github.com/stevejboyer"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <img src="./github.svg" alt="github profile" />
                  </a>
                  <a
                     href="./steve_boyer_resume.pdf"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <IconCircle style={{ backgroundColor: '#7b4397' }}>
                        <span>PDF</span>
                        <span>resumé</span>
                     </IconCircle>
                  </a>
                  <a
                     href="./steve_boyer_resume.docx"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <IconCircle style={{ backgroundColor: '#267871' }}>
                        <span>DOCX</span>
                        <span>resumé</span>
                     </IconCircle>
                  </a>
               </Social>
            </NameRow>
            <Contents>
               <ContentRow>
                  <Content>
                     <h2>
                        Hi, I'm Steve. <Emoji text=":wave:" />
                     </h2>
                     <p>
                        I'm a full-stack Javascript/Typescript developer. I'm
                        passionate about creating powerful yet simple tools that
                        delight users. Nice to meet you!
                     </p>
                     <p>
                        My favorite tools are React and React Native and think
                        they're the <i>f u t u r e.</i>
                     </p>
                     <p>Learn more about me below!</p>
                  </Content>
               </ContentRow>
               <ContentRow>
                  <Content>
                     <h2>Skills</h2>
                     <Columns>
                        {skillz.map((skill, index) => (
                           <span key={index}>{skill}</span>
                        ))}
                     </Columns>
                     <p>
                        <i>
                           “I don't even have any good skills. You know like
                           nunchuck skills, bow hunting skills, computer hacking
                           skills. Girls only want boyfriends who have great
                           skills!” -Napoleon
                        </i>
                     </p>
                  </Content>
               </ContentRow>
               <ContentRow>
                  <Content>
                     <h2>About</h2>
                     <p>Born and raised in Salt Lake City, Utah.</p>
                     <p>
                        Married to my best friend, and father to the cutest
                        little boy ever.
                     </p>
                     <p>
                        Hobbies include skiing, running, hiking (Utah is
                        beautiful!), playing Dota (go EG!), and traveling with
                        the wife and kid (Hawaii is my jam).
                     </p>
                  </Content>
               </ContentRow>
            </Contents>
         </Wrapper>
      );
   }
}
