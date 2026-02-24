import {useState} from "react";
import css from "./App.module.css";

export default function App() {

    const [numero, setNumero] = useState(0);
    const [nome, setNome] = useState();
    const [idade, setIdade] = useState();
    const [imc, setImc] = useState();
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    function adicionar(){
        setNumero(numero + 1);
    }

    function subtrair(){
        setNumero(numero - 1);
    }

    function alterarNome(e){
        setNome(e.target.value);
    }
    function alterarIdade(e){
        setIdade(e.target.value);
    }

    function alterarPeso(e){
        setPeso(e.target.value);
    }
    function alterarAltura(e){
        setAltura(e.target.value);
    }
    function calcularImc(){
         setImc(peso / (altura * altura))

    }

    return (
        <div>
            <p> Seu nome é: {nome} </p>
            <input placeholder="Digite seu nome" value={nome} onChange={alterarNome} />

            <p> Sua idade é: {idade} </p>
            <input placeholder="Digite sua idade" onChange={alterarIdade} />

            <p> Contador: {numero}</p>
            <button onClick={adicionar}> Add +1</button>
            <button onClick={subtrair}> Menos 1</button>

            <p> IMC: {imc}</p>
            <input placeholder="Digite seu peso" onChange={alterarPeso} />
            <input placeholder="Digite sua altura" onChange={alterarAltura} />
            <button onClick={calcularImc}> Calcule</button>

        </div>

    )
}