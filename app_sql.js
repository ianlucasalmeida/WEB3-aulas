const express = require('express');
const app = express();
const port = 3000; 


app.get('/', (req, res) => {
  res.send('In Ada i trust! Go Ahead Bro...');
});

app.listen(port, () => {
  console.log('Servidor ativo em: http://localhost:${port}');
});


app.use(express.urlencoded({extended: true}));
app.use(express.json());


let books = [
  {id: 1, title:'Livro 1'},
  {id: 1, title:'Livro 2'},
  {id: 1, title:'Livro 3'}
];

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  res.json(books);
});

app.post('/post-example', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.json(newBook);
});

app.listem(port, () => {
  console.log('Sevidor rodando na porta http://localhost:${port}');

});

app.put('/update-book/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const newTitle = req.body.title;

  const bookToUpdate = books.find(book => book.id === bookId);

  if (bookToUpdate) {
    bookToUpdate.title = newTitle;
    res.json(bookToUpdate);
  }else{
    res.status(404).send('Livro não encontrado');

  }
});

app.listen(port, () => {
  console.log('Sevidor rodando na porta http://localhost:${port}');
});

app.delete('/delete-book/:id', (req, res) => {
  const bookId = parseInt(req.params.id);

  const indexToRemove = books.splice(indexToRemove, 1);

  if (indexToRemove !== -1) {
    const removeBook = books.splice(indexToRemove, 1);
    res.json(removeBook[0]);

  }else{
    res.status(404).send('Livro não encontrado');
  }
});

app.listen(port, () => {
  console.log('Sevidor rodando na porta http://localhost:${port}');
});



