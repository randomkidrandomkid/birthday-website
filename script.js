const exploreButton = document.getElementById("explore-button");
const entrance = document.querySelector(".entrance");
const museum = document.getElementById("museum");

const roomPage = document.getElementById("room-page");
const backButton = document.getElementById("back-button");

const roomLabel = document.getElementById("room-label");
const roomTitle = document.getElementById("room-title");
const roomDescription = document.getElementById("room-description");

const galleryContent = document.getElementById("gallery-content");
const researchContent = document.getElementById("research-content");
const letterContent = document.getElementById("letter-content");


exploreButton.addEventListener("click", function() {
    entrance.style.display = "none";
    museum.style.display = "none";

    roomPage.style.display = "block";

    // Reset headings
    roomLabel.textContent = "ROOM 01";
    roomTitle.textContent = "Müthiş Galeri";
    roomDescription.textContent =
        "Bax burda bizim üçün deyerli olan ve menim üçün yeri ferqli olan şekilleri yığdım";

    // Reset sections
    galleryContent.hidden = false;
    researchContent.hidden = true;
    letterContent.hidden = true;

    window.scrollTo(0, 0);
});


backButton.addEventListener("click", function() {
    roomPage.style.display = "none";
    entrance.style.display = "flex";

    // Reset everything for the next visit
    galleryContent.hidden = false;
    researchContent.hidden = true;
    letterContent.hidden = true;

    roomLabel.textContent = "ROOM 01";
    roomTitle.textContent = "Müthiş Galeri";
    roomDescription.textContent =
        "Bax burda bizim üçün deyerli olan ve menim üçün yeri ferqli olan şekilleri yığdım";

    window.scrollTo(0, 0);
});

const nextToResearch = document.getElementById("next-to-research");
const nextToLetter = document.getElementById("next-to-letter");

nextToResearch.addEventListener("click", function() {
    galleryContent.hidden = true;
    researchContent.hidden = false;
    letterContent.hidden = true;

    roomLabel.textContent = "ROOM 02";
    roomTitle.textContent = "Bizim danışma statistikleri 🤓";
    roomDescription.textContent = "Bu ancaq Whatsappdaki mesajlar üçündü, tiktok ve instagram üçün nece datanı yığmaq olar bilmirem 😔😔";

    window.scrollTo(0, 0);
});

nextToLetter.addEventListener("click", function() {
    galleryContent.hidden = true;
    researchContent.hidden = true;
    letterContent.hidden = false;

    roomLabel.textContent = "ROOM 03";
    roomTitle.textContent = "Son sözlerim";
    roomDescription.textContent = "Kövreldim lap 🥲🥲🥲🥲";

    window.scrollTo(0, 0);
});

