//Membuat garis kuning muncul di link navigasi sesuai tempat
const Sections = document.querySelectorAll('section[id]')
	
function ScrollkeBawah(){
	const scroll = window.scrollY;
	Sections.forEach(Section =>{
		let TinggiSection = Section.offsetHeight;
		let TopSection = Section.offsetTop - 50;
		const IdSection = Section.getAttribute('id');
		const KelasSection = document.querySelector('nav ul li a[href*=' + IdSection + ']')

		if(IdSection == 'home') {
			TopSection = -0.5; 
			TinggiSection = 524;
		}
		else if(IdSection== 'recipe'){
			TopSection = Section.offsetTop + 20;
			TinggiSection = Section.offsetHeight - 70;
		}

		if(scroll > TopSection && scroll <= TinggiSection + TopSection){
			KelasSection.classList.add('link-aktif')
		} else KelasSection.classList.remove('link-aktif')
	})
}
window.addEventListener('scroll', ScrollkeBawah);

//Mengatur posisi tempat berhenti ketika link di klik dan membuat proses scroll menjadi halus
document.querySelectorAll('a.link-nav').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault(); // Mencegah scroll default

        // Menambahkan offset untuk home
            let offsetPosition = targetElement.offsetTop - 49; // Offset 100px dari atas
            if (targetId === 'home') {
                offsetPosition = 0; // Jika 'home', biarkan scroll mulai dari atas dengan sedikit jarak
            }
            else if(targetId === 'recipe'){
            	offsetPosition = targetElement.offsetTop + 21;
            }

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth" // Scroll halus
            });
        }
    });
});

//Membuat muncul bayangan di header/navigasi ketika discroll ke bawah
function MunculkanBayangan(){
	const header = document.querySelector('header');

	if(this.scrollY > header.offsetHeight) header.classList.add('berbayang');
	else header.classList.remove('berbayang');
}

window.addEventListener("scroll", MunculkanBayangan);

//Kembali ke atas ketika tombol arrow up diklik
const ArrowUp = document.getElementById('arrow-up')
ArrowUp.addEventListener("click", (e) => {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	})
})

//Tombol arrow up hilang ketika di paling atas
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        ArrowUp.style.bottom = '40px';
    }
    else{
    	ArrowUp.style.bottom = '-50%'
    }
})

//Gambar bergerak/muncul dari atas ke bawah/bawah ke atas ketika masuk ke lokasinya
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 300,
	reset: true
})

sr.reveal(`#home-desc, .footer-container`)
sr.reveal('#dish', {delay: 500, distance: '100px', origin: 'bottom'})
sr.reveal('#burger', {delay: 1200, distance: '100px', duration: 1500})
sr.reveal('.home-ingredient', {delay: 1600, interval: 100})
sr.reveal('#recipe-burger #gambar, #delivery-burger, #konten-kontak img', {origin: 'left'})
sr.reveal('#bahan-bahan, #delivery-desc, #konten-kontak-desc', {origin: 'right'})
sr.reveal('.daftar-menu', {interval: 100})