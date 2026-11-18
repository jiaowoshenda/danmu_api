export default async function handler(req, res) {
  console.log("【保活】ping 被调用", new Date().toISOString());
  res.status(200).json({
    ok: true,
    timestamp: new Date().toISOString()
  })
}
