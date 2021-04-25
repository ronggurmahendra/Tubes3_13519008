const router = require('express').Router();
const Task = require('../models/task.model');

router.route('/').get((req, res) =>{
    Task.find()
    .then( task => res.json(task))
    .catch(err => res.status(400).json("Error : " + err));
});
// date
// kodeMataKuliah
// jenisTugas
// topikTugas

router.route('/add').post((req, res) =>{
    const date =  req.body.date;
    const kodeMataKuliah = req.body.kodeMataKuliah;
    const jenisTugas = req.body.jenisTugas;
    const topikTugas =  req.body.topikTugas;


    const newTask = new Task({
        date,
        kodeMataKuliah,
        jenisTugas,
        topikTugas,
    });

    newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json('Error :  '+err));
});
router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
      .then(task => res.json(task))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
      .then(() => res.json('Task deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Task.findById(req.params.id)
      .then(task => {
        task.username = req.body.username;
        task.description = req.body.description;
        task.duration = Number(req.body.duration);
        task.date = Date.parse(req.body.date);
  
        task.save()
          .then(() => res.json('Task updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;