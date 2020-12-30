const getHEXValues = str => str.match(/#([0-9a-f]{3}){1,2}/gi);

const getNumbers = str => str.match(/\+\s\(380\)\s0(6[3678]|9[356789]|73|50)\s\d{3}(\s\d{2}){2}/g);

const replaceTags = str => str.replace(/<h1>/g, '<h2/>');

const getScripts = str => str.match(/<script.*>(.|\n|\r)*<\/script>/g);