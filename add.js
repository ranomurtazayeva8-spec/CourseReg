function selectCourse(courseName) {
    document.getElementById('selectedCourse').value = courseName;
    document.getElementById('register-form').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('courseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('studentName').value;
    const course = document.getElementById('selectedCourse').value;
    
    if (!course) {
        alert("Iltimos, avval yuqoridan kursni tanlang!");
        return;
    }
    
    alert(`Rahmat, ${name}! Siz "${course}" kursiga muvaffaqiyatli yozildingiz.`);
    this.reset();
});

