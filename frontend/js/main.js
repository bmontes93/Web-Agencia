document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el menú hamburguesa
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('header nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
            hamburger.setAttribute('aria-expanded', !expanded);
            navMenu.classList.toggle('nav-active');
        });
    }

    // Lógica para el filtro de la galería de casos de éxito
    const portfolioFilter = document.querySelector('.portfolio-gallery .filter-buttons');
    const portfolioItems = document.querySelectorAll('.casos-grid .caso-item');

    if (portfolioFilter && portfolioItems.length > 0) {
        portfolioFilter.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                portfolioFilter.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');

                const filterValue = e.target.getAttribute('data-filter');

                portfolioItems.forEach(item => {
                    if (item.dataset.category === filterValue || filterValue === 'all') {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            }
        });
    }

    // --- Lógica combinada para filtro y búsqueda en el blog ---
    const blogFilterContainer = document.querySelector('.blog-main .filter-buttons');
    const blogSearchInput = document.getElementById('blog-search-input');
    const blogItems = document.querySelectorAll('.articulos-grid article');

    function filterAndSearchBlog() {
        const searchTerm = blogSearchInput.value.toLowerCase();
        const activeFilter = blogFilterContainer.querySelector('.active').getAttribute('data-filter');

        blogItems.forEach(item => {
            const itemCategory = item.dataset.category;
            const itemText = item.textContent.toLowerCase();

            const categoryMatch = (activeFilter === 'all' || itemCategory === activeFilter);
            const searchMatch = itemText.includes(searchTerm);

            if (categoryMatch && searchMatch) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }

    if (blogFilterContainer && blogSearchInput && blogItems.length > 0) {
        // Evento para los botones de filtro
        blogFilterContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                blogFilterContainer.querySelector('.active').classList.remove('active');
                e.target.classList.add('active');
                filterAndSearchBlog();
            }
        });

        // Evento para la barra de búsqueda
        blogSearchInput.addEventListener('keyup', filterAndSearchBlog);
    }

    // Lógica para la animación de aparición al hacer scroll
    const sectionsToFade = document.querySelectorAll('.fade-in-section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Deja de observar el elemento una vez que es visible
            }
        });
    }, observerOptions);

    sectionsToFade.forEach(section => {
        observer.observe(section);
    });

    // Lógica para el formulario de contacto con validación
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formMessage.textContent = ''; // Limpiar mensajes previos

            const formData = new FormData(contactForm);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const message = formData.get('message').trim();
            const company = formData.get('company').trim();

            // --- Validación --- 
            if (name === '' || email === '' || message === '') {
                formMessage.textContent = 'Por favor, rellena todos los campos requeridos.';
                formMessage.style.color = 'red';
                return;
            }

            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            if (!emailRegex.test(email)) {
                formMessage.textContent = 'Por favor, introduce una dirección de email válida.';
                formMessage.style.color = 'red';
                return;
            }

            // --- Si la validación es correcta, se procede al envío ---
            const data = { name, email, company, message };

            formMessage.textContent = 'Enviando...';
            formMessage.style.color = '#555';

            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true; // Disable button to prevent multiple submissions

            fetch(`${window.location.origin}/api/contact`, { // Dynamic API URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (!response.ok) { // Check for HTTP errors
                    return response.json().then(err => { throw err; });
                }
                return response.json();
            })
            .then(result => {
                formMessage.textContent = result.message;
                formMessage.style.color = 'green';
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                if (error.errors && Array.isArray(error.errors)) {
                    // Display specific validation errors from backend
                    formMessage.innerHTML = '<ul>' + error.errors.map(err => `<li>${err.msg}</li>`).join('') + '</ul>';
                } else {
                    formMessage.textContent = error.message || 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.';
                }
                formMessage.style.color = 'red';
            })
            .finally(() => {
                submitButton.disabled = false; // Re-enable button
            });
        });
    }

    // Lógica para el desplazamiento suave de enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

    // Lógica para el botón "Volver arriba"
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        // Mostrar u ocultar el botón según el scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) { // Muestra el botón después de 300px de scroll
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        // Desplazarse hacia arriba al hacer clic
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Desplazamiento suave
            });
        });
    }

