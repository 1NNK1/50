import React, { useState, useEffect } from 'react';

// Оптимизированный список
const ExpensiveList = React.memo(({ items }) => {
  return (
    <div style={styles.list}>
      {items.map((item, idx) => (
        <div key={idx} style={styles.listItem}>{item}</div>
      ))}
    </div>
  );
});

// Оптимизированная кнопка
const ChildButton = React.memo(({ onClick, label }) => {
  return (
    <button onClick={onClick} style={styles.button}>{label}</button>
  );
});

// Главная страница демо
const MemoDemo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [items] = useState(["React", "Redux", "Vite", "Memoization", "Performance"]);

  // Мемоизация вычислений
  const filteredItems = React.useMemo(() => {
    return items.filter(item => item.toLowerCase().includes(text.toLowerCase()));
  }, [text, items]);

  // Мемоизация колбэка
  const handleIncrement = React.useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={{textAlign: 'center'}}>Демонстрация Мемоизации</h1>

      <div style={styles.section}>
        <h3>1. useMemo (Фильтрация)</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Поиск..."
          style={styles.input}
        />
        <ExpensiveList items={filteredItems} />
      </div>

      <div style={styles.section}>
        <h3>2. useCallback & React.memo</h3>
        <div style={styles.row}>
          <ChildButton onClick={handleIncrement} label="Увеличить счетчик" />
          <span style={styles.count}>Счетчик: {count}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'Arial' },
  section: { backgroundColor: 'white', padding: '20px', borderRadius: '10px', marginBottom: '30px', border: '1px solid #eee' },
  input: { width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' },
  list: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
  listItem: { padding: '8px 15px', backgroundColor: '#f0f0f0', borderRadius: '20px', border: '1px solid #444', color: '#444' },
  row: { display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' },
  button: { padding: '10px 20px', backgroundColor: '#444', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  count: { fontSize: '1.2rem', fontWeight: 'bold' }
};

export default MemoDemo;
