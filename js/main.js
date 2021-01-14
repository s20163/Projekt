var races = {
    "Dwarf": {
        "image": "./assets/dwarf_image.png",
        "description": "Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs – these common threads unite all dwarves."
    },

    "Elf": {
        "image": "./assets/elf_image.png",
        "description": "Elves are a magical people of otherworldly grace, living in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry."
    },
    "Human": {
        "image": "./assets/human_image.png",
        "description": "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that's why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds."
    }

}

var classes = {
    "Fighter": {
        "image": "./assets/fighter_symbol.png",
        "description": "Fighters share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. They are well acquainted with death, both meting it out and staring it defiantly in the face."
    },

    "Rogue": {
        "image": "./assets/rogue_symbol.png",
        "description": "Rogues rely on skill, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party."
    },
    "Wizard": {
        "image": "./assets/wizard_symbol.png",
        "description": "Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, brute-force mind control, and much more."
    }
}

var userCharacter = {
    class: "",
    race: "",
    playerName: "",
    characterName: "",
    alignment: "",
    background: "",
    age: "",
    height: "",
    weight: "",
    eyes: "",
    skin: "",
    hair: "",
    str: "",
    dex: "",
    con: "",
    int: "",
    wis: "",
    cha: "",
    lvl: "1"
}

// var userSelectedClass;
// var userSelectedRace;

var index = 0;

function togglePage(page) {
    $(".page").each(function () {
        $(this).hide();
        switch (page) {
            case 1:
                $('#firstPage').fadeIn("fast"); break;
            case 2:
                $('#secondPage').fadeIn("fast"); break;
            case 3:
                $('#thirdPage').fadeIn("fast"); break;
            case 4:
                $('#fourthPage').fadeIn("fast"); break;
        }
    });
}

function nextStep() {
    index++;
    togglePage(index);
}

$('.continueBtn').on('click', function () {
    nextStep();
})

$('#raceSelect').on('change', function () {
    var selectedRace = $(this).val();
    var selectedRaceImg = races[selectedRace].image;
    var selectedRaceDsc = races[selectedRace].description;

    $('#selectedRace').fadeIn("fast");
    $('#selectedRaceImg').attr("src", selectedRaceImg);
    $('#selectedRaceDsc').text(selectedRaceDsc);

    userCharacter.race = selectedRace;
})

$('#classSelect').on('change', function () {
    var selectedClass = $(this).val();
    var selectedClassImg = classes[selectedClass].image;
    var selectedClassDsc = classes[selectedClass].description;

    $('#selectedClass').fadeIn("fast");
    $('#selectedClassImg').attr("src", selectedClassImg);
    $('#selectedClassDsc').text(selectedClassDsc);

    userCharacter.class = selectedClass;
})

$('#getDataBtn').on('click', function () {
    userCharacter.playerName = $('#pName').val();
    userCharacter.characterName = $('#cName').val();
    userCharacter.alignment = $('#alignmentSelect option:selected').text();
    userCharacter.background = $('#backgroundSelect option:selected').text();
    userCharacter.age = $('#age').val();
    userCharacter.height = $('#height').val();
    userCharacter.weight = $('#weight').val();
    userCharacter.eyes = $('#eyes').val();
    userCharacter.skin = $('#skin').val();
    userCharacter.hair = $('#hair').val();

    $("#dice1").dice();
    $("#dice2").dice();
    $("#dice3").dice();
    $("#dice4").dice();

    nextStep();
});

function returnNumber(value) {
    return value;
}

function getStat(statArray) {
    var stat = 0;
    for (var i = 0; i != 4; i++) {
        stat += statArray[i];
    }
    stat -= Math.min(...statArray);
    return stat;
}

function getAbilityScoreMod(value) {
    value = value - 10;
    value = value / 2;
    return Math.floor(value);
}

$("#rollStr").click(function () {
    $("#dice1").dice("roll");
    $("#dice2").dice("roll");
    $("#dice3").dice("roll");
    $("#dice4").dice("roll");

    var rolledStr = getStat(window.diceThrow);
    userCharacter.str = rolledStr;
    $('#strBox').text(rolledStr);
});

$("#rollDex").click(function () {
    $("#dice1").dice("roll");
    $("#dice2").dice("roll");
    $("#dice3").dice("roll");
    $("#dice4").dice("roll");

    var rolledDex = getStat(window.diceThrow);
    userCharacter.dex = rolledDex;
    $('#dexBox').text(rolledDex);
});

