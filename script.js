// Kita siapin palet warna bubuk perinya dulu
const fairyDustColors = ['#FFC1E3', '#FFDAB9', '#E6E6FA', '#FFFACD'];

document.addEventListener('mousemove', function(e) {
    let body = document.querySelector('body');
    let sparkle = document.createElement('span');

    // PERUBAHAN BESAR DI SINI: Pakai pageX/pageY biar akurat di seluruh halaman
    let x = e.pageX;
    let y = e.pageY;
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    // Bikin ukuran, rotasi, dan warna jadi random!
    let size = Math.random() * 12 + 5; // Ukuran random antara 5px - 17px
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';

    let rotation = Math.random() * 360;
    sparkle.style.transform = `rotate(${rotation}deg)`;

    // Pilih warna random dari palet kita
    const color = fairyDustColors[Math.floor(Math.random() * fairyDustColors.length)];
    sparkle.style.background = color; // Kita pake background lagi, tapi warnanya ganti-ganti

    body.appendChild(sparkle);

    // Bikin durasi hilangnya juga sedikit random
    let duration = Math.random() * 500 + 500; // Antara 0.5 - 1 detik
    setTimeout(function() {
        sparkle.remove();
    }, duration);
});