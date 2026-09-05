import "./App.css";

const user = {
  name: "John",
  surname: "Smith",
  date_of_birth: "15 March 1995",
  address: "123 Main Street",
  country: "South Africa",
  email: "john.smith@example.com",
  telephone: "+27 82 123 4567",
  company: "Tech Solutions",
  profile_picture: "https://i.pravatar.cc/200?img=12",
  shopping_cart: [
    {
      item: "Laptop",
      price: 15000,
      quantity: 1,
    },
    {
      item: "Wireless Mouse",
      price: 450,
      quantity: 2,
    },
    {
      item: "Keyboard",
      price: 800,
      quantity: 1,
    },
  ],
};

function App() {
  return (
    <div className="app">
      <div className="profile-card">
        <div className="header">
          <h1>User Profile</h1>
          <p>Personal Information</p>
        </div>

        <div className="profile-section">
          <img
            src={user.profile_picture}
            alt={`${user.name} ${user.surname}`}
            className="profile-picture"
          />

          <div className="user-details">
            <h2>
              {user.name} {user.surname}
            </h2>

            <p>
              <strong>Date of Birth:</strong> {user.date_of_birth}
            </p>

            <p>
              <strong>Address:</strong> {user.address}
            </p>

            <p>
              <strong>Country:</strong> {user.country}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Telephone:</strong> {user.telephone}
            </p>

            <p>
              <strong>Company:</strong> {user.company}
            </p>
          </div>
        </div>

        <div className="shopping-cart">
          <h2>Shopping Cart</h2>

          {user.shopping_cart.map((product, index) => (
            <div className="cart-item" key={index}>
              <span>
                {product.item} × {product.quantity}
              </span>

              <span>R{product.price * product.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;