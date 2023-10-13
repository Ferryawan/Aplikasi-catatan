import { useState } from "react";
import Input from "./InputElement";
import style from "../styles/form-input.module.css";

const FormInput = ({ updateCatatan }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const buatCatatan = (e) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();

    updateCatatan((notes) => [
      ...notes,
      {
        id: timestamp,
        title,
        body: note,
        archived: false,
        createdAt: timestamp,
      },
    ]);
  };

  return (
    <form className={style.__formStyle__} onSubmit={buatCatatan}>
      <h2 className={style.__formHeading__}>Buat Catatan</h2>
      <p className={style.__smallText__}>
        Karakter yang tersisa:{" "}
        <span className={style.__count__}>{50 - title.length}</span>
      </p>
      <Input value={title} onChange={setTitle} type="text" placeholder="Title" id="title" name="title" required />
      <Input value={note} onChange={setNote} type="textarea" placeholder="Tulis Catatan Anda" id="note" name="note" required />
      <Input type="submit" id="submit_form" name="submit_form" value="Buat" />
    </form>
  );
};

export default FormInput;
