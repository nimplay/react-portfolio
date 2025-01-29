import React from "react";
import "./Testimonials.css";
import "swiper/css";
import "swiper/css/pagination";
import David from "../../img/david.jpeg";
import Mirwil from "../../img/mirwil.jpeg";
import John from "../../img/john.jpeg";
import Nico from "../../img/Nico.jpeg";
import Marta from "../../img/Marta.jpeg";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";

const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const client = [
    {
      img: Nico,
      review:
        "I've had the pleasure of working alongside Nimrod for nearly two years, and I can’t speak highly enough of his exceptional skills and dedication as a software developer. Nimrod consistently puts in the hard work, facing complex challenges with determination and creativity. His innovative, disruptive approach to problem-solving and his expertise with Agile methodology make him a standout in any development team. Beyond his technical skills, Nimrod's interpersonal qualities make him a truly exceptional colleague. He’s been more than just a coworker — he’s been a friend and an invaluable part of our team. While technical ability is critical, it's Nimrod's combination of professionalism and personal integrity that truly sets him apart. His next employer will be fortunate to have him, especially as he continues to grow and refine his skills at an impressive rate. I can’t recommend him enough!",
    },
    {
      img: Marta,
      review:
        "Trabajar con Nimrod ha sido una experiencia increíble. Su habilidad para incorporar prácticas actualizadas y enfoques innovadores, como la gamificación, en nuestras soluciones ha enriquecido notablemente los proyectos. Su disposición para resolver problemas y buscar soluciones creativas garantiza que el equipo alcance sus objetivos de manera eficaz. Además, su entusiasmo y compromiso lo convierten en una inspiración para sus pares, quienes ven en él un referente de conocimientos y actitud. Recomiendo a Nimrod para cualquier equipo que busque a un profesional que combine habilidades técnicas con una mentalidad de crecimiento constante y un compromiso ejemplar con los resultados.",
    },
    {
      img: Mirwil,
      review:
        "The reliable services of Mr. Nimrod Acosta are vital in my business as an illustrator.  Delegating all the technical (and sometimes tedious for me!) aspects of maintaining my website and online store is a relief, as it allows me to stay focused on my creative work, knowing that everything is in order.",
    },
    {
      img: John,
      review:
        "Nimrod is a good mentor, he has taken me through almost every phase of my software journey. He is a go-to whenever I have blockers in my projects and he always shows concern and offers good technical and moral support. A good teacher and a great listener, I highly recommend 💯.",
    },
    {
      img: David,
      review:
        "My company has been working with Nimrod Acosta since 2019.  Thanks to that my webpage has evolved in a very positive way through the years. I recently worked with him to update my website. I have been mainly working with Nimrod . We are beyond pleased with Nimrod's impeccable service. He is extremely helpful in guiding us through the whole process. He is very knowledgeable. He pays close attention to details. He is also very patient in training us on how to use the new administration system. Overall, we are very pleased with Nimrod Acosta Web design.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Execeptional Work </span>
        <span>From Me.</span>
      </div>

      <section className="carrusel-section">
        <Carousel interval={null}>
          {client.map((client) => {
            return (
              <Carousel.Item>
                <div
                  className="testimonial"
                  style={{
                    backgroundColor: darkMode ? "#1b1b1b" : "#d5d5d5",
                    color: darkMode ? "white" : "",
                  }}
                >
                  <img src={client.img} alt="img" />
                  <span
                    style={{
                      color: darkMode ? "white" : "",
                    }}
                  >
                    {client.review}
                  </span>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </section>
    </div>
  );
};

export default Testimonials;
