const jwt = require('jsonwebtoken');
const Tokens = require('../models/tokenModel')

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
    return{
      accessToken,
      refreshToken
    }
  }

  async saveToken (userid, refreshToken) {
    const tokenData = Tokens.findOne({user: userid})
    if(!tokenData){
      tokenData.refreshToken = await refreshToken;
      return tokenData.save()
    }

    const token = await Tokens.create({user: userid, refreshToken})
    return token
  }
}

module.exports = new TokenService();