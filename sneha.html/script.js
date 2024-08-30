document.addEventListener('DOMContentLoaded', () => {
    const portfolioData = {
        name: "Sneha G.",
        tagline: "B.Tech Information Technology Student",
        sections: [
            {
                id: "home",
                title: "Welcome to My Portfolio",
                content: "Hi, I'm Sneha, an IT student passionate about technology and problem-solving."
            },
            {
                id: "about",
                title: "About Me",
                subsections: [
                    {
                        subtitle: "Education",
                        content: [
                            "B.Tech Information Technology (2021-2025) - Prince Shri Venkateshwara Padmavathy Engineering College, CGPA: 8.33",
                            "12th Grade - 88.5%, St. John's Matriculation Higher Secondary School",
                            "11th Grade - 75%, St. John's Matriculation Higher Secondary School",
                            "10th Grade - 82.4%, St. John's Matriculation Higher Secondary School"
                        ]
                    },
                    {
                        subtitle: "Skills",
                        content: [
                            "Python, HTML, CSS, SQL",
                            "Time management, Good communication, Problem-solving, Active listening, Planning"
                        ]
                    },
                    {
                        subtitle: "Certifications",
                        content: [
                            "SQL",
                            "HTML",
                            "Data Science in Python"
                        ]
                    }
                ]
            },
            {
                id: "projects",
                title: "Projects",
                content: "<strong>Chatbot on Agriculture Awareness:</strong> Developed a chatbot to spread awareness and meet the needs of the agriculture sector."
            },
            {
                id: "participation",
                title: "Participation",
                content: "IPR Awareness/Training Program, National Intellectual Property Awareness Mission (NIPAM)."
            },
            {
                id: "contact",
                title: "Contact Me",
                content: `
                    <p>Phone: +91 73057 93341</p>
                    <p>Email: <a href="mailto:sneharenukadevi@gmail.com">sneharenukadevi@gmail.com</a></p>
                    <p>Address: No.33 Kamarajar High Road, Old Perugalathur, Chennai-600063.</p>
                `
            }
        ]
    };

    // Set name and tagline
    document.getElementById('name').textContent = portfolioData.name;
    document.getElementById('tagline').textContent = portfolioData.tagline;

    // Populate navigation links
    const navLinks = portfolioData.sections.map(section => `
        <li><a href="#${section.id}">${section.title}</a></li>
    `).join('');
    document.getElementById('nav-links').innerHTML = navLinks;

    // Populate sections
    const contentSections = portfolioData.sections.map(section => {
        if (section.subsections) {
            const subsections = section.subsections.map(subsection => `
                <div>
                    <h3>${subsection.subtitle}</h3>
                    <ul>
                        ${subsection.content.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `).join('');
            return `
                <section id="${section.id}" class="${section.id}-section">
                    <div class="container">
                        <h2>${section.title}</h2>
                        <div class="content">${subsections}</div>
                    </div>
                </section>
            `;
        } else {
            return `
                <section id="${section.id}" class="${section.id}-section">
                    <div class="container">
                        <h2>${section.title}</h2>
                        <p>${section.content}</p>
                    </div>
                </section>
            `;
        }
    }).join('');

    document.getElementById('content').innerHTML = contentSections;
});
\