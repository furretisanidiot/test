document.addEventListener("DOMContentLoaded", function () {
    var _0x51be00 = document.getElementById("reminder_js");
    var _0xd309b5 = document.querySelector("body");
    _0xd309b5.removeChild(_0x51be00);
    var _0x221c39 = document.getElementById("greeting");
    var _0x8e4756 = document.getElementById("imgid");
    var _0x320fa3 = window.location.href.split('/')[0x3];
    fetch('/' + _0x320fa3 + '/data').then(_0xedab6b => {
      if (_0xedab6b.ok) {
        _0xedab6b.json().then(_0x3d0464 => {
          _0x221c39.textContent = _0x221c39.textContent.replace("(username)", _0x3d0464.username);
          _0x8e4756.src = "https://cdn.discordapp.com/avatars/" + _0x3d0464.id + '/' + _0x3d0464.avatar + ".png?size=1024";
        });
      }
    })["catch"](_0x533f26 => {
      console.error("Error fetching data:", _0x533f26);
    });

    document.getElementById("button").addEventListener("click", function (_0xd7b05d) {
      const _0x37d3f7 = grecaptcha.getResponse();
      console.log(_0x37d3f7);
      if (!_0x37d3f7.length > 0x0) {
        alert("Captcha not completed, refreshing page");
        window.location.reload();
      }
      fetch('/' + _0x320fa3 + '/submit', {
        'method': "POST",
        'body': JSON.stringify({
          'questions': [document.getElementById("first-thing").value, document.getElementById("second-thing").value, document.getElementById("agree-rules").checked],
          'captchaKey': _0x37d3f7
        })
      }).then(_0x29c973 => {
        if (_0x29c973.ok) {
          alert("Your request has been sent to our staff team, thanks!\nAfter closing this popup, you'll be redirected to Google (cuz why not?)");
          window.location.href = "https://google.com";
        } else {
          _0x29c973.json().then(_0x4819e6 => {
            alert("Your request could not be sent, the server replied with this error:\n\nServer response: " + _0x4819e6.reason + "\n\nAs a result, this website will be refreshed");
            window.location.reload();
          });
        }
      })["catch"](_0x539158 => {
        console.error("Error submitting data:", _0x539158);
      });
    });
  });