/* ============================================
   R for GIS and Remote Sensing Mentorship Program
   Standalone JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    // ---------- Curriculum Data ----------
    const curriculumData = [
        {
            week: 1,
            title: 'Foundations of R for Geospatial Work',
            items: [
                'R &amp; RStudio setup',
                'R basics &amp; spatial data types',
                'Coordinate Reference Systems (CRS)',
                'Basic mapping with <code>ggplot2</code> &amp; <code>sf</code>'
            ]
        },
        {
            week: 2,
            title: 'Vector Data Analysis',
            items: [
                'Spatial joins, buffers, clipping',
                'Attribute queries &amp; thematic mapping with <code>tmap</code>'
            ]
        },
        {
            week: 3,
            title: 'Raster Data &amp; Remote Sensing',
            items: [
                'Working with satellite imagery',
                'NDVI &amp; other spectral indices',
                'Image classification &amp; time series analysis'
            ]
        },
        {
            week: 4,
            title: 'Cartography &amp; Geovisualization',
            items: [
                'Map styling, layout &amp; exporting',
                'Interactive maps with <code>leaflet</code>'
            ]
        },
        {
            week: 5,
            title: 'Capstone Projects &amp; Career',
            items: [
                'Final project presentations',
                'Publishing maps &amp; dashboards',
                'Career guidance in geospatial data science'
            ]
        }
    ];

    // ---------- Why Join Data ----------
    const whyJoinData = [
        { icon: 'bi-person-check', text: 'Learn from an experienced mentor' },
        { icon: 'bi-folder2-open', text: 'Build a portfolio of geospatial projects' },
        { icon: 'bi-people', text: 'Network with peers and professionals' },
        { icon: 'bi-award', text: 'Receive a certificate of completion' }
    ];

    // ---------- FAQ Data ----------
    const faqData = [
        {
            question: 'Do I need prior R experience?',
            answer: 'Basic familiarity helps, but we\'ll guide you through the essentials.'
        },
        {
            question: 'Will sessions be recorded?',
            answer: 'Yes, all sessions will be available for replay.'
        },
        {
            question: 'Is there a certificate?',
            answer: 'Yes, participants who complete the program will receive a certificate.'
        }
    ];

    // ---------- Testimonial Data ----------
    const testimonialData = [
        {
            name: 'GIS Analyst',
            location: 'Malawi',
            quote: '"Dickson\'s mentorship completely transformed my approach to spatial analysis. The R program gave me practical skills I use daily."',
            imagePlaceholder: 'https://via.placeholder.com/80x80/5d9b32/ffffff?text=GM'
        },
        {
            name: 'Conservation Biologist',
            location: 'Zambia',
            quote: '"The QGIS mentorship was exactly what I needed to advance my career in conservation. Highly recommend!"',
            imagePlaceholder: 'https://via.placeholder.com/80x80/8cad25/ffffff?text=CB'
        },
        {
            name: 'Remote Sensing Student',
            location: 'Tanzania',
            quote: '"Dickson\'s ability to break down complex spatial concepts made learning accessible and enjoyable. Great mentor!"',
            imagePlaceholder: 'https://via.placeholder.com/80x80/f07813/ffffff?text=RS'
        }
    ];

    // ---------- Render Functions ----------

    // Render Curriculum Cards
    function renderCurriculum() {
        const grid = document.getElementById('curriculumGrid');
        if (!grid) return;

        let html = '';
        curriculumData.forEach(function(item) {
            html += `
                <div class="col-md-6">
                    <div class="card week-card h-100 shadow-sm border-0 rounded-4 p-4">
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <span class="week-number">${item.week}</span>
                            <h5 class="fw-bolder mb-0">${item.title}</h5>
                        </div>
                        <ul class="list-unstyled small text-muted mb-0">
                            ${item.items.map(function(listItem) {
                                return `<li><i class="bi bi-check-circle-fill text-primary me-2"></i>${listItem}</li>`;
                            }).join('')}
                        </ul>
                    </div>
                </div>
            `;
        });
        grid.innerHTML = html;
    }

    // Render Why Join Cards
    function renderWhyJoin() {
        const grid = document.getElementById('whyJoinGrid');
        if (!grid) return;

        let html = '';
        whyJoinData.forEach(function(item) {
            html += `
                <div class="col-sm-6">
                    <div class="d-flex align-items-center gap-3 bg-white p-3 rounded-4 shadow-sm h-100">
                        <i class="bi ${item.icon} feature-icon-large"></i>
                        <span>${item.text}</span>
                    </div>
                </div>
            `;
        });
        grid.innerHTML = html;
    }

    // Render FAQs
    function renderFaqs() {
        const container = document.getElementById('faqContainer');
        if (!container) return;

        let html = '';
        faqData.forEach(function(item) {
            html += `
                <div class="faq-item">
                    <h6 class="fw-bold">${item.question}</h6>
                    <p class="small text-muted mb-0">${item.answer}</p>
                </div>
            `;
        });
        container.innerHTML = html;
    }

    // Render Testimonials
    function renderTestimonials() {
        const grid = document.getElementById('testimonialGrid');
        if (!grid) return;

        let html = '';
        testimonialData.forEach(function(item) {
            html += `
                <div class="col-md-4">
                    <div class="bg-white p-4 rounded-4 h-100 d-flex flex-column align-items-center text-center shadow-sm">
                        <img src="${item.imagePlaceholder}" alt="${item.name}" class="rounded-circle mb-3" style="width: 80px; height: 80px; object-fit: cover;">
                        <div class="mb-2">
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                        </div>
                        <p class="mt-2 mb-0 fst-italic flex-grow-1">${item.quote}</p>
                        <p class="fw-bolder mt-3 mb-0 small">— ${item.name}, ${item.location}</p>
                    </div>
                </div>
            `;
        });
        grid.innerHTML = html;
    }

    // ---------- Apply Button Interaction ----------
    function setupApplyButton() {
        const button = document.getElementById('applyButton');
        if (!button) return;

        // The button is disabled by default (applications closed).
        // This demonstrates how you could enable it dynamically.
        // Example: check a date or a flag.
        const applicationsOpen = false; // Set to true to enable

        if (applicationsOpen) {
            button.disabled = false;
            button.textContent = 'Apply Now';
            button.classList.remove('btn-secondary');
            button.classList.add('btn-apply');
            button.addEventListener('click', function() {
                window.location.href = 'https://www.dicksonmbeya.com/rgisrsmentorshipprogram/apply';
            });
        } else {
            button.disabled = true;
            button.textContent = 'Apply Here (Closed)';
        }
    }

    // ---------- Initialize ----------
    renderCurriculum();
    renderWhyJoin();
    renderFaqs();
    renderTestimonials();
    setupApplyButton();

});