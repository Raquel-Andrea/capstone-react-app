import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "First name must not exceed 15 characters")
    .required("First name is required"),

  surname: Yup.string()
    .max(20, "Surname must not exceed 20 characters")
    .required("Surname is required"),

  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(8, "Password must contain at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

function Register() {
    const navigate = useNavigate();
  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Create Account 💜</h1>
        <p>Register for our online store</p>

        <Formik
          initialValues={{
            firstName: "",
            surname: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={RegisterSchema}
            onSubmit={(values) => {
            console.log("Registration details:", values);
            alert("Registration successful!");
            navigate("/");
            }}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>

              <Field
                type="text"
                name="firstName"
                placeholder="Enter your first name"
              />

              <ErrorMessage
                name="firstName"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="surname">Surname</label>

              <Field
                type="text"
                name="surname"
                placeholder="Enter your surname"
              />

              <ErrorMessage
                name="surname"
                component="div"
                className="error"
              />
            </div>

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
                placeholder="Create a password"
              />

              <ErrorMessage
                name="password"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>

              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
              />

              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>

            <button type="submit" className="form-button">
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;