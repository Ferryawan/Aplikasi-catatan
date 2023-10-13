import style from "../styles/button.module.css";

const ButtonElement = ({ label, perubahanHandler }) => {
  return (
    <button className={style.__tombol__} type="button" onClick={perubahanHandler} data-action={label} >
      {label}
    </button>
  );
};

export default ButtonElement;
