const React = require("react");
const Layout = require("./Layout");
function MainPage({user}){
    return(
<Layout user={user}>
    <h1>MainPage</h1>
    <h2>Привет друг!Ты попал в наше приложение по генерации и продажи носков. </h2>
    <button className="btn_start" >Кнопка для переноса в наш волшебный генератор</button>
</Layout>
    )
}
module.exports=MainPage