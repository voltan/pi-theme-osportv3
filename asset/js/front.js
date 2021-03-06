(function ($) {
    $(document).ready(function () {
        //Fix navbar multiple level
        var navbar = $('.pi-navbar-nav');
        var hasBrand = navbar.parents('.navbar').find('.navbar-brand').length;
        navbar.find('>li').each(function () {
            var $this = $(this);
            var caretStr = '<span class="pi-navbar-caret"></span>';
            caretStr += '<span class="pi-navbar-caret pi-navbar-caret-outer"></span>';
            if ($this.find('li').length) {
                $this.append(caretStr);
            }
        });
        navbar.find('ul').addClass('dropdown-menu');

        if (!hasBrand) {
            navbar.css('marginLeft', '-15px');
        }
    });

    $(document).ready(function () {
        $('.pi-section-search-shop .pi-section-search-btn').click(function () {
            var title = $('.pi-section-search-shop .pi-section-search-title').val();
            var productkind = $('.pi-section-search-shop .pi-section-search-productkind').val();
            var brandtype = $('.pi-section-search-shop .pi-section-search-brandtype').val();
            var size = $('.pi-section-search-shop .pi-section-search-size').val();
            var color = $('.pi-section-search-shop .pi-section-search-color').val();
            var country = $('.pi-section-search-shop .pi-section-search-country').val();
            var url = "https://www.osport.ir/shop/result/#!/search?";
            if (title) {
                url = url + "title=" + title;
            }
            if (productkind) {
                url = url + "&productkind=" + productkind;
            }
            if (brandtype) {
                url = url + "&brandtype=" + brandtype;
            }
            if (size) {
                url = url + "&size=" + size;
            }
            if (color) {
                url = url + "&color=" + color;
            }
            if (country) {
                url = url + "&country=" + country;
            }
            location.href = url;
        });
    });

    $(document).ready(function () {
        $('.pi-section-search-codearea .pi-section-search-btn').click(function () {
            var code = $('.pi-section-search-codearea .pi-section-search-code').val();
            var url = "https://www.osport.ir/shop/result/#!/search?";
            if (code) {
                url = url + "code=" + code;
            }
            location.href = url;
        });
    });

    $(document).ready(function ($) {
        $('.pi-section-news .owl-carousel').owlCarousel({
            //loop:true,
            //lazyLoad:true,
            margin: 3,
            nav: true,
            rtl: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 15000,
            autoplayHoverPause: true,
            navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
            responsive: {
                0: {items: 1},
                600: {items: 2},
                1000: {items: 3}
            }
        })
    });

    $(document).ready(function ($) {
        $('.pi-section-guide .owl-carousel').owlCarousel({
            //loop:true,
            //lazyLoad:true,
            margin: 3,
            nav: true,
            rtl: true,
            autoplay: true,
            dots: false,
            autoplayTimeout: 15000,
            autoplayHoverPause: true,
            navText: ['<i class="fa fa-angle-right"></i>', '<i class="fa fa-angle-left"></i>'],
            responsive: {
                0: {items: 1},
                600: {items: 2},
                1000: {items: 3}
            }
        })
    });

    $(document).ready(function () {

        $('.pi-sidebar-wrapper > ul').prepend('<li class="sidebar-brand"><a href="https://www.osport.ir">سامانه آنلاین ورزش</a></li>');

        $('.pi-sidebar-wrapper > ul > li:has(ul)').addClass('dropdown');
        $('.pi-sidebar-wrapper > ul > li:has(ul) > a').addClass('dropdown-toggle');
        $('.pi-sidebar-wrapper > ul > li:has(ul) > a').removeAttr('href');
        $('.pi-sidebar-wrapper > ul > li:has(ul) > a').attr('data-toggle', 'dropdown');
        $('.pi-sidebar-wrapper > ul > li:has(ul) > a').append('<span class="caret"></span>');
        $('.pi-sidebar-wrapper > ul > li:has(ul) > ul').addClass('dropdown-menu');

        $('.pi-sidebar-wrapper > ul > li > ul > li:has(ul)').addClass('dropdown');
        $('.pi-sidebar-wrapper > ul > li > ul > li:has(ul) > a').addClass('dropdown-toggle');
        $('.pi-sidebar-wrapper > ul > li > ul > li:has(ul) > a').removeAttr('href');
        $('.pi-sidebar-wrapper > ul > li > ul > li:has(ul) > a').attr('data-toggle', 'dropdown');
        $('.pi-sidebar-wrapper > ul > li > ul > li:has(ul) > a').append('<span class="caret"></span>');
        $('.pi-sidebar-wrapper > ul > li > ul > li:has(ul) > ul').addClass('dropdown-menu');


        var trigger = $('.hamburger'),
            overlay = $('.overlay'),
            isClosed = false;

        trigger.click(function () {
            hamburger_cross();
        });

        $('[data-toggle="offcanvas"]').click(function () {
            $('.pi-wrapper').toggleClass('toggled');
        });

        $('.pi-sidebar-wrapper').click(function () {
            $('.pi-wrapper').toggleClass('toggled');
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        });

        function hamburger_cross() {

            if (isClosed == true) {
                overlay.hide();
                trigger.removeClass('is-open');
                trigger.addClass('is-closed');
                isClosed = false;
            } else {
                overlay.show();
                trigger.removeClass('is-closed');
                trigger.addClass('is-open');
                isClosed = true;
            }
        }
    });
})(jQuery)