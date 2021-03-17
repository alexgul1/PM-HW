class UserExperience {
  constructor() {
    this.position = '';
    this.company = '';
    this.startDate = new Date().toISOString().split('T')[0];
    this.endDate = new Date().toISOString().split('T')[0];
  }
}

export default UserExperience;
