import { Container } from "../shared/Container";

export const Numbers = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="flex justify-center align-center">
        <div
          className="mx-auto lg:mx-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl bg-box-bg
                        border border-box-border shadow-lg shadow-box-shadow md:divide-x divide-box-border
                        grid grid-cols-2 md:grid-cols-4"
        >
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              10+{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Agentes personalizables</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              24/7{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Servicio todo el año</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              99.9%{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Porcentaje de funcionamiento</p>
          </div>
          <div className="text-center px-5">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">
              {" "}
              4+{" "}
            </h2>
            <p className="mt-2 text-heading-3"> Años sirviendo al publico</p>
          </div>
        </div>
      </Container>
    </section>
  );
};