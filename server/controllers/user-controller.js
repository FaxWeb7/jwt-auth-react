class UserController {
  async Registration (req, res, next) {
    res.send(200)
  };
  
  async Login (req, res, next) {
    res.send(200)
  };
  
  async Logout (req, res, next) {
    res.send(200)
  };
  
  async Activate (req, res, next) {
    res.send(200)
  };
  
  async Refresh (req, res, next) {
    res.send(200)
  };
  
  async getUsers (req, res, next) {
    res.send(200)
  };
}

module.exports = new UserController();