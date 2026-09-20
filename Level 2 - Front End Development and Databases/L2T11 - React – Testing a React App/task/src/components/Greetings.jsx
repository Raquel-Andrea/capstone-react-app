/* eslint-disable react/prop-types */

// This component displays a personalised greeting using the name prop.
// If no name is provided, it uses "World" as the default name.
function Greetings({ name = 'World' }) {
  return <h1>Hello, {name}!</h1>;
}

export default Greetings;