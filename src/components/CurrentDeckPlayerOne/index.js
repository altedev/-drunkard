import React, { useEffect } from 'react'
import cls from './currentDeck.module.scss'
import card from '../../images/deck.svg'

const CurrentDeckPlayerOne = ({
  u1,
  u2,
  p1,
  p2,
  cmp1,
  cmp2,
  setU1,
  setU2,
  setP1,
  setP2,
}) => {

  useEffect(() => {
    if (p2.length && p1.length) {
      const oneLength = p1.length - 1
      const twoLength = p2.length - 1
      let newUserOne = [...u1]
      let newUserTwo = [...u2]
      let flagTimeOut = false
      if (p2.length % 2 === 0 || p1.length % 2 === 0) {
        flagTimeOut = false
      } else
        if (p2[twoLength].value > p1[oneLength].value || (p2[twoLength].value === 1 && p1[oneLength].value === 9)) {
          newUserTwo = newUserTwo.concat(p1)
          newUserTwo = newUserTwo.concat(p2)

          setU2(newUserTwo)
          flagTimeOut = true
        } else if (p2[twoLength].value < p1[oneLength].value || (p1[twoLength].value === 1 && p2[oneLength].value === 9)) {
          newUserOne = newUserOne.concat(p1)
          newUserOne = newUserOne.concat(p2)
          setU1(newUserOne)
          flagTimeOut = true
        }
        else if (p2[twoLength].value === p1[oneLength].value) {
          setTimeout(() => {
            cmp1()
            cmp2()
          }, 1000)
        }
      if (flagTimeOut) {
        setTimeout(() => {
          setP1([])
          setP2([])
        }, 1000)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p2, p1])

  return (
    <>
      {p1.length % 2 !== 0 && p1.length ? (<div className={cls.card}>
        <div className={cls.card__top}>
          {
            p1[p1.length - 1]?.suits === 'clubs' ? '♧'
              : p1[p1.length - 1]?.suits === 'diamonds' ? '♢'
                : p1[p1.length - 1]?.suits === 'hearts' ? '♡'
                  : p1[p1.length - 1]?.suits === 'spades' ? '♤'
                    : ''
          }
        </div>
        <div className={cls.card__icon}>{p1[p1.length - 1]?.name}</div>
        <div className={cls.card__bottom}>
          {
            p1[p1.length - 1]?.suits === 'clubs' ? '♧'
              : p1[p1.length - 1]?.suits === 'diamonds' ? '♢'
                : p1[p1.length - 1]?.suits === 'hearts' ? '♡'
                  : p1[p1.length - 1]?.suits === 'spades' ? '♤'
                    : ''
          }
        </div>
      </div>) : p1.length ? <img className={cls.illusion} src={card} alt='card' /> : <div className={cls.card} />}</>
  )
}

export default CurrentDeckPlayerOne