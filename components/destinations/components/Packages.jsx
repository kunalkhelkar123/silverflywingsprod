


'use client'






import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import Image from '../src/images/sun.jpeg'; // Example image

const travelData = [
  {
    title: "Best of France & Switzerland",
    cities: "Paris (3N) --- Lucerne (3N) --- +1 Cities",
    days: "8 Days",
    countries: "1 Country",
    totalCities: "3 Cities",
    price: "INR 2,00,880/- Per Person",
    imageUrl: Image
  },
  {
    title: "Discover Japan",
    cities: "Tokyo (3N) --- Kyoto (2N) --- Osaka (2N)",
    days: "7 Days",
    countries: "1 Country",
    totalCities: "3 Cities",
    price: "INR 3,50,000/- Per Person",
    imageUrl: Image
  },
  {
    title: "Wonders of Italy",
    cities: "Rome (2N) --- Venice (2N) --- Florence (2N)",
    days: "6 Days",
    countries: "1 Country",
    totalCities: "3 Cities",
    price: "INR 2,70,000/- Per Person",
    imageUrl: Image
  },
  {
    title: "Amazing Thailand",
    cities: "Bangkok (3N) --- Pattaya (2N)",
    days: "5 Days",
    countries: "1 Country",
    totalCities: "2 Cities",
    price: "INR 1,50,000/- Per Person",
    imageUrl: Image
  },
  {
    title: "USA Highlights",
    cities: "New York (3N) --- Los Angeles (3N) --- Las Vegas (2N)",
    days: "9 Days",
    countries: "1 Country",
    totalCities: "3 Cities",
    price: "INR 4,00,000/- Per Person",
    imageUrl: Image
  },
  {
    title: "Australian Escape",
    cities: "Sydney (4N) --- Melbourne (3N)",
    days: "7 Days",
    countries: "1 Country",
    totalCities: "2 Cities",
    price: "INR 3,20,000/- Per Person",
    imageUrl: Image
  }
];

const App = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center ">
        {travelData.map((travel, index) => (
          <Col lg={4} md={4} sm={6} xs={12} key={index} className="d-flex justify-content-center mb-4 ">
            <Card
              className="shadow"
              style={{
                width: '20rem', // Reduced width for 65% size
                borderRadius: '10px',
                overflow: 'hidden',
                fontSize: '0.85rem' // Reduce text size slightly
              }}
            >
              <Card.Img
                variant="top"
                src={travel.imageUrl}
                alt={travel.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{travel.title}</Card.Title>
                <Card.Text className="text-muted">{travel.cities}</Card.Text>
                <Row>
                  <Col>
                    <span role="img" aria-label="calendar">📅</span> {travel.days}
                  </Col>
                  <Col>
                    <span role="img" aria-label="globe">🌍</span> {travel.countries}
                  </Col>
                  <Col>
                    <span role="img" aria-label="pin">📍</span> {travel.totalCities}
                  </Col>
                </Row>
                <h6 className="mt-3">Starting From</h6>
                <h5>{travel.price}</h5>
                <div className="d-flex justify-content-between mt-3">
                  <Button variant="outline-primary" size="sm">Enquire Now</Button>
                  <Button variant="danger" size="sm">View Details</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;











