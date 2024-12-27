import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const features = [
    {
      icon: "🐾",
      title: "Loving Care",
      description: "Dedicated staff ensuring every cat feels safe, loved, and cherished until they find their forever home.",
    },
    {
      icon: "🛡️",
      title: "Safe Haven",
      description: "A secure and nurturing environment where rescued cats can thrive and prepare for adoption.",
    },
    {
      icon: "🛋️",
      title: "Comfortable Spaces",
      description: "Cozy, clean, and stress-free living areas designed to make our cats feel at home.",
    },
    {
      icon: "💳",
      title: "Easy Contributions",
      description: "Support our mission effortlessly with online donations and sponsorship options.",
    },
    {
      icon: "📍",
      title: "Accessible Location",
      description: "Conveniently located in Siddeshwari, Dhaka, making it easy for adopters to visit and meet their new furry friends.",
    },
    {
      icon: "🔄",
      title: "Lifetime Support",
      description: "Offering guidance and resources for adopters to ensure a happy and lasting bond with their cats.",
    },
  ];

  return (
    <section className="about-us">
     {/* Banner Section */}
<div
  className="about-banner"
  style={{
    backgroundImage: 'url("https://i.pinimg.com/736x/ec/e9/3c/ece93ca911ae55f73b250aec2ead1c4a.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '100px 0',
  }}
>
  <h1>ABOUT US</h1>
  <div className="line" style={{ width: '50px', height: '4px', backgroundColor: 'black', margin: '20px auto' }}></div>
</div>

      {/* Introduction Section */}
      <div className="about-content">
        <div className="about-title">
          <h2>The Meow Boutique</h2>
          <h3>WHERE CATS FIND LOVE AND NEW HOMES</h3>
        </div>
        <div className="about-description">
          <p>
            Welcome to The Meow Boutique, a place where abandoned and rescued cats are given a second chance at life. 
            Located in Siddeshwari, Dhaka, we are dedicated to matching our adorable cats with loving families. 
            Every cat here receives the care, attention, and affection they deserve while they wait for their forever homes.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h1 className="features-title">WHY ADOPT FROM US</h1>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h2 className="feature-title">{feature.title}</h2>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
