export default function Email(props) {
  const setRead = (targetEmail) => {
    //adds a function that sets the email read, "toggleRead" sets an already read email as unread which we don't want in this case
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: true } : email
      );
    props.setEmails(updatedEmails);
  };

  function clickAndRead() {
    props.setEmailClicked(true); //lets the program know that an email has been clicked
    props.setClickedEmail(props.email); //lets the program know which email has been clicked
    setRead(props.email); //calls setRead so the clicked email will be become read
  }

  return (
    <li
      key={props.index}
      className={`email ${props.email.read ? "read" : "unread"}`}
    >
      <div className="select">
        <input
          className="select-checkbox"
          type="checkbox"
          checked={props.email.read}
          onChange={() => props.toggleRead(props.email)}
        />
      </div>
      <div className="star">
        <input
          className="star-checkbox"
          type="checkbox"
          checked={props.email.starred}
          onChange={() => props.toggleStar(props.email)}
        />
      </div>
      <div
        className="sender"
        onClick={() => {
          clickAndRead();
        }}
      >
        {props.email.sender}
      </div>
      <div
        className="title"
        onClick={() => {
          clickAndRead();
        }}
      >
        {props.email.title}
      </div>
    </li>
  );
}
