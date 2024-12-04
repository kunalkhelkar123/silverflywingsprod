'use client'
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import { Row, Col } from 'react-bootstrap';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useSearchParams } from "next/navigation";

const FullPageComponent = () => {


    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    const [properties, setProperties] = useState([]);
    const [packagedetails, setpackagedetails] = useState([]);
    const [tourdetails, settourdetails] = useState([]);  // Changed to array initialization
    const [hoteldetails, sethoteldetails] = useState([]);
    const [packagepricing, setpackagepricing] = useState([]);
    const [paymentterms, setpaymentterms] = useState([]);
    const [cancellationpolicies, setcancellationpolicies] = useState([]);

    useEffect(() => {
        const fetchPackageDetails = async () => {
            if (id) {
                try {
                    const response = await fetch("/api/getsinglepackage-details", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ id }),
                    });

                    const result = await response.json();

                    console.log("result ==> ", result.results);

                    if (Array.isArray(result?.results)) {
                        const data = result.results;

                        const [packagedetails1, tourdetails1, hoteldetails1, packagepricing1, paymentterms1, cancellationpolicies1] = data;

                        // Logging the details to ensure they are fetched correctly
                        console.log("packagedetails1", packagedetails1);
                        console.log("tourdetails1", tourdetails1);
                        console.log("hoteldetails1", hoteldetails1);
                        console.log("packagepricing1", packagepricing1);
                        console.log("paymentterms1", paymentterms1);
                        console.log("cancellationpolicies1", cancellationpolicies1);


                        // Setting the fetched details into the state
                        setpackagedetails(packagedetails1);
                        settourdetails(tourdetails1);
                        sethoteldetails(hoteldetails1);
                        setpackagepricing(packagepricing1);
                        setpaymentterms(paymentterms1);
                        setcancellationpolicies(cancellationpolicies1);

                    }
                } catch (error) {
                    console.error("Error fetching package details:", error);
                }
            }
        };

        fetchPackageDetails();
    }, [id]);

    // Logging the state after it is updated
    useEffect(() => {
        console.log("Updated packagedetails:", packagedetails);
        console.log("Updated tourdetails:", tourdetails);
        console.log("Updated hoteldetails:", hoteldetails);
        console.log("Updated packagepricing:", packagepricing);


        console.log("packagedetails.package_name", packagedetails[0]?.package_name)
    }, [packagedetails, tourdetails, hoteldetails, packagepricing]);
    ////////////////////////////////////////////////////////
    // State for managing active tabs
    const [activeTab, setActiveTab] = useState("Tour Itinerary");

    // Tab switch handler
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };






    return (
        <div className="container-fluid">
            {/* Fullscreen Hero Section */}
            <div
                style={{
                    position: 'relative',
                    width: '100vw', // Full width
                    height: '70vh', // 70% of the viewport height
                    overflow: 'hidden', // Ensures the image doesn't overflow
                }}
            >
                {/* Background Image */}
                <img
                    src="https://img.freepik.com/free-photo/beautiful-architecture-building-cityscape-seoul-city_74190-3214.jpg?ga=GA1.1.2079771100.1709547444"// Replace with your image URL
                    alt="Armenia Getaway"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover', // Ensures the image covers the entire area
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}
                />

                {/* Overlay */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
                        zIndex: 2,
                    }}
                ></div>

                {/* Content */}
                <div
                    className="text-white position-absolute bottom-0 start-0 p-4"
                    style={{ zIndex: 3 }}
                >
                    <h1 className="mb-3 fs-10 font-weight-bold">{packagedetails[0]?.package_name}</h1>



                    <Row className="text-white">
                        <Col>
                            <span role="img" aria-label="calendar">📅 4 Days</span>
                        </Col>
                        <Col>
                            <span role="img" aria-label="globe">🌍 1 Country</span>
                        </Col>
                        <Col>
                            <span role="img" aria-label="pin">📍 1 City</span>
                        </Col>
                    </Row>
                    <p>Yerevan (3N)</p>
                </div>
            </div>

            {/* Tabs and Content Section */}
            <div className="row mt-4">
                {/* Left Section: Tabs and Content */}
                <div className="col-md-8">
                    {/* Tabs Navigation */}
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "Tour Itinerary" ? "active" : ""
                                    }`}
                                onClick={() => handleTabClick("Tour Itinerary")}
                            >
                                Tour Itinerary
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "Inclusion & Exclusions" ? "active" : ""
                                    }`}
                                onClick={() => handleTabClick("Inclusion & Exclusions")}
                            >
                                Inclusion & Exclusions
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "Policy & Terms" ? "active" : ""
                                    }`}
                                onClick={() => handleTabClick("Policy & Terms")}
                            >
                                Policy & Terms
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "Pricing" ? "active" : ""
                                    }`}
                                onClick={() => handleTabClick("Pricing")}
                            >
                                Pricing Details
                            </button>
                        </li>

                        <li>
                            <button
                                className={`nav-link ${activeTab === "Hotel Details" ? "active" : ""
                                    }`}
                                onClick={() => handleTabClick("Hotel Details")}
                            >
                                Hotel Details
                            </button>
                        </li>

                    </ul>

                    {/* Tab Content */}
                    {/* <div className="p-3 bg-light border">
            {activeTab === "Tour Itinerary" && (
              <div>
                <h4>Tour Highlights</h4>
                <p>
                  Yerevan City: In 658 AD, at the height of the Arab Islamic
                  invasions, Erebuni-Yerevan was conquered...
                </p>
              </div> */}


                    {/* Tab Content */}
                    <div className="p-3 bg-light border">
                        {activeTab === "Tour Itinerary" && (
                            <div>
                                <h4>Tour Highlights</h4>
                                {/* Itinerary Accordion */}
                                <div className="accordion" id="itineraryAccordion">
                                    {/* Day 1 */}
                                    <div className="accordion" id="itineraryAccordion">
                                        {tourdetails?.map((tour, index) => (
                                            <div className="accordion-item mb-3" style={{ minHeight: "100px" }} key={index}>
                                                <h2 className="accordion-header" id={`day${index + 1}Header`}>
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#day${index + 1}`}
                                                        aria-expanded={index === 0 ? "true" : "false"}
                                                        aria-controls={`day${index + 1}`}
                                                    >
                                                        {`Day ${index + 1}: ${tour.day_title}`}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={`day${index + 1}`}
                                                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                    aria-labelledby={`day${index + 1}Header`}
                                                >
                                                    <div className="accordion-body" style={{ fontSize: "16px", color: "darkgrey" }}>
                                                        {tour.day_description}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        )}





                        {activeTab === "Inclusion & Exclusions" && (

                            <div>
                                <h4>Inclusions</h4>
                                <ul className="inclusion-exclusion-list">
                                    <li>3 Nights accommodation at the hotel in Yerevan.</li>
                                    <li>Daily buffet breakfast at the hotel.</li>
                                    <li>Return airport transfers on Seat in Coach (SIC) basis.</li>
                                    <li>Transportation for sightseeing tours on Seat in Coach (SIC) basis.</li>
                                    <li>English speaking driver-cum guide service.</li>
                                    <li>Entrance fee to sightseeing places mentioned in the itinerary.</li>
                                </ul>

                                <h4>Exclusions</h4>
                                <ul className="inclusion-exclusion-list">
                                    <li>Return Airfare</li>
                                    <li>Airport taxes</li>
                                    <li>Armenia Visa</li>
                                    <li>Travel Insurance</li>
                                    <li>Train journeys (internal or multi-city)</li>
                                    <li>GST of 5% on total package cost</li>
                                    <li>Gratuities expected by Bell staff, Restaurant, Transfer and Tour staff, and Drivers</li>
                                    <li>Any meals other than specified above.</li>
                                    <li>Any sightseeing, tours, transfers, event tickets & tours other than mentioned above not mentioned in package inclusions.</li>
                                    <li>Any item of personal nature like mini-bar, portage, tips, etc.</li>
                                    <li>All entrance fees and excursions not mentioned above</li>
                                </ul>
                            </div>

                        )}

                        {/* </div>
                 </div> */}


                        {activeTab === "Policy & Terms" && (
                            <><div>

                                <h3>Payment Policies</h3>

                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Terms</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paymentterms?.map((pricing, index) => (
                                            <tr key={index}>
                                                <td> {pricing.terms}</td>
                                                <td> {pricing.description}</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>


                            </div>
                                <div>

                                    <h3>Cancellation Policies</h3>

                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Terms</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cancellationpolicies?.map((pricing, index) => (
                                                <tr key={index}>
                                                    <td> {pricing.terms}</td>
                                                    <td> {pricing.description}</td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>


                                </div>
                            </>

                        )}


                        {activeTab === "Pricing" && (
                            <div>
                                <h4>Pricing Details</h4>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Delux</th>
                                            <th>Super Delux</th>
                                            <th>Luxury</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {packagepricing?.map((pricing, index) => (
                                            <tr key={index}>
                                                <td> {pricing.paxDetails}</td>
                                                <td>INR  {pricing.delux}/-</td>
                                                <td>INR  {pricing.super_delux}/-</td>
                                                <td>INR  {pricing.luxury}/-</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        )}


                        {activeTab === "Hotel Details" && (
                            <div>
                                <h4>Hotel Details</h4>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Delux</th>
                                            <th>Super Delux</th>
                                            <th>Luxury</th>
                                            <th>Hotel Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {hoteldetails?.map((hotel, index) => (
                                            <tr key={index}>
                                                <td> {hotel.hotelCountry}</td>
                                                <td> {hotel.delux}</td>
                                                <td> {hotel.super_delux}</td>
                                                <td>  {hotel.luxury}</td>
                                                <td>  {hotel?.hotel_description ? hotel.hotel_description : "Description Not Available"}</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        )}


                    </div>
                </div>

                {/* Right Section: Sidebar */}
                <div className="col-md-4">
                    <div className="p-3 bg-white border rounded">
                        <ol className="list-group list-group-numbered">
                            <li className="list-group-item">
                                <strong>Step 1:</strong> Describe your dream trip
                            </li>
                            <li className="list-group-item">
                                <strong>Step 2:</strong> Tell us your requirements
                            </li>
                            <li className="list-group-item">
                                <strong>Step 3:</strong> Book the trip
                            </li>
                        </ol>
                        <button className="btn btn-danger w-100 mt-3">Enquire Now</button>
                    </div>

                    {/* Map Section */}
                    <div className="mt-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093703!2d144.9630579159048!3d-37.81627974202171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f72f07%3A0x5045675218ce7e33!2zTWVsYm91cm5lIFZJQywgQXVzdHJhbGlh!5e0!3m2!1sen!2sin!4v1668950035687!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullPageComponent;
