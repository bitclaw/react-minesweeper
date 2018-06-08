# react-minesweeper
React Minesweeper Implementation

## Game overview

The player is initially presented with a grid of undifferentiated squares. Some randomly selected squares, unknown to the player, are designated to contain mines. Typically, the size of the grid and the number of mines are set in advance by the user, either by entering the numbers or selecting from defined skill levels, depending on the implementations. (In the Microsoft variant, this is limited to 30 times 24 with 667 mines.)

The game is played by revealing squares of the grid by clicking or otherwise indicating each square. If a square containing a mine is revealed, the player loses the game. If no mine is revealed, a digit is instead displayed in the square, indicating how many adjacent squares contain mines; if no mines are adjacent, the square becomes blank, and all adjacent squares will be recursively revealed. The player uses this information to deduce the contents of other squares, and may either safely reveal each square or mark the square as containing a mine.

In some versions, a question mark may be placed in an unrevealed square to serve as an aid to logical deduction. Implementations may also allow players to quickly "clear around" a revealed square once the correct number of mines have been flagged around it. The game is won when all mine-free squares are revealed, because all mines have been located.

Some versions of Minesweeper will set up the board by never placing a mine on the first square revealed.[1] Minesweeper for versions of Windows protects the first square revealed; in Windows 7, players may elect to replay a board, in which case the first square may no longer be protected.

## Game Requirements

When a cell with no adjacent mines is revealed, all adjacent squares will be revealed (and repeat)

Ability to 'flag' a cell with a question mark or red flag

Alert when game is over

Persistence. Not to lose the game if browser is closed

Time tracking

Ability to start a new game and preserve/resume the old ones

Ability to select the game parameters: number of rows, columns, and mines

Ability to support multiple users/accounts

Design and implement an API for the game (think of a mobile app for your API)

Nice user experience (eg avoid page reload while playing)

## URL where the game can be accessed and played

https://bitclaw-react-minesweeper.herokuapp.com/

## Deploy Steps

Heroku CLI

```shell
# Install Heroku CLI on Ubuntu/Debian Distros
curl https://cli-assets.heroku.com/install-ubuntu.sh | sh

$ heroku login
$ heroku git:clone -a bitclaw-react-minesweeper
$ cd bitclaw-react-minesweeper

$ git add .
$ git commit -am "first commit"
$ git push heroku master
```

An easier way to to integrate with github using the Heroku dashboard:

i.e: https://dashboard.heroku.com/apps/bitclaw-react-minesweeper/deploy/github

## Important notes / Troubleshooting





