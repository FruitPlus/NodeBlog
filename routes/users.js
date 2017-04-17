
module.exports = function(req, res) {

	res.render('user',{
		name:req.params.name
	})
};