const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const { latitude, longitude, skils } = req.query;

    const skilsArray = parseStringAsArray(skils);

    const devs = await Dev.find({
      skils: {
        $in: skilsArray
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return res.json({ 'Devs': devs });
  }
}