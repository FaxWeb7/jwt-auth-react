const userService = require('../services/user-service');
const {validationResult} = require("express-validator");
const ApiError = require('../exceptions/api-error');

class UserController {
  async Registration (req, res, next) {
    try{
      const errors = validationResult(req)
      if (!errors.isEmpty()){
        return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
      }
      const {email, password} = req.body;
      const userData = await userService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})

      return res.json(userData)
    } catch (e) {
      next(e)
    }
  };
  
  async Login (req, res, next) {
    try{
      
    } catch (e) {

    }
  };
  
  async Logout (req, res, next) {
    try{
      
    } catch (e) {

    }
  };
  
  async Activate (req, res, next) {
    try{
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URl)
    } catch (e) {
      next(e)
    }
  };
  
  async Refresh (req, res, next) {
    try{
      
    } catch (e) {

    }
  };
  
  async getUsers (req, res, next) {
    try{
      
    } catch (e) {

    }
  };
}

module.exports = new UserController();