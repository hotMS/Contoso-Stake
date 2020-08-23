$(.medium - 7).wrap(function() {
    var link = $('<a/>');
    link.attr('href', 'somewhere_far_far_away');
    link.text($(this).text());
    return link;
});