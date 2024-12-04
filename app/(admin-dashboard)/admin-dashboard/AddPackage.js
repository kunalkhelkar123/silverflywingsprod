
'use client'

import React, { useState, useEffect } from "react";
// import CityTour from "./CityTour.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { FaSuitcase, FaRoute, FaHotel, FaMoneyBillAlt } from "react-icons/fa";
// import { forEach } from "@/data/activity";

const PackageForm = () => {
    const [formData, setFormData] = useState({
        packagePropertyName: "",
        tourDuration: "",
        countries: "",
        cities: "",
        packageprice:"",
        uploadPhoto: null,
        squarePhoto: null,
        hotelCountry: "",
        deluxe: "",
        superDeluxe: "",
        luxury: "",
        hotelDescription: "",
        itineraryTitle: "",
        daywiseDescription: "",
        additionalDays: "",
        paxDetails: "",
        discountPrice: "",
        paymentOptions: "",
        day: "",
        head: "",
        description: "",
        notes: "",
        cityname: "",
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeTab, setActiveTab] = useState("package-details");
    const [itineraries, setItineraries] = useState([]);
    const [packageinfo, setPackageinfo] = useState([]);
    const [hotelsDetails, setHotelsDetails] = useState([]);
    const [packagepriceDetails, setpackagepriceDetails] = useState([]);

    //Tab Content
    const tabs = [
        {
            id: 0,
            title: "Package Details",
            description: "Enter Package Details",
            icon: <FaSuitcase />,
        },
        {
            id: 1,
            title: "Tour Itineraries",
            description: "Add Tour Itineraries",
            icon: <FaRoute />,
        },
        {
            id: 2,
            title: "Hotel Details",
            description: "Provide Hotel Details",
            icon: <FaHotel />,
        },
        {
            id: 3,
            title: "Package Price",
            description: "Set Package Price",
            icon: <FaMoneyBillAlt />,
        },
    ];

    // Dropdown options
    const packageOptions = ["Luxury Package", "Budget Package", "Family Package"];
    const countriesOptions = ["Armenia", "India", "USA"];
    const citiesOptions = ["Yerevan", "New Delhi", "New York"];
    const deluxeOptions = ["Yes", "No"];
    const superDeluxeOptions = ["Yes", "No"];
    const luxuryOptions = ["Yes", "No"];
    const paymentOptions = ["Full Payment", "Installments"];

    // Form validation
    const validate = () => {
        const errors = {};
        if (!formData.packagePropertyName)
            errors.packagePropertyName = "Please select a package property.";
        if (!formData.tourDuration)
            errors.tourDuration = "Please enter the tour duration.";
        if (!formData.countries) errors.countries = "Please select a country.";
        if (!formData.cities) errors.cities = "Please select a city.";
        if (!formData.uploadPhoto) errors.uploadPhoto = "Please upload a photo.";
        if (!formData.squarePhoto)
            errors.squarePhoto = "Please upload a square photo.";
        if (!formData.hotelCity) errors.hotelCity = "Please select a hotel city.";
        if (!formData.hotelCountry)
            errors.hotelCountry = "Please select a hotel country.";
        if (!formData.hotelDescription)
            errors.hotelDescription = "Please enter a hotel description.";
        if (!formData.paxDetails) errors.paxDetails = "Please enter the base price.";
        if (!formData.paymentOptions)
            errors.paymentOptions = "Please select a payment option.";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const getNextTab = () => {
        const tabs = [
            "package-details",
            "tour-itineraries",
            "hotel-details",
            "package-price",
        ];
        const currentIndex = tabs.indexOf(activeTab);
        return tabs[currentIndex + 1];
    };

    const handleReset = () => {
        setFormData({
            packagePropertyName: "",
            tourDuration: "",
            countries: "",
            cities: "",
            packageprice:"",
            uploadPhoto: null,
            squarePhoto: null,
            hotelCity: "",
            hotelCountry: "",
            deluxe: "",
            superDeluxe: "",
            luxury: "",
            hotelDescription: "",
            itineraryTitle: "",
            daywiseDescription: "",
            additionalDays: "",
            paxDetails: "",
            discountPrice: "",
            paymentOptions: "",
            cityname: "",
            pricedelux: "",
            priceluxury: "",
            pricesuperdelux1: "",
            // pricesuperdelux: "",
        });
        setFormErrors({});
        setIsSubmitted(false);
        setActiveTab("package-details");
    };

    const handleFileUpload = (e, fieldName) => {
        const file = e.target.files[0];
        setFormData({ ...formData, [fieldName]: file });
    };


    const handlePrice = () => {
        if (formData.paxDetails != "" && formData.pricedelux != "" && formData.pricesuperdelux1 != "") {
            console.log("okokokoko")

            let newpackageprice = {
                paxDetails: formData.paxDetails,
                pricedelux: formData.pricedelux,
                pricesuperdelux: formData.pricesuperdelux1,
                priceluxury: formData.priceluxury,
                
            };
            setpackagepriceDetails([...packagepriceDetails, newpackageprice]);
            console.log("newpackageprice", newpackageprice);
            console.log("packagepriceDetails", packagepriceDetails);

            formData.paxDetails = "";
            formData.pricedelux = "";
            formData.pricesuperdelux1 = "";
            formData.priceluxury = "";
            
        }
        else {
            console.log("error okokok")

        }
    };

    const handleHotel = () => {
        if (formData.hotelCountry != "" && formData.deluxe != "" && formData.superDeluxe != "") {
            let newhotel = {
                hotelCountry: formData.hotelCountry,
                deluxe: formData.deluxe,
                superDeluxe: formData.superDeluxe,
                luxury: formData.luxury,
            };
            setHotelsDetails([...hotelsDetails, newhotel]);
            // console.log("newhotel", newhotel);
            // console.log("hotelsDetails", hotelsDetails);
            formData.hotelCountry = "";
            formData.deluxe = "";
            formData.superDeluxe = "";
            formData.luxury = "";
        }
    };


    const handleSubmit = () => {
        console.log("Form submitted:", formData);
        if (!formData.packagePropertyName && !formData.tourDuration) {
            // console.log("packagePropertyName", packagePropertyName);
            // console.log("tourDuration", tourDuration);
            let packageinfo = {
                packagePropertyName: formData.day,
                tourDuration: formData.head,
                countries: formData.description,
                cities: formData.notes,
                uploadPhoto: formData.head,
                squarePhoto: formData.description,
                packageprice: formData.packageprice
            };
            if(!packageinfo )
            {
                
            setPackageinfo([...packageinfo, packageinfo]);

            }
        }
        else {
            console.log("hello")
        }
        if (true) {
            // console.log("Form submitted:", formData);
            setIsSubmitted(true);
            let newItinerary = {
                day: formData.day,
                head: formData.head,
                description: formData.description,
                notes: formData.notes,
            };

            if (formData.day != "" && formData.head != "" && formData.description != "") {
                setItineraries([...itineraries, newItinerary]);
                // console.log("newItinerary", newItinerary);
                // console.log("itineraries2222222222222222", itineraries);
            }
            formData.day = "";
            formData.head = "";
            formData.description = "";
            formData.notes = "";

        }
    };

    const handleNext = () => {
    };
    const handleNexthotel = () => {
      setActiveTab(2)
        handleHotel();
    }
    const handleNextTour = () => {

        handleSubmit();
    };

    const handleSubmitAllDetails = async () => {


        try {
            const data = {
                package_name: formData.packagePropertyName,
                package_duration: formData.tourDuration,
                country: formData.countries,
                cities: formData.cities,
                packageprice:formData.packageprice
            }
            // console.log("package details ==> ", data)
            // console.log("tour details ==> ", itineraries)

            console.log("data ==> ", data)
            const response = await fetch('/api/package-details', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const data = await response.json();
                console.log("response.data.insertId", data.insertId);
                for (const item of itineraries) {
                    item.package_id = data.insertId
                }
                for (const item of hotelsDetails) {
                    item.package_id = data.insertId
                }
                for (const item of packagepriceDetails) {
                    item.package_id = data.insertId
                }
                console.log("hotel details  with package id ==> ", hotelsDetails)
                console.log("price details with package id  ==> ", packagepriceDetails)
                console.log("itineraries123455  with package id==> ", itineraries)

                console.log(" tour-itlernary API  call",)
                const responsetour = await fetch('/api/tour-itlernary', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(itineraries),
                });
                if (responsetour.ok) {
                    console.log(" hotel-details API  call",)

                    const responsehotel = await fetch('/api/hotel-details', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(hotelsDetails),
                    });

                    if (responsehotel.ok) {
                        console.log(" package-prices API  call",)

                        const responseprice = await fetch('/api/package-prices', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(packagepriceDetails),
                        });


                        if (responseprice.ok) {


                            alert("package details save")
                            // 


                        }

                    }




                }
            } else {
                console.error('Failed to update user');
            }
        }
        catch (error) {


            console.log("error  ==> ", error)
        }
    };

    const handleSubmitprice = () => { };





    const preview = () => {
        console.log("data come from from data ", formData)
    };

    // You can implement navigation to the next tab or other logic here
    return (
        <div className="container-fluid p-0" style={{marginTop:"-50px", marginLeft:"-50px"}}>
            <div className="row" style={{ }}>
                <div className="col-md-12">
                    <div className="card mt-5">
                        <div className="card-header bg-light" >
                            {/* start */}

                            <div
                                className="tabs-header d-flex justify-content-around bg-light p-3 mb-4"
                                style={{ borderRadius: "8px" }}
                            >
                                {tabs.map((tab, index) => (
                                    <div
                                        key={tab.id}
                                        className={`tab-item px-3 text-center ${activeTab === index ? "active-tab" : ""
                                            }`}
                                        // onClick={() => setActiveTab(index)}
                                        style={{
                                          
                                            cursor: "pointer",
                                            width: "80vw", marginLeft:"-17px" ,  
                                            fontWeight: activeTab === index ? "bold" : "normal",
                                            color: activeTab === index ? "#007bff" : "#000",
                                            borderBottom:
                                                activeTab === index ? "2px solid #007bff" : "none",
                                        }}
                                    >
                                        <div className="tab-icon">{tab.icon}</div>
                                        <div className="tab-info">
                                            <h3 className="tab-title">{tab.title}</h3>
                                            <p className="tab-description">{tab.description}</p>
                                        </div>
                                    </div>
                                ))}
                                {/* </div> */}

                                {/* Content Section */}
                                {/* <div className="tab-content">
                                    {activeTab === 0 && (
                                        <div>Package Details Content Goes Here...</div>
                                    )}
                                    {activeTab === 1 && (
                                        <div>Tour Itineraries Content Goes Here...</div>
                                    )}
                                    {activeTab === 2 && (
                                        <div>Hotel Details Content Goes Here...</div>
                                    )}
                                    {activeTab === 3 && (
                                        <div>Package Price Content Goes Here...</div>
                                    )}
                                </div> */}
                            </div>

                            {/* end */}

                            {/* <h2 className="text-center mb-4">Package Form</h2> */}
                            <div className="card p-4" style={{ width: "80vw", marginLeft:"17px"  ,marginRight:"-90px" ,}}>
                                {/* Tabs Section */}
                                <ul className="nav nav-tabs mb-3">
                                    <li className="nav-item">
                                        {/* <a
                          // className={`nav-link ${
                          //   activeTab === "package-details" ? "active" : ""
                          // }`}
                          // onClick={() => setActiveTab("package-details")}
                        > */}
                                        <span
                                            className={`nav-link ${activeTab === "package-details" ? "active" : ""
                                                }`}
                                        >
                                            Package Details
                                        </span>
                                        {/* </a> */}
                                    </li>
                                    <li className="nav-item">
                                        {/* <a
                          className={`nav-link ${
                            activeTab === "tour-itineraries" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("tour-itineraries")}
                        > */}
                                        <span
                                            className={`nav-link ${activeTab === "tour-itineraries" ? "active" : ""
                                                }`}
                                        >
                                            Tour Itineraries
                                        </span>
                                        {/* Tour Itineraries */}
                                        {/* </a> */}
                                    </li>
                                    <li className="nav-item">
                                        {/* <a
                          className={`nav-link ${
                            activeTab === "hotel-details" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("hotel-details")}
                        > */}
                                        <span
                                            className={`nav-link ${activeTab === "hotel-details" ? "active" : ""
                                                }`}
                                        >
                                            Hotel Details
                                        </span>
                                        {/* Hotel Details */}
                                        {/* </a> */}
                                    </li>
                                    <li className="nav-item">
                                        {/* <a
                          className={`nav-link ${
                            activeTab === "package-price" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("package-price")}
                        > */}
                                        <span
                                            className={`nav-link ${activeTab === "package-price" ? "active" : ""
                                                }`}
                                        >
                                            Package Price
                                        </span>
                                        {/* </a> */}
                                    </li>
                                </ul>

                                {/* Package Details Tab */}
                                {activeTab === "package-details" && (
                                    <div>
                                        <h4>Package Details</h4>
                                        {/* Package Property Name */}
                                        <div className="mb-3">
                                            <label
                                                htmlFor="packagePropertyName"
                                                className="form-label"
                                            >
                                                Package Property Name
                                            </label>
                                            <input
                                                type="text"
                                                id="packagePropertyName"
                                                className={`form-control ${formErrors.packagePropertyName ? "is-invalid" : ""
                                                    }`}
                                                value={formData.packagePropertyName}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        packagePropertyName: e.target.value,
                                                    })
                                                }
                                                placeholder="Package Property Name"
                                                style={{width:"1000px", height:"60px" , border:"2px grey solid"}}
                                            />
                                        </div>

                                        {/* Tour Duration */}
                                        <div className="mb-3">
                                            <label htmlFor="tourDuration" className="form-label">
                                                Tour Duration
                                            </label>
                                            <input
                                                type="text"
                                                id="tourDuration"
                                                className={`form-control ${formErrors.tourDuration ? "is-invalid" : ""
                                                    }`}
                                                value={formData.tourDuration}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        tourDuration: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter duration (e.g., 4 Days)"
                                                style={{width:"1000px", height:"60px" , border:"2px grey solid"}}

                                            />
                                            {formErrors.tourDuration && (
                                                <div className="invalid-feedback">
                                                    {formErrors.tourDuration}
                                                </div>
                                            )}
                                        </div>

                                        {/* Countries */}
                                        <div className="mb-3">
                                            <label htmlFor="countries" className="form-label">
                                                Countries
                                            </label>
                                            <input
                                                type="text"
                                                id="countries"
                                                className={`form-control ${formErrors.countries ? "is-invalid" : ""
                                                    }`}
                                                value={formData.countries}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        countries: e.target.value,
                                                    })

                                                }
                                                placeholder="Enter duration (e.g., 4 Days)"
                                                style={{width:"1000px", height:"60px" , border:"2px grey solid"}}

                                            />
                                            {formErrors.countries && (
                                                <div className="invalid-feedback">
                                                    {formErrors.countries}
                                                </div>
                                            )}
                                        </div>

                                        {/* Cities */}
                                        <div className="mb-3">
                                            <label htmlFor="cities" className="form-label">
                                                Cities
                                            </label>
                                            {/* <select
                                                id="cities"
                                                className={`form-select ${formErrors.cities ? "is-invalid" : ""
                                                    }`}
                                                value={formData.cities}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, cities: e.target.value })
                                                }
                                                style={{width:"1000px", height:"60px" , border:"2px grey solid"}}

                                            >
                                                <option value="">Select City</option>
                                                {citiesOptions.map((city, index) => (
                                                    <option key={index} value={city}>
                                                        {city}
                                                    </option>
                                                ))}
                                            </select> */}
                                            <input
                                                type="text"
                                                id="countries"
                                                className={`form-control ${formErrors.cities ? "is-invalid" : ""
                                                    }`}
                                                value={formData.cities}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        cities: e.target.value,
                                                    })

                                                }
                                                placeholder="Cities"
                                                style={{width:"1000px", height:"60px" ,  border:"2px grey solid"}}

                                            />
                                            {formErrors.cities && (
                                                <div className="invalid-feedback">
                                                    {formErrors.cities}
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="countries" className="form-label">
                                               Package price per person
                                            </label>
                                            <input
                                                type="text"
                                                id="countries"
                                                className={`form-control ${formErrors.packageprice ? "is-invalid" : ""
                                                    }`}
                                                value={formData.packageprice}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        packageprice: e.target.value,
                                                    })
                                                }
                                                style={{width:"1000px", height:"60px" , border:"2px grey solid"}}

                                                placeholder="Enter duration (e.g., 4 Days)"
                                            />
                                            {formErrors.packageprice && (
                                                <div className="invalid-feedback">
                                                    {formErrors.packageprice}
                                                </div>
                                            )}
                                        </div>

                                        {/* Upload Photo */}
                                        <div className="mb-3">
                                            <label htmlFor="uploadPhoto" className="form-label">
                                                Upload Photo
                                            </label>
                                            <input
                                                style={{width:"300px", height:"100px" , border:"2px grey solid"}}

                                                type="file"
                                                id="uploadPhoto"
                                                className={`form-control ${formErrors.uploadPhoto ? "is-invalid" : ""
                                                    }`}
                                                onChange={(e) => handleFileUpload(e, "uploadPhoto")}
                                            />
                                            {formErrors.uploadPhoto && (
                                                <div className="invalid-feedback">
                                                    {formErrors.uploadPhoto}
                                                </div>
                                            )}
                                        </div>

                                        {/* Square Photo */}
                                        <div className="mb-3">
                                            <label htmlFor="squarePhoto" className="form-label">
                                                Square Photo
                                            </label>
                                            <input
                                                style={{width:"300px", height:"100px" , border:"2px grey solid"}}

                                                type="file"
                                                id="squarePhoto"
                                                className={`form-control ${formErrors.squarePhoto ? "is-invalid" : ""
                                                    }`}
                                                onChange={(e) => handleFileUpload(e, "squarePhoto")}
                                            />
                                            {formErrors.squarePhoto && (
                                                <div className="invalid-feedback">
                                                    {formErrors.squarePhoto}
                                                </div>
                                            )}
                                        </div>

                                        {/* Submit Button */}
                                        <div
                                            className="div-btn btn-primary"
                                            style={{ display: "flex", gap: "18px" }}
                                        >
                                            {/* <button
                                                className="btn btn-primary"
                                                onClick={handleSubmit}
                                            >
                                                Submit
                                            </button> */}
                                            {activeTab === "package-details" && (
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => {
                                                        handleNext();
                                                        setActiveTab("tour-itineraries"); // Change to the next tab
                                                    }}
                                                >
                                                    Next
                                                </button>
                                            )}
                                            <button
                                                className="btn btn-secondary ms-2"
                                                onClick={handleReset}
                                            >
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {/* Tour Itineraries Tab */}

                                {activeTab === "tour-itineraries" && (
                                    <div>
                                        <h4>Tour Itineraries</h4>
                                        {/*Day */}
                                        <div className="mb-3">
                                            <label htmlFor="itineraryTitle" className="form-label">
                                                Day
                                            </label>
                                            <input
                                                type="text"
                                                id="day"
                                                className="form-control"
                                                value={formData.day}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, day: e.target.value })
                                                }
                                                placeholder="Enter days"
                                            />
                                        </div>

                                        {/*Head */}
                                        <div className="mb-3">
                                            <label htmlFor="head" className="form-label">
                                                Heading
                                            </label>
                                            <input
                                                id="head"
                                                className="form-control"
                                                // rows="3"
                                                value={formData.head}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, head: e.target.value })
                                                }
                                                placeholder="Enter Heading"
                                            />
                                        </div>

                                        {/*description*/}
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">
                                                Description
                                            </label>
                                            <textarea
                                                type="text"
                                                id="description"
                                                className="form-control"
                                                rows="2"
                                                value={formData.description}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        description: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter description "
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="notes" className="form-label">
                                                Notes
                                            </label>
                                            <input
                                                type="text"
                                                id="notes"
                                                className="form-control"
                                                value={formData.notes}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, notes: e.target.value })
                                                }
                                                placeholder="Enter notes"
                                            />
                                        </div>

                                        {/* Table for Itineraries */}
                                        <div className="mt-4">
                                            <h5>Itinerary Details</h5>
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Day</th>
                                                        <th>Head</th>
                                                        <th>Description</th>
                                                        <th>Notes</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {itineraries.map((itinerary, index) => (
                                                        <tr key={index}>
                                                            <td>{itinerary.day}</td>
                                                            <td>{itinerary.head}</td>
                                                            <td>{itinerary.description}</td>
                                                            <td>{itinerary.notes}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div style={{ display: "flex", gap: "15px" }}>
                                            <button
                                                className="btn btn-primary"
                                                onClick={handleSubmit}
                                            >
                                                Add Day
                                            </button>
                                            {activeTab === "tour-itineraries" && (
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => {
                                                        handleNextTour(); // Call the handleNext function
                                                        setActiveTab("hotel-details"); // Move to the next tab
                                                    }}
                                                >
                                                    Next
                                                </button>
                                            )}
                                            {activeTab === "tour-itineraries" && (
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => {
                                                        handleNextTour(); // Call the handleNext function
                                                        setActiveTab("package-details"); // Move to the next tab
                                                    }}
                                                >
                                                    Previous
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Hotel Details Tab */}
                                <div className="container-fluid px-4">
                                    {activeTab === "hotel-details" && (
                                        <div>
                                            <h4>Hotel Details</h4>

                                            {/* hotel Country */}
                                            <div className="mb-3">
                                                <label htmlFor="hotelCountry" className="form-label">
                                                    Hotel country & City
                                                </label>
                                                <input
                                                    type="text"
                                                    id="hotelCountry"
                                                    className="form-control"
                                                    value={formData.hotelCountry}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            hotelCountry: e.target.value,
                                                        })
                                                    }
                                                    placeholder="Enter country & city"
                                                />
                                            </div>

                                            {/* Hotels Type  */}
                                            <div className="mb-3">
                                                <label className="form-label">Deluxe</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={formData.deluxe}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, deluxe: e.target.value })
                                                    }
                                                    placeholder="Enter deluxe details"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Super Deluxe</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={formData.superDeluxe}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            superDeluxe: e.target.value,
                                                        })
                                                    }
                                                    placeholder="Enter super deluxe details"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Luxury</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={formData.luxury}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, luxury: e.target.value })
                                                    }
                                                    placeholder="Enter luxury details"
                                                />
                                            </div>

                                            {/* Hotes Details */}
                                            <div className="mt-4">
                                                <h5>Hotels Details</h5>
                                                <div className="table-responsive">
                                                    <table className="table mt-4">
                                                        <thead>
                                                            <tr>
                                                                <th>Country & City</th>
                                                                <th>Deluxe</th>
                                                                <th>Super Deluxe</th>
                                                                <th>Luxury</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {hotelsDetails.map((room, index) => (
                                                                <tr key={index}>
                                                                    <td>{room.hotelCountry}</td>
                                                                    <td>{room.deluxe}</td>
                                                                    <td>{room.superDeluxe}</td>
                                                                    <td>{room.luxury}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <div style={{ display: "flex", gap: "15px" }}>
                                                <button
                                                    className="btn btn-primary mt-3"
                                                    onClick={handleHotel}
                                                >
                                                    Add Hotel
                                                </button>
                                                <button
                                                    className="btn btn-primary mt-3"
                                                    onClick={() => {
                                                        handleNexthotel(); // Call the handleNext function
                                                        setActiveTab("package-price"); // Move to the next tab
                                                    }}
                                                >
                                                    Next
                                                </button>

                                                {activeTab === "hotel-details" && (
                                                    <button
                                                        className="btn btn-primary mt-3"
                                                        onClick={() => {
                                                            handleNextTour(); // Call the handleNext function
                                                            setActiveTab("tour-itineraries"); // Move to the next tab
                                                        }}
                                                    >
                                                        Previous
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {activeTab === "package-price" && (
                                    <div>
                                        <h4>Package Price</h4>
                                        {/* Base Price */}
                                        <div className="mb-3">
                                            <label htmlFor="paxDetails" className="form-label">
                                                PAX Details
                                            </label>
                                            <input
                                                type="text"
                                                id="paxDetails"
                                                className="form-control"
                                                value={formData.paxDetails}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        paxDetails: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter base price"
                                            />
                                        </div>

                                        {/* Discount Price */}
                                        {/* <div className="mb-3">
                      <label htmlFor="discountPrice" className="form-label">
                        Discount Price
                      </label>
                      <input
                        type="text"
                        id="discountPrice"
                        className="form-control"
                        value={formData.discountPrice}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            discountPrice: e.target.value,
                          })
                        }
                        placeholder="Enter discount price (if any)"
                      />
                    </div> */}

                                        {/* Payment Options */}
                                        <div className="mb-3">
                                            <label className="form-label">Deluxe</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.pricedelux}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        pricedelux: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter deluxe details"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Super Deluxe</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.pricesuperdelux1}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        pricesuperdelux1: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter superDeluxe deluxe details"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Luxury</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={formData.priceluxury}
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        priceluxury: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter super deluxe details"
                                            />
                                        </div>
                                        {/* <div className="mb-3">
                      <label className="form-label">Luxury</label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.luxury}
                        onChange={(e) => handleLuxuryChange(e)}
                        placeholder="Enter luxury details"
                      />
                    </div> */}

                                        {/* // */}

                                        {/* paxDetails: formData.paxDetails,
                pricedelux: formData.pricedelux,
                pricesuperdelux: formData.pricesuperdelux1,
                priceluxury: formData.priceluxury, */}

                                        {/*  */}



                                        <div className="mt-4">
                                            <h5>Package Pricing Details</h5>
                                            <div className="table-responsive">
                                                <table className="table mt-4">
                                                    <thead>
                                                        <tr>
                                                            <th>Country & City</th>
                                                            <th>Deluxe</th>
                                                            <th>Super Deluxe</th>
                                                            <th>Luxury</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {packagepriceDetails.map((packageprice, index) => (
                                                            <tr key={index}>
                                                                <td>{packageprice.paxDetails}</td>
                                                                <td>{packageprice.pricedelux}</td>
                                                                <td>{packageprice.pricesuperdelux}</td>
                                                                <td>{packageprice.priceluxury}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>


                                        <div style={{ display: "flex", gap: "15px" }}>
                                            <button
                                                className="btn btn-primary mt-3"
                                                onClick={handlePrice}
                                            >
                                                Add Price
                                            </button>

                                            {activeTab === "package-price" && (
                                                <button
                                                    className="btn btn-primary  mt-3"
                                                    onClick={() => {
                                                        setActiveTab("hotel-details"); // Move to the next tab
                                                    }}
                                                >
                                                    Previous
                                                </button>
                                            )}
                                            <button className="btn btn-primary mt-3" onClick={handleSubmitAllDetails}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageForm;

