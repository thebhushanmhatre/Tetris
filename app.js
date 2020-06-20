for(var i=0; i < 200; i++){
  document.getElementById("addit").appendChild(document.createElement("div"))
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const ScoreDisplay = document.querySelector('#score')
  const StartBtn = document.querySelector('#start-button')
  const width = 10

   //The Tetrominoes
  const jTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const lTetromino = [
    [2, width, width+1, width+2],
    [1, width+1, width*2+1, width*2+2],
    [0, 1, 2, width],
    [0, 1, width+1, width*2+1]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  const theTetrominoes = [jTetromino, lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  let currentPosition = 4

  let random1 = Math.floor(Math.random()*theTetrominoes.length)
  let random2 = Math.floor(Math.random()*theTetrominoes[random1].length)
  let current = theTetrominoes[random1][random2]
  console.log(random1, random2)

  function draw(){
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino')
    })
  }

  draw()

})