import Input from "./InputElement";
import style from "../styles/header.module.css";

const HeaderElement = ({ pencarian, perbaharuiQuery }) => {
  return (
    <header className={style.__headerContainer__}>
      <h1 className={style.__headerText__}>Dappa Note</h1>
      <Input value={pencarian} onChange={perbaharuiQuery} type="search" id="search_note" name="search_note" placeholder="Cari Catatan" />
    </header>
  );
};

export default HeaderElement;
