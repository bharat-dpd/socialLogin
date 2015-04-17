var mongooes 	= require("mongooes");
var bcrypt 		= require ("bcrypt-nodejs");
var user = {
	local :{
		email: {type:"String"},
		password : {type:"String"}
	},
	 facebook         : {
        id           : {type:"String"},
        token        : {type:"String"},
        email        : {type:"String"},
        name         : {type:"String"}
    },
    twitter          : {
        id           : {type:"String"},
        token        : {type:"String"},
        displayName  : {type:"String"},
        username     : {type:"String"}
    },
    google           : {
        id           : {type:"String"},
        token        : {type:"String"},
        email        : {type:"String"},
        name         : {type:"String"}
    }
};

var userSchema = mongooes.Schema(user);
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);