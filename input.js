var keys = [];

document.addEventListener('keydown', (e) => {
    if(!keys.includes(e.keyCode)) {
        keys.push(e.keyCode);
    }
});

document.addEventListener('keyup', (e) => {
    keys.splice(keys.indexOf(e.keyCode),1);
});
