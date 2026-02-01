import { useState, useMemo } from 'react';

const MOCK_PRODUCTS = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 1000) + 10
}));

function Bai3() {
  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000);

  const filteredProducts = useMemo(() => {
    console.time('Filter Time');
    const result = MOCK_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) && p.price <= maxPrice
    );
    console.timeEnd('Filter Time');
    return result;
  }, [search, maxPrice]);

  const totalAmount = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  return (
    <div className="exercise-box" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Bài 3: Product Filter (useMemo)</h3>
      <input 
        placeholder="Search name..." 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <input 
        type="number" 
        value={maxPrice} 
        onChange={(e) => setMaxPrice(Number(e.target.value))} 
      />
      <p>Total: <strong>{totalAmount} USD</strong></p>
      <ul>
        {filteredProducts.slice(0, 5).map(p => (
          <li key={p.id}>{p.name} - ${p.price}</li>
        ))}
        <li>...</li>
      </ul>
    </div>
  );
}

export default Bai3;