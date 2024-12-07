import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const teamMembers = [
  {
    name: "Bret Dickey",
    role: "Owner",
    email: "bret@jaik.solutions",
    image: "/assets/bret2.png",
    objectPosition: "top",
  },
  {
    name: "Gerri",
    role: "Operations",
    email: "gerri@jaik.solutions",
    image: "/assets/gerri.jpg",
    objectPosition: "center",
  },
  {
    name: "George",
    role: "Operations",
    email: "george@jaik.solutions",
    image: "/assets/george.jpg",
    objectPosition: "center",
  },
  {
    name: "Jannah",
    role: "Technical Writer",
    email: "jannah@jaik.solutions",
    image: "/assets/jannah.jpg",
    objectPosition: "center",
  },
  {
    name: "Ari",
    role: "Lead Developer",
    email: "arionna@jaik.solutions",
    image: "/assets/ari.jpeg",
    objectPosition: "center",
  },
  {
    name: "Nicole",
    role: "Lead Developer",
    email: "nicole@jaik.solutions",
    image: "/assets/nicole2.png",
    objectPosition: "top",
  },
  {
    name: "Patrick",
    role: "Lead Developer",
    email: "patrick@jaik.solutions",
    image: "/assets/patrick.jpeg",
    objectPosition: "center",
  },
  {
    name: "Thien",
    role: "Lead Developer",
    email: "thien@jaik.solutions",
    image: "/assets/thien.jpeg",
    objectPosition: "center",
  },
  {
    name: "Ike",
    role: "Frontend Developer",
    email: "ike@jaik.solutions",
    image: "/assets/ike.jpg",
    objectPosition: "center",
  },
  {
    name: "Narender",
    role: "Frontend Developer",
    email: "narender@jaik.solutions",
    image: "/assets/narender.jpeg",
    objectPosition: "center",
  },
  {
    name: "Bao",
    role: "Developer",
    email: "bao@jaik.solutions",
    image: "/assets/bao.jpg",
    objectPosition: "center",
  },
  {
    name: "Cole",
    role: "Developer",
    email: "cole@jaik.solutions",
    image: "/assets/cole.jpg",
    objectPosition: "center",
  },
  {
    name: "Corrz",
    role: "Developer",
    email: "corrz@jaik.solutions",
    image: "/assets/corrz.jpg",
    objectPosition: "center",
  },
  {
    name: "Dat",
    role: "Developer",
    email: "dat@jaik.solutions",
    image: "/assets/dat.jpg",
    objectPosition: "center",
  },
  {
    name: "Dennis",
    role: "Developer",
    email: "dennis@jaik.solutions",
    image: "/assets/dennis1.jpeg",
    objectPosition: "center",
  },
  {
    name: "Hailey",
    role: "Developer",
    email: "hailey@jaik.solutions",
    image: "/assets/hailey.png",
    objectPosition: "center",
  },
  {
    name: "Jaedon",
    role: "Developer",
    email: "jaedon@jaik.solutions",
    image: "/assets/jaedon.jpeg",
    objectPosition: "center",
  },
  {
    name: "Jo",
    role: "Developer",
    email: "jo@jaik.solutions",
    image: "/assets/jo2.jpg",
    objectPosition: "center",
  },
  {
    name: "Josh",
    role: "Developer",
    email: "josh@jaik.solutions",
    image: "/assets/josh3.jpeg",
    objectPosition: "center",
  },
  {
    name: "Khoi",
    role: "Developer",
    email: "khoi@jaik.solutions",
    image: "/assets/khoi.png",
    objectPosition: "center",
  },
  {
    name: "Oriana",
    role: "Developer",
    email: "oriana@jaik.solutions",
    image: "/assets/oriana.jpeg",
    objectPosition: "center",
  },
  {
    name: "Ryan",
    role: "Developer",
    email: "ryan@jaik.solutions",
    image: "/assets/ryan.jpg",
    objectPosition: "center",
  },
  {
    name: "Stephen",
    role: "Developer",
    email: "stephen@jaik.solutions",
    image: "/assets/stephen2.png",
    objectPosition: "top",
  },
  {
    name: "Tre",
    role: "Developer",
    email: "tre@jaik.solutions",
    image: "/assets/tre.jpeg",
    objectPosition: "center",
  },
  {
    name: "Tuan",
    role: "Developer",
    email: "tuan@jaik.solutions",
    image: "/assets/tuan.jpg",
    objectPosition: "center",
  },
  {
    name: "Trung",
    role: "Developer",
    email: "trung@jaik.solutions",
    image: "/assets/trung.jpg",
    objectPosition: "center",
  },
];

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="about">
        <h1>The JAIK Solutions Team</h1>
        <p>
          Our crew is an electric mix of driven developers who bring their
          unique perspectives and creativity to every project we tackle, all
          with the end goal of delivering the best possible product, one line of
          code at a time.
        </p>
      </div>
      <SliderWrapper>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <TeamCard key={index}>
              <img
                className={`card-img-top ${
                  member.image.objectPosition === "top" ? "adjusted" : ""
                }`}
                src={member.image}
                alt={member.name}
                style={{
                  objectFit: "cover", // Ensures the image is cropped
                  objectPosition: member.image.objectPosition, // Dynamic positioning
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                }}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.email}</p>
            </TeamCard>
          ))}
        </Slider>
      </SliderWrapper>
    </div>
  );
};

export default Team;

// Custom Previous Button
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      &#10094;
    </div>
  );
};

// Custom Next Button
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      &#10095;
    </div>
  );
};
// Styled Components
const SliderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px;
  background: #377abc;

  .slick-dots {
    position: absolute;
    bottom: -20px; /* Adjust the position to your needs */
    width: 100%;
    text-align: center;
    z-index: 10; /* Make sure the dots are above other elements */
  }

  .slick-dots li button {
    color: transparent;
    border: none;
    outline: none;
    background-color: transparent;
  }

  .slick-dots li button:before {
    content: "•"; /* Adds dot */
    font-size: 10px; /* Size of the dot */
    color: white; /* Color of the dot */
    opacity: 0.75; /* Slight transparency */
  }

  .slick-dots li.slick-active button:before {
    color: #00bcd4; /* Color of the active dot */
    opacity: 1; /* Full opacity for active dot */
  }
`;

const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #377abc, #00bcd4);
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  img {
    object-fit: !important; /* Forces the image to focus on the top */
  }

  img.adjusted {
    object-position: top !important; /* Forces the image to focus on the top */
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 5px 0;
  }
`;
