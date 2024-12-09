const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: "Address",
      content: (
        <>1226/3, F C Road, Behind Shruti Hall, Opp Apte School, Shivajinagar, Shivaji Nagar, Haveli, Pune- 411005, Maharashtra,
India</>
      ),
    },
    {
      id: 2,
      colClass: "col-auto",
      title: "Contact-Us",
      content: (
        <>
          <a href="tel:+917972645071">+91 7972645071</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: "Email",
      content: (
        <>
          {" "}
          <a href="mailto:info@silverflywings.com">info@silverflywings.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-14 text-light-1">{item.title}</div>
          <div className="text-18 fw-500 mt-10">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
