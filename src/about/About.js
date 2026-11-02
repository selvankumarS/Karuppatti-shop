import "./About.css";
import aboutImg from "./image2/karuppatti 1.jpg";
import aboutImg1 from "./image2/karuppatti 2.jpg";
import aboutImg2 from "./image2/karuppatti 3.jpg";
import aboutImg3 from "./image2/karuppatti 4.jpg";

const aboutData = [
  {
    id: 1,
    title: "SK Karuppatti",
    img: aboutImg,
  },
  {
    id: 2,
    title: "Pure Karuppatti",
    img: aboutImg1,
  },
  {
    id: 3,
    title: "Traditional Process",
    img: aboutImg2,
  },
  {
    id: 4,
    title: "Healthy Lifestyle",
    img: aboutImg3,
  },
];

function About() {
  return (
    <section className="about">
      
        <h1 className="about-head">ABOUT</h1>
  {aboutData.map((item) => (
    <div className="about-container" key={item.id}>
       
      <div className="about-image">
        <img src={item.img}  />
      </div>

      
      <div className="about-content">
        <h2>
          <span className="sk">SK</span> {item.title}
        </h2>

        <p>
          <strong>SK Karuppatti</strong> is dedicated to delivering
          pure, natural, and traditional karuppatti made from
          high-quality palm jaggery.
        </p>

        <p>
          Our products are free from chemicals and preservatives,
          following age-old methods passed down through generations.
        </p>

        <p>
          We believe in promoting a healthy lifestyle while supporting
          local farmers and traditional practices.
        </p>

        <ul>
          <li>✔ 100% Natural Palm Jaggery</li>
          <li>✔ No Chemicals & Additives</li>
          <li>✔ Traditional Preparation</li>
          <li>✔ Trusted by Families</li>
        </ul>
      </div>

    </div>
  ))}
</section>
  );
}

export default About;