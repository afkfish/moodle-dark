// ==UserScript==
// @name     Moodle darkmode
// @match  https://edu.vik.bme.hu/*
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Modern look to Moodle
// @author       afkfish
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

GM_addStyle(`
:root {
    --dark1: #2C3333;
    --dark2: #3d4747;
    --theme_contrast_light: #9db0ab;
    --theme_contrast_middle: #0E8388;
    --theme_contrast_dark: #2E4F4F;
    --text: #dee2e6;
    --inactive: #ededed;
}

body, #page-my-index {
   background-color: var(--dark1);
}

#page-header {
    background-image: linear-gradient(270deg, var(--theme_contrast_light), var(--theme_contrast_middle), var(--theme_contrast_dark));
}

section#region-main, section.block_calendar_month, section.block_navigation, section.block_login_bme {
    background-color: var(--dark2);
    color: var(--text);
}

.message-app, .dropdown-menu, .card, .list-group-item, .dropdown-divider a, .dropdown-menu a, .popover-region-container, .popover-region-footer-container {
    background-color: var(--dark2);
    color: var(--text);
}

.nav-pills .nav-link.active, .message-app .list-group .list-group-item:hover {
    background-color: var(--dark1);
}

.list-group-item a, .table {
    color: var(--text);
}

.bg-light, .bg-white {
    background-color: inherit!important;
}

.block .block-cards span.categoryname {
    color: #de495b;
}

a, .btn-link, .generaltable {
    color: var(--text);
}

a:hover, .btn-link:hover {
    color: #000;
}

.generaltable tbody tr:hover {
    color: var(--text);
}

.que .info {
    border-color: var(--theme_contrast_light);
}

table.quizreviewsummary th.cell, .que .info {
    background-color: var(--dark1);
}

table.quizreviewsummary td.cell {
    background-color: var(--dark2);
}

.generaltable th, .generaltable td {
    border-top-color: var(--theme_contrast_light);
}

.btn-primary {
    background-color: var(--theme_contrast_middle);
    border-color: var(--theme_contrast_light);
}

.btn-primary:hover {
    background-color: var(--theme_contrast_dark);
}

.btn-secondary {
    background-color: #ededed;
}

.block .minicalendar td a {
    color: var(--theme_contrast_middle);
}

.category_active .info {
    background-color: var(--theme_contrast_middle);
}

.category_inactive .info {
    background-color: var(--inactive);
}

.category_inactive .info .categoryname a {
    color: var(--dark1);
}

.footer-links h4 {
    color: #7e8082;
}

#page-footer .footer-links li a {
    color: var(--text);
}
`);
