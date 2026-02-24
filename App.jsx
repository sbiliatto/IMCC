
import {useState} from "react";
import Input from "./components/Input";
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
        <>
            <Input
                titulo={"Seu nome é: " + nome}
                placeholder="Digite seu nome"
                valor= {nome}
                acao={alterarNome}
            />
            <Input
                titulo={"Sua idade é:" + idade}
                placeholder="Digite sua idade"
                valor={idade}
                acao={alterarIdade}
                tipo="number"
            />

            <p>Contador: {numero}</p>
            <button onClick={adicionar}>Add +1</button>
            <button onClick={subtrair}>Menos 1</button>


            <Input
                titulo="Peso"
                placeholder="Digite seu peso"
                valor={peso}
                acao={alterarPeso}
                tipo="number"
            />
            <Input
                titulo="Altura"
                placeholder="Digite sua altura"
                valor={altura}
                acao={alterarAltura}
                tipo="number"
            />
            <button onClick={calcularImc}>Calcular IMC</button>

            {imc > 0 && <p>Seu IMC é {imc}</p>}
            {(imc > 0 && imc < 18.5) && <p>Você está com Magreza</p>}
            {(imc >= 18.5 && imc <= 24.9) && <p>Normal</p>}
            {(imc >= 25 && imc <= 29.9) && <p>Sobrepeso</p>}
            {(imc >= 30 && imc <= 39.9) && <p>Obesidade</p>}
            {(imc >= 40 ) && <p>Obesidade Grave</p>}
        </>
    );
}