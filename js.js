const helloSpeaker = {
    speakWord: 'Hello',
};
//This says Hello
(function () {
    helloSpeaker.speak = function (name) {
        return (helloSpeaker.speakWord + " " + name);
    }
}());

const byeSpeaker = {
    speakWord: 'Good Bye'
};

(function () {
    byeSpeaker.speak = function (userName) {
        return (byeSpeaker.speakWord + " " + userName);
    }
}());

(function () {
    var names = ['Hannan', 'Maleeha', 'Jimmy', 'Hafsa', 'Jhon', 'Harry', 'Larry', 'Fatima', 'Laura', 'Jane'];
    for (var i = 0; i < names.length; i++) {
        var name = names[i];
        var firstLetter = name.charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            console.log(byeSpeaker.speak(name));
            document.write(byeSpeaker.speak(name) + '<br>');
        } else {
            console.log(helloSpeaker.speak(name));
            document.write(helloSpeaker.speak(name + '<br>'));
        }
    }
})();
