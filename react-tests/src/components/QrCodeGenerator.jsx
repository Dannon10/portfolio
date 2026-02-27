import { useState } from 'react'
import QrCode from 'react-qr-code'

export default function QrCodeGenerator() {

    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateQrCode() {
        setQrCode(input)
        setInput('')
    }
    
    return (
        <div className='qr-code-container'>
            <h1>QR Code Generator</h1>
            <div>
                <input  
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                value={input}
                name="qr-code" 
                placeholder='Enter your value here' />
                <button 
                disabled={input.trim() !== '' ? false : true} 
                onClick={handleGenerateQrCode}>
                    Generate
                </button>
            </div>
            <div>
                <QrCode
                    id="qr-code-value"
                    value={qrCode }
                    size={256}
                    style={{ backgroundColor: "white" }}
                />
            </div>
        </div>
    )
}
