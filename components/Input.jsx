
export default function Input({titulo, placeholder, acao, valor}) {
    return (
        <div>
            <p>{titulo}</p>
            <input onChange={acao} value={valor} placeholder={placeholder} />
        </div>
    )
}