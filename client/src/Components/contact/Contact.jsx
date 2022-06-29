import "./contact.css";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  let navigate = useNavigate();
  return (
    <div class="outer">
     <section class="contact_wrapper">
  <div class="contact_info">
    <h3 class="title">
      Contact Info
    </h3>

    <ul class="icons_wrapp">
      <li>
        <div class="icon">
          <span class="material-icons-outlined"> place </span>
        </div>
        <div class="text">
          123 ABCDedf Road, 123 ABC, ABCD - 123456123 ABCDedf Road, 123 ABC, ABCD - 123456
        </div>
      </li>
      <li>
        <div class="icon">
          <span class="material-icons-outlined"> mail_outline </span>
        </div>
        <div class="text">
          ABCDedfRoad@ABCD.com
        </div>
      </li>
      <li>
        <div class="icon">
          <span class="material-icons-outlined"> phone_in_talk </span>
        </div>
        <div class="text">
          123-456-789
        </div>
      </li>
    </ul>

    <ul class="soci_wrap">
      <li>
        <a href="/">
          <span class="material-icons-outlined"> facebook </span>
        </a>
      </li>
      <li>
        <a href="/">
          <span class="material-icons-outlined"> face </span>
        </a>
      </li>
      <li>
        <a href="/">
          <span class="material-icons-outlined"> facebook </span>
        </a>
      </li>
      <li>
        <a href="/">
          <span class="material-icons-outlined"> face </span>
        </a>
      </li>
    </ul>
  </div>

  <div class="contact_msg">
    <h3 class="title">
      Send a Message
    </h3>

    <div class="form_fild">
      <div class="input_group w_50">
        <input type="text" class="input" required />
        <label class="placeholder">First Name</label>
      </div>

      <div class="input_group w_50">
        <input type="text" class="input" required />
        <label class="placeholder">Last Name</label>
      </div>

      <div class="input_group w_50">
        <input type="text" class="input" required />
        <label class="placeholder">Emal Address</label>
      </div>

      <div class="input_group w_50">
        <input type="tel" class="input" required />
        <label class="placeholder">Mobile Number</label>
      </div>

      <div class="input_group w_100">
        <textarea class="input input_textarea " rows="6" required></textarea>
        <label class="placeholder textarea">Write your message here...</label>
      </div>

      <div class="input_group">
        <input type="submit" class="btn" value="Send" onClick={() =>{navigate("/"); }}/>
      </div>

    </div>

  </div>

</section>
    </div>
  )
}
