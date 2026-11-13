
const surpriseBtn = document.getElementById("surpriseBtn");

const surpriseMessage = document.getElementById("surpriseMessage");

const music = document.getElementById("birthdayMusic");


// =================================
// BIRTHDAY MUSIC SYSTEM
// =================================

music.volume = 0.7;


// Try autoplay when website opens
window.addEventListener("load", function () {

    music.play().catch(function (error) {

        console.log("Autoplay blocked. Waiting for first touch.");

    });

});


// Start music on first screen touch or click
document.addEventListener("pointerdown", function startBirthdayMusic() {

    if (music.paused) {

        music.play().catch(function (error) {

            console.log("Music could not start:", error);

        });

    }

}, { once: true });


// =================================
// BIRTHDAY SURPRISE
// =================================

surpriseBtn.addEventListener("click", function () {

    // Show surprise message
    surpriseMessage.classList.remove("hidden");

    surpriseBtn.innerText = "SURPRISE UNLOCKED ❤️";

    surpriseBtn.disabled = true;


    // Create birthday confetti
    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.innerText = ["🎉", "✨", "🎊", "❤️"][
            Math.floor(Math.random() * 4)
        ];

        confetti.style.position = "fixed";

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.top = "-30px";

        confetti.style.fontSize = "20px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);


        const duration = 2000 + Math.random() * 3000;


        confetti.animate(

            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },

                {
                    transform: `translateY(${window.innerHeight + 60}px) rotate(720deg)`,
                    opacity: 0
                }

            ],

            {
                duration: duration,
                easing: "ease-in",
                fill: "forwards"
            }

        );


        setTimeout(function () {

            confetti.remove();

        }, duration);

    }


    // Scroll to surprise
    surpriseMessage.scrollIntoView({

        behavior: "smooth",
        block: "center"

    });

});
