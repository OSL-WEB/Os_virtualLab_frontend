// TeamMemberCard.js
import React from 'react'
import { Card } from 'react-bootstrap';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
const TeamMemberCard = ({ name, role, image,linkedin,instagram }) => {
    return (
        <Card className="team-member-card">
        <Card.Img className="team-member-image" variant="top" src={image} alt={name} />
        <Card.Body>
          <Card.Title className="team-member-title">{name}</Card.Title>
          <Card.Text>
            <a href={linkedin} className="social-icon linkedin-icon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={instagram} className="social-icon instagram-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </Card.Text>
        </Card.Body>
      </Card>
      
    );
  };
export default TeamMemberCard;