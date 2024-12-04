const TestimonialLeftCol = () => {
  return (
    <>
      <h2 className="text-30">
        What our customers are
        <br /> saying us?
      </h2>
      <p className="mt-20">
        At SilverFlyWings.com, customer satisfaction is our top priority. Here's what our travelers have to say:
        <br />
        🌟 "An unforgettable experience! The booking process was smooth, and the team was incredibly helpful."
        <br /> 🌟 "Great prices and even better service. I highly recommend SilverFlyWings for hassle-free travel planning."
        <br /> 🌟 "Their 24/7 support made all the difference when I needed to adjust my plans last minute. Truly exceptional!"

        <br/>Join the growing community of happy travelers who trust us to make their dream journeys a reality. Your adventure is our passion!
      </p>
      <div className="row y-gap-30 pt-60 lg:pt-40">
        <div className="col-sm-5 col-6">
          <div className="text-30 lh-15 fw-600">2m+</div>
          <div className="text-light-1 lh-15">Happy People</div>
        </div>
        <div className="col-sm-5 col-6">
          <div className="text-30 lh-15 fw-600">4.88</div>
          <div className="text-light-1 lh-15">Overall rating</div>
          <div className="d-flex x-gap-5 items-center pt-10">
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
            <div className="icon-star text-blue-1 text-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialLeftCol;
