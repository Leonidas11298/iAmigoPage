import { Binoculars, ScrollText } from "lucide-react";
import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const AboutUs = () => {
  return (
    <section id="about-us">
      {" "}
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
              alt="About Our Mission"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
          <Title> Sobre nuestra agencia </Title>
          <Paragraph>
            IAmigo entrega agentes inteligentes (recepcionistas, asistentes de ventas, bots de cobranza y automatización de back‑office) que conectan rápidamente con los canales usados a diario por las PyMEs mexicanas (WhatsApp, webchat, correo, redes) y se integran con sus flujos de trabajo (CRM, facturación electrónica CFDI, contabilidad, Stripe/Mercado Pago).
            Logrando optimizar considerablemente la producción del día a día.

          </Paragraph>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title="Mision"
              description="“Democratizar la IA en México para que cualquier negocio sin importar su tamaño 
              pueda operar 24/7 con la misma eficiencia y experiencia de servicio que una gran empresa.”"
            >
              <ScrollText />
            </Info>
            <Info
              title="Vision"
              description="“Ser la empresa de IA más confiable y accesible para las PyMEs y emprendedores en México y Latinoamérica.”"
            >
              <Binoculars />
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};