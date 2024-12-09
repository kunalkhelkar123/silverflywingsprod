"use client";
import React, { useEffect, useState, Suspense } from "react";
import { Card, Button, Row, Col, Container, Spinner } from "react-bootstrap";
import DefaultHeader from "@/components/header/default-header";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Content = () => {
  const searchParams = useSearchParams();
  const country = searchParams.get("country");

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        if (country) {
          setLoading(true); // Set loading to true at the start
          const response = await fetch("/api/getpackage-details", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country }),
          });
          const result = await response.json();

          if (Array.isArray(result?.results)) {
            setProperties(result.results);
          } else {
            setProperties([]);
          }
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.error("Error fetching package details:", error);
        setProperties([]);
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchPackageDetails();
  }, [country]);

  if (loading) {
    return (
      <>
        <DefaultHeader />
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
          <div className="text-center">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3">Loading packages...</p>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <DefaultHeader />

      {properties.length > 0 ? (
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
                    src={`/images/sun.jpeg`}
                    alt={packages.package_name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{packages.package_name}</Card.Title>
                    <Row>
                      <Col>
                        <span className="text-2xl" role="img" aria-label="calendar">
                          📅
                        </span>{" "}
                        <br />
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
                        {packages.cities.length} <br />
                        Cities
                      </Col>
                    </Row>
                    <h6 className="mt-3">Starting From</h6>
                    <h5>INR: {packages.packageprice} -/ Per Person</h5>
                    <div className="d-flex justify-content-between mt-3">
                      <Link href={"/contact"} passHref>
                        <Button as="a" variant="outline-primary" size="sm">
                          Enquire Now
                        </Button>
                      </Link>
                      <Link
                        href={{ pathname: "/details", query: { id: `${packages.package_id}` } }}
                        passHref
                      >
                        <Button as="a" variant="danger" size="sm">
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
      ) : (
        <Container className="mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
          <div className="text-center">
            <h2>No packages found</h2>
            <p className="text-muted">Please try a different country or come back later.</p>
          </div>
        </Container>
      )}
    </>
  );
};

const App = () => {
  return (
    <Suspense>
      <Content />
    </Suspense>
  );
};

export default App;