const galleryCollections = {
	special: [
		{
			title: "Herşeyin başlanğıcı",
			image: "assets/images/specials/leyablok.jpeg",
			caption: "",
			story: "Bax biz ilk defe danışandan sonra  senin profil şeklin itmişdi, mende ele bilmişdim ki sehv nese demişem sen meni bloklamısan 😭😭😭😭"
		},
		{
			title: "İçi qızıl bürünc medal KDMSFMKSDF",
			image: "assets/images/specials/ikidostumunbirgeliyi.jpg",
			caption: "",
			story: "Men Ali ile senin yaxın olduğunu bilmirdim ve eyni zamanda senle emelli mezelenmişdik 🤗🤗"
		},
		{
			title: "Senin möhteşem cicibebe tarifin...",
			image: "assets/images/specials/cicibebe.jpg",
			caption: "",
			story: "FKMLDKDLMDKDSADÇDKLKFKMJAKSFJAFSA\n\n Ayda cicibebelere bax bütün xaşıl olublare... Bunu yoxluyanda çox gülmüşdüm çox maraqlı idi dkfkfdkkdfkdf"
		},
		{
			title: "Leyla ve yaşıdlarının kaliteli aktivitesi",
			image: "assets/images/specials/sabat.jpg",
			caption: "",
			story: "Ayda bunu ilk görende ne qeder gülmüşdümmm\n\nKlubda hamı bele daha yaşlı adamlar olmasına baxmayaraq bele şeyde iştirak elemeni çox sevmişdim mdskfmdsf çox gözel şekildi"
		},
		{
			title: "Hazırlıq anıları",
			image: "assets/images/specials/gettingtoknow.jpg",
			caption: "",
			story: "Biz çox vaxt bele random şeylerden instagramda reelslerden falan söhbet edirdik çox vaxt, amma sen daha hazırlıqlarından danışmağa başlamışdın ve men sevinmişdimki seni daha çox tanımağa başlıyıram"
		},
		{
			title: "Azersüde şikayet",
			image: "assets/images/specials/hecgozlemediyi.jpg",
			caption: "",
			story: "Sen bunu atmazdan evvel men südden şikayetlenirdim ve bunu yazmağa getmişdin, mende elebilmişdimki bezmisen bu ne mızmız uşaqdı deye, meger sende şikayetimi desteklemeye getmisen 😎😎 pislik azersud milla better"
		}, 
		{
			title: "Olmazsa olmaz",
			image: "assets/images/specials/gullu.jpg",
			caption: "",
			story: "Bunu düzeldib bizi dost elediyin üçün özünle qürur duymalısan minnetdaram 🙏🙏"
		}
	],
	ai: [
		{
			title: "Piknikden facieli şekil.. (Allahim bu nedi)",
			image: "assets/images/ais/yupkazibil.jpg",
			caption: "Ümid eliyirem yanında kimse yoxdu bunu gören.. biabr olacam"
		},
		{
			title: "Keçel olsamda yene üzümüz gülecek be",
			image: "assets/images/ais/kecelmal.jpg",
			caption: "Millet dostunun gözel şekillerini düzeldir seninkine bax hele... pislik"
		},
		{
			title: ".....",
			image: "assets/images/ais/ineknrdn.jpg",
			caption: "Yeni başqa dünyada heyvan olsam inek olmaq isteyerdim ona göre şikayetim yok :))"
		},
		{
			title: "Qarayev kimi dindar adamı donuz elemisene, utan utan",
			image: "assets/images/ais/donuznrdn.jpg",
			caption: "Bir donuz olmadığım qalmışdı"
		},
		{
			title: "Uğur böceyi nureddin",
			image: "assets/images/ais/ugurboceyinrdn.jpg",
			caption: "Mence burda sen düzeldende düşünmüsenki ayda ne şans getiren çocukdu bu gel bunu uğur böceyi edek"
		},
		{
			title: "Qoca kaftar dostları ve Leyla hanimefendi",
			image: "assets/images/ais/sulnrdnqoca.jpg",
			caption: "Qocalmışıq senin şeylerinle uğraşmaqdan nçnçnçnç gör ne güne qalmışıq"
		},
		{
			title: "Leyla, beli tutmuyan dostu qoca mal süleyman ve niyese yerde olan men",
			image: "assets/images/ais/leylafutbol.jpg",
			caption: "Süleymanı çox düzgün düzeltmisen amma men niye yerde ele oturmuşam onu anlamadım??"
		},
		{
			title: "İller keçmiş ve Leyla qocalmış..",
			image: "assets/images/ais/yaslileyla.jpg",
			caption: "Qocalsa da helede gülümsemeyi aksatmır ay Masallah olsun."
		}
	],
	childhood: [
		{
			title: "İki prenses",
			image: "assets/images/balacaliq/ikiprenses.jpg",
			caption: "Balaclıqdan süslü püslü olublar Maşallah göz deymesin"
		},
		{
			title: "Bir prenses ve bir neandertal... KJSAFNJKSAFNKSFSKJF",
			image: "assets/images/balacaliq/prensesvecave.jpg",
			caption: "Yazıq Ayten"
		}, 
		{
			title: "Balaca pota şey",
			image: "assets/images/balacaliq/toppusleyla.jpg",
			caption: "Papağa bax hele kdsfkdsfmdskfd"
		},

		{
			title: "Soyuq havalara baxmayaraq hele de enerjetik pozitiv",
			image: "assets/images/balacaliq/qisleyla.jpg",
			caption: "Pembe papaq pembe şerf"
		}, 
		{
			title: "Şaheser saçlı Leyla ve biricik kuzeni",
			image: "assets/images/balacaliq/divahaircut.jpg",
			caption: "Saçını kim düzeldibse elleri dert görmesin"
		},
		{
			title: "Daha böyüyüb yeke çocuk olmuş Leyla",
			image: "assets/images/balacaliq/diva.jpg",
			caption: "Diva"
		}
	],
	cats: [
		{
			title: "İlk pişik şekli",
			image: "assets/images/catler/ilk_pisik.jpg",
			caption: "Bu şirin şeyin şekli ile başlamısdıq danışmağa, teşekkürler pişik"
		},
		{
			title: "İlk balalar",
			image: "assets/images/catler/ilk_balaca_pisik.jpg",
			caption: "Bunlara bax hele şirinlerrr\nBunda bilmişdimki hamsteriniz var"
		},
		{
			title: "Canımız tommy",
			image: "assets/images/catler/tommycan.jpg",
			caption: "Yuxulu şey qaçıb tozub yatıb yuxusu şirin olsun"
		},
		{
			title: "Fikirli tommy..",
			image: "assets/images/catler/tommycan2.jpg",
			caption: "Ah beeeee, tommy seni üzen dünya bize ne elemez"
		},
		{
			title: "Duş almağı sevmez tommycan",
			image: "assets/images/catler/tommycan3.jpg",
			caption: "Temiz olmaq lazımdı temiz, sevmesende çimecen tommy bey"
		},
		{
			title: "Woody bey",
			image: "assets/images/catler/woody.jpg",
			caption: "Canımın içi..."
		},
		{
			title: "Yuxulu woody",
			image: "assets/images/catler/woody2.jpg",
			caption: "Bax bax neter yatıb başına bax yeyerem onu men"
		},
		{
			title: "Azerbaycandakı son pişik şeklimiz",
			image: "assets/images/catler/zakatala.jpg",
			caption: "Bu şekile baxanda üzülürem çünki bu şekili çeken gün çox kefim pozulmuşduki hamını qoyub gedecem ksmfdmdsfd"
		}
	]
};
console.log(galleryCollections);

