class person {
    constructor(Name,Collage,Gender,Age,Address,Mobile,Email) {
    this.Name = Name ;
    this.Collage = Collage ;
    this.Gender = Gender; 
    this.Age=Age
    this.Address = Address ;
    this.Mobile = Mobile; ;
    this.Email = Email;
    }
    person_name() {
    return `my name is ${this.Name}`;
    }
    person_Collage() {
    return `Studied @ ${this.Collage}`;
    }
    person_gender() {
    return `i am a ${this.Gender}`;
    }
    person_age() {
        return `my age is ${this.Age}`;
        }
    person_address() {
    return `my address is ${this.Address}`;
    }
    person_mobile() {
    return `my mobile_no is ${this.Mobile}`;
    }
    person_Email() {
    return `my email id is ${this.Email}`;
    }
    }
    
    const person_obj = new person("Karthick","Vels institute of science & technology","male","23","Chennai","8877224103","karthick@gmail.com");
    console.log(person_obj.person_name());
    console.log(person_obj.person_Collage());
    console.log(person_obj.person_gender());
    console.log(person_obj.person_age());
    console.log(person_obj.person_address());
    console.log(person_obj.person_mobile());
    console.log(person_obj.person_Email());
    
