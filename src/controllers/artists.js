const Artist = require('../models/artist');

exports.create = (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });
  artist.save().then((data) => {
    res.status(201).json(data);
  });
};

exports.list = (req, res) => {
  Artist.find({}, (err, artists) => {
    if (err) {
      res.json('Something went wrong');
    }
    res.status(200).json(artists);
  });
};

exports.findOne = (req, res) => {
  Artist.findById(req.params.artistId, (err, artist) => {
    if (artist === undefined) {
      res.status(404).json({
        error: 'The artist could not be found.',
      });
    } else {
      res.status(200).json(artist);
    }
  });
};

exports.patch = (req, res) => {
  Artist.findById(req.params.artistId, (err, artist) => {
    if (artist === undefined) {
      res.status(404).json({
        error: 'The artist could not be found.',
      });
    } else {
      artist.set(req.body).save();
      res.status(200).json(artist);
    }
  });
};

exports.delete = (req, res) => {
  Artist.findByIdAndDelete(req.params.artistId, (err, artist) => {
    if (artist === undefined) {
      res.status(404).json({
        error: 'The artist could not be found.',
      });
    } else {
      res.sendStatus(204);
    }
  });
};
