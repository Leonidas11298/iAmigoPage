import { BtnLink } from "../shared/BtnLink";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return (
    <section className="pb-20 relative">
      {" "}
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              {" "}
              Inicia ya mismo y {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                potencia tus ventas
              </span>{" "}
              con nuestros agentes iAmigo
            </h1>
            <Paragraph className="pt-10">
              Con iAmigo, tendrás acceso a un equipo de agentes altamente capacitados y motivados, listos para
               ayudarte a alcanzar tus objetivos de ventas. No pierdas más tiempo y recursos en procesos
                ineficientes. ¡Únete a nosotros y lleva tu negocio al siguiente nivel!
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
            <BtnLink href="https://wa.me/525621212799" className="min-w-max text-white align-middle" text="Comienza Ahora" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};