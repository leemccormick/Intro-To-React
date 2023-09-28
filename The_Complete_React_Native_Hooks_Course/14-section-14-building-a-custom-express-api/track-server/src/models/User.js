const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const useSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

// Before saving the user to database, call this function to hash password
useSchema.pre('save', function (next) {
    const user = this;

    // If user has not change password, then just return next function
    if (!user.isModified('password')) {
        return next();
    }

    // 1) Get salt data
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            return next(err);
        }

        // 2) Get hash data 
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }

            // 3) Update user password with salt, hash data
            user.password = hash;
            next(); // --> Done, then we save user in database with next();
        });
    });
});

// Password Checking Process
useSchema.methods.comparePassword = function (candidatePassword) {
    const user = this; // Get the user

    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err);
            }

            if (!isMatch) {
                return reject(false);
            }

            resolve(true);
        });
    });
}

mongoose.model('User', useSchema);