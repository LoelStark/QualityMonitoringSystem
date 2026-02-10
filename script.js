document.addEventListener('DOMContentLoaded', () => {

    // --- Dynamic Greeting ---
    const greetingElement = document.getElementById('outputPanel').querySelector('h3');
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) greeting = "Good Morning";
    else if (hours < 18) greeting = "Good Afternoon";
    else greeting = "Good Evening";

    console.log(`${greeting}. Welcome to BrainSteady Tech Quality Monitoring System.`);
    // We could update the UI with this, but the design is cleaner without a big "Hello" header.
    // Instead, let's log it to our system console.
    addLogEntry(`> ${greeting}. Administrator access granted.`, 'system');


    // --- Form Handling ---
    const form = document.getElementById('machineryForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get values
            const name = document.getElementById('machineName').value;
            const brand = document.getElementById('machineBrand').value;
            const year = document.getElementById('issueYear').value;

            // Simple Validation
            if (!name || !brand || !year) {
                addLogEntry('> Error: All fields are required.', 'error');
                return;
            }

            // Simulate processing
            addLogEntry(`> Processing data for: ${name}...`, 'info');

            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Processing...';
            btn.disabled = true;

            setTimeout(() => {
                // Success
                addLogEntry(`> Success: Data inserted [ID: ${Math.floor(Math.random() * 10000)}]`, 'success');
                addLogEntry(`> Machinery: ${name} (${brand}) - Issued: ${year}`, 'system');

                // Clear form
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // --- System Log Helper ---
    function addLogEntry(message, type = 'system') {
        const logWindow = document.getElementById('logWindow');
        const p = document.createElement('p');
        p.className = `log-entry ${type}`;
        p.innerText = message;

        logWindow.appendChild(p);
        logWindow.scrollTop = logWindow.scrollHeight; // Auto scroll to bottom
    }


    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Glitch Effect Trigger on Hover (Optional extra) ---
    const heroTitle = document.querySelector('.glitch');
    if (heroTitle) {
        heroTitle.addEventListener('mouseover', () => {
            heroTitle.style.animation = 'none';
            heroTitle.offsetHeight; /* trigger reflow */
            heroTitle.style.animation = null;
        });
    }

});
