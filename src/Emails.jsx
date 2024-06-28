import Email from "./Email.jsx";
import { useState } from "react";

export default function Emails(props) {
  const [emailClicked, setEmailClicked] = useState(false);
  const [clickedEmail, setClickedEmail] = useState(undefined);

  if (emailClicked) {
    return (
      <div>
        <h1>{clickedEmail.sender}</h1>
        <br />
        <h2>{clickedEmail.title}</h2>
        <br />
        <a
          href="#"
          onClick={() => {
            setEmailClicked(false);
          }}
        >
          Back
        </a>
      </div>
    );
  } else {
    return (
      <ul>
        {props.filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleStar={props.toggleStar}
            toggleRead={props.toggleRead}
            setEmailClicked={setEmailClicked}
            setClickedEmail={setClickedEmail}
            setEmails={props.setEmails}
          />
        ))}
      </ul>
    );
  }
}
