chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      var url = tabs[0].url;
      console.log(url);
      
      var img = document.getElementById('spinner');
      var content = document.getElementById('content');

      img.setAttribute('hidden','true');
      content.innerHTML = '<p>' + url + '</p>';
  });