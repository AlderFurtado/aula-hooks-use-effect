import { useEffect, useState } from "react";

function App() {
  const [birthYear, setBirthYear] = useState(1997);
  const [age, setAge] = useState(2021 - 1997);

  // //componentDidUpdate
  // //  - Quando o componente é atualizado (mudança de state)
  useEffect(() => {
    alert("Esse componente foi atualizado");
  });

  // //componentDidMount
  // //  - Quando o componente é montado
  useEffect(() => {
    alert("Esse componente foi montado e esse aviso só aparecerá uma vez");
  }, []);

  // //componentWillUnmount
  // //  - Quando o componente é desmontado
  useEffect(() => {
    return () => {
      alert("Esse componente foi desmontado");
    };
  });

  // Escuta a atualização exclusiva de um elemento dentro do component
  useEffect(() => {
    setAge(2021 - birthYear);
  }, [birthYear]);

  return (
    <div>
      <h1>Ano atual: 2021</h1>
      <h1>Ano de nascimento: {birthYear}</h1>
      <div>
        <button onClick={() => setBirthYear(birthYear - 1)}>-</button>
        <button onClick={() => setBirthYear(birthYear + 1)}>+</button>
      </div>
      <h1>Idade: {age}</h1>
    </div>
  );
}

export default App;
