// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    setCurrentDate();
    
    // Initialize interactive buttons
    initInteractiveButtons();
    
    // Create floating background elements
    createFloatingElements();
});

// Set current date in the letter
function setCurrentDate() {
    const currentDate = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    document.getElementById('currentDate').textContent = currentDate.toLocaleDateString('en-US', options);
}

// Initialize all interactive buttons
function initInteractiveButtons() {
    // Healing button
    document.getElementById('healButton').addEventListener('click', sendHealingEnergy);
    
    // Flower button
    document.getElementById('flowerButton').addEventListener('click', bloomFlowers);
    
    // Music button
    document.getElementById('musicButton').addEventListener('click', toggleMusic);
}

// Send healing energy with animations
function sendHealingEnergy() {
    const messages = [
        "Sending healing energy your way! 💫",
        "Positive vibes incoming! 🌟",
        "Healing thoughts are with you! 💖",
        "Get well soon! Your strength inspires me. 🌈",
        "Warm hugs and healing energy! 🫂",
        "Thinking of you and sending love! 💕"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const messageElement = document.getElementById('healingMessage');
    
    messageElement.textContent = randomMessage;
    messageElement.classList.add('show');
    
    // Create floating hearts
    for (let i = 0; i < 8; i++) {
        createFloatingHeart();
    }
    
    // Add sparkle effect to the envelope
    const envelope = document.querySelector('.envelope');
    envelope.style.boxShadow = '0 20px 40px rgba(233, 30, 99, 0.3)';
    setTimeout(() => {
        envelope.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 50px rgba(233, 30, 99, 0.1)';
    }, 1000);
    
    setTimeout(() => {
        messageElement.classList.remove('show');
    }, 4000);
}

// Create floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    const heartTypes = ['💖', '💗', '💓', '💞', '💕'];
    const randomHeart = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    heart.innerHTML = randomHeart;
    heart.classList.add('floating-heart');
    
    // Random position and properties
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 25 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    document.body.appendChild(heart);
    
    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Bloom flowers animation
function bloomFlowers() {
    const flowerTypes = ['🌸', '🌺', '🌷', '💮', '🏵️', '🌼', '🌻'];
    const messageElement = document.getElementById('healingMessage');
    
    messageElement.textContent = "Blooming flowers to brighten your day! 🌸";
    messageElement.classList.add('show');
    
    // Create multiple flowers
    for (let i = 0; i < 12; i++) {
        createFlower(flowerTypes);
    }
    
    // Add flower effect to the care tips section
    const careTips = document.querySelector('.care-tips');
    careTips.style.background = 'linear-gradient(135deg, #f0fff4, #fff5f5)';
    careTips.style.transform = 'scale(1.02)';
    setTimeout(() => {
        careTips.style.background = 'linear-gradient(135deg, #f9f5ff, #fff5f5)';
        careTips.style.transform = 'scale(1)';
    }, 1500);
    
    setTimeout(() => {
        messageElement.classList.remove('show');
    }, 4000);
}

// Create individual flower animation
function createFlower(flowerTypes) {
    const flower = document.createElement('div');
    const randomFlower = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    
    flower.innerHTML = randomFlower;
    flower.classList.add('flower');
    
    // Random position and properties
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.fontSize = (Math.random() * 20 + 15) + 'px';
    flower.style.animationDuration = (Math.random() * 3 + 3) + 's';
    
    document.body.appendChild(flower);
    
    // Remove after animation
    setTimeout(() => {
        flower.remove();
    }, 4000);
}

// Toggle soothing background music
function toggleMusic() {
    const music = document.getElementById('backgroundMusic');
    const button = document.getElementById('musicButton');
    const messageElement = document.getElementById('healingMessage');
    
    if (music.paused) {
        music.play();
        button.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
        messageElement.textContent = "Playing soothing sounds for relaxation... 🎵";
        messageElement.classList.add('show');
        
        setTimeout(() => {
            messageElement.classList.remove('show');
        }, 3000);
    } else {
        music.pause();
        button.innerHTML = '<i class="fas fa-music"></i> Play Soothing Music';
        messageElement.textContent = "Music paused";
        messageElement.classList.add('show');
        
        setTimeout(() => {
            messageElement.classList.remove('show');
        }, 2000);
    }
}

// Create additional floating background elements
function createFloatingElements() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const flowersContainer = document.querySelector('.floating-flowers');
    
    // Create more floating hearts
    for (let i = 0; i < 5; i++) {
        createBackgroundElement(heartsContainer, '💖', 20, 25);
    }
    
    // Create more floating flowers
    for (let i = 0; i < 5; i++) {
        createBackgroundElement(flowersContainer, '🌸', 20, 25);
    }
}

// Create background floating elements
function createBackgroundElement(container, symbol, minSize, maxSize) {
    const element = document.createElement('div');
    element.innerHTML = symbol;
    element.style.position = 'absolute';
    element.style.fontSize = (Math.random() * (maxSize - minSize) + minSize) + 'px';
    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = Math.random() * 100 + 'vh';
    element.style.opacity = Math.random() * 0.4 + 0.1;
    element.style.animation = `float ${Math.random() * 20 + 10}s infinite linear`;
    element.style.animationDelay = Math.random() * 10 + 's';
    
    container.appendChild(element);
}

// Add some extra interactive effects
document.querySelectorAll('.tip-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Make the envelope pulse on hover
document.querySelector('.envelope').addEventListener('mouseenter', function() {
    this.style.animation = 'gentleFloat 3s ease-in-out infinite';
});

// Add click effect to the title
document.querySelector('.title').addEventListener('click', function() {
    this.style.transform = 'scale(1.1)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 300);
});