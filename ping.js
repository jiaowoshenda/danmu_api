module.exports = function (req, res) {
  res.json({ alive: true, time: Date.now() })
}
