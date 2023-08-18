const hitungLuas = document.getElementById("hitungLuas");
hitungLuas.addEventListener("click", function () {
    const alasLuas = document.getElementById("alasLuas");
    const nilaiAlas = alasLuas.value;

    const tinggiLuas = document.getElementById("tinggiLuas");
    const nilaiTinggi = tinggiLuas.value;

    const hasil = (1 / 2) * nilaiAlas * nilaiTinggi;

    const formulaValueElements = document.querySelectorAll(".formula-value");
    formulaValueElements[0].textContent = nilaiAlas;
    formulaValueElements[1].textContent = nilaiTinggi;
    formulaValueElements[2].textContent = hasil;
});

const resetLuas = document.getElementById("resetLuas");
resetLuas.addEventListener("click", function () {
    const hasilLuas = document.getElementById("hasilLuas");
    const formulaValueElements = document.querySelectorAll(".formula-value");

    formulaValueElements[0].textContent = "";
    formulaValueElements[1].textContent = "";
    formulaValueElements[2].textContent = "";
});

const hitungKeliling = document.getElementById("hitungKeliling");
hitungKeliling.addEventListener("click", function () {
    const s1 = parseFloat(document.getElementById("s1").value);
    const s2 = parseFloat(document.getElementById("s2").value);
    const s3 = parseFloat(document.getElementById("s3").value);

    const hasilKeliling = s1 + s2 + s3;

    const formulaValueElements = document.querySelectorAll(".formula-value-keliling");
    formulaValueElements[0].textContent = s1;
    formulaValueElements[1].textContent = s2;
    formulaValueElements[2].textContent = s3;
    formulaValueElements[3].textContent = hasilKeliling;
});

const resetKeliling = document.getElementById("resetKeliling");
resetKeliling.addEventListener("click", function () {
   
    const formulaValueElements = document.querySelectorAll(".formula-value-keliling");

    formulaValueElements[0].textContent = "";
    formulaValueElements[1].textContent = "";
    formulaValueElements[2].textContent = "";
    formulaValueElements[3].textContent = "";

});

