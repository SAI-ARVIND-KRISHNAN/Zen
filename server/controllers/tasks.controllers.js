export const tasks = (req, res) => {
    res.status(200).json({id: req.user, task1: "sleep"});
}