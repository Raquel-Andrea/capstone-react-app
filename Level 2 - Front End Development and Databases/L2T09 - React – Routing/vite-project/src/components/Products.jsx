import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import NavBar from "../routes/NavBar";
import { Container, Row, Col, Card, Dropdown, Button } from "react-bootstrap";
import TotalPrice from "../TotalPrice";

const products = [
  {
    id: 1,
    name: "Pretty Dress",
    description: "A beautiful little dress for any occasion.",
    price: 450,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600",
    colours: ["Pink", "White", "Lilac"],
  },
  {
    id: 2,
    name: "Mini Handbag",
    description: "A cute and stylish handbag for everyday use.",
    price: 350,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600",
    colours: ["Pink", "Black", "Cream"],
  },
  {
    id: 3,
    name: "Delicate Jewellery",
    description: "Simple jewellery pieces to add a little sparkle.",
    price: 250,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600",
    colours: ["Gold", "Silver", "Rose Gold"],
  },
  {
    id: 4,
    name: "Satin Blouse",
    description: "A soft and elegant blouse for a polished look.",
    price: 399,
    image: "https://images.unsplash.com/photo-1564257577054-7e9e4f7b5b5b?w=600",
    colours: ["Pink", "White", "Blue"],
  },
  {
    id: 5,
    name: "Classic Sunglasses",
    description: "Stylish sunglasses to complete your outfit.",
    price: 299,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600",
    colours: ["Black", "Brown", "Pink"],
  },
  {
    id: 6,
    name: "Pretty Hair Bow",
    description: "A delicate hair accessory for a feminine touch.",
    price: 120,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600",
    colours: ["Pink", "Lilac", "White"],
  },
  {
    id: 7,
    name: "Soft Cardigan",
    description: "A cosy cardigan that is perfect for cooler days.",
    price: 499,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600",
    colours: ["Cream", "Pink", "Beige"],
  },
  {
    id: 8,
    name: "Floral Skirt",
    description: "A pretty floral skirt for a fresh everyday style.",
    price: 420,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=600",
    colours: ["Pink", "Blue", "Cream"],
  },
  {
    id: 9,
    name: "Pearl Bracelet",
    description: "A timeless bracelet featuring elegant pearl details.",
    price: 280,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600",
    colours: ["White", "Gold", "Pink"],
  },
  {
    id: 10,
    name: "Cute Purse",
    description: "A small and practical purse for your essentials.",
    price: 320,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600",
    colours: ["Pink", "Black", "Cream"],
  },
];

export default function Products() {
  const location = useLocation();
  const data = location.state;

  const { totalPrice, setTotalPrice } = useContext(ThemeContext);

  const [selectedColours, setSelectedColours] = useState({});

  const handleColourSelect = (productId, colour) => {
    setSelectedColours({
      ...selectedColours,
      [productId]: colour,
    });
  };

const handleBuy = (product) => {
  setTotalPrice((currentTotal) => currentTotal + product.price);
};

  return (
    <div className="page">
  <NavBar />

  {totalPrice > 0 && <TotalPrice />}

      <Container className="py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Our Little Collection</h1>

          <p className="subtitle">
            Beautiful little things chosen especially for you.
          </p>
        </div>

        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} lg={4} xl={3}>
              <Card className="product-card h-100 border-0 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />

                <Card.Body className="d-flex flex-column">
                  <Card.Title className="product-title">
                    {product.name}
                  </Card.Title>

                  <Card.Text className="product-description">
                    {product.description}
                  </Card.Text>

                  <h5 className="product-price">
                    R{product.price}
                  </h5>

                  <Dropdown className="mb-3">
                    <Dropdown.Toggle
                      variant="outline-secondary"
                      id={`dropdown-${product.id}`}
                      className="colour-button w-100"
                    >
                      {selectedColours[product.id] || "Choose a colour"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="w-100">
                      {product.colours.map((colour) => (
                        <Dropdown.Item
                          key={colour}
                          onClick={() =>
                            handleColourSelect(product.id, colour)
                          }
                        >
                          {colour}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  <Button
                    className="buy-button mt-auto"
                    onClick={() => handleBuy(product)}
                  >
                    Buy
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {data?.product && (
          <div className="selected-product mt-4">
            Selected product: {data.product}
          </div>
        )}
      </Container>
    </div>
  );
}