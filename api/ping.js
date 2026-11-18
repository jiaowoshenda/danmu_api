export default function handler(req, res) {
  res.status(200).json({ alive: true, time: Date.now() })
}
