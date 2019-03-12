window.onload = function () {
    loopp();
};

function loopp() {
    
    let i = 0;

    timeout(ensim);

    function ensim() {
        if (i === 10) {
            location.reload();
        } else {
            document.getElementById('toka').scrollIntoView({block: 'end', behavior: 'smooth'});
            timeout(toin);
        }
    }

    function toin() {
        document.getElementById('kolmas').scrollIntoView({block: 'end', behavior: 'smooth'});
        timeout(kolm);
    }

    function kolm() {
        i++;
            document.getElementById('eka').scrollIntoView({block: 'end', behavior: 'smooth'});
            timeout(ensim);
    }

    function timeout(curFunct) {
        setTimeout(curFunct, 2000);
    }

}