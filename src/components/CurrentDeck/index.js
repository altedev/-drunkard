import React, {useEffect} from 'react'
import cls from 'currentDeck.module.scss'

const CurrentDeck = () => {

  useEffect(() => {
    if (playerTwo.length && playerOne.length) {
      const oneLength = playerOne.length - 1
      const twoLength = playerTwo.length - 1
      let newUserOne = [...userOne]
      let newUserTwo = [...userTwo]
      let flagTimeOut = false
      if (playerTwo.length % 2 === 0 || playerOne.length % 2 === 0) {
        flagTimeOut = false
      } else
        if (playerTwo[twoLength].value > playerOne[oneLength].value || (playerTwo[twoLength].value === 1 && playerOne[oneLength].value === 9)) {
          newUserTwo = newUserTwo.concat(playerOne)
          newUserTwo = newUserTwo.concat(playerTwo)

          setUserTwo(newUserTwo)
          flagTimeOut = true
        } else if (playerTwo[twoLength].value < playerOne[oneLength].value || (playerOne[twoLength].value === 1 && playerTwo[oneLength].value === 9)) {
          newUserOne = newUserOne.concat(playerOne)
          newUserOne = newUserOne.concat(playerTwo)
          setUserOne(newUserOne)
          flagTimeOut = true
        }
        else if (playerTwo[twoLength].value === playerOne[oneLength].value) {
          setTimeout(() => {
            comparisonOne()
            comparisonTwo()
          }, 1000)
        }
      if (flagTimeOut) {
        setTimeout(() => {
          setPlayerOne([])
          setPlayerTwo([])
        }, 1000)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerTwo, playerOne])

  return (
    <>
      {playerOne.length % 2 !== 0 && playerOne.length ? (<div className={cls.card}>
        <div className={cls.card__top}>
          {
            playerOne[playerOne.length - 1]?.suits === 'clubs' ? '♧'
              : playerOne[playerOne.length - 1]?.suits === 'diamonds' ? '♢'
                : playerOne[playerOne.length - 1]?.suits === 'hearts' ? '♡'
                  : playerOne[playerOne.length - 1]?.suits === 'spades' ? '♤'
                    : ''
          }
        </div>
        <div className={cls.card__icon}>{playerOne[playerOne.length - 1]?.name}</div>
        <div className={cls.card__bottom}>
          {
            playerOne[playerOne.length - 1]?.suits === 'clubs' ? '♧'
              : playerOne[playerOne.length - 1]?.suits === 'diamonds' ? '♢'
                : playerOne[playerOne.length - 1]?.suits === 'hearts' ? '♡'
                  : playerOne[playerOne.length - 1]?.suits === 'spades' ? '♤'
                    : ''
          }
        </div>
      </div>) : playerOne.length ? <img className={cls.illusion} src={card} alt='card' /> : <div className={cls.card} />}</>
  )
}

export default CurrentDeck