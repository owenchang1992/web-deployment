import React from 'react';
import Card from '../../components/cards/BasicCard';

const About = () => (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <Card>
      <div className="about__me">
        <p>
          <strong>Front-End Developer</strong> with a proven ability in helping
          companies write clean, reusable and maintainable code.{' '}
          <strong>3+ years</strong> of experience in facilitating projects from
          concept to launch. Passionate about learning state-of-the-art tools
          and developing new skills.
        </p>
      </div>
    </Card>
  </section>
);

export default About;
