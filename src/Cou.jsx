import react, { useState } from 'react';
const Count = () => {
    const [coun, setCount] = useState(10);
    function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/https://mukul1806.github.io/Timetable/')
            .then(res => res.json())
            .then(res => {
                setCount(res.value);
            })
    }
    setInterval(1000, updateVisitCount);
    return (
        <h1>{coun}
        </h1>
    );
};
export default Count;
