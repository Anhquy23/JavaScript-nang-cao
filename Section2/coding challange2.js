const weightMark = 78;
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const bmiMark = weightMark / heightMark ** 2 ;
const bmiJohn = weightJohn / (heightJohn * heightJohn);

const mark = bmiJohn.toFixed(2);
const john = bmiJohn.toFixed(2);

if(bmiMark > bmiMark){
    console.log(`Chỉ số BMI của Mark (${mark}) cao hơn của John (${john}) !`)
}else{
    console.log(`Chỉ số BMI của John (${john}) cao hơn của Mark (${mark}) !`)
}
