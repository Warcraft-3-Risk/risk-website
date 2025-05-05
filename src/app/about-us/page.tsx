import React from 'react';

//TODO Make about us page, with the design made in mind
//In your __blocks folder, that is where side relevant components go, like the header and footer etc.
//If necessary, you can import any additional components or styles here - Create a SCSS file for the about us page and import it here

const AboutPage = () => {
  return (
    <div className="p-8 font-sans">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to our website! We are dedicated to providing the best services
        and solutions to our customers.
      </p>
      <p>
        Our team is passionate about innovation, excellence, and delivering
        value. Thank you for visiting us!
      </p>
    </div>
  );
};

export default AboutPage;
