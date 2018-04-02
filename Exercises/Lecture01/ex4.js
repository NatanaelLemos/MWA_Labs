/* jshint esversion: 6 */
/* jshint browser: true */

class BMICalculator {
    
    constructor(unitInput, heightInput, weightInput, outputDiv){
        this._unitInput = unitInput;
        this._heightInput = heightInput;
        this._weightInput = weightInput;
        this._output = output;
    }

    validate(){
        if(!this._heightInput.value){
            alert('Height is required');
            return false;
        }

        if(!this._weightInput.value){
            alert('Weight is required');
            return false;
        }

        return true;
    }

    calculate(){
        if(!this.validate()){
            return;
        }

        const engUnit = this._unitInput.checked;
        let height = this._heightInput.value;
        let weight = this._weightInput.value;

        if(engUnit){
            height *= 0.3048;
            weight *= 0.453592;
        }

        const bmi = weight / (2 * height);

        this._output.innerHTML += `Height (m): ${height} Weight (Kg): ${weight}  BMI: ${bmi} <br />`;
    }
}

(() => {
    //use strict
    const btnCalculate = document.querySelector('#calculate');
    const inpUnit = document.querySelector('[name="unit"]');
    const inpHeight = document.querySelector('[name="height"]');
    const inpWeight = document.querySelector('[name="weight"]');
    const divOutput = document.querySelector('#output');

    const bmi = new BMICalculator(inpUnit, inpHeight, inpWeight, divOutput);
    btnCalculate.onclick = () => bmi.calculate();
})();