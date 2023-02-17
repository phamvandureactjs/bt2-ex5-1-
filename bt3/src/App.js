
import {useEffect, useState } from 'react';

function App() {

 const [time, setTime] = useState(Date());
 useEffect (() => {
    setTimeout (() => {
      setTime(Date());
    }, 1000);
 });
    return (
        <div>
            {time}
        </div>
    );
}

export default App;

