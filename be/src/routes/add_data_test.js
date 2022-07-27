const contractSchema = require('../entities/ContractInformation');
const personSchema = require('../entities/PersonalInformation');
const Department = require('../entities/Department'); 
const holidaySchema = require('../entities/Holiday');
const onLeaveSchema = require('../entities/OnLeave'); 
const shiftSchema = require('../entities/Shift');
const WorkSheet = require('../entities/WorkSheet');
const timekeepingPolicySchema = require('../entities/TimekeepingPolicy');
const User = require('../entities/User');

const ContractInformation = contractSchema.ContractInformation;
const PersonInformation = personSchema.PersonInformation;
const Holiday = holidaySchema.Holiday;
const OnLeave = onLeaveSchema.OnLeave;
const Shift  = shiftSchema.Shift;
const TimekeepingPolicy = timekeepingPolicySchema.TimekeepingPolicy;

async function add_data(){
    const constract_1 = new ContractInformation({
        name: 'Hợp đồng nhân sự 1',
        startContract: new Date().toLocaleDateString(),
        endContract: new Date().toLocaleDateString(),
        contractTerm: (this.startContract - this.endContract).toString(),
    });
    const constract_2 = new ContractInformation({
        name: 'Hợp đồng nhân sự 1',
        startContract: new Date().toLocaleDateString(),
        endContract: new Date().toLocaleDateString(),
        contractTerm: (this.startContract - this.endContract).toString(),
    });
    await constract_1.save();
    await constract_2.save();

    const department_1 = new Department({
        admin: 'admin 1',
        name: 'Tên phòng ban 1',
        numberOfEmployees: 6,
        timekeepingPolicySchema: null,
    });
    await department_1.save();

    const department_2 = new Department({
        admin: 'admin 2',
        name: 'Tên phòng ban 2',
        numberOfEmployees: 3,
        timekeepingPolicySchema: null,
    });
    await department_2.save();
    
    const holiday_1 = new Holiday({ 
        name: 'Nghỉ tết âm',
        count: 11,
        isWage: true,
    });
    await holiday_1.save();

    const holiday_2 = new Holiday({ 
        name: 'Nghỉ tết dương',
        count: 3,
        isWage: false,
    });
    await holiday_2.save();

    const onLeave_1 = new OnLeave({
        name: 'Tai nạn 1',
        startTime: new Date().toLocaleDateString(),
        endTime: new Date().toLocaleDateString(),
        isWage: false,
    });
    await onLeave_1.save();

    const onLeave_2 = new OnLeave({
        name: 'Sinh đẻ',
        startTime: new Date().toLocaleDateString(),
        endTime: new Date().toLocaleDateString(),
        isWage: true,
    });
    await onLeave_2.save();

    const person_infor_1 = new PersonInformation({
        name: 'nhân viên 1',
        gender: true,
        birthday: new Date(new Date().setDate(new Date().getDate())),
        CMND: 123456789012,
        department: ['Tên phòng ban 1',],
        workingMode: 'full-time',
    });
    await person_infor_1.save();

    const person_infor_2 = new PersonInformation({
        name: 'nhân viên 2',
        gender: false,
        birthday: new Date(new Date().setDate(new Date().getDate())),
        CMND: 123456789012,
        department: ['Tên phòng ban 1','Tên phòng ban 2'],
        workingMode: 'pass-time',
    });
    await person_infor_2.save();

    const shift_1 = new Shift({
        name: 'morning',
        startHours: new Date().getHours(),
        endHours: new Date().getHours(),
        applyForWeek: [1, 2, 3, 4],
        startShift: new Date().getDate(),
    });
    await shift_1.save();

    const shift_2 = new Shift({
        name: 'evening',
        startHours: new Date().getHours(),
        endHours: new Date().getHours(),
        applyForWeek: [1, 2, 3, 4],
        startShift: new Date().getDate(),
    });
    await shift_2.save();

    const timekeepingPolicy_1 = new TimekeepingPolicy({
        name: 'Chấm công 1',
        shift: shift_1,
        OnLeave: onLeave_1,
        holiday: holiday_1,
    });
    await timekeepingPolicy_1.save();

    const workingSheet_1 = new WorkSheet({
        username: 'Nhân viên 1',
        department: ' Phòng ban 1',
        workNumber: 15,
        holidayNumber: 15,
        nghi_phep_co_luong: 14,
        nghi_phep_ko_luong: 5,
        sumWorkNumber: 30,
        onMonth: 7,
    });

    await workingSheet_1.save();
}

module.exports = {add_data};

