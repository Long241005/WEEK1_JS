import { useState, useEffect } from 'react';

function Bai2() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="exercise-box" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Bài 2: Digital Clock (useEffect)</h3>
      <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#646cff' }}>
        {time.toLocaleTimeString()}
      </div>
      <p>Giờ hiện tại được cập nhật mỗi giây</p>
    </div>
  );
}

export default Bai2;