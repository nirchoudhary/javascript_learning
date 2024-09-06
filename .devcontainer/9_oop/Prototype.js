Object.setPrototypeOf(TeacherSupport,Teacher)

let anotherUsername = "chaiAurCode    ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
     console.log(`${this.name}`);
    console.log(`True Length Is: ${this.trim().length}`);
    
}
anotherUsername.trueLength();
