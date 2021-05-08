import { useState } from 'react';
import './ColorConverter.css';

export default function ColorConverter({ props }) {
    const [form, setForm] = useState({
        rgb: 'rgb(153, 51, 102)',
        hex: '#993366'
    });

    const handleColorChange = evt => {
        setForm(prevForm => ({...prevForm, hex: evt.target.value}));
        const valueColor = evt.target.value;
        // if (valueColor.length === 7) {
            
        // }
    };

    return ( 
        <form style={{backgroundColor: form.hex}}>
            <input 
                type="text" 
                onChange={handleColorChange} 
                maxLength="7"/>
            <span> </span> 
        </form>
    )
}