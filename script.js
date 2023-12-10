function showContent(contentNumber) {
    // Hide all content elements
    var contentElements = document.querySelectorAll('.content');
    contentElements.forEach(function (element) {
      element.style.display = 'none';
    });
  
    // Show the selected content
    var selectedContent = document.getElementById('content-' + contentNumber);
    if (selectedContent) {
      selectedContent.style.display = 'block';
    }
  }
  function scrollToTop() {
    // Scroll to the top of the page smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  