# Projekt Telepítési és Fejlesztési Útmutató

## 📦 Szükséges szoftverek telepítése

- **Node.js (LTS verzió – legfrissebb):**  
  https://nodejs.org/en/

- **Git:**  
  https://git-scm.com/downloads

- **Ajánlott IDE – Visual Studio Code:**  
  https://code.visualstudio.com/

---

## 🔧 Teendők (ezeket megcsináltam, neked nem kell)

1. **GitHub regisztráció:**  
   https://github.com/

2. **GitHub repository létrehozása:**  
   https://github.com/new  
   (A repository a kódbázist vagy projektet jelenti.)

3. **SSH kulcs hozzáadása a GitHub-hoz:**  
   Így le/fel tudod tölteni a kódot.  
   Útmutató:  
   https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

> 💡 A sorrend nem számít, csak a `.git` mappa kerüljön a projekt gyökérkönyvtárába a végén.

---

## 📥 Kód letöltése

PowerShell / CMD / Ubuntu terminál használatával:

```bash
git clone git@github.com:CserTibor/varga-bertalan-movie-app.git
```

A projekt mappájában:

```bash
npm install
npm run dev
```

---

## 🖱️ Button feladat

### 1. Component

- Hozz létre egy `components` mappát az `src` alá.
- Készíts egy `Button` komponenst, amelynek paramétere a gomb szövege.

### 2. Function

- Adj hozzá egy `onClick` eseménykezelő paramétert.

### 3. State management

- Az `App.jsx`-ben példányosítsd a `Button` komponenst.
- Hozz létre két gombot: **Increase** és **Decrease**.
- A `counter` változót növeld vagy csökkentsd 1-gyel.
- **Minimum érték:** `0` — a **Decrease** gomb legyen disabled, ha 0 az érték.
- A `counter` értéke jelenjen meg a felületen.

### 4. Extra feladat

- Adj hozzá egy **Reset** gombot a felületen, amelyre kattintva a `counter` változó `0` lesz.

---

## 🎬 Film feladat

### 1. Routing

- React-Router dokumentáció: https://reactrouter.com/start/declarative/routing#configuring-routes
- Hozz létre egy új komponenst `Sandbox` néven a `pages` mappában.
- Helyezd át a `counter` logikát az `App.jsx`-ből ebbe.
- A `/sandbox` útvonal töltse be ezt a komponenst.
- Ez legyen az **alapértelmezett route**.
- Hozz létre egy `Navbar` komponenst a `components` mappába.
- Használj `NavLink`-et (`react-router-dom`) a navigációhoz.

### 2. List rendering

- Hozz létre új komponenst `Movies` néven a `pages` mappába.
- Listázd ki a filmeket a megadott `movies.js` fájlból.
  - /src/data/movies.js
- Add hozzá új `NavLink`-et a `Navbar`-hoz.
- A `/movies` route töltse be ezt a komponenst.
- Ez legyen az **új alapértelmezett route**.

### 3. List manipulation

- Minden listaelemhez adj egy törlés gombot (pl. `react-icons` könyvtárral).
- Törlés gombra kattintva töröld az adott sort a listából.

### 4. Input

- Adj hozzá egy szerkesztés gombot minden sorhoz.
- Szerkesztésre jelenjen meg egy input mező az aktuális film címével és egy **Save** gomb.
- A szerkesztett sor legyen kiemelve egyedi stílussal.
- **Mentés** gombra:
  - Frissítsd a címet.
  - Rejtsd el az inputot.
- A **Save** gomb legyen disabled, ha az input mező üres.

### 5. Sorting

- A lista felett legyen egy **selector**, amely rendezési szempontokat tartalmaz:
  - `Alphabetical`
  - `Rating`
  - `Year`
- A selector mellett jelenjen meg a rendezés iránya (ikon/szöveg).
- Rákattintva forduljon meg a rendezés iránya.
- **Alapértelmezett:** `Rating` szerinti csökkenő sorrend.
