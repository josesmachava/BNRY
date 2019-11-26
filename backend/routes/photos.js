import express from 'express';
import Photo from '../models/photo.model';

let router = express.Router();

router.get('/',(req, res) => {
    Photo.find()
    .then(photos => res.json({photos}))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/add', ((req, res) => {
  const url = req.body.url;
  const description = req.body.description;
 
  const newPhoto = new Photo({
    url,
    description,
  });

  newPhoto.save()
  .then(() => res.json('Photo added!'))
  .catch(err => res.status(400).json('Error: ' + err));
}));

router.get('/:id', ((req, res) => {
  Photo.findById(req.params.id)
    .then(photo => res.json(photo))
    .catch(err => res.status(400).json('Error: ' + err));
}));

router.delete('/:id', ((req, res) => {
  Photo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Photo deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}));

router.post('/update/:id', ((req, res) => {
  Photo.findById(req.params.id)
    .then(photo => {
      photo.url = req.body.url;
      photo.description = req.body.description;
 
      photo.save()
        .then(() => res.json('Photo updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}));

module.exports = router;
