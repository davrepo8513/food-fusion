import React from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Chef Marco Rodriguez',
      role: 'Head Chef',
      image: 'https://images.unsplash.com/photo-1583394293214-28a5b0a8e8b8?w=300&h=300&fit=crop&crop=face',
      description: '15+ years of culinary excellence'
    },
    {
      name: 'Sarah Johnson',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Ensuring smooth operations daily'
    },
    {
      name: 'David Chen',
      role: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Master of sweet creations'
    }
  ];

  const values = [
    {
      icon: <Heart size={40} />,
      title: 'Passion',
      description: 'We pour our heart into every dish we create'
    },
    {
      icon: <Award size={40} />,
      title: 'Quality',
      description: 'Only the finest ingredients make it to your plate'
    },
    {
      icon: <Users size={40} />,
      title: 'Community',
      description: 'Building connections through food and service'
    },
    {
      icon: <Clock size={40} />,
      title: 'Reliability',
      description: 'Consistent quality and timely delivery, always'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">About Food-Fusion</h1>
            <p className="hero-subtitle">
              Where culinary passion meets exceptional service
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <p className="story-paragraph">
                Founded in 2020, Food-Fusion began as a dream to bring together the world's 
                most beloved flavors under one roof. What started as a small family kitchen 
                has grown into a beloved local institution, serving thousands of satisfied 
                customers every month.
              </p>
              <p className="story-paragraph">
                Our journey is rooted in the belief that great food has the power to bring 
                people together, create memories, and brighten even the most ordinary days. 
                Every recipe we craft, every ingredient we select, and every meal we deliver 
                is infused with this philosophy.
              </p>
              <p className="story-paragraph">
                Today, Food-Fusion stands as a testament to what happens when passion meets 
                purpose. We're not just a food delivery service – we're your neighbors, 
                your friends, and your partners in creating delicious moments.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop" 
                alt="Our kitchen"
                className="story-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Values</h2>
            <p className="section-description">
              The principles that guide everything we do
            </p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-description">
              The talented people behind your favorite meals
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-text">
              To deliver exceptional culinary experiences that nourish both body and soul, 
              while building lasting relationships with our community through outstanding 
              service, quality ingredients, and genuine care for every customer we serve.
            </p>
            <div className="mission-stats">
              <div className="stat">
                <div className="stat-number">10K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Menu Items</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat">
                <div className="stat-number">3</div>
                <div className="stat-label">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;