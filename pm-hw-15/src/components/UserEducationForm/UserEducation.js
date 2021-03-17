class UserEducation {
  constructor() {
    this.school = '';
    this.speciality = '';
    this.startDate = new Date().toISOString().split('T')[0];
    this.endDate = new Date().toISOString().split('T')[0];
  }
}

export default UserEducation;