function setupCarousel(collectionName, carouselId) {
	const carousel = document.getElementById(carouselId);
	const photos = galleryCollections[collectionName];
	const image = carousel.querySelector(".carousel-image");
	const placeholder = carousel.querySelector(".photo-placeholder");
	const title = carousel.querySelector(".photo-title");
	const caption = carousel.querySelector(".photo-caption");
	const counter = carousel.querySelector(".photo-counter");
	const storyText = carousel.querySelector(".story-text");
	
	const previousButton = carousel.querySelector(".previous-photo");
	const nextButton = carousel.querySelector(".next-photo");
	

	let currentIndex = 0;
	function displayPhoto() {
		const photo = photos[currentIndex];
		image.classList.add("fading");

		setTimeout(function() {

			image.src = photo.image;
			image.alt = photo.title;

			image.hidden = false;
			placeholder.hidden = true;

			title.textContent = photo.title;
			caption.textContent = photo.caption;

			if (storyText) {
            			storyText.textContent = photo.story;
       			}

			counter.textContent =
			String(currentIndex + 1).padStart(2, "0") +
			" / " +
			String(photos.length).padStart(2, "0");

			image.classList.remove("fading");

		}, 350);
		
	}

	nextButton.addEventListener("click", function() {
		currentIndex++;
		if(currentIndex >= photos.length) {
			currentIndex = 0;
		}
		displayPhoto();
	});

	previousButton.addEventListener("click", function() {
		currentIndex--;
		if(currentIndex < 0) {
			currentIndex = photos.length - 1;
		}
		displayPhoto();
	});
	displayPhoto();
}

setupCarousel("childhood", "childhood-carousel");
setupCarousel("ai", "ai-carousel");
setupCarousel("cats", "cats-carousel");
setupCarousel("special", "special-carousel");





function launchFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const particles = [];

    const colors = [
        "#C97991",
        "#E8AD91",
        "#B8A9D5",
        "#F5D77A",
        "#FFFFFF",
        "#FF8FA3",
        "#A8DADC"
    ];

    function createFirework(x, y, power = 1) {
        const count = Math.floor(45 * power);
        const color = colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = (Math.random() * 6 + 2) * power;

            particles.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                alpha: 1,
                decay: Math.random() * 0.009 + 0.008,
                color: Math.random() < 0.75
                    ? color
                    : colors[Math.floor(Math.random() * colors.length)],
                size: Math.random() * 3 + 1.5,
                gravity: 0.045,
                trail: []
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((p, index) => {
            
            p.x += p.vx;
            p.y += p.vy;

            p.vy += p.gravity;
            p.vx *= 0.985;
            p.alpha -= p.decay;

            // Particle trail
            if (p.trail.length > 1) {
                ctx.beginPath();
                ctx.moveTo(p.trail[0].x, p.trail[0].y);

                p.trail.forEach(point => {
                    ctx.lineTo(point.x, point.y);
                });

                ctx.strokeStyle = p.color;
                ctx.globalAlpha = Math.max(0, p.alpha * 0.5);
                ctx.lineWidth = p.size;
                ctx.stroke();
            }

            // Glowing particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(0, p.alpha);
            ctx.shadowBlur = 12;
            ctx.shadowColor = p.color;
            ctx.fill();
            ctx.shadowBlur = 0;

            if (p.alpha <= 0) {
                particles.splice(index, 1);
            }
        });

        ctx.globalAlpha = 1;

        if (Date.now() - startTime < 10000 || particles.length > 0) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, width, height);
        }
    }

    const startTime = Date.now();

    // First massive wave
    createFirework(width * 0.2, height * 0.3, 1.5);
    createFirework(width * 0.8, height * 0.25, 1.5);
    createFirework(width * 0.5, height * 0.2, 1.3);

    // Second wave
    setTimeout(() => {
        createFirework(width * 0.35, height * 0.35, 1.7);
        createFirework(width * 0.7, height * 0.4, 1.5);
    }, 600);

    // Third wave
    setTimeout(() => {
        createFirework(width * 0.15, height * 0.45, 1.4);
        createFirework(width * 0.85, height * 0.4, 1.7);
        createFirework(width * 0.5, height * 0.35, 1.8);
    }, 1500);

    setTimeout(() => {
        createFirework(width * 0.15, height * 0.45, 1.4);
        createFirework(width * 0.85, height * 0.4, 1.7);
        createFirework(width * 0.5, height * 0.35, 1.8);
    }, 2400);

    setTimeout(() => {
        createFirework(width * 0.15, height * 0.45, 1.4);
        createFirework(width * 0.85, height * 0.4, 1.7);
        createFirework(width * 0.5, height * 0.35, 1.8);
    }, 3300);

    setTimeout(() => {
        createFirework(width * 0.15, height * 0.45, 1.4);
        createFirework(width * 0.85, height * 0.4, 1.7);
        createFirework(width * 0.5, height * 0.35, 1.8);
    }, 4200);

    setTimeout(() => {
        createFirework(width * 0.25, height * 0.25, 2);
        createFirework(width * 0.75, height * 0.25, 2);
        createFirework(width * 0.5, height * 0.15, 2);
    }, 5000);

    animate();
}

window.addEventListener("load", launchFireworks);


