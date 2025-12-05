import { BtnLink } from "../shared/BtnLink";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Numbers } from "./Numbers";

export const Hero = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      {" "}
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span
            className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 
                        skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600
                        blur-xl opacity-60 lg:opacity-95 lg:block hidden"
          ></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80"></span>
        </div>

        <div
          className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start
                        lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
        >
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
            Potencia tu negocio con 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2">
              iAmigo{" "}
            </span>
          </h1>
          <Paragraph className="mt-8">
          Automatiza tareas, mejora la eficiencia y toma decisiones más inteligentes con nuestros agentes de IA personalizados. Diseñados para adaptarse a tus necesidades específicas, nuestros agentes de IA te ayudarán a optimizar tus procesos y alcanzar tus objetivos comerciales de manera más efectiva.
          </Paragraph>
          <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
            <div className="flex sm:flex-row flex-col gap-5 w-full">
              <div className="items-center">
                <BtnLink href="https://wa.me/525621212799" className="min-w-max text-white align-middle" text="Consultoria gratuita" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-non lg:mx-0 mx-auto max-w-3xl">
          <img
            src="../assets/img/iAmigoHeroSectionimg.webp"
            alt="Hero Image"
            width={2359}
            height={2350}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-non max-h-96"
          />
        </div>
      </Container>
      <Numbers />
    </section>
  );
};