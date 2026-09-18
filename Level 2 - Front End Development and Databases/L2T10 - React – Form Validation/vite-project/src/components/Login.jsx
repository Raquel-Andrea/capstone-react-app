import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

function Login() {
  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Welcome Back 💜</h1>
        <p>Login to your account</p>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log("Login details:", values);
            alert("Login successful!");
          }}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
              />

              <ErrorMessage
                name="email"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
              />

              <ErrorMessage
                name="password"
                component="div"
                className="error"
              />
            </div>

            <button type="submit" className="form-button">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;