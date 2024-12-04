
'use client'

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TermsConent = () => {
  return (
    <Tabs>
      <div className="row y-gap-30">
        <div className="col-lg-3">
          <div className="px-30 py-30 rounded-4 border-light">
            <TabList className="tabs__controls row y-gap-10 js-tabs-controls">
              <Tab className="col-12 tabs__button js-tabs-button">
                General Terms of Use
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button">
                Privacy policy
              </Tab>
              {/* <Tab className="col-12 tabs__button js-tabs-button">
                Cookie Policy
              </Tab> */}
              <Tab className="col-12 tabs__button js-tabs-button">
                Best Price Guarantee
              </Tab>
            </TabList>
          </div>
        </div>
        {/* End .col-lg-3 */}

        <div className="col-lg-9">
          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15">General Terms of Use</h1>
              <h2 className="text-16 fw-500">1. Your Agreement</h2>
              <p className="text-15 text-dark-1 mt-5">
                By using the services provided by SilverFlyWings.com, you agree to 
                comply with our terms and conditions as outlined below. These terms 
                apply to all visitors, users, and others who access or use the website.
                 We are a tour booking agency offering a variety of travel packages
                  globally. Our goal is to provide seamless and enjoyable travel 
                  experiences for all our customers.
                <br />
                <br />
                By accessing our platform, you agree to the terms set forth and 
                confirm that you understand the booking process, payment methods,
                 and cancellation policies. If you do not agree with these terms,
                  we kindly ask you not to use our services.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                2. Change of Terms of Use
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                We reserve the right to modify or update these terms at any time 
                without prior notice. All changes will be posted on this page, and 
                the new terms will apply to all users from the date of posting. It is 
                your responsibility to review these terms periodically to ensure that 
                you are aware of any updates.
                <br />
                <br />
                Any changes to the terms of use will become effective immediately upon 
                posting, and continued use of the site indicates acceptance of these 
                changes. We encourage you to check this page regularly for any updates.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                3. Access and Use of the Services
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                SilverFlyWings.com offers travel and tour booking services, including 
                but not limited to vacation packages, flight bookings, hotel reservations,
                 and guided tours. By accessing and using our website, you agree to 
                 provide accurate and complete information when making a reservation or 
                 inquiry.
                <br />
                <br />
                We ensure that all content on the website is accurate at the time of 
                publication. However, prices, availability, and package details may 
                change due to unforeseen circumstances, such as changes in local 
                regulations or other factors beyond our control. We recommend that 
                you confirm all details before making a booking.
              </p>
            </div>
          </TabPanel>
          {/* End  General Terms of Use */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15"> Privacy policy</h1>
              <h2 className="text-16 fw-500">1. Your Agreement</h2>
              <p className="text-15 text-dark-1 mt-5">
                By using the services provided by SilverFlyWings.com, you agree to
                 our privacy policy and consent to the collection, use, and sharing
                  of your data as described below. We take your privacy seriously
                   and strive to protect your personal information in accordance 
                   with the highest standards of data protection laws. This Privacy 
                   Policy explains what data we collect, how we use it, and your rights
                    regarding the information we store.
                <br />
                <br />
                When you book a tour, sign up for our newsletter, or use any of our 
                services, we collect personal details such as your name, contact 
                information, payment details, and travel preferences. This information
                 helps us to provide better services and improve your experience with us.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                2. Change of Terms of Use
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                SilverFlyWings.com reserves the right to modify this Privacy Policy at
                 any time. Any changes will be posted on this page, and the updated 
                 policy will take effect immediately upon publication. Please check 
                 this page regularly to stay informed about how we are protecting your 
                 data. Your continued use of our services after changes are made will 
                 constitute your acceptance of the updated Privacy Policy.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                3. Access and Use of the Services
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                To provide you with the best possible service, we may collect and 
                store data that allows us to process your tour bookings, answer your 
                inquiries, send you promotional offers, and enhance your overall 
                experience on our platform. We may also use cookies and tracking 
                technologies to understand how you interact with our website, allowing 
                us to offer you personalized recommendations and promotions.
              </p>
            </div>
          </TabPanel>
          {/* End  Privacy policy */}

          {/* <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15"> Cookie Policy</h1>
              <h2 className="text-16 fw-500">1. Your Agreement</h2>
              <p className="text-15 text-dark-1 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                2. Change of Terms of Use
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                3. Access and Use of the Services
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
          </TabPanel> */}
          {/* End  Cookie Policy */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15"> Best Price Guarantee</h1>
              <h2 className="text-16 fw-500">1. Your Agreement</h2>
              <p className="text-15 text-dark-1 mt-5">
                At SilverFlyWings.com, we are committed to offering you the best
                 prices for your tour bookings. By using our services, you agree 
                 to the terms outlined in this policy. Our Best Price Guarantee 
                 ensures that you are getting the most competitive rates available 
                 when booking with us. If you find a lower price for the same tour 
                 package within 24 hours of booking, we will match it or offer you a 
                 better deal.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                2. Change of Terms of Use
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                SilverFlyWings.com reserves the right to modify or update the terms 
                of the Best Price Guarantee at any time. These changes will be posted 
                on this page, and any new terms will take effect immediately. It is 
                recommended to review this policy before making your booking to ensure
                that you understand any updates.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                3. Access and Use of the Services
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                By booking with SilverFlyWings.com, you gain access to not only our
                 best prices but also our wide range of travel services, including 
                 expert guidance, secure payment processing, and 24/7 customer support. 
                 Our goal is to make your travel planning as easy and affordable as 
                 possible.
                <br />
                <br />
                <b>How We Use Your Information:</b> We collect personal and booking 
                details to ensure you receive the most accurate pricing and booking 
                options. This data is used solely for processing your bookings, 
                communicating with you about your tours, and providing customer support 
                when necessary.

                If you find a better price elsewhere, simply contact our support team 
                with the details, and we will take the necessary steps to meet or beat
                 the price.
              </p>
            </div>
          </TabPanel>
          {/* End  Best Price Guarantee */}
        </div>
        {/* End col-lg-9 */}
      </div>
    </Tabs>
  );
};

export default TermsConent;
