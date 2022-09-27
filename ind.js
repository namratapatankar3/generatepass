let cpass = document.getElementById('text')
let generatebtn = document.getElementById('generate')
generatebtn.addEventListener("click", () => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&()"
    let password = ""
    for (let i = 0; i < 14; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    cpass.value = password
})
let copytext = document.getElementById('copy')
copytext.addEventListener("click", () => {
    cpass.select()
    cpass.setSelectionRange(0, 99)
    document.execCommand("copy")
})