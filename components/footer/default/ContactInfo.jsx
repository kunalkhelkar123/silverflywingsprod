const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Call and WhatsApp No.",
      action: "tel:+(91) 7972645071",
      text: "+(91) 7972645071",
    },
    {
      id: 2,
      title: "E-mail",
      action: "mailto:info@silverflywings.com",
      text: "info@silverflywings.com",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <a href={item.action} className="text-18 fw-500 text-blue-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;