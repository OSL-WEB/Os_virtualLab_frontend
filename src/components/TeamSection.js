// TeamSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamMemberCard from './TeamMemberCard';

const teamMentor = [
  { name: 'John Doe', role: 'Frontend Developer', image: 'vijay.png', linkedin: 'https://www.linkedin.com/in/johndoe/',
      instagram: 'https://www.instagram.com/johndoe/', },
  { name: 'Jane Smith', role: 'Backend Developer', image: 'blank_person.jpg', linkedin: 'https://www.linkedin.com/in/johndoe/',
      instagram: 'https://www.instagram.com/johndoe/', },
];
const teamMembers = [
  { name: 'John Doe', role: 'Frontend Developer', image: 'vijay2-modified.png', linkedin: 'https://www.linkedin.com/in/johndoe/',
      instagram: 'https://www.instagram.com/johndoe/', },
  { name: 'Jane Smith', role: 'Backend Developer', image: 'blank_person.jpg', linkedin: 'https://www.linkedin.com/in/johndoe/',
      instagram: 'https://www.instagram.com/johndoe/', },
  { name: 'Jane Smith', role: 'Backend Developer', image: 'blank_person.jpg', linkedin: 'https://www.linkedin.com/in/johndoe/',
      instagram: 'https://www.instagram.com/johndoe/', },
  { name: 'Jane Smith', role: 'Backend Developer', image: 'blank_person.jpg', linkedin: 'https://www.linkedin.com/in/johndoe/',
      instagram: 'https://www.instagram.com/johndoe/', },
  { name: 'Jane Smith', role: 'Backend Developer', image: 'blank_person.jpg' ,linkedin: 'https://www.linkedin.com/in/johndoe/',
      instagram: 'https://www.instagram.com/johndoe/', },
  { name: 'Jane Smith', role: 'Backend Developer', image: 'blank_person.jpg', linkedin: 'https://www.linkedin.com/in/johndoe/',
      instagram: 'https://www.instagram.com/johndoe/', },
  
  
];

const TeamSection = () => {
  return (
    
    <> <div className="our-team"  sm={12} md={4}><h1>Our Team</h1></div>
    <Container>
      <Row className='mentor-div'>
        {teamMentor.map((member, index) => (
          <Col key={index} sm={12} md={6} className='mentor-card'>
            <TeamMemberCard className="mentor-card"
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              instagram={member.instagram}
            />
          </Col>
        ))}
      </Row>
    </Container>

    <Container >
      <Row className='team-div'>
        {teamMembers.map((member, index) => (
          <Col key={index} sm={12} md={4}>
            <TeamMemberCard
              name={member.name}
              role={member.role}
              image={member.image}
              linkedin={member.linkedin}
              instagram={member.instagram}
            />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default TeamSection;
