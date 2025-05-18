Telepítendő
Node.js (LTS verzió -> legfrissebb) https://nodejs.org/en/
Git: https://git-scm.com/downloads
ajánlott IDE: Visual Studio Code https://code.visualstudio.com/
Teendők
GitHub regisztráció:https://github.com/

GitHub Repository (kb. kódbázist vagy projektet jelent) létrehozása https://github.com/new

SSH kulcs hozzáadása, így le/fel tudod tölteni a kódot https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

A sorrend mindegy, csak a .git mappa a projekt mappájába kerüljön a végén.

Kód letöltése powershell/parancssor(cmd)/ubuntu terminál segítségével
git clone git@github.com:CserTibor/wakeboarding.git
Létrehoz egy mappát, benne egy “.git” mappával

Létrehozod a projektet
npm create vite@latest
belépsz a mappába és npm install
elindítod a szervert: npm run dev
http://127.0.0.1:5173/
Button feladat

1. Component
   Hozz létre egy components mappát az src alá
   Készíts egy Button komponenst, aminek a paramétere a gombban megjelenő felirat legyen
2. Function
   Adj hozzá egy paramétert ami egy click eseménykezelő függvény

3. State management
   Az App.jsx komponensben példányosítsd a Button komponenst: adj hozzá “Increase” és “Reduce” gombokat.
   Az “Increase” state-ben eltárolt counter változó értékét növelje 1-el, a “Decrease” csökkentse.
   A minimális érték 0 legyen, az “Decrease” gomb legyen disabled ezesetben.
   A counter értéke jelenjen meg a felületen.

Film feladat

1. Routing
   Hozz létre egy új komponenst “Sandbox” néven, a Pages mappa alá. Helyezd át az App.jsx-ből a counter-hez kapcsolódó logikát és UI-t.
   A Sandbox komponens a /sandbox útvonalra navigálva töltődjön be, az alapértelmezett route is ez legyen.
   Hozz létre egy Navbar nevű komponens a components mappa alá, ahol a NavLink (react-router-dom) komponens felhasználásával megvalósítod a navigációt.

2. List rendering
   hozz létre új komponenst a pages mappa alá Movies néven. A komponensben listázd ki a movies.js fájlban található filmeket.
   https://drive.google.com/file/d/1GtAOIYUPZc9o1b0_Y1tkIG54XOUAwkTa/view?usp=drive_link
   add hozzá új Navlink-et (react-router-dom) az általad létrehozott Navbar komponenshez és vedd fel az új route-t: a /movies route-ra töltődjön be a komponens. A default route is ez legyen.

3. List manipulation
   adj hozzá minden lista elemhez egy törlés gombot (használhatsz ikont, pl.: react-icons library)
   a törlés gombra kattintva az adott sort töröld a listából

4. Input
   adj hozzá szerkesztés gombot (vagy ikont) minden sorhoz
   az adott sor szerkesztésére kattintva jeleníts meg egy input fieldet, aminek az értéke a kiválasztott film címe, illetve a mező mellett egy “Save” feliratú gombot
   a kijelölt elem legyen kiemelve, kapjon valamilyen egyedi, jól megkülönböztethető stílust
   a mentésre kattintva frissítsd a kiválasztott film címét az input mezőbe beírt értékkel és rejtsd el a formot a felületről.
   a mentés gomb disabled legyen, ha a beírt érték üres

5. Sorting
   a lista felett jeleníts meg egy selectort-t, amiben 3 rendezési szempont legyen: alphabetical, rating, year.
   a selector mellett jelenítse meg a rendezés irányát (ikonnal / szöveges). Az elemre kattintva a rendezés iránya megfordul
   a default rendezés értékelés szerinti csökkenő legyen.
