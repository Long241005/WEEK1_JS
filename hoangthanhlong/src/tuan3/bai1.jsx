import { useState } from 'react'

function Bai1() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    alert("Thành công!");
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Bài 1: Form Thông Tin</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Họ tên: </label>
          <input name="name" value={user.name} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input name="email" type="email" value={user.email} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Tuổi: </label>
          <input name="age" type="number" value={user.age} onChange={handleChange} />
        </div>
        <br />
        <button type="submit">Gửi</button>
      </form>
      
      <div style={{ marginTop: '20px', background: '#f0f0f0', padding: '10px' }}>
        <strong>Dữ liệu State:</strong>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  )
}

export default Bai1