import React, { useState } from 'react';
import { Shuffle } from 'lucide-react';

function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [shuffledItems, setShuffledItems] = useState<string[]>([]);

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput('');
    }
  };

  const handleShuffle = () => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setShuffledItems(shuffled);
  };

  const handleClear = () => {
    setItems([]);
    setShuffledItems([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">随机排序器</h1>
        
        <form onSubmit={handleAddItem} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="输入数字或单词"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              添加
            </button>
          </div>
        </form>

        <div className="mb-6">
          <div className="text-sm font-medium text-gray-600 mb-2">已添加项目：</div>
          <div className="flex flex-wrap gap-2">
            {items.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-full text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {items.length > 0 && (
          <div className="flex gap-2 mb-6">
            <button
              onClick={handleShuffle}
              className="flex-1 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
            >
              <Shuffle size={20} />
              随机排序
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              清空
            </button>
          </div>
        )}

        {shuffledItems.length > 0 && (
          <div>
            <div className="text-sm font-medium text-gray-600 mb-2">随机排序结果：</div>
            <div className="flex flex-wrap gap-2">
              {shuffledItems.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-indigo-100 rounded-full text-indigo-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;