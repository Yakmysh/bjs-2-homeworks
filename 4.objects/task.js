function Student(name, gender, age) {
		this.name = name;
		this.gender = gender;
		this.age = age;
		this.marks = [];
    }

  let student1 = new Student("Гертруда", "женский", 20, [2, 5, 5, 3, 4]);
  let student2 = new Student("Феоктист", "мужской", 19, [3, 5, 5, 5]);
  let student3 = new Student("Златоцвета", "женский", 21, [5, 5, 4, 5, 2]);
  let student4 = new Student("Акулина", "женский", 22, [3, 4, 3, 5, 2, 2]);
  let student5 = new Student("Путислав", "мужской", 19, [5, 5, 3, 5]);
  
  Student.prototype.setSubject = function (subjectName) {
        this.subject = subjectName;
      }
  
  Student.prototype.addMarks = function (...marks) {
    if (this.excluded){
        return 0;
      }
    
        this.marks.push(...marks);
    
    }
  
  Student.prototype.getAverage = function () {
        if (this.marks == undefined || this.marks == 0){
          return 0;
        }
        else {
          return this.marks.reduce((arr, num) => arr + num) / this.marks.length;
        } 
    }

  Student.prototype.exclude = function (reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
        }