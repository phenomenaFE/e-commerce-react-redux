import { Container } from "react-bootstrap";
import Section from "../components/atoms/Section";
import CarouselSlider from "../components/organisms/carouselslider";

function Home() {
  return (
    <>
      <CarouselSlider />
      <Section>
        <Container>tese</Container>
      </Section>
    </>
  );
}

export default Home;
