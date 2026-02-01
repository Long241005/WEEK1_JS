import { useState, useRef } from 'react';

function Bai5() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);
  const inputRef = useRef(null);

  const startStopwatch = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  const resetStopwatch = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, time]);
    inputRef.current.focus();
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = (ms % 1000) / 10;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toFixed(0).padStart(2, '0')}`;
  };

  return (
    <div className="exercise-box"style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }} >
      <h3>Bài 5: Stopwatch (useRef)</h3>
      <div style={{ fontSize: '2rem', fontFamily: 'monospace' }}>{formatTime(time)}</div>
      <button onClick={startStopwatch}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={resetStopwatch}>Reset</button>
      <button onClick={addLap}>Add Lap</button>
      <br />
      <input ref={inputRef} placeholder="Lap name..." style={{ marginTop: '10px' }} />
      <ul>
        {laps.map((l, index) => (
          <li key={index}>Lap {index + 1}: {formatTime(l)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Bai5;