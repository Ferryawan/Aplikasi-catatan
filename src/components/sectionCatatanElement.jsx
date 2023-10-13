import style from "../styles/section-notes.module.css";
import Card from "./CardElement";

const SectionCatatanElement = ({ label, catatan, setCatatan }) => {
  return (
    <section>
      <h2 className={style.__sectionNoteHeading__}>{label}</h2>
      {catatan.length === 0 ? (
        <p className={style.__catatanKosong__}>Tidak ada catatan.</p>
      ) : (
        <div className={style.__listNote__}>
          {catatan?.map((note) => (
            <Card key={note.id} action={setCatatan} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SectionCatatanElement;
