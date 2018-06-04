function fixedHeaderOnScroll() {
  var header = jQuery('body>header'),
      headerHeight = header.height(),
      nextElement = header.next();
  
  nextElement.css({ paddingTop: headerHeight });
}