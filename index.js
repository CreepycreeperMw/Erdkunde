async function transition() {
    
    //console.log(document.querySelector('.on').className.baseVal)

    if(i==0) {
        document.querySelector('#sonnen_system.on').className.baseVal="transition_1";
        setTimeout(function () {
            document.querySelector('#sonne.on').className.baseVal="transition_1";
        }, 1500)
    }
    if(i==1) {
        document.querySelector('g#H_main').className.baseVal="conversion";
        document.querySelector('g#H_2nd').className.baseVal="conversion";
        setTimeout(function () {
            document.querySelector('g#H_main').className.baseVal="flup conversion";
            document.querySelector('g#H_2nd').className.baseVal="flup conversion";
            document.querySelector('g#He_main').className.baseVal="conversion";
        }, 2000)
    }
    if(i==2) {
        document.querySelector('g#arrows').className.baseVal="conversion";
    }
    if(i==3) {
        document.querySelector('g#showcase_storyboard').className.baseVal="on";
        document.querySelector('g#sonnesystem2sonneatom').className.baseVal="transition_2";
        document.querySelector('g#arrows').className.baseVal="off";
        setTimeout(function () {
            document.querySelector('g#sonnesystem2sonneatom').className.baseVal="off";
        }, 1250)
    }
    if(i==4) {
        document.querySelector('#showcase_solarpanel').className.baseVal="transition_1";
        document.querySelector('#solar_thermie').className.baseVal="transition_1";
    }
    if(i==5) {
        document.querySelector('#szene').className.baseVal="on";
        //document.querySelector('g#szene_solar_panel').className.baseVal="on";
    }
    if(i==6) {
        document.querySelector('g#showcase_storyboard.on').className.baseVal="off";
        document.querySelector('g#co2').className.baseVal="transition_1";
        document.querySelector('g#szene_solar_panel').className.baseVal="transition_1";
        setTimeout(function () {
            document.querySelector('g#tops').className.baseVal="on";
            document.querySelector('g#vegetation.transition_1').className.baseVal="";
            document.querySelector('g#sun').className.baseVal="";
        }, 700)
    }
    if(i==7) {
        document.querySelector('g#question_marks_nature').className.baseVal="on";
    }
    if(i==8) {
        document.querySelector('#szene').className.baseVal="off";
        document.querySelector('g#vorteile').className.baseVal="state1";
    }
    if(i==9) {
        document.querySelector('g#vorteile').className.baseVal="state2";
    }
    if(i==10) {
        document.querySelector('g#vorteile').className.baseVal="state3";
    }
    if(i==11) {
        document.querySelector('#vorteile').className.baseVal="off";
    }
    if(i==12) {
        document.querySelector('.solar_therm_arrow').className.baseVal="solartherm_arrow on";
        document.querySelector('.solar_therm_arrow').className.baseVal="solartherm_arrow on";
        document.querySelector('.solar_therm_arrow').className.baseVal="solartherm_arrow on";
        document.querySelector('.solar_therm_arrow').className.baseVal="solartherm_arrow on";
        document.querySelector('.solar_therm_arrow').className.baseVal="solartherm_arrow on";
        document.querySelector('.solar_therm_arrow').className.baseVal="solartherm_arrow on";
    }
    if(i==13) {
        document.querySelector('.solar_therm_arrow1').className.baseVal="solartherm_arrow on";
        document.querySelector('.solar_therm_arrow1').className.baseVal="solartherm_arrow on";
        document.querySelector('.solar_therm_arrow1').className.baseVal="solartherm_arrow on";
        document.querySelector('.solar_therm_arrow1').className.baseVal="solartherm_arrow on";
        document.querySelector('.solar_therm_arrow1').className.baseVal="solartherm_arrow on";
        document.querySelector('.solar_therm_arrow1').className.baseVal="solartherm_arrow on";
    }
    if(i==14) {
        document.querySelector('#solar_thermie_tower').className.baseVal="off";
        document.querySelector('#solarzelle').className.baseVal="on";
    }
    if(i==15) {
        document.querySelector('#silicium_text').className.baseVal="on";
    }
    if(i==16) {
        document.querySelector('#phosphorside').className.baseVal="on";
    }
    if(i==17) {
        document.querySelector('#borside').className.baseVal="on";
    }
    if(i==18) {
        document.querySelector('#phosphoratom').className.baseVal="on";
        setTimeout(function () {
            document.querySelector('#movingatom').className.baseVal="on";
        }, 700)
    }
    if(i==19) {
        document.querySelector('#boratom').className.baseVal="on";
    }
    if(i==20) {
        document.querySelector('#movingatom').className.baseVal="move on";
        document.querySelector('#armstueck').className.baseVal="on";
    }
    if(i==21) {
        document.querySelector('#grenzschicht').className.baseVal="on";
    }
    if(i==22) {
        document.querySelector('#bor4').className.baseVal="on";
    }
    if(i==23) {
        document.querySelector('#pluspole').className.baseVal="on";
    }
    if(i==24) {
        document.querySelector('#minuspole').className.baseVal="on";
    }
    if(i==25) {
        document.querySelector('#metal').className.baseVal="on";
    }
    if(i==26) {
        document.querySelector('#lamp').className.baseVal="on";
    }
    i++
    if(i==27) {
        i = 0;
    }
}

function zwischenblender(key) {
    if(key==49) {
        document.querySelector('g#vorteile').className.baseVal="on";
    }
    console.log(key)
}