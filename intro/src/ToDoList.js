import React, { useState } from 'react';

// ToDoCount Bileşeni: Görev sayısını göstermek için kullanılır
function ToDoCount({ count }) {
  return (
    <div>
      <h3>Toplam Görev Sayısı: {count}</h3>
    </div>
  );
}
const initialTasks = [
  { text: "Yeni bir React projesi oluştur (npx create-react-app proje-adi)", completed: true },
  { text: "Component yapısını planla ve gerekli componentleri oluştur", completed: true },
  { text: "Gerekli durum yönetimi hook'larını (useState, useEffect) kullanmayı öğren ve uygula", completed: false },
  { text: "Componentler arası veri akışı için props kullanımını öğren ve uygula", completed: false },
  { text: "Proje dizin yapısını düzenle ve organize et", completed: false },
  { text: "Yeniden kullanılabilir ve esnek componentler yaz", completed: false },
  { text: "API veya veri kaynaklarından veri çekme işlemleri yap", completed: false },
  { text: "Error boundary kullanarak hataları yakala", completed: false },
  { text: "Projenin performansını optimize et (örneğin, React.memo veya useMemo kullan)", completed: false },
  { text: "React Router ile sayfa geçişlerini oluştur", completed: false },
  { text: "CSS veya stil kütüphanesi ekle (örneğin, Styled Components veya CSS Modules)", completed: false },
  { text: "Proje testlerini yaz (örneğin, Jest veya React Testing Library ile)", completed: false },
  { text: "Componentleri mobil uyumlu yap (Responsive Design)", completed: false },
  { text: "Componentleri modülerleştir ve dosya yapısını optimize et", completed: false },
  { text: "Deploy sürecini öğren ve projeyi canlıya çıkar (örneğin, Netlify veya Vercel ile)", completed: false }
];
function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  // Görev listesini resetleme işlevi
  const resetTasks = () => {
    setTasks(initialTasks); // Görev listesini boş diziye ayarlıyoruz
  };

  return (
    <div>
      <h2>React Developer Görev Listesi</h2>
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
        placeholder="Yeni görev ekle" 
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button onClick={addTask} style={{ padding: '5px 10px' }}>Ekle</button>
      <button onClick={resetTasks}>Reset</button> {/* Reset Butonu */}
      {/* ToDoCount Bileşenini çağırıyoruz ve görev sayısını props olarak geçiriyoruz */}
      <ToDoCount count={tasks.length} />
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: '10px 0', textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => toggleCompletion(index)} 
              style={{ marginRight: '10px' }}
            />
            {task.text}
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '10px', padding: '2px 5px' }}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
