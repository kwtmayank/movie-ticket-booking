export default class ReferenceController {
  async getLanguages(req, res, next) {
    await res.json({ data: "1234" });
  }
}
