import "./styles.css";
import React from "react";
export default function WithUsememo() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  //const encoded = React.useMemo(() => encodeNumber(phone), [phone]);
  const encoded = encodeNumber(phone);
  return (
    <div className="App">
      <input
        placeholder="nom"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="telephone"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <br />
      Enconded: {encoded}
    </div>
  );
}

function encodeNumber(phone) {
  let r = (Math.random() + 1).toString(36).substring(2);
  return phone ? r : "";
}
