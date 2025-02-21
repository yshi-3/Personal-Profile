window.onload = function () {
    showAcademicInfo('school'); // 默认显示 School
};
function showAcademicInfo(tab) {
    const academicImage = document.getElementById('academic-image');
    const academicDescription = document.getElementById('academic-description');

    if (tab === 'school') {
        academicImage.style.backgroundImage = "url('tp31.jpg')";
        academicDescription.innerHTML = "<p>The Potter's School (TPS) is a well-known online school that has achieved remarkable results in academic education and character development.The school was founded in 1997 and was one of the pioneers of early online home school courses. The school has been accredited by the Central States Association Primary and Secondary Schools Committee (MSA-CESS) and enjoys an excellent academic reputation globally as an independent private school.The school offers 18 or more certified AP courses (more than half of AP exam scores are 4 or 5), 15 or more dual credit university courses (certified and transcribed by the University of Belhaven), and 25 or more honor courses (honor courses have specific academic standards). Provide two types of diplomas: standard and honor, and students must meet the corresponding four-year credit standards to graduate. A graduation diploma can reflect that students have met or exceeded the school's credit standards in all subject areas during their four years of high school, and has a high degree of recognition when applying to universities. However, only students who have obtained a school diploma will be included in the graduation statistics.</p>";
    } else if (tab === 'gpa') {
        academicImage.style.backgroundImage = "url('tp32.jpg')";
        academicDescription.innerHTML = "<p>My GPA is about 3.8 through out the four years. Please contact me for specific information on my official transcript. TPS follows a standard GPA evaluation system. In our academic assessment process, we initially calculate running grades as percentages. These percentage - based grades are then converted into a GPA score, which provides a comprehensive measure of academic performance across different courses. I have consistently strived for excellence in my studies, particularly in mathematics. All of my math courses have been honors - level courses. These honors math courses not only cover more in - depth and advanced content but also have a weighted impact on my GPA.</p>";
    } else if (tab === 'honors') {
        academicImage.style.backgroundImage = "url('tp33.jpg')";
        academicDescription.innerHTML = "<p>During high school, I actively embraced a challenging academic path, enrolling in a series of Honor and AP courses. All of my high - school math courses were at the Honor level, which significantly enhanced my math proficiency and logical thinking abilities. I diversified my academic portfolio with AP courses such as Macroeconomics, Microeconomics, and U.S. History. These courses broadened my knowledge in social sciences. More importantly, in the STEM and CS domains, I took AP Calculus AB, AP Computer Science Principles, and AP Computer Science A, and Statistics. These courses not only sharpened my technical skills but also deepened my understanding of advanced mathematical concepts, data analysis, and programming. Particularly, the two AP Computer Science courses were instrumental in sparking my passion for computer science. They introduced me to programming languages and computational thinking, inspiring me to explore this field further.</p>";
    } else if (tab === 'sat') {
        academicImage.style.backgroundImage = "url('sat-image.jpg')";
        academicDescription.innerHTML = "<p>SAT</p>";
    }
}

function showExtracurricular(category) {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    document.getElementById(category).classList.add('active');
}