const router = require('express').Router();
const { Track } = require('../../models');
const withAuth = require('../../utils/auth');
router.get('/', (req, res) => {
    Track.findAll({})
        .then(dbTrackData => res.json(dbTrackData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    Track.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(dbTrackData => res.json(dbTrackData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Track.create({
                Track_text: req.body.Track_text,
                post_id: req.body.post_id,
                user_id: req.session.user_id,
            })
            .then(dbTrackData => res.json(dbTrackData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
});

router.put('/:id', withAuth, (req, res) => {
    Track.update({
        Track_text: req.body.Track_text
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbTrackData => {
        if (!dbTrackData) {
            res.status(404).json({ message: 'No Information found with this id' });
            return;
        }
        res.json(dbTrackData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Track.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbTrackData => {
        if (!dbTrackData) {
            res.status(404).json({ message: 'No Information found with this id' });
            return;
        }
        res.json(dbTrackData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
module.exports = router;