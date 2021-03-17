const Winner = require('../models/Winner')

exports.createWinner =  async (req, res) => {
  
     try {
          const winner = await Winner.create(req.body)
      
          res.status(200).json({ success: true, data: winner })
      } catch (err) {
          res.status(400).json({ message: 'No winner' })
      }

}

exports.getWinners = async (req, res) => {
    try {
         const winner = await Winner.find()
 
         res.status(200).json({
             success: true,
             count: winner.length,
             data: winner
         })
    } catch (error) {
         res.status(400).json({ message: 'No winner' })
    }
 }