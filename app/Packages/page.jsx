
"use client";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import DefaultHeader from "@/components/header/default-header";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const App = () => {
  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchPackageDetails = async () => {
      if (country) {
        try {
          const response = await fetch("/api/getpackage-details", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country }),
          });
          const result = await response.json();

          if (Array.isArray(result?.results)) {
            setProperties(result.results);
          }
        } catch (error) {
          console.error("Error fetching package details:", error);
        }
      }
    };

    fetchPackageDetails();
  }, [country]);

  // if (properties.length === 0) {
  //   return (
  //     <>
  //       <DefaultHeader />
  //       <Container>
  //         <p>Loading packages or no packages available...</p>
  //       </Container>
  //     </>
  //   );
  // }

  return (
    <>
      <DefaultHeader />
      <Container className="mt-5">
        <Row className="justify-content-center" style={{ marginTop: "150px" }}>
          {properties.map((packages) => (
            <Col
              lg={4}
              md={4}
              sm={6}
              xs={12}
              key={packages.package_id}
              className="d-flex justify-content-center mb-4"
            >
              <Card
                className="shadow"
                style={{
                  width: "20rem",
                  borderRadius: "10px",
                  overflow: "hidden",
                  fontSize: "0.85rem",
                }}
              >
                <Card.Img
                  variant="top"
                  src={`/images/sun.jpeg`} // Replace with actual image logic
                  alt={packages.package_name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{packages.package_name}</Card.Title>
                  {/* <Card.Text className="text-muted">{packages.cities}</Card.Text> */}
                  <Row>
                    <Col>
                      <span className="text-2xl" role="img" aria-label="calendar">
                        📅
                      </span>{" "} <br/>
                      {packages.package_duration} Days
                    </Col>
                    <Col>
                      <span role="img" aria-label="globe">
                        🌍
                      </span>{" "}
                      {packages.country.length} Country
                    </Col>
                    <Col>
                      <span role="img" aria-label="pin">
                        📍
                      </span>{" "}
                      {packages.cities.length} <br/>
                       Cities
                    </Col>
                  </Row>
                  <h6 className="mt-3">Starting From</h6>
                  <h5>INR:  {packages.packageprice} -/ Per Person</h5>
                  <div className="d-flex justify-content-between mt-3">
                  <Link href={"/contact"}>  <Button
                      variant="outline-primary"
                      size="sm"
                      // onClick={() => alert("Enquiry Clicked!")}
                    >
                      Enquire Now
                    </Button> </Link>
                  



                    <Link href={{ pathname: "/details", query: { id: `${packages.package_id}` } }} passHref>
                      <Button variant="danger" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default App;
