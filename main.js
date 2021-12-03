main = function () {
///////////////////////// HOMBRE /////////////////////////
if (document.getElementById('sex').value == 'masc' & document.getElementById('heightUnits').value == 'cm') {


    gebCalcPa = function () {
        
        document.getElementById("gebPa").value = (66.5 + (Number(document.getElementById("weight").value)*13.75) + (Number(document.getElementById("height").value)*5) 
        - (Number(document.getElementById("age").value)*6.79)).toFixed(2);
    }

    etaCalc = function () {
        document.getElementById("eta").value = Number(document.getElementById("gebPa").value) * (0.1);

    }

    afCalc = function () {
        document.getElementById("af").value = Number(document.getElementById('gebPa').value) * (0.1);
    }

    paCalc = function () {
        document.getElementById("getPa").value = Number(document.getElementById("gebPa").value) + Number(document.getElementById("eta").value)*2;
        // No llamar igual a la funcion y al id del input porque entra en error
        // Cuando en una operacion encuentra un argumento que no sabe como interpretar no la realiza
    }

    gebCalcPi = function () {
        
        document.getElementById("gebPi").value = (66.5 + Number(13.75*23*(document.getElementById('height').value/100)**2) 
        + (Number(document.getElementById("height").value)*5) 
        - (Number(document.getElementById("age").value)*6.79)).toFixed(2);
        
    }

    piCalc = function () {
        document.getElementById("getPi").value = (Number(document.getElementById("gebPi").value)*1.2).toFixed(2);

    }

    mifflinCalc = function () {
        document.getElementById('getMifflin').value = Number((document.getElementById('weight').value)*10 + 6.25 * (document.getElementById('height').value) 
        - 5 * (document.getElementById('age').value) + 5);
    }

    average = function () {
        document.getElementById('ave').value = ((Number(document.getElementById('getMifflin').value) + Number(document.getElementById('getPa').value)) / 2).toFixed(2);
    }

}
else if (document.getElementById('sex').value == 'masc' & document.getElementById('heightUnits').value == 'm') {


    gebCalcPa = function () {
        
        document.getElementById("gebPa").value = (66.5 + (Number(document.getElementById("weight").value)*13.75) + (Number(document.getElementById("height").value)*5*100) 
        - (Number(document.getElementById("age").value)*6.79)).toFixed(2);
    }

    etaCalc = function () {
        document.getElementById("eta").value = Number(document.getElementById("gebPa").value) * (0.1);

    }

    afCalc = function () {
        document.getElementById("af").value = Number(document.getElementById('gebPa').value) * (0.1);
    }

    paCalc = function () {
        document.getElementById("getPa").value = Number(document.getElementById("gebPa").value) + Number(document.getElementById("eta").value)*2;
        // No llamar igual a la funcion y al id del input porque entra en error
        // Cuando en una operacion encuentra un argumento que no sabe como interpretar no la realiza
    }

    gebCalcPi = function () {
        
        document.getElementById("gebPi").value = (66.5 + Number(13.75*23*(document.getElementById('height').value)**2) 
        + (Number(document.getElementById("height").value)*5*100) 
        - (Number(document.getElementById("age").value)*6.79)).toFixed(2);
        
    }

    piCalc = function () {
        document.getElementById("getPi").value = (Number(document.getElementById("gebPi").value)*1.2).toFixed(2);

    }

    mifflinCalc = function () {
        document.getElementById('getMifflin').value = Number((document.getElementById('weight').value)*10 + 6.25 * 100*(document.getElementById('height').value) 
        - 5 * (document.getElementById('age').value) + 5);
    }

    average = function () {
        document.getElementById('ave').value = ((Number(document.getElementById('getMifflin').value) + Number(document.getElementById('getPa').value)) / 2).toFixed(2);
    }

}
//////////////////////////// MUJER ///////////////////////
else if (document.getElementById('sex').value == 'fem' & document.getElementById('heightUnits').value == 'cm') {

    gebCalcPa = function () {
        
        document.getElementById("gebPa").value = (655 + (Number(document.getElementById("weight").value)*9.56) + (Number(document.getElementById("height").value)* 1.85) 
        - (Number(document.getElementById("age").value)*4.68)).toFixed(2);
    }

    etaCalc = function () {
        document.getElementById("eta").value = Number(document.getElementById("gebPa").value) * (0.1);

    }

    afCalc = function () {
        document.getElementById("af").value = Number(document.getElementById('gebPa').value) * (0.1);
    }

    paCalc = function () {
        document.getElementById("getPa").value = Number(document.getElementById("gebPa").value) + Number(document.getElementById("eta").value)*2;
        // No llamar igual a la funcion y al id del input porque entra en error
        // Cuando en una operacion encuentra un argumento que no sabe como interpretar no la realiza
    }

    gebCalcPi = function () {
        
        document.getElementById("gebPi").value = (655 + Number(9.56*21.5*(document.getElementById('height').value/100)**2) 
        + (Number(document.getElementById("height").value)*1.85) 
        - (Number(document.getElementById("age").value)*4.68)).toFixed(2);
        
    }

    piCalc = function () {
        document.getElementById("getPi").value = (Number(document.getElementById("gebPi").value)*1.2).toFixed(2);

    }

    mifflinCalc = function () {
        document.getElementById('getMifflin').value = Number((document.getElementById('weight').value)*10 + 6.25 * (document.getElementById('height').value) 
        - 5 * (document.getElementById('age').value) - 161);
    }

    average = function () {
        document.getElementById('ave').value = ((Number(document.getElementById('getMifflin').value) + Number(document.getElementById('getPa').value)) / 2).toFixed(2);
    }

}
else if (document.getElementById('sex').value == 'fem' & document.getElementById('heightUnits').value == 'm') {

    gebCalcPa = function () {
        
        document.getElementById("gebPa").value = (655 + (Number(document.getElementById("weight").value)*9.56) + (Number(document.getElementById("height").value)* 1.85*100) 
        - (Number(document.getElementById("age").value)*4.68)).toFixed(2);
    }

    etaCalc = function () {
        document.getElementById("eta").value = Number(document.getElementById("gebPa").value) * (0.1);

    }

    afCalc = function () {
        document.getElementById("af").value = Number(document.getElementById('gebPa').value) * (0.1);
    }

    paCalc = function () {
        document.getElementById("getPa").value = Number(document.getElementById("gebPa").value) + Number(document.getElementById("eta").value)*2;
        // No llamar igual a la funcion y al id del input porque entra en error
        // Cuando en una operacion encuentra un argumento que no sabe como interpretar no la realiza
    }

    gebCalcPi = function () {
        
        document.getElementById("gebPi").value = (655 + Number(9.56*21.5*(document.getElementById('height').value)**2) 
        + (Number(document.getElementById("height").value)*1.85*100) 
        - (Number(document.getElementById("age").value)*4.68)).toFixed(2);
        
    }

    piCalc = function () {
        document.getElementById("getPi").value = (Number(document.getElementById("gebPi").value)*1.2).toFixed(2);

    }

    mifflinCalc = function () {
        document.getElementById('getMifflin').value = Number((document.getElementById('weight').value)*10 + 6.25 * 100*(document.getElementById('height').value) 
        - 5 * (document.getElementById('age').value) - 161);
    }

    average = function () {
        document.getElementById('ave').value = ((Number(document.getElementById('getMifflin').value) + Number(document.getElementById('getPa').value)) / 2).toFixed(2);
    }

}
}

