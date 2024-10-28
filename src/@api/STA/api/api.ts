export * from './autentication.service';
import { AutenticationService } from './autentication.service';
export * from './course.service';
import { CourseService } from './course.service';
export * from './parent.service';
import { ParentService } from './parent.service';
export * from './student.service';
import { StudentService } from './student.service';
export const APIS = [AutenticationService, CourseService, ParentService, StudentService];
