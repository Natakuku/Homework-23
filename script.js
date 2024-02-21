'use strict';

class Student {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(undefined);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    addGrade(...grade) {
        this.grades.push(...grade);
    }

    addAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

    updateAttendance(isPresent) {
        const lastIndex = this.attendance.findIndex(val => val === undefined);
        if (lastIndex === -1) {
            console.log("Record is full!");
            return false;
        }
        this.attendance[lastIndex] = isPresent;
        return true;
    }

    present() {
        this.updateAttendance(true);
    }

    absent() {
        this.updateAttendance(false);
    }

    summary() {
        const averageGrade = this.addAverageGrade();
        const attendanceRecord = this.calculateAttendanceRecord();

        if (averageGrade > 90 && attendanceRecord > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRecord > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }

    calculateAttendanceRecord() {
        const totalClasses = this.attendance.length;
        const attendedClasses = this.attendance.filter(val => val === true).length;
        return attendedClasses / totalClasses;
    }
}

const student1 = new Student("Valera", "Smith", 2001);
student1.addGrade(40, 45, 70);
student1.present();
student1.present();
student1.absent();
console.log(student1.summary());

const student2 = new Student("Oleksiy", "Stallone", 1990);
student2.addGrade(90, 95, 95);
student2.present();
console.log(student2.summary());

const student3 = new Student("Olena", "Gold", 1995);
student3.addGrade(90, 95, 95, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90);
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
console.log(student3.summary());