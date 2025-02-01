
import { useForm, ValidationError } from "@formspree/react";
import './ContactForm.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("mrbeeyyz");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  return (
    <div className="form-info">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Enter Your Full Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Full name"
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
        <label htmlFor="email"> Enter Email </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">Enter Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Send Message
        </button>
      </form>
    </div>
  );
}
export default ContactForm