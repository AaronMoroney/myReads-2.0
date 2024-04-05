# MyReads

- This Project was completed As part of Udacity nano-degree in React.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of [Node.js](https://nodejs.org/)
- You have read [the latest documentation of React](https://reactjs.org/docs/getting-started.html).

## Installing MyReads

To install MyReads, follow these steps:

Linux and macOS:

````bash
git clone https://github.com/yourusername/your-project-name.git
cd your-project-name
npm install
Windows:

bash
Copy code
git clone https://github.com/yourusername/your-project-name.git
cd your-project-name
npm install

bash
Copy code
npm start
This will run the app in the development mode. Open http://localhost:3000 to view it in your browser.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
````

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```
