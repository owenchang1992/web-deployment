import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import { Frontend, Content, Details, Describe } from './StyledExperience';
import Card from '../../components/cards/BasicCard';

const Experience = () => (
  <section id="experience">
    <h5>Skills I Have</h5>
    <h2>My Experience</h2>

    <Card>
      <Frontend>
        <h3>Frontend Development</h3>
        <Content>
          <Details>
            <BsPatchCheckFill />
            <div>
              <h4>HTML</h4>
              <Describe>Experienced</Describe>
            </div>
          </Details>
          <Details>
            <BsPatchCheckFill />
            <div>
              <h4>CSS</h4>
              <Describe>Experienced</Describe>
            </div>
          </Details>
          <Details>
            <BsPatchCheckFill />
            <div>
              <h4>Javascript</h4>
              <Describe>Experienced</Describe>
            </div>
          </Details>
          <Details>
            <BsPatchCheckFill />
            <div>
              <h4>Typescript</h4>
              <Describe>Experienced</Describe>
            </div>
          </Details>
          <Details>
            <BsPatchCheckFill />
            <div>
              <h4>React</h4>
              <Describe>Experienced</Describe>
            </div>
          </Details>
          <Details>
            <BsPatchCheckFill />
            <div>
              <h4>NextJS</h4>
              <Describe>Experienced</Describe>
            </div>
          </Details>
          <Details>
            <BsPatchCheckFill />
            <div>
              <h4>Material UI</h4>
              <Describe>Experienced</Describe>
            </div>
          </Details>
          <Details>
            <BsPatchCheckFill />
            <div>
              <h4>Tailwind</h4>
              <Describe>Experienced</Describe>
            </div>
          </Details>
          <Details>
            <BsPatchCheckFill />
            <div>
              <h4>Styled Component</h4>
              <Describe>Experienced</Describe>
            </div>
          </Details>
          <Details>
            <BsPatchCheckFill />
            <div>
              <h4>GraphQL</h4>
              <Describe>Intermediate</Describe>
            </div>
          </Details>
          <Details>
            <BsPatchCheckFill />
            <div>
              <h4>Jest</h4>
              <Describe>Intermediate</Describe>
            </div>
          </Details>
        </Content>
      </Frontend>
    </Card>
  </section>
);

export default Experience;
