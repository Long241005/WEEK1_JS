import { useReducer, useEffect } from 'react';

const initialState = { 
  status: 'idle', 
  data: [], 
  error: null 
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, status: 'loading', error: null };
    case 'FETCH_SUCCESS':
      return { ...state, status: 'success', data: action.payload };
    case 'FETCH_ERROR':
      return { ...state, status: 'error', error: action.payload };
    default:
      return state;
  }
}

function Bai6() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error('Kết nối thất bại');
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="exercise-box" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Bài 6: Fetch Users State Machine</h3>
      
      {state.status === 'loading' && <p>Đang tải dữ liệu...</p>}

      {state.status === 'error' && (
        <div style={{ color: 'red' }}>
          <p>Lỗi: {state.error}</p>
          <button onClick={fetchData}>Retry</button>
        </div>
      )}

      {state.status === 'success' && (
        <ul>
          {state.data.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Bai6;