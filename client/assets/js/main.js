(function($) {

    $(function() {

        /**
         *  Menu links active on click
         */
        $('.js-main-menu').on('click', '.menu-main__item', function() {
            $('.menu-main__item').removeClass('active');
            $(this).addClass('active');
        });

        $('.js-menu-sub').on('click', '.menu-sub__link', function() {
            $('.menu-sub__link').removeClass('active');
            $(this).addClass('active');
        });

        /**
         *  Menu links active on load page
         */
        (function() {
            var path = location.pathname;

            $('.js-main-menu .menu-main__link, .js-menu-sub .menu-sub__link').each(function() {
               var self$ = $(this),
                   href = self$.attr('href');

               if ( ~path.indexOf(href) ) {
                   var data = self$.parent().addClass('active').data('parent');
                   $('#menu-main a[href="' + data + '"]').parent().addClass('active');
               }
            });
        })();

        /**
         *  View file on input file change (+ span)
         */
        $('input:file').on('change', function() {
            var self$ = $(this),
                path  = self$.val(),
                file;

            if ( $(this).val().lastIndexOf('\\') )
                file = path.lastIndexOf('\\') + 1;
            else
                file = path.lastIndexOf('/') + 1;

            file = path.slice(file);

            self$.parent().next().html(file);
        });

        /**
         *  Lab add service list/item
         */
        $('.js-lab').on('click', function() {
            return false;
        });
    });

})(jQuery);
