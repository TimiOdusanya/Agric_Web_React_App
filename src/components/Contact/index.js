import "./index.scss"

export default function Contact(){
    return (
      <div className="contact">
        <div className="contact-info">
          <div className="contact-body">
            <h3>Reach out to us today via any of the given information</h3>
            <p>Call us for instant support</p>
            <h5 className="contact-details">+234 810 123 5678</h5>

            <p>Write us a mail</p>
            <h5 className="contact-details">growit@gmail.com</h5>
          </div>
        </div>
        <div>
          <div className="contact-form">
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input
                  type="submit"
                  className="flat-button"
                  value="SEND MESSAGE"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}