import { useState } from 'react'
import PageContent from "../../components/PageContent"
import { contactTitle } from "../../data/pageContent"
import styles from './contact.module.css'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");
    const inquiry = formData.get("inquiry");
    const subjectText = formData.get("subject");

    const myEmail = "someone@example.com"; 

    const emailSubject = encodeURIComponent(`Inquiry from ${firstName} ${lastName} - ${inquiry}`);

    const emailBody = encodeURIComponent(
      `Name: ${firstName} ${lastName}\n` +
      `Type of Inquiry: ${inquiry}\n\n` +
      `Message:\n${subjectText}`
    );

    window.location.href = `mailto:${myEmail}?subject=${emailSubject}&body=${emailBody}`;

    setIsSubmitted(true);
  };

  return (
    <main>
      <PageContent title={contactTitle} />
      <section className={styles.section}>
        
        {isSubmitted ? (
          <div className={styles.successMessage}>
            <h2>Thank you!</h2>
            <p>Please click "Send" in your email window to complete.</p>
            <a href='/contact'>new inquiry</a>
          </div>
        ) : (
          <form className={styles.contact} onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." required />

            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." required />

            <label htmlFor="inquiry">Inquiry</label>
            <select id="inquiry" name="inquiry" required>
              <option value="">choose</option>
              <option value="custom">custom stack</option>
              <option value="single">single </option>
              <option value="ready stack">ready stack</option>
            </select>
            <label className={styles.subjectLabel} htmlFor="subject">Subject</label>
            <textarea className={styles.subject} id="subject" name="subject" placeholder="Write something.." required></textarea>
            <input className={styles.submit} type="submit" value="Submit" />
          </form>
        )}
      </section>
    </main>
  )
}

export default Contact
