function getShortMessages(messages) {
    // SOLUTION GOES HERE
    return messages.filter(function(msg) {
        return (msg.message.length < 50);
    }).map(message => message.message);
}

module.exports = getShortMessages;