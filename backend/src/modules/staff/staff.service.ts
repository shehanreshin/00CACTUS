export abstract class StaffService {
  abstract findAllStaff();
  abstract findStaff(id: string);
  abstract findStaffByUserId(userId: string);
  abstract createStaff(createStaffDto);
}