$("#rollCon").click(function () {
    $("#dice1").dice("roll");
    $("#dice2").dice("roll");
    $("#dice3").dice("roll");
    $("#dice4").dice("roll");

    var rolledCon = getStat(window.diceThrow);
    userCharacter.con = rolledCon;
    $('#conBox').text(rolledCon);
});

$("#rollInt").click(function () {
    $("#dice1").dice("roll");
    $("#dice2").dice("roll");
    $("#dice3").dice("roll");
    $("#dice4").dice("roll");

    var rolledInt = getStat(window.diceThrow);
    userCharacter.int = rolledInt;
    $('#intBox').text(rolledInt);
});

$("#rollWis").click(function () {
    $("#dice1").dice("roll");
    $("#dice2").dice("roll");
    $("#dice3").dice("roll");
    $("#dice4").dice("roll");

    var rolledWis = getStat(window.diceThrow);
    userCharacter.wis = rolledWis;
    $('#wisBox').text(rolledWis);
});

$("#rollCha").click(function () {
    $("#dice1").dice("roll");
    $("#dice2").dice("roll");
    $("#dice3").dice("roll");
    $("#dice4").dice("roll");

    var rolledCha = getStat(window.diceThrow);
    userCharacter.cha = rolledCha;
    $('#chaBox').text(rolledCha);
});

$('#finalButton').click(function () {
    $('#tablePName').text(userCharacter.playerName);
    $('#tableCName').text(userCharacter.characterName);    
    $('#tableRace').text(userCharacter.race);    
    $('#tableClass').text(userCharacter.class);
    $('#tableLvl').text(userCharacter.lvl);    
    $('#tableAlignment').text(userCharacter.alignment);    
    $('#tableBackground').text(userCharacter.background);    
    $('#tableAge').text(userCharacter.age);    
    $('#tableHeight').text(userCharacter.height);    
    $('#tableWeight').text(userCharacter.weight);    
    $('#tableEyes').text(userCharacter.eyes);    
    $('#tableSkin').text(userCharacter.skin);    
    $('#tableHair').text(userCharacter.hair);  
    $('#strBoxFinal').text(userCharacter.str + "   (" + getAbilityScoreMod(userCharacter.str) + ")");
    $('#dexBoxFinal').text(userCharacter.dex + "   (" + getAbilityScoreMod(userCharacter.dex) + ")");
    $('#conBoxFinal').text(userCharacter.con + "   (" + getAbilityScoreMod(userCharacter.con) + ")");
    $('#intBoxFinal').text(userCharacter.int + "   (" + getAbilityScoreMod(userCharacter.int) + ")");
    $('#wisBoxFinal').text(userCharacter.wis + "   (" + getAbilityScoreMod(userCharacter.wis) + ")");
    $('#chaBoxFinal').text(userCharacter.cha + "   (" + getAbilityScoreMod(userCharacter.cha) + ")");
    $('#tableAbilityAcrobatics').text(getAbilityScoreMod(userCharacter.dex))
    $('#tableAbilityAnimal').text(getAbilityScoreMod(userCharacter.wis))
    $('#tableAbilityArcana').text(getAbilityScoreMod(userCharacter.int))
    $('#tableAbilityAthletics').text(getAbilityScoreMod(userCharacter.str))
    $('#tableAbilityDeception').text(getAbilityScoreMod(userCharacter.cha))
    $('#tableAbilityHistory').text(getAbilityScoreMod(userCharacter.int))
    $('#tableAbilityInsight').text(getAbilityScoreMod(userCharacter.wis))
    $('#tableAbilityIntimidation').text(getAbilityScoreMod(userCharacter.cha))
    $('#tableAbilityInvestigation').text(getAbilityScoreMod(userCharacter.int))
    $('#tableAbilityMedicine').text(getAbilityScoreMod(userCharacter.wis))
    $('#tableAbilityNature').text(getAbilityScoreMod(userCharacter.wis))
    $('#tableAbilityPerception').text(getAbilityScoreMod(userCharacter.wis))
    $('#tableAbilityPerformance').text(getAbilityScoreMod(userCharacter.cha))
    $('#tableAbilityPersuasion').text(getAbilityScoreMod(userCharacter.cha))
    $('#tableAbilityReligion').text(getAbilityScoreMod(userCharacter.int))
    $('#tableAbilitySleight').text(getAbilityScoreMod(userCharacter.dex))
    $('#tableAbilityStealth').text(getAbilityScoreMod(userCharacter.dex))
    $('#tableAbilitySurvival').text(getAbilityScoreMod(userCharacter.wis))
});