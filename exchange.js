function showAcademicInfo(category) {
    const academicImage = document.getElementById('academic-image');
    const academicDescription = document.getElementById('academic-description');

    switch (category) {
        case 'school':
            academicImage.style.backgroundImage = "url('school-image.jpg')";
            academicDescription.innerHTML = "<h3>School</h3><p>Details about your school.</p>";
            break;
        case 'gpa':
            academicImage.style.backgroundImage = "url('gpa-image.jpg')";
            academicDescription.innerHTML = "<h3>GPA</h3><p>Details about your GPA.</p>";
            break;
        case 'honors':
            academicImage.style.backgroundImage = "url('honors-image.jpg')";
            academicDescription.innerHTML = "<h3>Honors and AP</h3><p>Details about your honors and AP courses.</p>";
            break;
        case 'sat':
            academicImage.style.backgroundImage = "url('sat-image.jpg')";
            academicDescription.innerHTML = "<h3>SAT</h3><p>Details about your SAT scores.</p>";
            break;
    }
}

function showExtracurricular(category) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    document.getElementById(category).classList.add('active');
}