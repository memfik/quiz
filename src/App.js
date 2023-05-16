import { useState } from 'react';
import './App.css';
import React from 'react';
const questions = [
  {
    title: 'Я люблю',
    variants: ['Валерию', 'кушать', 'спать'],
    correct: 0,
  },
  {
    title: 'Крым',
    variants: ['России', 'Мой', 'Украины'],
    correct: 1,
  },
  {
    title: 'Что такое Memfik?',
    variants: [
      'Псевдоним',
      'Хз',
      'Стиль жизни',
    ],
    correct: 2,
  },
  {
    title: 'Моя любимая жижка?',
    variants: [
      'Husky',
      'Бруско',
      'Максвелс',
    ],
    correct: 0,
  },
  {
    title: 'Кто выиграет мажор 2023?',
    variants: [
      'Navi',
      'Vitality',
      'G2',
    ],
    correct: 0,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://bipbap.ru/wp-content/uploads/2022/11/innocence-en-danger-emoticon-wink-8350944a80bcacb6b76082b877cca174-730x586-1.jpeg" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'><button>Попробовать снова</button></a>
    </div>
  );
}

function Game({question,quest,onClickVariant}) {
  const percent = Math.round((question / questions.length * 100))
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{quest.title}</h1>
      <ul>
        {
          quest.variants.map((text,index) => <li onClick={() => onClickVariant(index)} key={text}>{text}</li>)
        }
      </ul>
    </>
  );
}

function App() {
  const [question,setQuestion] = useState(0)
  const [correct,setCorrect] = useState(0)
  const quest = questions[question]
  const onClickVariant = (index) => {
    setQuestion(question + 1)

    if(index === quest.correct) {
      setCorrect(correct + 1)
    }
  }
  return (
    <div className="App">
      {
        question != questions.length ? <Game question={question} onClickVariant={onClickVariant} quest={quest}/> : <Result correct={correct}/>
      }
    </div>
  );
}

export default App;
