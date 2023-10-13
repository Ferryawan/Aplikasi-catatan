import { useState, useEffect } from "react";
import { FormInputElement, HeaderElement, SectionCatatanElement } from "./components";
import style from "./styles/app.module.css";
import { getInitialData } from "./utils";

function Application() {
  const [query, setQuery] = useState("");
  const [catatan, setCatatan] = useState(getInitialData());
  const [pencarianCatatan, setPencarianCatatan] = useState([]);

  const arsipCatatan = (pencarianCatatan || catatan).filter((note) => note.archived);
  const catatanAktif = (pencarianCatatan || catatan).filter((note) => !note.archived);

  useEffect(() => {
    setPencarianCatatan(
      catatan.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, catatan]);

  return (
    <>
      <HeaderElement pencarian={query} perbaharuiQuery={setQuery} updateCatatan={setCatatan} />
      <main className={style.__appMain__}>
        <FormInputElement updateCatatan={setCatatan} />
        <SectionCatatanElement
          label="Catatan Aktif" catatan={catatanAktif} setCatatan={setCatatan} />
        <SectionCatatanElement label="Arsip" catatan={arsipCatatan} setCatatan={setCatatan} />
      </main>
    </>
  );
}

export default Application;
