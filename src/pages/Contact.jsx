import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import {
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

import "../styles/Contact.css";


const Contact = () => {

  // =========================================================
  // WHATSAPP NUMBER
  // Change this number whenever required.
  // Country code included, without + or spaces.
  // =========================================================

  const whatsappNumber = "917985687221";


  // =========================================================
  // CONTACT FORM
  // =========================================================

  const handleSubmit = (e) => {

    e.preventDefault();

    const form = e.target;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();


    // =======================================================
    // WHATSAPP MESSAGE
    // =======================================================

    const whatsappMessage = `Hello Krishna,

I visited your portfolio and would like to get in touch with you.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Regards,
${name}`;


    // =======================================================
    // ENCODE MESSAGE
    // =======================================================

    const encodedMessage = encodeURIComponent(
      whatsappMessage
    );


    // =======================================================
    // WHATSAPP URL
    // =======================================================

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


    // =======================================================
    // OPEN WHATSAPP
    // =======================================================

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  };


  // =========================================================
  // OPPORTUNITY WHATSAPP
  // =========================================================

  const opportunityMessage =
    `Hello Krishna,

I visited your portfolio and would like to discuss a job opportunity with you.

I would like to know more about your availability and experience.

Thank you.`;


  const opportunityWhatsAppURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      opportunityMessage
    )}`;


  return (
    <main className="contact-page">


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="contact-hero">

        <div className="contact-container">

          <div className="contact-hero-content">

            <span className="contact-eyebrow">

              <MessageCircle size={13} />

              GET IN TOUCH

            </span>


            <h1>

              Let's build 

              <span>
                 something.
              </span>

            </h1>


            <p>
              Have a project idea, job opportunity, collaboration,
              or simply want to connect? Feel free to reach out.
              I would be happy to hear from you.
            </p>


            <div className="contact-availability">

              <span className="availability-dot" />

              <span>
                Open to opportunities & collaborations
              </span>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          CONTACT MAIN
      ===================================================== */}

      <section className="contact-main">

        <div className="contact-container">

          <div className="contact-grid">


            {/* =================================================
                LEFT INFORMATION
            ================================================= */}

            <div className="contact-info">

              <div className="contact-section-label">
                CONTACT INFORMATION
              </div>


              <h2>

                Let's start a

                <strong>
                   conversation.
                </strong>

              </h2>


              <p className="contact-info-description">
                Whether you're a recruiter, developer, startup,
                company or someone interested in technology,
                you can reach me through any of the channels below.
              </p>



              {/* =================================================
                  EMAIL
              ================================================= */}

              <a
                href="mailto:mail.kkshukla@gmail.com"
                className="contact-info-card"
              >

                <div className="contact-info-icon">

                  <Mail size={17} />

                </div>


                <div>

                  <span>
                    Email
                  </span>

                  <strong>
                    mail.kkshukla@gmail.com
                  </strong>

                </div>

              </a>



              {/* =================================================
                  PHONE
              ================================================= */}

              <a
                href="tel:+917985687221"
                className="contact-info-card"
              >

                <div className="contact-info-icon">

                  <Phone size={17} />

                </div>


                <div>

                  <span>
                    Phone
                  </span>

                  <strong>
                    +91 79856 87221
                  </strong>

                </div>

              </a>



              {/* =================================================
                  LOCATION
              ================================================= */}

              <div className="contact-info-card">

                <div className="contact-info-icon">

                  <MapPin size={17} />

                </div>


                <div>

                  <span>
                    Location
                  </span>

                  <strong>
                    New Delhi, India
                  </strong>

                </div>

              </div>



              {/* =================================================
                  AVAILABILITY
              ================================================= */}

              <div className="contact-info-card">

                <div className="contact-info-icon">

                  <Clock3 size={17} />

                </div>


                <div>

                  <span>
                    Availability
                  </span>

                  <strong>
                    Open to opportunities
                  </strong>

                </div>

              </div>



              {/* =================================================
                  SOCIAL LINKS
              ================================================= */}

              <div className="contact-social-section">

                <span>
                  FIND ME ONLINE
                </span>


                <div className="contact-social-links">


                  {/* Facebook */}

                  <a
                    href="https://www.facebook.com/YOUR-FACEBOOK-USERNAME"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >

                    <FaFacebookF size={17} />

                  </a>



                  {/* WhatsApp */}

                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      "Hello Krishna, I visited your portfolio and would like to connect with you."
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                  >

                    <FaWhatsapp size={17} />

                  </a>



                  {/* GitHub */}

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >

                    <FaGithub size={17} />

                  </a>



                  {/* LinkedIn */}

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >

                    <FaLinkedinIn size={17} />

                  </a>


                </div>

              </div>

            </div>



            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <div className="contact-form-wrapper">


              <div className="contact-form-header">

                <div className="contact-form-icon">

                  <Send size={18} />

                </div>


                <div>

                  <span>
                    SEND A MESSAGE
                  </span>

                  <h2>
                    Tell me about your idea.
                  </h2>

                </div>

              </div>



              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >


                {/* =================================================
                    NAME
                ================================================= */}

                <div className="contact-form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />

                </div>



                {/* =================================================
                    EMAIL
                ================================================= */}

                <div className="contact-form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />

                </div>



                {/* =================================================
                    SUBJECT
                ================================================= */}

                <div className="contact-form-group">

                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    required
                  />

                </div>



                {/* =================================================
                    MESSAGE
                ================================================= */}

                <div className="contact-form-group">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Write your message here..."
                    required
                  />

                </div>



                {/* =================================================
                    SUBMIT
                ================================================= */}

                <button
                  type="submit"
                  className="contact-submit-btn"
                >

                  Send Message

                  <ArrowRight size={15} />

                </button>



                {/* =================================================
                    FORM NOTE
                ================================================= */}

                <p className="contact-form-note">

                  <CheckCircle2 size={13} />

                  Your message will open in WhatsApp with
                  your details as a draft.

                </p>


              </form>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          OPPORTUNITY SECTION
      ===================================================== */}

      <section className="contact-opportunities">

        <div className="contact-container">

          <div className="contact-opportunity-card">


            <div className="contact-opportunity-icon">

              <BriefcaseBusiness size={23} />

            </div>


            <span>
              LOOKING FOR OPPORTUNITIES
            </span>


            <h2>

              Interested in

              <strong>
                working together?
              </strong>

            </h2>


            <p>
              I am interested in software development opportunities,
              internships, collaborations and projects where I can
              contribute, learn and grow.
            </p>


            <div className="contact-opportunity-tags">

              <span>
                Software Development
              </span>

              <span>
                Frontend Development
              </span>

              <span>
                MERN Stack
              </span>

              <span>
                Java
              </span>

            </div>


            <a
              href={opportunityWhatsAppURL}
              target="_blank"
              rel="noreferrer"
              className="contact-opportunity-btn"
            >

              Discuss an Opportunity

              <ArrowRight size={15} />

            </a>

          </div>

        </div>

      </section>



      {/* =====================================================
          FOOTER NOTE
      ===================================================== */}

      <section className="contact-ending">

        <div className="contact-container">

          <p>

            Have an idea?

            <strong>
              Let's talk.
            </strong>

          </p>

        </div>

      </section>

    </main>
  );
};


export default Contact;