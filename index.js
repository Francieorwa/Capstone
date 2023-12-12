document.getElementById('btn').addEventListener('click', function() {
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: 'success',
        title: 'Sent,we wil get back to you soon'
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
            window.location.href = window.location.origin + '/#home';
;
        }
    });
});

document.getElementById('rsvp').addEventListener('click', function() {
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        icon: 'success',
        title: 'Reservation made we will get back to you'
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer');
            window.location.href = window.location.origin + '/#home';

        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const countDownDate = new Date("Dec 14, 2023 12:59:59").getTime();
  
    const interval = setInterval(function() {
      const now = new Date().getTime();
      
      const distance = countDownDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      const countdownElements = document.querySelectorAll(".countdown");
  
      countdownElements.forEach(function(element) {
        element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  
        if (distance < 0) {
          clearInterval(interval);
          element.innerHTML = "EXPIRED";
        }
      });
      
    }, 1000);
});
