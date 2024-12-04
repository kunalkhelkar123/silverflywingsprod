import Image from "next/image";

const Block1 = () => {
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">About SilverFlyWings.com</h2>
        <p className="mt-5">These popular destinations have a lot to offer</p>
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
          SilverFlyWings.com is your trusted travel partner, offering world-class
          tour booking services for travelers seeking to explore every corner of
          the globe. With a vast selection of destinations, our expert team curates
          personalized itineraries to cater to all types of travel experiences. From
          exotic beach resorts to historical landmarks and adventure-packed excursions,
          we ensure seamless travel experiences that exceed expectations.
          <br />
          <br />
          At SilverFlyWings, we are committed to providing competitive prices, unmatched
          customer service, and unforgettable memories, making us your go-to agency for
          exploring the world in comfort and style. Let us take you on the journey of a
          lifetime!
        </p>
      </div>
      {/* End .col */}
      <div className="col-lg-6">
        <Image
          width={400}
          height={400}
          src="/img/pages/about/about.jpg"
          alt="image"
          className="w-100"
          style={{ borderRadius: "15px" }} // Updated border radius value
        />
      </div>

      {/* End .col */}
    </>
  );
};

export default Block1;
