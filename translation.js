// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu if open
        if (window.innerWidth < 768) {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.add('hidden');
        }
    });
});

// Mobile menu toggle functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Language Toggle
const languageToggleButton = document.getElementById('language-toggle-button');
const html = document.documentElement;

const translations = {
    es: {
        title_page: "SecureDev | Desarrollo de Software Personalizado, IA y Soluciones Tecnológicas",
        nav_services: "Servicios",
        nav_guarantee: "Nuestra Garantía",
        nav_team: "Equipo",
        nav_contact: "Contacto",
        hero_title: "¿Buscas un Socio Tecnológico que Impulse tus Ideas sin Sorpresas? 🚀",
        hero_paragraph: "Sabemos que iniciar un proyecto tecnológico genera incertidumbre, especialmente con la inversión y los resultados. Pero, ¿y si te dijéramos que es posible transformar tus ideas en soluciones digitales funcionales y a medida, con total transparencia y pagando solo por lo que ya has visto y aprobado?",
        hero_button: "Descubre Nuestros Servicios",
        guarantee_title: "Tu Tranquilidad es Nuestra Prioridad",
        guarantee_paragraph: "Así Garantizamos el Éxito de tu Proyecto: No solo desarrollamos; creamos soluciones tecnológicas personalizadas que resuelven tus desafíos específicos y te impulsan al siguiente nivel.",
        guarantee_1_title: "Encuentros Semanales de Avance",
        guarantee_1_text: "Nos reunimos contigo cada semana para mostrarte el progreso real. Verás cómo tu idea toma forma y puedes dar feedback constante.",
        guarantee_2_title: "Entregas Modulares Verificables",
        guarantee_2_text: "Al finalizar cada fase importante (un módulo web, una funcionalidad de la app, un script de automatización, etc.), te entregamos el avance funcional para tu revisión y aprobación.",
        guarantee_3_title: "Pagas Solo por lo Realizado y Aprobado",
        guarantee_3_text: "Una vez que confirmas que el trabajo entregado en esa fase cumple tus expectativas, realizas un pago parcial correspondiente al trabajo ya completado. Nunca pagarás por adelantado por el proyecto completo. Tu inversión está protegida.",
        guarantee_4_title: "Seguridad en Tus Pagos",
        guarantee_4_text: "Para tu mayor confianza, utilizamos plataformas intermedias de prestigio como Freelancer.es, que actúan como garantes y aseguran que los pagos se liberen solo cuando estés 100% satisfecho con los entregables.",
        services_title: "Nuestros Servicios",
        services_paragraph: "Cubrimos todas las fases para transformar tu idea en realidad, desde la planificación hasta el soporte continuo, asegurando que tu proyecto tenga el impacto deseado.",
        service_web_title: "Desarrollo Web",
        service_web_text: "Creamos sitios web atractivos y funcionales. Esto incluye Diseño UI/UX, SEO, Desarrollo Backend y Mantenimiento continuo.",
        service_mobile_title: "Aplicaciones Móviles",
        service_mobile_text: "Desarrollamos Apps Android y iOS nativas o multiplataforma. Nos encargamos del Diseño, el Desarrollo completo y la Publicación en Tiendas.",
        service_desktop_title: "Aplicaciones de Escritorio",
        service_desktop_text: "Diseñamos y desarrollamos Apps para Windows (.NET Framework). También modernizamos y optimizamos Sistemas Existentes para mejorar su rendimiento y usabilidad.",
        service_ai_title: "Sistemas de Inteligencia Artificial (IA)",
        service_ai_text: "Integramos y desarrollamos soluciones basadas en IA, incluyendo Modelos de Lenguaje Grandes (LLM) para automatización de texto, chatbots avanzados o análisis de datos.",
        service_devops_title: "Automatización y DevOps",
        service_devops_text: "Optimizamos tus operaciones con Scripts personalizados (GNU/Linux), implementamos prácticas DevOps para un desarrollo y despliegue eficientes, y usamos YARA para seguridad.",
        service_lowlevel_title: "Programación a Bajo Nivel y Hardware",
        service_lowlevel_text: "Desarrollamos soluciones especializadas en C/C++, así como para Sistemas Embebidos y Microcontroladores (Arduino, Atmel AVR, PIC, ARM Cortex), ideales para proyectos de hardware o IoT.",
        team_title: "Conoce a Nuestro Equipo",
        team_paragraph: "Detrás de cada proyecto exitoso en SecureDev, hay un equipo de expertos dedicados a convertir tus ideas en realidad con pasión y precisión.",
        contact_title: "¿Listo para Impulsar tu Próximo Proyecto?",
        contact_paragraph: "Contacta con SecureDev hoy mismo y empieza a transformar tus ideas en realidad con un socio tecnológico en el que puedes confiar.",
        contact_button: "Contáctanos Ahora",
        footer_copyright: "&copy; 2025 SecureDev. Todos los derechos reservados.",
        footer_text: "Desarrollo de software personalizado de sistemas de TI."
    },
    en: {
        title_page: "SecureDev | Custom Software Development, AI, and Tech Solutions",
        nav_services: "Services",
        nav_guarantee: "Our Guarantee",
        nav_team: "Team",
        nav_contact: "Contact",
        hero_title: "Looking for a Tech Partner to Drive Your Ideas Without Surprises? 🚀",
        hero_paragraph: "We know that starting a technology project generates uncertainty, especially with investment and results. But what if we told you it's possible to transform your ideas into functional, custom digital solutions, with complete transparency and paying only for what you've already seen and approved?",
        hero_button: "Discover Our Services",
        guarantee_title: "Your Peace of Mind is Our Priority",
        guarantee_paragraph: "This is how we guarantee the success of your project: We don't just develop; we create personalized technological solutions that solve your specific challenges and propel you to the next level.",
        guarantee_1_title: "Weekly Progress Meetings",
        guarantee_1_text: "We meet with you every week to show you real progress. You'll see your idea take shape and can provide constant feedback.",
        guarantee_2_title: "Verifiable Modular Deliverables",
        guarantee_2_text: "At the end of each important phase (a web module, an app functionality, an automation script, etc.), we deliver the functional progress for your review and approval.",
        guarantee_3_title: "Pay Only for What's Done and Approved",
        guarantee_3_text: "Once you confirm that the work delivered in that phase meets your expectations, you make a partial payment corresponding to the completed work. You will never pay in advance for the entire project. Your investment is protected.",
        guarantee_4_title: "Payment Security",
        guarantee_4_text: "For your greater confidence, we use prestigious intermediate platforms like Freelancer.es, which act as guarantors and ensure that payments are released only when you are 100% satisfied with the deliverables.",
        services_title: "Our Services",
        services_paragraph: "We cover all phases to transform your idea into reality, from planning to continuous support, ensuring your project has the desired impact.",
        service_web_title: "Web Development",
        service_web_text: "We create attractive and functional websites. This includes UI/UX Design, SEO, Backend Development, and continuous Maintenance.",
        service_mobile_title: "Mobile Applications",
        service_mobile_text: "We develop native or cross-platform Android and iOS Apps. We handle Design, complete Development, and Publication in Stores.",
        service_desktop_title: "Desktop Applications",
        service_desktop_text: "We design and develop Apps for Windows (.NET Framework). We also modernize and optimize existing Systems to improve their performance and usability.",
        service_ai_title: "Artificial Intelligence (AI) Systems",
        service_ai_text: "We integrate and develop AI-based solutions, including Large Language Models (LLM) for text automation, advanced chatbots, or data analysis.",
        service_devops_title: "Automation & DevOps",
        service_devops_text: "We optimize your operations with Scripts personalizados (GNU/Linux), implement prácticas DevOps para un desarrollo y despliegue eficientes, y usamos YARA para seguridad.",
        service_lowlevel_title: "Low-Level Programming & Hardware",
        service_lowlevel_text: "We develop specialized solutions in C/C++, as well as for Embedded Systems and Microcontrollers (Arduino, Atmel AVR, PIC, ARM Cortex), ideal for hardware or IoT projects.",
        team_title: "Meet Our Team",
        team_paragraph: "Behind every successful project at SecureDev, there is a team of experts dedicated to turning your ideas into reality with passion and precision.",
        contact_title: "Ready to Boost Your Next Project?",
        contact_paragraph: "Contact SecureDev today and start transforming your ideas into reality with a technological partner you can trust.",
        contact_button: "Contact Us Now",
        footer_copyright: "&copy; 2025 SecureDev. All rights reserved.",
        footer_text: "Custom software development for IT systems."
    }
};

function applyLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    languageToggleButton.textContent = lang.toUpperCase();
    html.lang = lang;
    localStorage.setItem('language', lang);
}

// Initial language load
const savedLanguage = localStorage.getItem('language') || 'es';
applyLanguage(savedLanguage);

languageToggleButton.addEventListener('click', () => {
    const currentLang = html.lang;
    applyLanguage(currentLang === 'es' ? 'en' : 'es');
});