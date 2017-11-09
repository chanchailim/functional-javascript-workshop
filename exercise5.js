function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        // console.log(goodUsers);
        return submittedUsers.every(function(submittedUser) {
            return goodUsers.some(function(goodUser) {
                return (submittedUser.id === goodUser.id);
            });
        });
    };
}

module.exports = checkUsersValid;