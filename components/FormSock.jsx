const React = require("react");

function FormSock() {
  return (
    <form action="/sock-generator/select">
      <select name="color">
        <option value="1">Красный</option>
        <option value="2">Синий</option>
        <option value="3">Зелёный</option>
      </select>
      <select name="design">
        <option value="1">В клетку</option>
        <option value="2">В полоску</option>
        <option value="3">В кружочек</option>
      </select>
      <select name="photo">
        <option value="1">Photo_1</option>
        <option value="2">Photo_2</option>
        <option value="3">Photo_3</option>
      </select>
      <button>Выбрать</button>
    </form>
  );
}

module.exports = FormSock;
