import * as React from 'react';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Sprout Circle</h1>
    <h2>Contact Form Submission</h2>
    <h4>Someone has submitted an inquiry from the contact form at sproutcircle.ca as follows:</h4>
    <p><strong>Name: </strong>{name}</p>
    <p><strong>Email: </strong>{email}</p>
    <p><strong>Message: </strong>{message}</p>
  </div>
);
