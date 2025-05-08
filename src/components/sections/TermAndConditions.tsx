import React from 'react';
import { Container } from '../shared/Container';
import { Title } from '../shared/Title';
import { Paragraph } from '../shared/Paragraph';

const TermAndConditions: React.FC = () => {
  return (
    <section className="pb-20 relative pt-28">
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <Title>Términos y Condiciones</Title>
          <Paragraph>
            Bienvenido a iAmigos. Estos términos y condiciones describen las reglas y regulaciones para el uso de nuestro sitio web, ubicado en www.iAmigos.com.mx.
          </Paragraph>
          <Paragraph>
            Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No continúes utilizando iAmigos si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.
          </Paragraph>
          <Title>Licencia</Title>
          <Paragraph>
            A menos que se indique lo contrario, iAmigos y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en iAmigos. Todos los derechos de propiedad intelectual están reservados. Puedes acceder a este material desde iAmigos para tu uso personal sujeto a las restricciones establecidas en estos términos y condiciones.
          </Paragraph>
          <Paragraph>
            No debes:
            <ul>
              <li>Republicar material de iAmigos</li>
              <li>Vender, alquilar o sublicenciar material de iAmigos</li>
              <li>Reproducir, duplicar o copiar material de iAmigos</li>
              <li>Redistribuir contenido de iAmigos</li>
            </ul>
          </Paragraph>
          <Title>Descargo de Responsabilidad</Title>
          <Paragraph>
            La información proporcionada en este sitio web es solo para fines informativos generales. iAmigos no hace representaciones ni garantías de ningún tipo, expresas o implícitas, sobre la integridad, precisión, fiabilidad, idoneidad o disponibilidad con respecto al sitio web o la información, productos, servicios o gráficos relacionados contenidos en el sitio web para cualquier propósito.
          </Paragraph>
          <Paragraph>
            Para más detalles, por favor contáctanos en support@iAmigos.com.mx.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};

export default TermAndConditions;