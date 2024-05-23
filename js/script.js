function calculateLuas() {
    const base = document.getElementById('base').value;
    const height = document.getElementById('height').value;
    if (base && height) {
        const luas = 0.5 * base * height;
        document.getElementById('result').innerText = `Luas Segitiga: ${luas}`;
    } else {
        document.getElementById('result').innerText = 'Mohon masukkan nilai yang valid.';
    }
}

function calculateKeliling() {
    const side1 = document.getElementById('side1').value;
    const side2 = document.getElementById('side2').value;
    const side3 = document.getElementById('side3').value;
    if (side1 && side2 && side3) {
        const keliling = parseFloat(side1) + parseFloat(side2) + parseFloat(side3);
        document.getElementById('result-keliling').innerText = `Keliling Segitiga: ${keliling}`;
    } else {
        document.getElementById('result-keliling').innerText = 'Mohon masukkan nilai yang valid.';
    }
}

function toggleForm() {
    const luasForm = document.getElementById('luas-form');
    const kelilingForm = document.getElementById('keliling-form');
    const toggleButton = document.getElementById('toggle-button');
    const title = document.getElementById('title');

    if (luasForm.style.display === 'none') {
        luasForm.style.display = 'block';
        kelilingForm.style.display = 'none';
        toggleButton.innerText = 'Ganti ke Keliling Segitiga';
        title.innerText = 'Penghitungan Luas Segitiga';
    } else {
        luasForm.style.display = 'none';
        kelilingForm.style.display = 'block';
        toggleButton.innerText = 'Ganti ke Luas Segitiga';
        title.innerText = 'Penghitungan Keliling Segitiga';
    }
}

function resetForm() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
    document.getElementById('result').innerText = '';
    document.getElementById('result-keliling').innerText = '';
}
