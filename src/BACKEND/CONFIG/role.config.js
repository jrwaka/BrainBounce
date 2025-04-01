const roles = {
  Admin: [
    "admin_dashboard",
    "getUsers",
    "getUser",
    "deleteUser",
    "deleteCourse",
    "getCourses",
    "getTeachers",
    "getTeacher",
    "getTeacherByGrade",
  ],
  Teacher: [
    "teacher_dashboard",
    "uploadCourse",
    "updateCourse",
    "deleteCourse",
    "getCourses",
    "downloadCourse",
    "getTeachers",
    "getTeacher",
    "getTeacherByGrade",
  ],
  Parent: [
    "parent_dashboard",
    "enrollCourse",
    "getCourses",
    "getCourse",
    "downloadCourse",
    "getTeachers",
    "getTeacher",
    "getTeacherByGrade",
    "addChild",
  ],
};

module.exports = roles;
