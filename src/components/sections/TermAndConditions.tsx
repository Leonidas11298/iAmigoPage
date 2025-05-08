import React from 'react';
import { Container } from '../shared/Container';
import { Title } from '../shared/Title';
import { Paragraph } from '../shared/Paragraph';

const TermAndConditions: React.FC = () => {
  return (
    <Container>
      <Title>Terms and Conditions</Title>
      <Paragraph>
        Welcome to iAmigos! These terms and conditions outline the rules and regulations for the use of our website, located at www.iAmigos.com.mx.
      </Paragraph>
      <Paragraph>
        By accessing this website, we assume you accept these terms and conditions. Do not continue to use iAmigos if you do not agree to all the terms and conditions stated on this page.
      </Paragraph>
      <Title>License</Title>
      <Paragraph>
        Unless otherwise stated, iAmigos and/or its licensors own the intellectual property rights for all material on iAmigos. All intellectual property rights are reserved. You may access this from iAmigos for your own personal use subjected to restrictions set in these terms and conditions.
      </Paragraph>
      <Paragraph>
        You must not:
        <ul>
          <li>Republish material from iAmigos</li>
          <li>Sell, rent, or sub-license material from iAmigos</li>
          <li>Reproduce, duplicate, or copy material from iAmigos</li>
          <li>Redistribute content from iAmigos</li>
        </ul>
      </Paragraph>
      <Title>Disclaimer</Title>
      <Paragraph>
        The information provided on this website is for general informational purposes only. iAmigos makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
      </Paragraph>
      <Paragraph>
        For more details, please contact us at support@iAmigos.com.mx.
      </Paragraph>
    </Container>
  );
};

export default TermAndConditions;