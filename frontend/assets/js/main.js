(function($) {

    $(function() {

        /**
         *  Menu links active on click
         */
        $('.js-main-menu').on('click', '.menu-main__item', function() {
            $('.menu-main__item').removeClass('active');
            $(this).addClass('active');
        });

        /**
         *  Menu links active on load page
         */
        (function() {
            var path = location.pathname;

            $('.js-main-menu .menu-main__link').each(function() {
               var self$ = $(this),
                   href = self$.attr('href');

               if ( ~path.indexOf(href) ) self$.parent().addClass('active');
            });
        })();

    });

})(jQuery);
