$(function() {
    $('ul.o-list-ui li a').on('click', function(e){
        var $link = $(this);
        var $parentNode = $link.parent();
        var linkLeavesPage = $link.attr('href');
        if (!linkLeavesPage) {
            $parentNode.toggleClass('nav-tree-node-is-open');
        }
    });
});
