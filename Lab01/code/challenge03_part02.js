// // BMI = mass / height ** 2 = mass / (height * height)

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        bmi = Math.round((this.mass/(this.height**2))*100)/100;
        return bmi;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        bmi = Math.round((this.mass/(this.height**2))*100)/100;
        return bmi;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName} BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})`);
} else if (mark.calcBMI() < john.calcBMI()) {
    console.log(`${john.fullName} BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})`);
} else {
    console.log(`BMI is equal (${mark.calcBMI()})`);
}
