import StarRating from "./StarRating";
import styles from "../styles/page.module.scss";
import { useState } from "react";

const FormContainer = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [starRating, setStarRating] = useState(null);
  const [checkedStatus, setCheckedStatus] = useState(Array(6).fill(false));

  const handleRating = (data) => {
    setStarRating(data);
  };
  const handleCheck = (event) => {
    const index = event.target.value - 1;
    const newCheckedStatus = [...checkedStatus];
    newCheckedStatus[index] = event.target.checked;
    setCheckedStatus(newCheckedStatus);
  };
  const handleForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
  };
  return (
    <form onSubmit={handleForm} className={styles["form"]}>
      <h2>Título da pergunta deve ficar aqui</h2>
      <p className={styles["description"]}>
        Também é importante ter um espaço para o dono da loja colocar uma
        descrição da pergunta para ajudar o entendimento do usuário
      </p>
      <StarRating data={handleRating} value={starRating} name="starRating" />
      <h2>Título da pergunta deve ficar aqui</h2>
      <p className={styles["description"]}>
        Também é importante ter um espaço para o dono da loja colocar uma
        descrição da pergunta para ajudar o entendimento do usuário
      </p>
      <div className={styles["radio-container"]}>
        {Array.from({ length: 10 }).map((_, i) => (
          <label className={styles["radio-label"]} key={i}>
            <input type="radio" name="radio" value={i + 1} />
            {i + 1}
          </label>
        ))}
      </div>
      <div className={styles["textarea-form-container"]}>
        <p className={styles["subtitle"]}>
          Descreva o motivo de sua avaliação <span>(opcional)</span>
        </p>
        <textarea
          placeholder="Digite aqui..."
          className={styles["textarea-form"]}
          name="description"
          required
        ></textarea>
      </div>
      <select
        onChange={(e) => setSelectedOption(e.target.value)}
        className={styles["select"]}
        name="store"
        required
        defaultValue=""
      >
        <option className={styles.placeholder} disabled value={""}>
          Qual loja você frequenta?
        </option>
        <option value={1}>Opção 1</option>
        <option value={2}>Opção 2</option>
        <option value={3}>Opção 3</option>
      </select>

      <div className={styles["bolean-radio-container"]}>
        <p className={styles["title"]}>Pergunta de escolha única?</p>
        <div className={styles["bolean-radio-form"]}>
          <div>
            <input
              type="radio"
              id="sim"
              name="bolean-radio-button"
              value="true"
              required
            />
            <label className={styles["secondary-dark-color"]} htmlFor="sim">
              Sim
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="nao"
              name="bolean-radio-button"
              value="false"
            />
            <label className={styles["secondary-dark-color"]} htmlFor="nao">
              Não
            </label>
          </div>
        </div>
      </div>

      <div className={styles["button-checkboxes-container"]}>
        <p className={styles["title"]}>Pergunta de múltipla escolha?</p>
        <div className={styles["checkboxes-list"]}>
          {Array.from({ length: 6 }).map((_, i) => (
            <label
              key={i + 1}
              className={`${styles["checkbox-button"]} ${
                checkedStatus[i] ? styles["checked-style"] : ""
              }`}
            >
              <input
                className={styles.input}
                type="checkbox"
                value={i + 1}
                name={`opcao-button-checkbox ${i + 1}`}
                onChange={handleCheck}
              />
              OPÇÃO {i + 1}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.checkboxes}>
        <p className={styles["title"]}>Pergunta de múltipla escolha?</p>
        {Array.from({ length: 10 }).map((_, i) => (
          <label className={styles["checkbox-label"]} key={i + 1}>
            <input
              type="checkbox"
              value={i + 1}
              name={`opcao-checkbox ${i + 1}`}
            />
            OPC {i + 1}
          </label>
        ))}
      </div>

      <div className={styles["textarea-form-container"]}>
        <p className={styles["subtitle"]}>Pergunta de texto?</p>
        <textarea
          placeholder="Digite a resposta"
          className={styles["textarea-form-question"]}
          name="description-2"
          required
        ></textarea>
      </div>
      <div className={styles["textarea-form-container"]}>
        <p className={styles["subtitle"]}>Pergunta de texto?</p>
        <textarea
          placeholder="Digite a resposta"
          className={styles["textarea-form-question"]}
          name="description-3"
          required
        ></textarea>
      </div>
      <button className={styles["submit-button"]} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default FormContainer;
