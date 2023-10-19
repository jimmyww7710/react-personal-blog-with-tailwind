import { useEffect, useState } from "react";
const Badge = (prop) => {
    const { isOutline, text } = prop;
    const [colorClassName, setStateColor] = useState(text);
    useEffect(() => {
        let colorName = "badge-ghost"
        switch (text.toLowerCase()) {
            case 'css' || 'js':
                colorName = 'badge-info'
                break;
            case 'angular' || 'vue':
                colorName = 'badge-secondary'
                break;
            case 'english learning note':
                colorName = 'badge-accent'
                break;
        }
        setStateColor(colorName);
    }, [text]);
    return (
        <>
            <div className={`badge${isOutline ? ' badge-outline' : ''} ${colorClassName}`} >{text}</div>
        </>
    )
}

export default Badge