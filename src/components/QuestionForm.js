import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
            <div>
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
            </div>
        </div>
    )
    
}

export default QuestionForm


