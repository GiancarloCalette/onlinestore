import "./home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <div className="Home">
      <h1>Global Leader in Digital Transformation and Industrial Automation</h1>
      <h4>
        We integrate control and information across the enterprise to help
        industrial companies and their people be more productive and
        sustainable.
      </h4>
      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={"/img/card1.jpg"} />
          <Card.Body>
            <Card.Title>HARDWARE</Card.Title>
            <Card.Text>
              ServoOnline is an official distributor of industrial automation
              componentes, integrated control and information solutions from
              ServoOnline make you as productive as posible.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={"/img/card2.jpg"} />
          <Card.Body>
            <Card.Title>SOLUTIONS</Card.Title>
            <Card.Text>
              FactoryTalk software is built for supporting an ecosystem of advanced industrial applications, including IoT.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={"/img/card3.jpg"} />
          <Card.Body>
            <Card.Title>SUSTAINABILITY</Card.Title>
            <Card.Text>
              We integrate control and information across the enterprise to help industrial companies and their people be more productive and sustainable.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={"/img/card4.jpg"} />
          <Card.Body>
            <Card.Title>ETHICS & COMPLICANCE</Card.Title>
            <Card.Text>
              ServoOnline is committed to the highest standards of ethics, integrity and compliance. We have been a respected business leader for over a decade.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={"/img/card5.jpg"} />
          <Card.Body>
            <Card.Title>EXPAND YOUR POSIBILITIES</Card.Title>
            <Card.Text>
              You will have the tools, equipment and support you need to build your own automation process.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={"/img/card6.jpg"} />
          <Card.Body>
            <Card.Title>CAPABILITY</Card.Title>
            <Card.Text>
              Lifecycle Services help your manufacturing facility work faster, smarter and with greater agility at every lifecycle stage.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
