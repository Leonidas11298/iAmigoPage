import React from 'react';
import { Container } from '../shared/Container';
import { Title } from '../shared/Title';
import { Paragraph } from '../shared/Paragraph';

const TermAndConditions: React.FC = () => {
  const handleDownloadPDF = () => {
    const pdfUrl = '/assets/docs/Términos y Condiciones de Uso iAmigo.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Términos y Condiciones iAmigo.pdf';
    link.click();
  };

  return (
    <section className="pb-20 relative pt-28">
      <Container>
        <div className="relative rounded-2xl overflow-hidden p-8">
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
            <ul className="list-disc pl-8 mt-4">
              <li>Republicar material de iAmigos</li>
              <li>Vender, alquilar o sublicenciar material de iAmigos</li>
              <li>Reproducir, duplicar o copiar material de iAmigos</li>
              <li>Redistribuir contenido de iAmigos</li>
            </ul>
          </Paragraph>

          <Title>Uso de APIs de Google</Title>
          <Paragraph>
            Nuestra plataforma utiliza las siguientes APIs de Google:
            <ul className="list-disc pl-8 mt-4">
              <li>Google Calendar API: Para la gestión y sincronización de calendarios</li>
              <li>Google Drive API: Para el almacenamiento y gestión de documentos</li>
              <li>Google Meet API: Para videoconferencias y reuniones virtuales</li>
              <li>Google Gmail API: Para la gestión de comunicaciones por correo electrónico</li>
            </ul>
          </Paragraph>

          <Paragraph>
            Al utilizar nuestros servicios, aceptas las políticas de privacidad y términos de servicio de Google para estas APIs. Los datos recopilados a través de estas APIs se manejan de acuerdo con nuestra política de privacidad y los estándares de Google.
          </Paragraph>

          <Title>Cookies y Tecnologías de Seguimiento</Title>
          <Paragraph>
            Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Al continuar utilizando iAmigos, aceptas el uso de cookies de acuerdo con nuestra política de privacidad.
          </Paragraph>

          <Title>Descargo de Responsabilidad</Title>
          <Paragraph>
            La información proporcionada en este sitio web es solo para fines informativos generales. iAmigos no hace representaciones ni garantías de ningún tipo, expresas o implícitas, sobre la integridad, precisión, fiabilidad, idoneidad o disponibilidad con respecto al sitio web o la información, productos, servicios o gráficos relacionados contenidos en el sitio web para cualquier propósito.
          </Paragraph>

          <Title>Limitación de Responsabilidad</Title>
          <Paragraph>
            En ningún caso iAmigos, ni sus directores, empleados, socios, agentes, proveedores o afiliados serán responsables por cualquier daño indirecto, incidental, especial, consecuente o punitivo, incluyendo sin limitación, pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles.
          </Paragraph>

          <Paragraph>
            Para más detalles, por favor contáctanos en soporte@iamigo.com.mx
          </Paragraph>

          <div className="mt-8 flex justify-center">
            <button
              onClick={handleDownloadPDF}
              className="px-6 py-3 bg-violet-600 text-white rounded-full hover:bg-violet-700 transition-colors"
            >
              Descargar Términos y Condiciones Completos (PDF)
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TermAndConditions;