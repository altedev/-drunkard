import React, { useEffect, useState } from 'react';
import cls from './App.module.scss'
import CurrentDeckPlayerOne from './components/CurrentDeckPlayerOne';
import CurrentDeckPlayerTwo from './components/CurrentDeckPlayerTwo';
import PlayerOne from './components/PlayerOne';
import PlayerTwo from './components/PlayerTwo';

function App() {

  const [userOne, setUserOne] = useState([])
  const [userTwo, setUserTwo] = useState([])
  const [playerOne, setPlayerOne] = useState([])
  const [playerTwo, setPlayerTwo] = useState([])
  const [modal, setModal] = useState(false)
  const [flag, setFlag] = useState(false)
  const [playerNameOne, setPlayerNameOne] = useState('Игрок 1')
  const [playerNameTwo, setPlayerNameTwo] = useState('Игрок 2')
  const [closeInputOne, setCloseInputOne] = useState(false)
  const [closeInputTwo, setCloseInputTwo] = useState(false)

  const state = {
    card: [
      {
        value: 1,
        name: '6'
      },
      {
        value: 2,
        name: '7'
      },
      {
        value: 3,
        name: '8'
      },
      {
        value: 4,
        name: '9'
      },
      {
        value: 5,
        name: '10'
      },
      {
        value: 6,
        name: 'Jack'
      },
      {
        value: 7,
        name: 'Queen'
      },
      {
        value: 8,
        name: 'King'
      },
      {
        value: 9,
        name: 'Ace'
      }
    ],
    suits: ['clubs', 'diamonds', 'hearts', 'spades']
  }

  const deck = () => {
    const newDeck = []
    state.card.forEach((card) => {
      state.suits.forEach((suits) => {
        const newCard = { ...card }
        newCard.suits = suits
        newDeck.push(newCard)
      })
    })
    const newArrayOne = []
    const newArrayTwo = []
    newDeck.sort(() => {
      return Math.random() - 0.5
    }).forEach((element, index) => {
      if (index % 2 === 0) {
        newArrayOne.push(element)
      } else {
        newArrayTwo.push(element)
      }
    })
    setUserOne(newArrayOne)
    setUserTwo(newArrayTwo)
    setFlag(true)
    setPlayerOne([])
    setPlayerTwo([])
  }

  const comparisonOne = () => {
    const newUserOne = [...userOne]
    newUserOne.shift()
    setUserOne(newUserOne)
    const newPlayerOne = [...playerOne]
    newPlayerOne.push(userOne[0])
    setPlayerOne(newPlayerOne)
  }

  const comparisonTwo = () => {
    const newUserTwo = [...userTwo]
    newUserTwo.shift()
    setUserTwo(newUserTwo)
    const newPlayerTwo = [...playerTwo]
    newPlayerTwo.push(userTwo[0])
    setPlayerTwo(newPlayerTwo)
  }

  const step = (player) => {


    if (player === 'one' && (!playerOne.length || playerOne.length < playerTwo.length)) {
      comparisonOne()
    } else if (player === 'two' && (!playerTwo.length || playerOne.length > playerTwo.length)) {
      comparisonTwo()
    } else if (playerOne.length === playerTwo.length && playerOne.length % 2 === 0 && playerTwo.length % 2 === 0) {
      if (player === 'one') {
        comparisonOne()
      } else {
        comparisonTwo()
      }
    }
  }

  useEffect(() => {
    deck()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (flag && (userOne.length === 0 || userTwo.length === 0)) {
      setModal(true)
    }
  }, [userOne, userTwo, flag])
  return (
    <div className={cls.mainContainer}>
      <header>
        <h1 className={cls.header}>Игра Пьяница!</h1>
      </header>
      <main className={cls.wrapper}>
        <section className={cls.panel}>
          <PlayerOne p1={playerNameOne} u1={userOne} setP1={setPlayerNameOne} closeI1={closeInputOne} setCloseI1={setCloseInputOne} step={step} />
          <PlayerTwo p2={playerNameTwo} u2={userTwo} setP2={setPlayerNameTwo} closeI2={closeInputTwo} setCloseI2={setCloseInputTwo} step={step} />
            {/* <section className={cls.player}>
            <span className={cls.player__userName}>
              <h3>{playerNameOne}</h3>
              {!closeInputOne && (
                <div>
                  <input onChange={(e) => setPlayerNameOne(e.target.value)}></input>
                  <button onClick={() => setCloseInputOne(true)}>+</button>
                </div>
              )}
            </span>
            <div className={cls.player__card}>
              <span className={cls.player__card__countLeft}>{userOne.length}</span>
              <img src={card} alt='card' />
              {userOne.map(() => {
                return <img className={cls.player__deckLeft} src={card} alt='card' />
              })}
            </div>
            <button onClick={() => step('one')}>Ваш ход</button>
          </section> */}
          {/* <section className={cls.player}>
            <span className={cls.player__userName}>
            <h3>{playerNameTwo}</h3>
            {!closeInputTwo && (
              <div>
                <input onChange={(e) => setPlayerNameTwo(e.target.value)}></input>
                <button onClick={() => setCloseInputTwo(true)}>+</button>
              </div>
            )}
          </span>
          <div className={cls.player__card}>
            <span className={cls.player__card__countRight}>{userTwo.length}</span>
            <img src={card} alt='card' />
            {userTwo.map(() => {
              return <img className={cls.player__deckRight} src={card} alt='card' />
            })}
          </div>
          <button onClick={() => step('two')}>Ваш ход</button>
        </section> */}
        </section>
      <section className={cls.board}>
        <section className={cls.cardsBlock}>
          <CurrentDeckPlayerOne p1={playerOne} p2={playerTwo} setP1={setPlayerOne} setP2={setPlayerTwo} cmp1={comparisonOne} cmp2={comparisonTwo} u1={userOne} u2={userTwo} setU1={setUserOne} setU2={setUserTwo} />
          <CurrentDeckPlayerTwo p1={playerOne} p2={playerTwo} setP1={setPlayerOne} setP2={setPlayerTwo} cmp1={comparisonOne} cmp2={comparisonTwo} u1={userOne} u2={userTwo} setU1={setUserOne} setU2={setUserTwo} />
        </section>
      </section>
      <section className={cls.fieldButtons}>
        <div><button onClick={() => deck()}>Перемешать колоду</button></div>
      </section>
      </main>
    <footer>
      <span>Разработано для Pari Match</span>
    </footer>
    <div className={modal ? `${cls.modal} ${cls.close}` : cls.modal}>
      <div className={cls.modal__wrapper}>
        <span>Победил - {userTwo.length === 0 ? 'Игрок 1' : 'Игрок 2'}</span>
        <button onClick={() => setModal(false)}>+</button>
      </div>
    </div>
    </div >
  );
}

export default App;
