import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { PrimaryButton } from '../../components/button/Button';
import { ContactContainer, EmailForm } from './StyledContact';

const Contact = () => {
  const form = useRef(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const onMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form?.current) {
      emailjs
        .sendForm(
          'service_t1pqmnr',
          'template_jcqa28n',
          form.current,
          'EDScf5HuHmOQNzcMJ'
        )
        .then((result) => {
          if (result.status === 200) resetForm();
        })
        .catch((error) => {
          // TODO: use global alter
          console.log(error.text);
        });
    }
  };

  const onSubmit = () => {
    if (form?.current) {
      const currentForm = form.current as HTMLFormElement;
      currentForm.requestSubmit();
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <ContactContainer>
        <EmailForm ref={form} onSubmit={sendEmail}>
          <input
            value={name}
            onChange={onNameChange}
            type="text"
            name="from_name"
            placeholder="Your Full Name"
            required
          />
          <input
            value={email}
            onChange={onEmailChange}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            value={message}
            onChange={onMessageChange}
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          />
          <PrimaryButton onClick={onSubmit}>Send</PrimaryButton>
        </EmailForm>
      </ContactContainer>
    </section>
  );
};

export default Contact;
