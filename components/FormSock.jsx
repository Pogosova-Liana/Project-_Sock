const React = require("react");

function FormSock() {
  return (
    <form className="sock-select">
      <input type="radio" name="color" value="1" />
      Красный
      <br />
      <input type="radio" name="color" value="2" />
      Синий
      <br />
      <input type="radio" name="color" value="3" />
      Зелёный
      <hr />
      <input type="radio" name="design" value="1" />В клетку
      <br />
      <input type="radio" name="design" value="2" />В полоску
      <br />
      <input type="radio" name="design" value="3" />В кружочек
      <hr />
      <input type="radio" name="photo" value="1" />
      Photo_1
      <br />
      <input type="radio" name="photo" value="2" />
      Photo_2
      <br />
      <input type="radio" name="photo" value="3" />
      Photo_3
      <hr />
      <button>Выбрать</button>
    </form>
  );
}

module.exports = FormSock;
