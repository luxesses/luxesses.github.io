// === TYPEWRITER EFFECT ===
const codeLines = [
    { text: 'package', color: '#569cd6' },
    { text: ' main', color: '#d4d4d4' },
    { text: '\n\n', color: '#d4d4d4' },
    { text: 'import', color: '#569cd6' },
    { text: ' ', color: '#d4d4d4' },
    { text: '"fmt"', color: '#ce9178' },
    { text: '\n\n', color: '#d4d4d4' },
    { text: 'func', color: '#569cd6' },
    { text: ' ', color: '#d4d4d4' },
    { text: 'main', color: '#dcdcaa' },
    { text: '() {', color: '#d4d4d4' },
    { text: '\n', color: '#d4d4d4' },
    { text: '\tfmt', color: '#d4d4d4' },
    { text: '.', color: '#d4d4d4' },
    { text: 'Println', color: '#dcdcaa' },
    { text: '(', color: '#d4d4d4' },
    { text: '"Hello, I\'m Luxe"', color: '#ce9178' },
    { text: ')', color: '#d4d4d4' },
    { text: '\n', color: '#d4d4d4' },
    { text: '\tfmt', color: '#d4d4d4' },
    { text: '.', color: '#d4d4d4' },
    { text: 'Println', color: '#dcdcaa' },
    { text: '(', color: '#d4d4d4' },
    { text: '"Go Developer"', color: '#ce9178' },
    { text: ')', color: '#d4d4d4' },
    { text: '\n', color: '#d4d4d4' },
    { text: '\tfmt', color: '#d4d4d4' },
    { text: '.', color: '#d4d4d4' },
    { text: 'Println', color: '#dcdcaa' },
    { text: '(', color: '#d4d4d4' },
    { text: '"Bots, Parsers, Automation"', color: '#ce9178' },
    { text: ')', color: '#d4d4d4' },
    { text: '\n', color: '#d4d4d4' },
    { text: '}', color: '#d4d4d4' },
];

const typewriterEl = document.getElementById('typewriter');
let lineIndex = 0;
let charIndex = 0;
let currentSpan = null;

function typeWriter() {
    if (lineIndex >= codeLines.length) {
        // Restart after delay
        setTimeout(() => {
            typewriterEl.innerHTML = '';
            lineIndex = 0;
            charIndex = 0;
            currentSpan = null;
            typeWriter();
        }, 5000);
        return;
    }

    const line = codeLines[lineIndex];

    if (!currentSpan || currentSpan.dataset.color !== line.color) {
        currentSpan = document.createElement('span');
        currentSpan.style.color = line.color;
        typewriterEl.appendChild(currentSpan);
    }

    if (charIndex < line.text.length) {
        currentSpan.textContent += line.text[charIndex];
        charIndex++;
        setTimeout(typeWriter, line.text[charIndex - 1] === '\n' ? 100 : 30 + Math.random() * 40);
    } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(typeWriter, 50);
    }
}

// Start typewriter when page loads
setTimeout(typeWriter, 500);

// === INTERACTIVE CONSOLE ===
const consoleInput = document.getElementById('console-input');
const consoleOutput = document.getElementById('console-output');

const commands = {
    help: () => `Available commands:
  about      — Learn about me
  projects   — View my projects
  skills     — See my tech stack
  services   — What I can build
  contact    — Get in touch
  clear      — Clear console
  help       — Show this help`,

    about: () => `Go developer focused on building practical tools.
Self-taught with experience in concurrency, raw sockets, and API integration.
Specializing in Telegram bots, web scrapers, and network utilities.
I build fast, ship fast, and fix fast.`,

    projects: () => `1. bridge — Telegram AI Bot
   Autonomous bot with local LLM on Android.
   Tech: Go, Telegram API, Local LLM (1.5B)

2. deauthd — WiFi Security Daemon
   Network monitoring via raw ARP packets.
   Tech: Go, Raw Sockets (AF_PACKET), Linux

3. megafon-parser — Concurrent Web Scraper
   Phone number parser with CDP and proxy rotation.
   Tech: Go, Chrome DevTools Protocol, Concurrency`,

    skills: () => `Languages:    Go (Golang), Python, Bash
Concurrency:  Goroutines, Channels, sync.Mutex, atomic
Networking:   Raw sockets, ARP, TCP/UDP, HTTP/REST, CDP
Systems:      Linux, Android (root), systemd
APIs:         Telegram Bot API, REST, WebSockets, JSON
Tools:        Git, Docker, Make, curl`,

    services: () => `1. Telegram Bot Development
   Custom bots for automation, shops, AI integration.

2. Web Scraping & Parsers
   Data extraction with anti-bot measures.

3. CLI Tools & Automation
   Command-line utilities and workflow automation.

4. API Integration
   Connecting services via REST and WebSockets.

5. Network Utilities
   Low-level tools with raw sockets.`,

    contact: () => `Telegram:  @myocv
GitHub:    github.com/luxesses
Rate:      $25/hour

Open to freelance contracts and interesting projects.`,

    clear: () => {
        consoleOutput.innerHTML = '';
        return null;
    },
};

function addConsoleLine(text, isCommand = false) {
    const line = document.createElement('div');
    line.className = 'console-line';

    if (isCommand) {
        line.innerHTML = `<span class="console-prompt">luxe@portfolio ~ %</span><span class="console-text">${text}</span>`;
    } else {
        line.innerHTML = `<span class="console-text" style="white-space: pre-wrap;">${text}</span>`;
    }

    consoleOutput.appendChild(line);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

consoleInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = consoleInput.value.trim().toLowerCase();
        consoleInput.value = '';

        if (input) {
            addConsoleLine(input, true);

            if (commands[input]) {
                const result = commands[input]();
                if (result !== null) {
                    addConsoleLine(result);
                }
            } else {
                addConsoleLine(`Command not found: ${input}. Type 'help' for available commands.`);
            }
        }
    }
});

// Focus console input when clicking on console window
document.querySelector('.console-window').addEventListener('click', () => {
    consoleInput.focus();
});

// === STAT COUNTERS ===
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const update = () => {
        current += step;
        if (current < target) {
            el.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            el.textContent = target;
        }
    };

    update();
};

// Intersection Observer for stat counters
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => observer.observe(stat));

// === SMOOTH SCROLL FOR NAV LINKS ===
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// === PROJECT CARD CODE OVERLAY ===
document.querySelectorAll('.project-card').forEach(card => {
    const code = card.dataset.code;
    const codeEl = card.querySelector('.project-overlay code');
    if (code && codeEl) {
        codeEl.textContent = code;
    }
});
