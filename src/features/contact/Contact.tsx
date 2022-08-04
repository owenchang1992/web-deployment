import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { PrimaryButton } from '../../components/button/Button';
import { ContactContainer, EmailForm } from './StyledContact';

interface FormType {
  name: string;
  email: string;
  message: string;
}

const initFormContents = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const form = useRef(null);
  const [formContents, setFormContents] = useState<FormType>(initFormContents);

  const onFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setFormContents((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const resetForm = () => {
    setFormContents(initFormContents);
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
            value={formContents.name}
            onChange={onFormChange}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            value={formContents.email}
            onChange={onFormChange}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            value={formContents.message}
            onChange={onFormChange}
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
