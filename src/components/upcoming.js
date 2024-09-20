import { Card, Container, Row, Col, Image } from "react-bootstrap";
import ibu from "../assets/images/Upcoming/ibu.jpg";
import joker from "../assets/images/Upcoming/joker.jpg";
import petak from "../assets/images/Upcoming/petak.jpg";
import pulau from "../assets/images/Upcoming/Pulau hantu.jpg";

const Upcoming = () => {
  const movies = [
    {
      src: ibu,
      alt: "Bila Esok Ibu Tiada",
      title: "Bila Esok Ibu Tiada",
      description:
        "Meninggalnya HARYO (Slamet Rahardjo) menyisakan duka perih bagi istrinya, RAHMI (Christine Hakim), dan keempat anaknya...",
      lastUpdated: "5 mins ago",
    },
    {
      src: joker,
      alt: "Joker: Folie à Deux",
      title: "Joker: Folie à Deux (IMAX 2D)",
      description:
        "Joker: Folie a Deux menceritakan tentang Arthur Fleck (Joaquin Phoenix) yang ditahan di Arkham sambil menunggu persidangan...",
      lastUpdated: "3 mins ago",
    },
    {
      src: petak,
      alt: "Petak Umpet",
      title: "PETAK UMPET",
      description:
        "Rahman diminta menemani Sari adiknya bermain petak umpet. Ketika Sari hilang, Rahman dan teman-temannya mencoba mencari di rumah angker.",
      lastUpdated: "3 mins ago",
    },
    {
      src: pulau,
      alt: "Pulau Hantu",
      title: "Pulau Hantu",
      description:
        "Dara mengabaikan larangan Ibunya dan pergi bersama teman-temannya, hingga mereka terdampar di pulau misterius...",
      lastUpdated: "3 mins ago",
    },
  ];

  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Upcoming Movies</h1>
        <br />
        <Row>
          {movies.map((movie, index) => (
            <Col md={4} className="movieWrapper" id="upcoming" key={index}>
              <Card className="movieImage">
                <Image src={movie.src} alt={movie.alt} className="images" />
                <div className="bg-dark">
                  <div className="p-2 m-1 text-white">
                    <Card.Title className="text-center">
                      {movie.title}
                    </Card.Title>
                    <Card.Text className="text-left">
                      {movie.description}
                    </Card.Text>
                    <Card.Text className="text-left">
                      Last updated {movie.lastUpdated}
                    </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Upcoming;
