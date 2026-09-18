import NavBar from "../routes/NavBar";
import TotalPrice from "../TotalPrice";
import Figure from "react-bootstrap/Figure";

export default function About() {
  return (
    <div className="page">
      <NavBar />
      <TotalPrice />

      <div className="about-content">
        <h1>About Our Little Shop</h1>

        <p className="subtitle">
          A small online boutique filled with beautiful things chosen with care.
        </p>

        <Figure className="store-logo">
          <Figure.Image
            width={180}
            height={180}
            alt="Our Little Shop logo"
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400"
          />
          <Figure.Caption>
            Our Little Shop
          </Figure.Caption>
        </Figure>

        <div className="about-card">
          <h2>Welcome to Our Little Shop</h2>

          <p>
            Our Little Shop is a fictional online boutique created as part of
            this React project. We offer a carefully selected collection of
            fashionable clothing, beautiful accessories and lovely everyday
            items.
          </p>

          <p>
            Our goal is to create a simple, enjoyable and beautiful shopping
            experience where everyone can discover something special.
          </p>
        </div>

        <div className="store-images">
          <Figure>
            <Figure.Image
              width={400}
              height={280}
              alt="Inside our boutique"
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
            />
            <Figure.Caption>
              A glimpse inside our little boutique.
            </Figure.Caption>
          </Figure>

          <Figure>
            <Figure.Image
              width={400}
              height={280}
              alt="Our beautiful fashion collection"
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600"
            />
            <Figure.Caption>
              Beautiful pieces from our collection.
            </Figure.Caption>
          </Figure>
        </div>

        <div className="contact-card">
          <h2>Contact Us</h2>

          <p>
            We would love to hear from you.
          </p>

          <p>
            Email: hello@ourlittleshop.com
          </p>

          <p>
            Phone: 012 345 6789
          </p>

          <p>
            Business Hours: Monday to Friday, 09:00 - 16:00
          </p>
        </div>
      </div>
    </div>
  );
}