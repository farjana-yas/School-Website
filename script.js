function showSection(params) {
    const elements = document.querySelectorAll(".main-content > div") //elements
    elements.forEach(dt => {
        dt.classList.add('hidden')
    })
    document.getElementById(params + "section").classList.remove("hidden"); // = studentsSection
}