import style from "../styles/card.module.css";
import { showFormattedDate } from "../utils";
import Button from "./ButtonElement";

const CardElement = ({ id, title, createdAt, body, archived, action }) => {
  const hapusCatatan = (item) =>
    action((notes) => notes.filter((note) => note.id !== item));
  const arsipToggle = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      })
    );
  };

  return (
    <article id={id} className={style.__cardStyle__}>
      <header className={style.__cardHeaderText__}>
        <h3 className={style.__cardHeading__}>{title}</h3>
        <small className={style.__cardDate__}>
          {showFormattedDate(createdAt)}
        </small>
        <p className={style.__catatan__}>{body}</p>
      </header>
      <footer className={style.__cardFooter__}>
        <Button perubahanHandler={() => hapusCatatan(id)} label="Hapus" />
        <Button
          perubahanHandler={() => arsipToggle(id)}
          label={archived ? "No Arsip" : "Arsip"}
        />
      </footer>
    </article>
  );
};

export default CardElement;
