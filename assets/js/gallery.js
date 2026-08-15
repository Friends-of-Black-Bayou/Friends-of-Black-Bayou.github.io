// Turns recovered Weebly slideshows into a click-to-enlarge grid.
// Progressive enhancement: without JS you still get a grid of images,
// and the captions remain in the DOM for assistive technology.
(function () {
  var galleries = document.querySelectorAll('.gallery');
  if (!galleries.length) return;

  var dlg = document.createElement('dialog');
  dlg.className = 'lightbox';
  dlg.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Close">×</button>' +
    '<img alt="">' +
    '<p class="lightbox-caption"></p>';
  document.body.appendChild(dlg);

  var dlgImg = dlg.querySelector('img');
  var dlgCap = dlg.querySelector('.lightbox-caption');

  galleries.forEach(function (gallery) {
    gallery.querySelectorAll('figure').forEach(function (fig) {
      var img = fig.querySelector('img');
      if (!img) return;

      img.loading = 'lazy';

      var capEl = fig.querySelector('figcaption');
      var caption = capEl ? capEl.textContent.trim() : '';

      // wrap in a real button so the thumbnail is keyboard-operable
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'gallery-button';
      btn.setAttribute('aria-label', caption ? 'Enlarge: ' + caption : 'Enlarge image');
      img.parentNode.insertBefore(btn, img);
      btn.appendChild(img);

      btn.addEventListener('click', function () {
        dlgImg.src = img.currentSrc || img.src;
        dlgImg.alt = caption;
        dlgCap.textContent = caption;
        dlgCap.hidden = !caption;
        dlg.showModal();
      });
    });
  });

  dlg.querySelector('.lightbox-close').addEventListener('click', function () {
    dlg.close();
  });

  // click the backdrop to dismiss
  dlg.addEventListener('click', function (e) {
    if (e.target === dlg) dlg.close();
  });

  // release the image so a large file isn't held in memory
  dlg.addEventListener('close', function () {
    dlgImg.removeAttribute('src');
  });
})();
