
    function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
            }
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzUsS4zZQrPp_JunW-3ExRgMd6BXF8-XNEznecMhllauE-ZpTajhsk5_h0AZjw_33T3/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
            e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
      .catch(error => console.error('Error!', error.message))
  })