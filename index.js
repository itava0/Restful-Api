const express = require('express');
const app = express();
app.use(express.json());
const courses = [
  {id: 1, name:'course1'},
  {id: 2, name:'course2'},
  {id: 3, name:'course3'}
];

//Handling GET Requests
app.get('/', (req, res) => {
  res.send('Hello world!!!')
})

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get(`/api/courses/:id`, (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id))
  if (!course) res.status(404).send('The course with the given ID was not found')
  res.send(course)
})

//Handling POST Requests
app.post('/api/courses', (req,res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course)
  res.send(course);
})

// You set a  local PORT with 'export PORT=500 '
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))