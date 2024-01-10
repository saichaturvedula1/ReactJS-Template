import coreconceptsImg from '../assets/react-core-concepts.png';
import './Header.css';
const reactText = ["Fundamental","Core","Important"];

function genRandomInt(maxval){
return Math.floor(Math.random() * (maxval + 1));
}

export default function Header(){
return(
  <header>
        <img src={coreconceptsImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactText[genRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
  </header>
)
}