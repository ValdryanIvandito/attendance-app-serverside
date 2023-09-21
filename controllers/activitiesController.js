import Activities from "../models/activitiesModel.js";

const getActivitiesBylocation = async (req, res) => {
  const location = req.params.location;
  try {
    const activities = await Activities.find({ location: location });

    if (activities.length === 0) {
      return res.status(404).json({ error: "Data not found!" });
    } else {
      const activitiesNames = activities.map((activity) => activity.activity);
      res.json({ activitiesNames });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default { getActivitiesBylocation };
