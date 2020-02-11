import React from 'react'
import cls from './player.module.scss'
import card from '../../images/deck.svg'

const PlayerTwo = ({
  p2,
  u2,
  setP2,
  closeI2,
  setCloseI2,
  step,
}) => {
  return (
    <section className={cls.player}>
      <div className={cls.player__userName}>
        <h3 title={p2}>{p2}</h3>
        {!closeI2 && (
          <div>
            <input onChange={(e) => setP2(e.target.value)} placeholder='Введите ваше имя' />
            <button onClick={() => setCloseI2(true)}>+</button>
          </div>
        )}
      </div>
      <div className={cls.player__card}>
        <span className={cls.player__card__countRight}>{u2.length}</span>
        <img src={card} alt='card' />
        {u2.map((_el, index) => {
          return <img className={cls.player__deckRight} src={card} alt='card' key={index} />
        })}
      </div>
      <button onClick={() => step('two')}>Ваш ход</button>
    </section>
  )
}

export default PlayerTwo