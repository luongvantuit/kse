const ContractInformation = require('../entities/ContractInformation');
const PersonInformation = require('../entities/PersonalInformation');
const Department = require('../entities/Department'); 
const Holiday = require('../entities/Holiday');
const OnLeave = require('../entities/OnLeave'); 
const Shift = require('../entities/Shift');
const WorkSheet = require('../entities/WorkSheet');
const TimekeepingPolicy = require('../entities/TimekeepingPolicy');
const User = require('../entities/User');
const start = 'Sun Dec 17 1995 00:00:00 GMT+0700 (Indochina Time)';
const end = 'Tue Dec 19 1995 00:00:00 GMT+0700 (Indochina Time)';

async function add_data(){
    const constract_1 = new ContractInformation({
        username: 'Nhân viên 1',
        nameContract: 'Hợp đồng nhân sự 1',
        startContract: start,
        endContract: end,
        contractTerm: 172800000,
    });
    const constract_2 = new ContractInformation({
        username: 'Nhân viên 2',
        nameContract: 'Hợp đồng nhân sự 2',
        startContract: start,
        endContract: end,
        contractTerm: 172800000,
    });
    await constract_1.save();
    await constract_2.save();

    const department_1 = new Department({
        admin: 'admin 1',
        nameDepartment: 'Phòng ban 1',
        numberOfEmployees: 6,
        timekeepingPolicy: 'Chấm công 1',
    });
    await department_1.save();

    const department_2 = new Department({
        admin: 'admin 2',
        nameDepartment: 'Phòng ban 2',
        numberOfEmployees: 3,
        timekeepingPolicy: 'Chấm công 1',
    });
    await department_2.save();
    
    const holiday_1 = new Holiday({ 
        nameHoliday: 'Nghỉ tết âm',
        countHolidays: 11,
        isWage: true,
    });
    await holiday_1.save();

    const holiday_2 = new Holiday({ 
        nameHoliday: 'Nghỉ tết dương',
        countHolidays: 3,
        isWage: false,
    });
    await holiday_2.save();

    const onLeave_1 = new OnLeave({
        nameOnLeave: 'Tai nạn 1',
        startTime: start,
        endTime: end,
        isWage: false,
    });
    await onLeave_1.save();

    const onLeave_2 = new OnLeave({
        nameOnLeave: 'Sinh đẻ',
        startTime: start,
        endTime: end,
        isWage: true,
    });
    await onLeave_2.save();

    const person_infor_1 = new PersonInformation({
        username: 'Nhân viên 1',
        gender: true,
        birthday: start,
        CMND: 123456789012,
        department: 'Tên phòng ban 1',
        workingMode: 'full-time',
    });
    await person_infor_1.save();

    const person_infor_2 = new PersonInformation({
        username: 'Nhân viên 2',
        gender: false,
        birthday: end,
        CMND: 123456789012,
        department: 'Tên phòng ban 2',
        workingMode: 'pass-time',
    });
    await person_infor_2.save();

    const shift_1 = new Shift({
        nameShift: 'morning',
        startHours: '08:30:00',
        endHours: '12:00:00',
        applyForWeek: [1, 2, 3, 4],
        startShift: start,
    });
    await shift_1.save();

    const shift_2 = new Shift({
        nameShift: 'evening',
        startHours: '13:30:00',
        endHours: "17:30:00",
        applyForWeek: [1, 2, 3, 4],
        startShift: end,
    });
    await shift_2.save();

    const timekeepingPolicy_1 = new TimekeepingPolicy({
        name: 'Chấm công 1',
        shift: '',
        onLeave: '',
        holiday: '',
    });
    await timekeepingPolicy_1.save();

    const workingSheet_2 = new WorkSheet({
        username: 'Nhân viên 2',
        department: 'Phòng ban 1',
        workNumber: 15,
        holidaysNumber: 15,
        nghi_phep_co_luong: 14,
        nghi_phep_ko_luong: 5,
        sumWorkNumber: 30,
        onMonth: 7,
    });

    await workingSheet_2.save();

    const workingSheet_3 = new WorkSheet({
        username: 'Nhân viên 3',
        department: 'Phòng ban 2',
        workNumber: 15,
        holidaysNumber: 15,
        nghi_phep_co_luong: 14,
        nghi_phep_ko_luong: 5,
        sumWorkNumber: 30,
        onMonth: 7,
    });

    await workingSheet_3.save();

    const workingSheet_4 = new WorkSheet({
        username: 'Nhân viên 4',
        department: 'Phòng ban 1',
        workNumber: 15,
        holidaysNumber: 15,
        nghi_phep_co_luong: 14,
        nghi_phep_ko_luong: 5,
        sumWorkNumber: 30,
        onMonth: 7,
    });

    await workingSheet_4.save();

}

module.exports = {add_data};

