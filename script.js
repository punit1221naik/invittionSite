const accordionData = [
    {
        heading: "Who is inviting you?",
        description: "Punit & Megha are inviting you to celebrate two special milestones in their life journey together."
    },
    {
        heading: "What are we celebrating?",
        description: "A double celebration! First, the warming of our new nest, and second, the official naming ceremony of our precious little son."
    },
    {
        heading: "When is the celebration?",
        description: "Thursday, 27th March 2025 -(11am) - Save the date for this joyous occasion!"
    },
    {
        heading: "Where is the venue?",
        description: "Our new home: Bhavani Hessoniate, Room no 301, 3rd floor, Next to Vidyaratna Enclave, Vidyaratna Nagar, Manipal, Karnataka 576104"
    },
    {
        heading: "Why should you come?",
        description: "Because your presence will make our celebration complete! Plus, who wouldn't want to be among the first to know our son's name and bless our new home? And yes, there will be delicious food!"
    }
];
function createAccordions(accordionData, targetSelector) {
    // Get the target element where accordions will be appended
    const targetElement = typeof targetSelector === 'string'
        ? document.querySelector(targetSelector)
        : targetSelector;

    if (!targetElement) {
        console.error('Target element not found');
        return;
    }

    // Create each accordion element
    accordionData.forEach(item => {
        // Create accordion button
        const button = document.createElement('button');
        button.className = 'accordion';
        button.textContent = item.heading;

        // Create panel div
        const panel = document.createElement('div');
        panel.className = 'panel';

        // Create paragraph inside panel
        const paragraph = document.createElement('p');
        paragraph.textContent = item.description;

        // Append paragraph to panel
        panel.appendChild(paragraph);

        // Add click event listener to toggle active class
        button.addEventListener('click', function () {
            this.classList.toggle('active');

            // Toggle panel visibility
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });

        // Set initial panel state
        panel.style.display = 'none';

        // Append button and panel to target element
        targetElement.appendChild(button);
        targetElement.appendChild(panel);
    });
}

createAccordions(accordionData, '#accordion-container');
function updateCountdown() {
    const eventDate = new Date('March 27, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    if (timeLeft < 0) {
        document.getElementById('countdown').innerHTML = "It's celebration time!";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// RSVP Form Toggle
function toggleRSVP() {
    const form = document.getElementById('rsvpForm');
    form.classList.toggle('active');

    // Create confetti effect when opening the form
    if (form.classList.contains('active')) {
        createConfetti(20);
    }
}

// RSVP Form Submission
function submitRSVP() {
    alert("Thank you for your RSVP! We're excited to see you at our celebration.");
    document.getElementById('rsvpForm').classList.remove('active');
    createConfetti(50); // More confetti on submission!
}

// Confetti Effect
function createConfetti(count) {
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // Random properties
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.backgroundColor = getRandomColor();

        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Get Random Color
function getRandomColor() {
    const colors = [
        '#f39c12', // Orange
        '#e74c3c', // Red
        '#3498db', // Blue
        '#2ecc71', // Green
        '#9b59b6', // Purple
        '#1abc9c'  // Teal
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Theme Toggle
let currentTheme = 0;
const themes = [
    'url("homeWithbaby1.jpg")',
    'url("homeWithImage2.jpg")',
    'url("homeWithImage3.jpg")',
    'linear-gradient(to right, #3498db, #8e44ad)',
    'linear-gradient(to right, #ff7e5f, #feb47b)',
    'linear-gradient(to right, #56ab2f, #a8e063)'
];

function toggleTheme() {
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.style.backgroundImage = themes[currentTheme];
    createConfetti(10);
}

// Music Toggle
const bgMusic = document.getElementById('bgMusic');
let musicPlaying = false;

function toggleMusic() {
    if (musicPlaying) {
        bgMusic.pause();
        musicPlaying = false;
    } else {
        bgMusic.play().catch(e => {
            // Auto-play might be blocked
            console.log("Auto-play blocked. Click again to play music");
            alert("Click again to play music");
        });
        musicPlaying = true;
    }

    // Change the music icon based on state
    const musicIcon = document.querySelector('.music-control svg');
    if (musicPlaying) {
        musicIcon.innerHTML = '<path d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z"/>';
    } else {
        musicIcon.innerHTML = '<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>';
    }
}

// Show Animation on Page Load
window.onload = function () {
    createConfetti(30);

    // Add hover effects for phone numbers
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.style.color = "#1a5276";
        link.style.textDecoration = "none";
        link.style.fontWeight = "bold";
        link.style.transition = "color 0.3s ease";

        link.addEventListener('mouseover', function () {
            this.style.color = "#2980b9";
            this.style.textDecoration = "underline";
        });

        link.addEventListener('mouseout', function () {
            this.style.color = "#1a5276";
            this.style.textDecoration = "none";
        });
    });

    // Preload background images for smooth transitions
    const images = themes.filter(theme => theme.startsWith('url'));
    images.forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc.replace('url("', '').replace('")', '');
    });

    // W items animation
    const wItems = document.querySelectorAll('.w-item');
    wItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.backgroundColor = 'rgba(93, 173, 226, 0.2)';
            setTimeout(() => {
                item.style.backgroundColor = 'transparent';
            }, 1000);
        }, index * 1000);
    });
};