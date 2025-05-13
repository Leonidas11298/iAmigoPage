import React from 'react';
import { Container } from '../shared/Container';
import { Title } from '../shared/Title';
import { Paragraph } from '../shared/Paragraph';

const TermAndConditions: React.FC = () => {
  return (
    <section className="pb-20 relative pt-28">
      <Container>
        <div className="relative rounded-2xl overflow-hidden p-8">
          <Title>Política de Privacidad y Términos y Condiciones de Iamigo</Title>
          <Paragraph className="text-sm text-gray-500">
            Fecha de última actualización: 13 de mayo de 2025
          </Paragraph>

          <Title>1. Introducción</Title>
          <Paragraph>
            Iamigo, accesible desde www.iamigo.com.mx, se dedica a la creación de agentes de inteligencia artificial integrados con herramientas como n8n, Google Suite y Chatwoot. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal de los usuarios que interactúan con nuestros servicios.
          </Paragraph>

          <Title>2. Información que recopilamos</Title>
          <Paragraph>
            Al utilizar la autenticación de Google para acceder a nuestros servicios, recopilamos la siguiente información:
          </Paragraph>
          <Paragraph>
            <ul className="list-disc pl-8 mt-4">
              <li>Dirección de correo electrónico principal: Utilizada para identificar y comunicarnos con el usuario.</li>
              <li>Información del perfil de Google: Incluye nombre, apellidos y fotografía de perfil, utilizada para personalizar la experiencia del usuario.</li>
            </ul>
          </Paragraph>
          <Paragraph>
            Estos datos se obtienen a través de los siguientes permisos de OAuth 2.0:
            <ul className="list-disc pl-8 mt-4">
              <li>openid</li>
              <li>https://www.googleapis.com/auth/userinfo.email</li>
              <li>https://www.googleapis.com/auth/userinfo.profile</li>
            </ul>
          </Paragraph>

          <Title>3. Uso de la información</Title>
          <Paragraph>
            La información recopilada se utiliza exclusivamente para:
            <ul className="list-disc pl-8 mt-4">
              <li>Autenticar y autorizar el acceso del usuario a nuestros servicios.</li>
              <li>Personalizar la experiencia del usuario dentro de la plataforma.</li>
              <li>Proporcionar soporte técnico y responder a consultas del usuario.</li>
            </ul>
          </Paragraph>

          <Title>4. Compartición de información</Title>
          <Paragraph>
            Iamigo no comparte, vende ni alquila la información personal de los usuarios a terceros para fines publicitarios. Sin embargo, podemos compartir información con servicios de terceros integrados en nuestra plataforma, como Chatwoot, únicamente para proporcionar soporte técnico y mejorar la experiencia del usuario. Estos servicios están sujetos a sus propias políticas de privacidad.
          </Paragraph>

          <Title>5. Almacenamiento y seguridad de la información</Title>
          <Paragraph>
            Implementamos medidas de seguridad técnicas y organizativas para proteger la información personal de los usuarios contra el acceso no autorizado, la alteración, la divulgación o la destrucción. Los datos se almacenan en servidores seguros y se conservan únicamente durante el tiempo necesario para cumplir con los fines descritos en esta política.
          </Paragraph>

          <Title>6. Derechos del usuario</Title>
          <Paragraph>
            Los usuarios tienen derecho a:
            <ul className="list-disc pl-8 mt-4">
              <li>Acceder a su información personal que tenemos almacenada.</li>
              <li>Solicitar la corrección o eliminación de su información personal.</li>
              <li>Revocar el acceso de Iamigo a su cuenta de Google en cualquier momento a través de la configuración de su cuenta de Google.</li>
            </ul>
          </Paragraph>

          <Title>7. Cambios en la política de privacidad</Title>
          <Paragraph>
            Iamigo se reserva el derecho de modificar esta política de privacidad en cualquier momento. Notificaremos a los usuarios sobre cualquier cambio significativo mediante la publicación de la nueva política en nuestro sitio web. Se recomienda a los usuarios revisar periódicamente esta política para estar informados sobre cómo protegemos su información.
          </Paragraph>

          <Title>8. Contacto</Title>
          <Paragraph>
            Si tienes preguntas o inquietudes sobre esta política de privacidad, puedes contactarnos en:
            <br />
            Correo electrónico: soporte@iamigo.com.mx
            <br />
            Dirección: Poza Rica Veracruz, México
          </Paragraph>

          <Title>Términos y Condiciones</Title>
          <Paragraph>
            Al acceder y utilizar los servicios de Iamigo, aceptas cumplir con los siguientes términos y condiciones:
          </Paragraph>
          <Paragraph>
            <ul className="list-disc pl-8 mt-4">
              <li><strong>Uso aceptable:</strong> Te comprometes a utilizar nuestros servicios de manera legal y ética, sin infringir los derechos de terceros ni realizar actividades que puedan dañar, deshabilitar o sobrecargar nuestros servicios.</li>
              <li><strong>Propiedad intelectual:</strong> Todos los contenidos y materiales disponibles en Iamigo, incluidos, entre otros, textos, gráficos, logotipos y software, son propiedad de Iamigo o de sus licenciantes y están protegidos por las leyes de propiedad intelectual.</li>
              <li><strong>Limitación de responsabilidad:</strong> Iamigo no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de uso de nuestros servicios.</li>
              <li><strong>Modificaciones:</strong> Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.</li>
              <li><strong>Ley aplicable:</strong> Estos términos y condiciones se rigen por las leyes de México, y cualquier disputa relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales de Veracruz, Veracruz.</li>
            </ul>
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};

export default TermAndConditions;