// Lógica para el carrusel de imágenes
    const carouselContainers = document.querySelectorAll('.carousel-container');

    carouselContainers.forEach(container => {
        const slides = container.querySelector('.carousel-slide');
        const images = container.querySelectorAll('.carousel-slide img');
        const prevButton = container.querySelector('.carousel-button.prev');
        const nextButton = container.querySelector('.carousel-button.next');
        const dotsContainer = container.querySelector('.carousel-dots');

        let currentIndex = 0;
        const totalSlides = images.length;

        // Crear los puntos de navegación
        if (dotsContainer) {
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('span');
                dot.classList.add('carousel-dot');
                dot.dataset.index = i;
                dotsContainer.appendChild(dot);
            }
        }
        const dots = container.querySelectorAll('.carousel-dot');

        function updateCarousel() {
            slides.style.transform = `translateX(${-currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        if (prevButton) {
            prevButton.addEventListener('click', showPrevSlide);
        }
        if (nextButton) {
            nextButton.addEventListener('click', showNextSlide);
        }
        if (dotsContainer) {
            dotsContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('carousel-dot')) {
                    currentIndex = parseInt(e.target.dataset.index);
                    updateCarousel();
                }
            });
        }

        // Inicializar el carrusel
        updateCarousel();

        // Opcional: Auto-play
        setInterval(showNextSlide, 5000); // Cambia de slide cada 5 segundos
    });

// Lógica para el acordeón de FAQs
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentNode;
            const accordionContent = header.nextElementSibling;

            // Cierra todos los demás acordeones
            accordionHeaders.forEach(otherHeader => {
                const otherAccordionItem = otherHeader.parentNode;
                const otherAccordionContent = otherHeader.nextElementSibling;
                if (otherHeader !== header && otherAccordionItem.classList.contains('active')) {
                    otherAccordionItem.classList.remove('active');
                    otherHeader.classList.remove('active');
                    otherAccordionContent.classList.remove('show');
                    otherAccordionContent.style.maxHeight = null;
                }
            });

            // Abre o cierra el acordeón actual
            accordionItem.classList.toggle('active');
            header.classList.toggle('active');
            accordionContent.classList.toggle('show');

            if (accordionContent.classList.contains('show')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }
        });
    });

    // Lógica para el banner de consentimiento de cookies
    const cookieBanner = document.getElementById('cookie-consent-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    if (cookieBanner && acceptCookiesButton) {
        const hasConsented = localStorage.getItem('cookieConsent');

        if (!hasConsented) {
            cookieBanner.style.display = 'flex'; // Muestra el banner si no hay consentimiento
        } else {
            cookieBanner.style.display = 'none'; // Oculta el banner si ya hay consentimiento
        }

        acceptCookiesButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'true'); // Guarda el consentimiento
            cookieBanner.style.display = 'none'; // Oculta el banner
        });
    }

    // Lógica para Lazy Load de imágenes
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const lazyImageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    if (lazyImage.dataset.srcset) {
                        lazyImage.srcset = lazyImage.dataset.srcset;
                    }
                    lazyImage.removeAttribute('loading');
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(lazyImage => {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        // Fallback para navegadores que no soportan IntersectionObserver
        lazyImages.forEach(lazyImage => {
            lazyImage.src = lazyImage.dataset.src;
            if (lazyImage.dataset.srcset) {
                lazyImage.srcset = lazyImage.dataset.srcset;
            }
            lazyImage.removeAttribute('loading');
        });
    }

// Google Maps Initialization
function initMap() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        const agencyLocation = { lat: -34.397, lng: 150.644 }; // Placeholder: Sydney, Australia
        const map = new google.maps.Map(mapElement, {
            zoom: 15,
            center: agencyLocation,
        });
        new google.maps.Marker({
            position: agencyLocation,
            map: map,
            title: 'Nuestra Agencia',
        });
    }
}

