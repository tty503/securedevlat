// Array of project objects with professional details and GitHub URL
const projects = [
    {
        id: 1,
        title: "Anki Pro: Tu Generador de Tarjetas Personalizadas con Modelos de Lenguaje",
        description: "Desarrollo de una aplicación web innovadora que utiliza modelos de lenguaje para generar tarjetas de estudio personalizadas. Integración de IA para mejorar la experiencia de aprendizaje y optimizar la retención de información.",
        involved: [
            { name: "Aurelio ML", role: "Software Engineer & Artificial Intelligence" }
        ],
        imageUrl: "https://placehold.co/1200x700/1F2937/F9FAFB?text=AnkiGen", 
        githubUrl: "https://github.com/aurcode/ankineitor" 
    },
    {
        id: 2,
        title: "Aplicación Móvil de Salud y Bienestar",
        description: "Creación de una aplicación móvil robusta para el seguimiento de la salud y el bienestar, integrando IoT y análisis de datos en tiempo real. Experiencia de usuario fluida y segura.",
        involved: [
            { name: "Laura Sánchez", role: "Arquitecta de Soluciones Móviles" },
            { name: "Pedro Díaz", role: "Ingeniero de Datos" },
            { name: "Sofía Vargas", role: "Especialista en Seguridad de Datos" },
            { name: "Diego Castro", role: "Desarrollador iOS" },
            { name: "Elena Ramos", role: "Desarrolladora Android" }
        ],
        imageUrl: "./img/GoNow.png",
        githubUrl: "https://github.com/tu-usuario/app-salud-bienestar" // Example GitHub URL
    },
    {
        id: 3,
        title: "Sistema de Gestión Empresarial (ERP)",
        description: "Implementación de un sistema ERP personalizado para optimizar los procesos internos de una gran corporación, mejorando la eficiencia y la toma de decisiones estratégicas.",
        involved: [
            { name: "Roberto Gil", role: "Consultor de Negocio Principal" },
            { name: "Isabel Torres", role: "Analista de Sistemas" },
            { name: "Fernando Soto", role: "Desarrollador Full Stack Senior" },
            { name: "Gabriela Mena", role: "QA Lead" }
        ],
        imageUrl: "https://placehold.co/1200x700/1F2937/F9FAFB?text=Sistema+ERP", // Image placeholder
        githubUrl: "https://github.com/tu-usuario/sistema-erp" // Example GitHub URL
    }
];

let currentIndex = 0; // Current project index

// Function to render projects in the carousel
function renderProjects() {
    const projectContainer = document.getElementById('projectContainer');
    projectContainer.innerHTML = ''; // Clear the container

    projects.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add('project-item', 'rounded-lg');
        if (index === currentIndex) {
            projectItem.classList.add('active'); // Mark the active project
        }

        // Build the list of professionals
        let professionalsHtml = project.involved.map(professional => `
            <div class="professional-item rounded-md">
                <span class="professional-name">${professional.name}</span>
                <span class="professional-role">${professional.role}</span>
            </div>
        `).join('');

        projectItem.innerHTML = `
            <div class="project-image-container">
                <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
            </div>
            <div class="project-content-wrapper">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <p class="project-involved-title">
                    <strong>Profesionales Involucrados:</strong>
                </p>
                <div class="professional-list" id="professionalList-${project.id}">
                    ${professionalsHtml}
                </div>
                ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="github-button">Ver en GitHub</a>` : ''}
            </div>
        `;
        projectContainer.appendChild(projectItem);
    });
}

// Function to change the visible project
function changeProject(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = projects.length - 1;
    } else if (currentIndex >= projects.length) {
        currentIndex = 0;
    }
    renderProjects(); // Re-render to show the new project
}

// Removed toggleProfessionalList function as it's no longer needed for a non-dynamic display.

// Initialize carousel on page load
window.onload = () => {
    renderProjects();
    // Optional: Autoplay
    // setInterval(() => changeProject(1), 7000); // Change every 7 seconds
};