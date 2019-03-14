window.onload = function () {
    loopp();
};

function loopp() {
    
    let i = 0;

    timeout(ensim);

    function ensim() {
        if (i === 20) {
            location.reload();
        } else {
            document.getElementById('toka').scrollIntoView({block: 'start', behavior: 'smooth'});
            timeout(toin);
        }
    }

    function toin() {
        document.getElementById('kolmas').scrollIntoView({block: 'start', behavior: 'smooth'});
        timeout(kolm);
    }

    function kolm() {
        i++;
            document.getElementById('eka').scrollIntoView({block: 'start', behavior: 'smooth'});
            timeout(ensim);
    }

    function timeout(curFunct) {
        setTimeout(curFunct, 10000);
    }

}