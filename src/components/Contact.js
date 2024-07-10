// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 1rem;
  background: #fff;
  text-align: center;
`;

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  height: 100px;
`;

const Button = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <h2>Contact Me</h2>
        <ContactForm>
          <Input type="text" placeholder="Your Name" required />
          <Input type="email" placeholder="Your Email" required />
          <TextArea placeholder="Your Message" required />
          <Button type="submit">Send Message</Button>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
