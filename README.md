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

![homepage](https://3.downloader.disk.yandex.ru/preview/f737115e1085ecfe93e314b04d91573ec1ea545b35c73e632e21b33db56b99cb/inf/DbaF3WUbwlj5dgt6P8VMFCP7iBXp2jkJIIx5pEbs9j_MH-xVHm-SzgQRIMMtG70N-npiPZF5OIv5IXaXmMu3kg%3D%3D?uid=1361537184&filename=homepage.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1361537184&tknv=v2&size=1920x880 "homepage")

При нажатии на 🏆 вы будете перемещены на страницу таблицы лидеров.

### ТАБЛИЦА ЛИДЕРОВ

![leaderboard](https://1.downloader.disk.yandex.ru/preview/9afbc8866da626a71f12a354aa8a3dd9e722b01a3c8d29bc663ec2a7fd9065d6/inf/KgFvSpDS69AeDPrHuFWMUxaprfNfzN-6CM3m6C_oaKLtTBhZjqr7pY__6C7d9LSOAlztVc3NfsQRECSb80TjPA%3D%3D?uid=1361537184&filename=leaderboard.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1361537184&tknv=v2&size=1920x880 "leaderboard")

Отображает топ-10 пользователей по времени.
При нажатии на лого, происходит возврат на страницу настроек.

### ЭКРАН ИГРЫ

![game](https://1.downloader.disk.yandex.ru/preview/43c10c6e25c3cb62c95dbe27e2c5871d5fc5a70a69626f0999a15bd345db16e7/inf/M_n_30WlakFOCNWOY_F9ixaprfNfzN-6CM3m6C_oaKKcVik8UQFuzVkkRxc_27hh2_EdQP99Wd7CtH1DU-jOKg%3D%3D?uid=1361537184&filename=game.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1361537184&tknv=v2&size=1920x880 "game")

При нажатии на лого, происходит возврат на страницу настроек.

![header](https://1.downloader.disk.yandex.ru/preview/07922be9d0efd95737018afe9eaa7338e601d4276efc7d8f40e3d2fb38a1bacf/inf/qp92SA2fFay89mwyFz5UFxaprfNfzN-6CM3m6C_oaKIczIr0qfpnx_E33NMm0PILDdJsSiXMHzNAk9MkY3KEKA%3D%3D?uid=1361537184&filename=header.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1361537184&tknv=v2&size=1920x880 "header")

Цифры слева - количество мин.
При нажатии на 🙂 игра будет перезапущена.
Цифры справа - время игры.

В случае победы, ваш результат отправится в таблицу лидеров, и если ваше время будет меньше, чем у остальных, ваше имя появится в таблице лидеров.
