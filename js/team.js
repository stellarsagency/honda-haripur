/* =========================================================================
   Haripur HONDA — TEAM SECTION (editable)
   -------------------------------------------------------------------------
   Team update karne ke liye sirf neeche wala TEAM array edit karein.
   Naya member add karne ke liye ek { ... } block copy karke paste karein.

   Fields:
     name     : Member ka naam (zaroori)
     role     : Designation / department (zaroori)
     photo    : Photo path, e.g. 'images/team/ali.jpg' (optional)
                Khali chhodne par naam ke initials ka avatar ban jayega.
     phone    : Phone number, e.g. '+92 300 1234567' (optional)
     whatsapp : WhatsApp number, e.g. '923001234567' (optional)
   ========================================================================= */
(function () {
    'use strict';

    var TEAM = [
        {
            name: 'Muhammad Ali',
            role: 'Dealer Principal',
            photo: '',
            phone: '',
            whatsapp: ''
        },
        {
            name: 'Hamza Khan',
            role: 'Sales Manager',
            photo: '',
            phone: '',
            whatsapp: ''
        },
        {
            name: 'Usman Raza',
            role: 'Service Manager',
            photo: '',
            phone: '',
            whatsapp: ''
        },
        {
            name: 'Bilal Ahmed',
            role: 'Parts Manager',
            photo: '',
            phone: '',
            whatsapp: ''
        }
    ];

    function esc(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function initials(name) {
        var parts = String(name || '').trim().split(/\s+/).filter(Boolean);
        if (!parts.length) return 'HH';
        var first = parts[0].charAt(0);
        var last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : '';
        return (first + last).toUpperCase();
    }

    function renderTeam() {
        var grid = document.getElementById('teamGrid');
        if (!grid) return;

        grid.innerHTML = TEAM.map(function (member) {
            var photo = member.photo
                ? '<img src="' + esc(member.photo) + '" alt="' + esc(member.name) + '" loading="lazy" decoding="async">'
                : '<span class="team-initials">' + esc(initials(member.name)) + '</span>';

            var links = '';
            if (member.phone) {
                links += '<a class="team-link" href="tel:' + esc(String(member.phone).replace(/[^+\d]/g, '')) +
                    '" aria-label="Call ' + esc(member.name) + '"><i class="fas fa-phone-alt"></i></a>';
            }
            if (member.whatsapp) {
                links += '<a class="team-link team-link-wa" href="https://wa.me/' + esc(String(member.whatsapp).replace(/\D/g, '')) +
                    '" target="_blank" rel="noopener" aria-label="WhatsApp ' + esc(member.name) + '"><i class="fab fa-whatsapp"></i></a>';
            }

            return '<article class="team-card">' +
                '<div class="team-photo">' + photo + '</div>' +
                '<div class="team-body">' +
                    '<h3 class="team-name">' + esc(member.name) + '</h3>' +
                    '<span class="team-role">' + esc(member.role) + '</span>' +
                    (links ? '<div class="team-links">' + links + '</div>' : '') +
                '</div>' +
            '</article>';
        }).join('');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderTeam);
    } else {
        renderTeam();
    }
})();
