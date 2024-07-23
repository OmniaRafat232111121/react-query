import React from 'react';

const Content = () => {
  const cards = [
    { title: "Card 1", description: "This is the first card." },
    { title: "Card 2", description: "This is the second card." },
    { title: "Card 3", description: "This is the third card." },
    { title: "Card 4", description: "This is the fourth card." },
    { title: "Card 5", description: "This is the fifth card." },
    { title: "Card 6", description: "This is the sixth card." },
  ];

  return (
    <div className="flex-1 p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Main Content</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
