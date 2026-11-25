class StudentPage {

    constructor(page) {
        this.page = page;

        this.studentName = page.getByLabel('Student Name');
        this.email = page.getByLabel('Email');
        this.femaleRadio = page.getByRole('radio', { name: 'Female' });
        this.course = page.getByLabel('Course');
        this.terms = page.getByLabel('I agree to the terms');
        this.registerButton = page.getByRole('button', { name: 'Register Student' });
    }

}

module.exports = { StudentPage };