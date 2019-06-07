const router = require('express').Router();

router.get('/', async (req, res) => {
    const data = await req.db.find({status: 1}).project({_id: 0, brand: 1, ..}).toArray();
    res.json(data);
});

router.post('/:id/reserve', async (req, res) => {
    const car = await req.db.findOne({_id: req.params.id}).project({rental_details: 1});
    const lastMileage = car.rental_details[car.rental_details.length - 1].end_mileage;
    req.db.updateOne({_id: req.params.id}, 
        {$push: {rental_details: {...req.body, start_mileage: lastMileage}}},
        {$set: {status: 0}}
    );
    res.json({success: 1, reservation_id: ObjectId()});
});

router.patch('/:id/reserve/:reservation_id', async(req, res) => {
    const car = await req.db.findOne({_id: req.params.id}).project({rate_per_day: 1});
    const total = req.body.days * car.rate_per_day;
    await req.db.updateOne({_id: req.params.id, rental_details.reservation_id: req.params.reservation_id},
        {$set: {rental_details.$.end_mileage: req.body.end_mileage,
        rental_details.$.total_rent: total}});
    res.json({success: 1, total_rent: total});
});

router.delete('/:id/reserve/:reservation_id', async (req, res) => {
    await req.db.updateOne({_id: req.params.id},
        {$pull: {rental_details: {reservation_id: req.params.reservation_id}}});
    res.json({success: 1});
});

module.exports = router;
