module.exports = function(req, res, next) {
  req.articles.remove(req.body, function() {
    res.send({success: true});
  });
}
