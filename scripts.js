document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');
    const rightDiv = document.getElementById('right-div');

    const githubUrl = 'https://github.com/Hazzardbx';
    const linkedinUrl = 'https://www.linkedin.com/in/kalil-martins-84414315b/?locale=en_US';

    // Toggle menu visibility
    menuButton.addEventListener('click', function() {
        menuButton.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Function to update content and apply fade-in effect
    function updateContent(content, isImage = false, linkUrl = null) {
        console.log("Updating content to:", content);
        rightDiv.style.opacity = 0; // Set opacity to 0 for fade-out effect
        setTimeout(() => {
            if (isImage) {
                if (linkUrl) {
                    let iconClassName = "";
                    let visitText = "";

                    // Determine the icon class and visit text based on linkUrl
                    if (linkUrl === githubUrl) {
                        iconClassName = "github-icon";
                        visitText = "Click to see my projects on GitHub";
                    } else if (linkUrl === linkedinUrl) {
                        iconClassName = "linkedin-icon";
                        visitText = "Click to visit my LinkedIn";
                    }

                    rightDiv.innerHTML = `
                        <div class="${iconClassName}-container">
                            <a href="${linkUrl}" target="_blank">
                                <img src="${content}" alt="${iconClassName}" class="${iconClassName}">
                            </a>
                            <p class="visit-link">${visitText}</p>
                        </div>`;
                } else {
                    rightDiv.innerHTML = `<img src="${content}" alt="Content Image" class="right-div-image">`;
                }
            } else {
                rightDiv.innerHTML = `<div class="content">${content}</div>`;
            }
            rightDiv.style.opacity = 1; // Set opacity to 1 for fade-in effect
        }, 500);

        menuButton.classList.remove('active');
        menu.classList.remove('active');
    }

    // Add click event listeners to menu items
    document.getElementById('about').addEventListener('click', function() {
        updateContent(`
            Welcome to my portfolio! I’m a passionate software developer with a diverse background in both front-end and back-end development. 
            My journey in the tech world has equipped me with a comprehensive skill set, allowing me to craft robust and dynamic web applications.
        `);
    });

    document.getElementById('experience').addEventListener('click', function() {
        updateContent(`
            <strong>Experience</strong><br><br>
            <strong>Software Development Course - Python</strong><br>
            IEFP - June 2023 - November 2023<br><br>
            <ul>
                <li>Programming - Algorithms</li>
                <li>Programming in C/C++</li>
                <li>SQL Fundamentals</li>
                <li>Software Development Methodologies</li>
                <li>Python Fundamentals</li>
                <li>Advanced Python Programming - DJANGO framework / TKINTER / PyGAMES</li>
                <li>Software Development Security</li>
                <li>Software Engineering</li>
                <li>Information Systems Project</li>
            </ul>
            <strong>Front-End / Back-End Development Course</strong><br><br>
            IEFP - March 2024 - August - 2024<br><br>
            <ul>
                <li>Web Page Construction</li>
                <li>HTML and CSS</li>
                <li>Dynamic Web Applications</li>
                <li>Web Editing</li>
                <li>Script Programming</li>
            </ul>
            <strong>My Approach</strong><br><br>
            <ul>
                <li>Understanding Client Needs</li>
                <li>Adopting Best Practices</li>
                <li>Continuous Learning</li>
            </ul>
            Explore my projects and let's create something amazing together! Contact me for collaboration.
        `);
    });

    document.getElementById('projects').addEventListener('click', function() {
        updateContent('Github-desktop-logo-symbol.svg', true, githubUrl);
    });

    document.getElementById('contact').addEventListener('click', function() {
        updateContent('linkedin-icon.png', true, linkedinUrl);
    });
});
