import React from 'react'
import cls from './player.module.scss'
import card from '../../images/deck.svg'

const PlayerOne = ({
  p1,
  u1,
  setP1,
  closeI1,
  setCloseI1,
  step
}) => {
  return (
    <section className={cls.player}>
      <div className={cls.player__userName}>
        <h3 title={p1}>{p1}</h3>
        {!closeI1 && (
          <div>
            <input onChange={(e) => setP1(e.target.value)} placeholder='Введите ваше имя' />
            <button onClick={() => setCloseI1(true)}>+</button>
          </div>
        )}
      </div>
      <div className={cls.player__card}>
        <span className={cls.player__card__countLeft}>{u1.length}</span>
        <img src={card} alt='card' />
        {u1.map((_el, index) => {
          return <img className={cls.player__deckLeft} src={card} alt='card' key={index} />
        })}
      </div>
      <button onClick={() => step('one')}>Ваш ход</button>
    </section>
  )
}

export default PlayerOne