async function loadResearchData() {
    try {
        const response = await fetch("analysis.json");

        if (!response.ok) {
            throw new Error("Could not load analysis.json");
        }

        const data = await response.json();

        // OVERVIEW STATISTICS

        document.getElementById("total-messages").textContent =
            data.total_messages.toLocaleString();

        document.getElementById("total-conversations").textContent =
            data.conversations.total;

        const months = data.activity.months;

        const peakMonth = Object.entries(months)
            .sort((a, b) => b[1] - a[1])[0];

        document.getElementById("peak-month").textContent =
            peakMonth[0];


        // PARTICIPANT COMPARISON

        const leyla = data.participants["Leyla xanim"];
        const garayev = data.participants["Garayev"];

        document.getElementById("leyla-messages").textContent =
            leyla.messages.toLocaleString();

        document.getElementById("leyla-words").textContent =
            leyla.total_words.toLocaleString();

        document.getElementById("leyla-average").textContent =
            (leyla.total_words / leyla.text_messages).toFixed(2);

        document.getElementById("garayev-messages").textContent =
            garayev.messages.toLocaleString();

        document.getElementById("garayev-words").textContent =
            garayev.total_words.toLocaleString();

        document.getElementById("garayev-average").textContent =
            (garayev.total_words / garayev.text_messages).toFixed(2);


        // MESSAGE COUNT COMPARISON

        const totalParticipantMessages =
            leyla.messages + garayev.messages;

        const leylaPercentage =
            (leyla.messages / totalParticipantMessages) * 100;

        const garayevPercentage =
            (garayev.messages / totalParticipantMessages) * 100;

        document.getElementById("leyla-bar").style.width =
            `${leylaPercentage}%`;

        document.getElementById("garayev-bar").style.width =
            `${garayevPercentage}%`;

        document.getElementById("leyla-share").textContent =
            `${leylaPercentage.toFixed(1)}%`;

        document.getElementById("garayev-share").textContent =
            `${garayevPercentage.toFixed(1)}%`;


        // HOURLY ACTIVITY CHART

        const hours = data.activity.hours;

        const busiestHour = Object.entries(hours)
            .sort((a, b) => b[1] - a[1])[0];

        const maxMessages = Number(busiestHour[1]);

        document.getElementById("busiest-hour").textContent =
            `${String(busiestHour[0]).padStart(2, "0")}:00`;

        document.getElementById("busiest-hour-count").textContent =
            maxMessages.toLocaleString();

        document.getElementById("peak-hour").textContent =
            `${String(busiestHour[0]).padStart(2, "0")}:00 – ${String((Number(busiestHour[0]) + 1) % 24).padStart(2, "0")}:00`;

        const chart = document.getElementById("hourly-chart");

        chart.innerHTML = "";

        for (let hour = 0; hour < 24; hour++) {
            const count = Number(hours[hour] || 0);
            const percentage = (count / maxMessages) * 100;

            const column = document.createElement("div");
            column.className = "hour-column";

            const track = document.createElement("div");
            track.className = "hour-bar-track";

            const bar = document.createElement("div");
            bar.className = "hour-bar";

            if (hour === Number(busiestHour[0])) {
                bar.classList.add("peak");
            }

            bar.style.height = `${percentage}%`;
            bar.title =
                `${String(hour).padStart(2, "0")}:00 — ${count.toLocaleString()} messages`;

            const label = document.createElement("span");
            label.className = "hour-label";
            label.textContent = String(hour).padStart(2, "0");

            track.appendChild(bar);
            column.appendChild(track);
            column.appendChild(label);

            chart.appendChild(column);
        }


        // EMOJI ANALYSIS

        const leylaEmojis = data.emoji_counts["Leyla xanim"];
        const garayevEmojis = data.emoji_counts["Garayev"];

        function displayTopEmojis(emojis, topId, countId, listId) {
            const sorted = Object.entries(emojis)
                .sort((a, b) => b[1] - a[1]);

            const topFive = sorted.slice(0, 5);
            const favourite = topFive[0];

            document.getElementById(topId).textContent =
                favourite[0];

            document.getElementById(countId).textContent =
                `${favourite[1].toLocaleString()} defe`;

            const list = document.getElementById(listId);
            list.innerHTML = "";

            topFive.forEach(function(item) {
                const row = document.createElement("div");
                row.className = "emoji-row";

                row.innerHTML = `
                    <span>${item[0]}</span>
                    <strong>${item[1].toLocaleString()}</strong>
                `;

                list.appendChild(row);
            });
        }

        displayTopEmojis(
            leylaEmojis,
            "leyla-top-emoji",
            "leyla-top-count",
            "leyla-emoji-list"
        );

        displayTopEmojis(
            garayevEmojis,
            "garayev-top-emoji",
            "garayev-top-count",
            "garayev-emoji-list"
        );


        // RESPONSE TIME ANALYSIS

        const responseData = data.response_times;

        function formatDuration(seconds) {
            seconds = Math.floor(seconds);

            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const remainingSeconds = seconds % 60;

            if (hours > 0) {
                return `${hours}h ${minutes}m`;
            }

            if (minutes > 0) {
                return `${minutes}m ${remainingSeconds}s`;
            }

            return `${remainingSeconds}s`;
        }

        function displayResponseStats(person, prefix) {
            const stats = responseData[person];

            document.getElementById(`${prefix}-fastest`).textContent =
                formatDuration(stats.fastest_seconds);

            document.getElementById(`${prefix}-slowest`).textContent =
                formatDuration(stats.slowest_seconds);

            document.getElementById(`${prefix}-mean`).textContent =
                formatDuration(stats.average_seconds);

            document.getElementById(`${prefix}-median`).textContent =
                formatDuration(stats.median_seconds);

            document.getElementById(`${prefix}-replies`).textContent =
                stats.replies_analysed.toLocaleString();
        }

        displayResponseStats("Leyla xanim", "leyla");
        displayResponseStats("Garayev", "garayev");

    } catch (error) {
        console.error("Research data error:", error);
    }
}

loadResearchData();

