const hitungLuas = document.getElementById("hitungLuas");
hitungLuas.addEventListener("click",function(){
    const alasLuas = document.getElementById("alasLuas");
    const nilaiAlas = alasLuas.value;

    const tinggiLuas = document.getElementById("tinggiLuas");
    const nilaiTinggi = tinggiLuas.value;

    const hasil = (1/2)*nilaiAlas*nilaiTinggi;
    // const hasilLuas = document.getElementById("hasilLuas");
    // hasilLuas.innerHTML=
    // "L= 1/2 x a x t " +
    // "<br />"+
    // "L = 1/2 x " + nilaiAlas +"x " + nilaiTinggi + "<br />" + "L = "+ hasil;
    const formulaValueElements = document.querySelectorAll(".formula-value");
    formulaValueElements[0].textContent=nilaiAlas;
    formulaValueElements[1].textContent=nilaiTinggi;
    formulaValueElements[2].textContent=hasil;
});

const resetLuas = document.getElementById("resetLuas");
resetLuas.addEventListener("click",function(){
    const hasilLuas = document.getElementById("hasilLuas");
    const formulaValueElements=document.querySelectorAll(".formula-value");

    formulaValueElements[0].textContent="";
    formulaValueElements[1].textContent="";
    formulaValueElements[2].textContent="";

    const formulaExpressionElements = document.querySelectorAll(".formula-expression");
 
    formulaExpressionElements[2].textContent = "x";
    formulaExpressionElements[3].textContent = "";
    formulaExpressionElements[4].textContent = "x";
    formulaExpressionElements[5].textContent = "";
    
    // Menghilangkan tampilan hasil
    hasilLuas.style.display = "none";


});

