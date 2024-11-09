import React, { useState } from 'react';
import HelloWorld from './HelloWorld';
import ToDoList from './ToDoList';
import './App.css'; // Stil dosyasını ekliyoruz

function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "Hello World", content: <HelloWorld /> },
    { title: "ToDo List", content: <ToDoList /> }
  ];

  return (
    <div>
      {/* Tab başlıkları */}
      <div className="tab-header">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-title ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      
      {/* Aktif tabın içeriği */}
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default TabComponent;

