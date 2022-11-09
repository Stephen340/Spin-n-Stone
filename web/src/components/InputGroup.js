const InputGroup = ({ title, text_hint, btn_label, ingredient_type }) => {
  return (
    <div className="border border-secondary rounded p-3 my-3 mx-auto w-75">
      <h4>{title}</h4>
      <div className="d-flex justify-content-center flex-wrap">
        <div className="d-flex flex-wrap my-2">
          {text_hint && (
            <input type="text" placeholder={text_hint} className="me-2"></input>
          )}

          {ingredient_type && (
            <select
              className="form-select w-auto"
              aria-label="Default select example">
              <option selected>Select Type</option>
              <option value="1">Sauce</option>
              <option value="2">Cheese</option>
              <option value="3">Drizzle</option>
              <option value="4">Meats</option>
              <option value="5">Raw Veggies</option>
              <option value="6">Roasted Veggies</option>
              <option value="7">Other</option>
            </select>
          )}
        </div>

        <input type="button" className="btn btn-primary my-2" value={btn_label}></input>
      </div>
    </div>
  );
};

export default InputGroup;
