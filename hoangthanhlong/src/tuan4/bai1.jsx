import { useEffect, useState } from 'react';

function Bai1T4() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Lỗi khi tải dữ liệu từ server!");
        }
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  
  return (
    <div className="exercise-box" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '10px 0' }}>
      {}
      <h2 style={{ color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
        Bài 1 Tuần 4
      </h2>
      
      {}
      {loading ? (
        <p>⏳ Đang tải dữ liệu, vui lòng chờ...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>❌ Lỗi: {error}</p>
      ) : (
        <>
          <h3 style={{ marginTop: '20px' }}>Danh sách người dùng</h3>
          {data.map((item) => (
            <div key={item.id} className="user-item" style={{ borderBottom: '1px dashed #eee' }}>
              <p><strong>{item.name}</strong> -- {item.email}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Bai1T4;