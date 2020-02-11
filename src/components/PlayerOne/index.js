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
      <span className={cls.player__userName}>
        <h3>{p1}</h3>
        {!closeI1 && (
          <div>
            <input onChange={(e) => setP1(e.target.value)}></input>
            <button onClick={() => setCloseI1(true)}>+</button>
          </div>
        )}
      </span>
      <div className={cls.player__card}>
        <span className={cls.player__card__countLeft}>{u1.length}</span>
        <img src={card} alt='card' />
        {u1.map(() => {
          return <img className={cls.player__deckLeft} src={card} alt='card' />
        })}
      </div>
      <button onClick={() => step('one')}>Ваш ход</button>
    </section>
  )
}

export default PlayerOne