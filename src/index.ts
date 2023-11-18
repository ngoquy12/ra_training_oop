// Khai báo class Person => Sử dựng kiểu Pascal case, là một danh từ
class Person {
  // Khai báo các thuộc tính
  public userName: string;
  public email: string;
  public password: string;
  private salary: number;

  // Hàm hàm của một đối tượng => Thiết kế của một đối tượng
  constructor(
    userName: string,
    email: string,
    password: string,
    salary: number
  ) {
    this.userName = userName; // 1 = 1
    this.email = email;
    this.password = password;
    this.salary = salary;
  }

  // Khởi tạo các phương thức => cammel case và động từ
  getName(): string {
    return this.userName;
  }

  // Lấy thông tin của person gồm userName và email
  getInfo(): string {
    return `Tên: ${this.userName}, Email: ${this.email}`;
  }

  // set và get
  getSalary() {
    return this.salary;
  }

  setSalary(newSalary: number): number {
    return (this.salary = newSalary);
  }
}

// Khai báo class Student
class Employee extends Person {
  public department: string;

  // Hàm khởi tạo cho đối tượng Employee
  constructor(
    userName: string,
    email: string,
    password: string,
    salary: number,
    department: string
  ) {
    super(userName, email, password, salary);
    this.department = department;
  }
}

// Khai báo đối tượng EmployeeTraining: Rank
class EmployeeTraining extends Employee {
  public rank: string;

  // Khai báo hàm khởi tạo
  constructor(
    userName: string,
    email: string,
    password: string,
    salary: number,
    department: string,
    rank: string
  ) {
    super(userName, email, password, salary, department);
    this.rank = rank;
  }

  // Tạo hàm để hiển thị ra rank và trình độ
  getRank(): string {
    return `Tên rank: ${this.rank} - Trình độ Tốt`;
  }
}

// Khởi tạo đối tượng Person
// String, Number, Boolean
const person1 = new Person("Nguyễn Văn A", "nvq@gmail.com", "123456789", 20000);
const person2 = new Person("Nguyễn Văn b", "nvb@gmail.com", "12345678", 30000);

// Thay đổi giá trị của thuộc tính
person1.userName = "Nguyễn Văn C";

person1.setSalary(500000);

console.log("person1 ", person1);
console.log("person2 ", person2.getInfo());
console.log("Lương thực tế:", person1.getSalary());

// Person("Nguyễn Văn A", "nva@gmail.com", "123456789")

// Khởi tạo đối tượng Employee
const employee1 = new Employee(
  "Ngọ Văn Quý",
  "nvquy@gmail.com",
  "12345",
  10000,
  "Phòng đào tạo"
);

console.log("Employee", employee1.getInfo());

// Khởi tạo đối tượng EmployeeTraining
const employeeTrain1 = new EmployeeTraining(
  "Ngọ Văn Quý",
  "nvquy@gmail.com",
  "12345",
  10000,
  "Phòng đào tạo",
  "Rank 3"
);

console.log("Thông tin nhân viên đào tạo ", employeeTrain1);
console.log("Thông tin cấp bậc nhân viên đào tạo ", employeeTrain1.getRank());
