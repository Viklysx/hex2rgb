import { useState } from 'react';
import './ColorConverter.css';

export default function ColorConverter({ props }) {
    const [form, setForm] = useState({
        rgb: '',
        hex: ''
    });

    const handleColorChange = evt => {
        const valueColor = evt.target.value;
        const reg = /#[a-f0-9]{6}/gi;
        setForm(prevForm => ({...prevForm, rgb: ''}));
        if (valueColor.length === 7) {   
            if (reg.test(valueColor)) {
                const r = parseInt(valueColor.substring(1,3),16);
                const g = parseInt(valueColor.substring(3,5),16);
                const b = parseInt(valueColor.substring(5),16);
                const rgb = `rgb(${r}, ${g}, ${b})`;
                setForm(prevForm => ({...prevForm, hex: evt.target.value, rgb: rgb}));
            } else {
                setForm(prevForm => ({...prevForm, hex: evt.target.value, rgb: 'Ошибка!'}));
            }            
        } 
    };

    return ( 
        <form style={{backgroundColor: form.hex}}>
            <input 
                type="text" 
                onChange={handleColorChange} 
                maxLength="7"/>
            <span>{form.rgb}</span> 
        </form>
    )
}