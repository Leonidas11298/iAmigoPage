import React from 'react';
import { Container } from '../shared/Container';
import { Title } from '../shared/Title';
import { Paragraph } from '../shared/Paragraph';
import { BtnLink } from '../shared/BtnLink';
import { CheckCircle } from 'lucide-react';

const ThankYou: React.FC = () => {
  return (
    <section className="pb-20 relative pt-28">
      <Container>
        <div className="relative rounded-2xl overflow-hidden p-8 text-center bg-box-bg border border-box-border shadow-lg shadow-box-shadow flex flex-col items-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <Title>¡Gracias por tu compra!</Title>
          <Paragraph className="mt-4 text-lg">
            Hemos recibido tu pago para <strong>iAmigo-Coach</strong>.
          </Paragraph>
          <Paragraph className="mt-2">
            Ahora puedes mandar mensaje al Agente con el cual tendras acceso a todas las funciones premium.
          </Paragraph>
          <Paragraph className="mt-2">
            Si tienes alguna pregunta, no dudes en contactarnos en{' '}
            <a href="mailto:soporte@iamigo.com.mx" className="text-primary hover:underline">
              soporte@iamigo.com.mx
            </a>.
          </Paragraph>
          <div className="mt-8">
            <BtnLink href="/" className="min-w-max text-white align-middle" text="Volver al inicio" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ThankYou;