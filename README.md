# MINESWEEPER REACT GAME

Игра сапёр, написанная на React.

## Используемый стэк

+ React
+ react-bootstrap
+ sass
+ axios
+ react-router-dom^6
+ mockAPI

### ЭКРАН НАСТРОЕК / ГЛАВНАЯ СТРАНИЦА

![homepage](https://github.com/valvalov22/minesweeper/blob/main/homepage.png "homepage")

При нажатии на 🏆 вы будете перемещены на страницу таблицы лидеров.

### ТАБЛИЦА ЛИДЕРОВ

![leaderboard](https://github.com/valvalov22/minesweeper/blob/main/leaderboard.png "leaderboard")

Отображает топ-10 пользователей по времени.
При нажатии на лого, происходит возврат на страницу настроек.

### ЭКРАН ИГРЫ

![game](https://github.com/valvalov22/minesweeper/blob/main/game.png "game")

При нажатии на лого, происходит возврат на страницу настроек.

![header](https://github.com/valvalov22/minesweeper/blob/main/header.png "header")

Цифры слева - количество мин.
При нажатии на 🙂 игра будет перезапущена.
Цифры справа - время игры.

В случае победы, ваш результат отправится в таблицу лидеров, и если ваше время будет меньше, чем у остальных, ваше имя появится в таблице лидеров.
