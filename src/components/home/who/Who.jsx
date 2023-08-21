import AboutCard from "./AboutCard";
import web from "public/assets/images/web.png";
import ia from "public/assets/images/IA.png";
import custom from "public/assets/images/custom.png";

// Light
import code from "public/assets/images/code.png";
import innovation from "public/assets/images/innovation.png";
import custom_light from "public/assets/images/custom_l.png";

let services = [
  {
    id: 1,
    title: "Experiencia en desarrollo web",
    description:
      "Mi amplia experiencia en desarrollo web me brinda la capacidad de transformar tu visión en realidad. Con años de experiencia, he perfeccionado mi habilidad para crear soluciones web efectivas y atractivas que reflejan tu marca y objetivos.",
    image: web,
    image_light: code,
    color: "#5BE0E6",
  },
  {
    id: 2,
    title: "Innovación Tecnológica",
    description:
      "Aprovecho las últimas innovaciones tecnológicas para llevar tu proyecto al futuro. Desde la integración de nuevas herramientas hasta la adopción de tendencias emergentes, mi pasión por la innovación te mantiene a la vanguardia en el mundo digital.",
    image: ia,
    image_light: innovation,
    color: "#8C52FF",
  },
  {
    id: 3,
    title: "Soluciones a medida",
    description:
      "Entiendo que cada cliente es único, por lo que ofrezco soluciones a medida que se adaptan a tus necesidades específicas. Mi servicio personalizado garantiza que obtengas exactamente lo que buscas.",
    image: custom,
    image_light: custom_light,
    color: "#7ED957",
  },
];

function Who() {
  return (
    <div className="w-full mx-auto">
      <div className={`lg:py-24 pt-20`}>
        <div className="text-center lg:text-left">
          <h2 className="text-2xl lg:text-4xl dark:text-gray-100 font-semibold">
            Ventajas Competitivas
          </h2>

          <p className="text-gray-800 dark:text-gray-400 text-sm lg:text-lg mb-12 mt-6 lg:mt-4 lg:w-2/3">
            Mi enfoque se basa en una combinación singular de{" "}
            <span className="font-bold text-gray-900 dark:text-gray-100">innovación</span>,{" "}
            <span className="font-bold text-gray-900 dark:text-gray-100">experiencia</span> y{" "}
            <span className="font-bold text-gray-900 dark:text-gray-100">
              resultados excepcionales
            </span>
            , lo que me destaca como la elección ideal para impulsar tu éxito
            digital.
          </p>
        </div>

        <div className="lg:grid grid-cols-3 lg:gap-x-6">
          {services.map((service) => (
            <AboutCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Who;
