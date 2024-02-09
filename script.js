const form = document.querySelector('form')

const underWeight = document.getElementById("under-w")
const normalWeight = document.getElementById("normal-w")
const overWeight = document.getElementById("over-w")


form.addEventListener("submit",function(val){
    val.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.getElementById("results")

    console.log(weight);

    if(height === '' || height === 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    }else if(weight === '' || weight === 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show results.
        result.innerHTML = `BMI : ${bmi}`
        if(bmi < 18.60){
            underWeight.style.color = "red"
        }else if(bmi > 18.60 && bmi < 24.90){
            normalWeight.style.color = "red"
        }else if(bmi > 24.9){
            overWeight.style.color = "red"
        }
    }

})