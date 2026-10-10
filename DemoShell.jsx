import React from 'react';
import './shell.css';

// Оболочка показывает, что демонстрирует проект, и оборачивает рабочее приложение.
const INFO = {
  number: 50,
  title: "Мемоизация",
  description: "React.memo, useMemo и useCallback предотвращают лишние вычисления и повторные рендеры.",
  shows: ["useMemo фильтрует список", "useCallback и React.memo для кнопки и списка"],
  how: ["Вводите текст в поиск и нажимайте кнопку счётчика"],
  files: "src/\n├── components/\n├── shell/\n│   ├── DemoShell.jsx\n│   └── shell.css\n├── App.jsx\n├── index.css\n└── main.jsx",
};

const DemoShell = ({ children }) => (
  <div className="shell">
    <header className="shell-header">
      <p className="shell-tag">ДЗ {INFO.number}</p>
      <h1 className="shell-title">{INFO.title}</h1>
      <p className="shell-description">{INFO.description}</p>
    </header>

    <div className="shell-info">
      <section className="shell-box">
        <h2>Что показывает</h2>
        <ul>
          {INFO.shows.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="shell-box">
        <h2>Как проверить</h2>
        <ul>
          {INFO.how.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>

    <h2 className="shell-section-title">Работа приложения</h2>
    <main className="shell-stage">{children}</main>

    <h2 className="shell-section-title">Структура src</h2>
    <pre className="shell-files">{INFO.files}</pre>
  </div>
);

export default DemoShell;
