const Form_CompensatingTimekeeping = require("../entities/Form/Form-CompensatingTimekeeping");
const Form_OnLeave = require("../entities/Form/Form-OnLeave");
const Form_OT = require("../entities/Form/Form-OT");
const PersonInformation = require("../entities/PersonalInformation");
const Department = require("../entities/Department");
const User = require("../entities/User");
const WorkSheet = require("../entities/WorkSheet");

async function handleGetFormCompensatingTimekeeping(req, res) {
    const username = req.username;
    if (!username) return res.status(404).json({
        error: true,
        msg: 'Invalid username provided in form submission',
        success: false,
    });
    try {
        const user = await User.findOne({ username: username });
        const personInfo = await PersonInformation.findOne({ username: username });
        const admin = await Department.findOne({ nameDepartment: personInfo.department });
        return res.status(200).json({
            success: true,
            form_data: {
                fullname: user.fullname,
                department: personInfo.department,
                username: username,
                approvedBy: admin.admin,
            }
        });
    } catch (error) {
        return res.status(404).json({
            error: error.message,
            msg: 'get form-CompensatingTimekeeping',
            success: false,
        });
    }
}

async function handlePostFormCompensatingTimekeeping(req, res) {
    try {
        console.log(req.body);
        const form = new Form_CompensatingTimekeeping({
            username: req.username,
            fullName: req.body.fullName,
            approvedBy: req.body.approvedBy,
            department: req.body.department,
            reason: req.body.reason,
            onDate: new Date(req.body.onDate).toLocaleDateString().toString(),
        })
        await form.save();
        const isWorkSheet = await WorkSheet.findOne(
            {
                username: req.username,
                onMonth: new Date(req.body.onDate).getMonth() + 1,
            }
        );
        if (!isWorkSheet) {
            const newWorkSheet = await WorkSheet(
                {
                    username: req.username,
                    fullname: req.body.fullName,
                    department: req.body.department,
                    onMonth: new Date(req.body.onDate).getMonth() + 1,
                }
            );
            await newWorkSheet.save();
        }
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(404).json({
            error: true,
            msg: 'post form-CompensatingTimekeeping',
            success: false,
        });
    }
}

async function handleGetAllUnCheckedFormCompensatingTimekeeping(req, res) {
    try {
        const form_checked = await Form_CompensatingTimekeeping.find({ isChecked: false });
        if (!form_checked) {
            return res.status(404).json({
                error: true,
                msg: 'Not found',
                success: false,
            })
        }
        return res.status(200).json({
            error: false,
            form: form_checked,
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            success: false,
        })
    }
}

async function handleGetAllCheckedFormCompensatingTimekeeping(req, res) {
    try {
        const form_checked = await Form_CompensatingTimekeeping.find({ isChecked: true });
        if (!form_checked) {
            return res.status(404).json({
                error: true,
                msg: 'Not found',
                success: false,
            })
        }
        return res.status(200).json({
            error: false,
            form: form_checked,
            msg: 'OK',
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            msg: 'Error: ' + error.message,
            success: false,
        })
    }
}

async function handlePutFormCompensatingTimekeeping(req, res) {
    try {
        console.log(req.body);
        const username = req.body.username;
        if (!username) {
            return res.status(401).json({
                error: true,
                msg: 'Invalid username provided',
                success: false,
            });
        }
        await Form_CompensatingTimekeeping.findOneAndUpdate(
            {
                username: username,
                onDate: req.body.onDate,
            },
            {
                $set: {
                    isChecked: req.body.isChecked,
                }
            }
        );
        const form = await Form_CompensatingTimekeeping.findOne({
            username: username,
            onDate: req.body.onDate,
        })
        if (!form) {
            return res.status(404).json({
                error: true,
                msg: 'form not found',
                success: false,
            })
        }
        const month = new Date(form.onDate).getMonth() + 1;
        const workSheet = await WorkSheet.findOne({
            username: username,
            onMonth: month,
        });
        if (!workSheet) {
            return res.status(404).json({
                error: true,
                msg: 'workSheet not found',
                success: false,
            })
        }
        await WorkSheet.findOneAndUpdate(
            {
                username: username,
                onMonth: month,
            },
            {
                $set:
                {
                    workNumber: workSheet.workNumber + 1,
                    sumWorkNumber: workSheet.workNumber + 1 +
                        workSheet.holidaysNumber +
                        workSheet.nghi_phep_co_luong -
                        workSheet.nghi_phep_ko_luong,
                }
            }
        )
        return res.status(200).json({
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            success: false,
        });
    }
}

async function handleGetFormOnLeave(req, res) {
    const username = req.username;
    if (!username) return res.status(401).json({
        error: true,
        msg: 'Invalid username provided in form submission',
        success: false,
    });
    try {
        const department = await PersonInformation.findOne({ username: username });
        const admin = await Department.findOne({ username: username });
        return res.status(200).json({
            success: true,
            form_CompensatingTimekeeping: {
                username: username,
                department: department.department,
                approvedBy: admin.admin,
            }
        });
    } catch (error) {
        return res.status(404).json({
            error: error.message,
            msg: 'get form-OnLeave',
            success: false,
        });
    }
}

async function handlePostFormOnLeave(req, res) {
    try {
        console.log('red.body: ', req.body);
        let a = ((new Date(req.body.endDate)).getTime() - (new Date(req.body.startDate)).getTime()) / 86400000;
        if (!req.body.morning && !req.body.afternoon) {
            a = 0;
        }
        if (!req.body.morning || !req.body.afternoon) {
            a = a / 2;
        }
        const form = new Form_OnLeave({
            username: req.username,
            fullName: req.body.fullName,
            approvedBy: req.body.approvedBy,
            department: req.body.department,
            reason: req.body.reason,
            startDate: new Date(req.body.startDate).toLocaleDateString(),
            endDate: new Date(req.body.endDate).toLocaleDateString(),
            countDate: a,
            morning: req.body.morning,
            afternoon: req.body.afternoon,
        })
        await form.save();

        const isWorkSheet = await WorkSheet.findOne(
            {
                username: req.username,
                onMonth: new Date(req.body.startDate).getMonth() + 1,
            }
        );
        if (!isWorkSheet) {
            const newWorkSheet = await WorkSheet(
                {
                    username: req.username,
                    fullname: req.body.fullname,
                    department: req.body.department,
                    onMonth: new Date(req.body.startDate).getMonth() + 1,
                }
            );
            await newWorkSheet.save();
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(404).json({
            error: true,
            msg: 'post form-OnLeave',
            success: false,
        });
    }
}

async function handleGetAllUnCheckedFormOnLeave(req, res) {
    try {
        const form_checked = await Form_OnLeave.find({ isChecked: false });
        if (!form_checked) {
            return res.status(404).json({
                error: true,
                msg: 'Not found',
                success: false,
            })
        }
        return res.status(200).json({
            error: false,
            form: form_checked,
            msg: 'OK',
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            msg: 'Error: ' + error.message,
            success: false,
        })
    }
}

async function handleGetAllCheckedFormOnLeave(req, res) {
    try {
        const form_checked = await Form_OnLeave.find({ isChecked: true });
        if (!form_checked) {
            return res.status(404).json({
                error: true,
                msg: 'Not found',
                success: false,
            })
        }
        return res.status(200).json({
            error: false,
            form: form_checked,
            msg: 'OK',
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            msg: 'Error: ' + error.message,
            success: false,
        })
    }
}

async function handlePutFormOnLeave(req, res) {
    try {
        console.log(req.body);
        const username = req.body.username;
        if (!username) {
            return res.status(401).json({
                error: true,
                msg: 'Invalid username provided',
                success: false,
            });
        }
        await Form_OnLeave.findOneAndUpdate(
            {
                username: username,
                startDate: req.body.startDate,
            },
            {
                $set: {
                    isChecked: req.body.isChecked,
                    isCheckedSalary: req.body.isCheckedSalary,
                }
            }
        )
        const form = await Form_OnLeave.findOne({
            username: username,
            startDate: req.body.startDate,
        })
        if (!form) {
            return res.status(404).json({
                error: true,
                msg: 'server error',
                success: false,
            })
        }
        const month = new Date(form.startDate).getMonth() + 1;
        let co_luong = 0;
        let ko_luong = 0;
        if (form.isCheckedSalary) {
            co_luong = Number(form.countDate);
        } else {
            ko_luong = Number(form.countDate);
        }
        const workSheet = await WorkSheet.findOne({
            username: username,
            onMonth: month,
        });
        await WorkSheet.findOneAndUpdate(
            {
                username: username,
                onMonth: month,
            },
            {
                $set: {
                    nghi_phep_co_luong: workSheet.nghi_phep_co_luong + co_luong,
                    nghi_phep_ko_luong: workSheet.nghi_phep_ko_luong + ko_luong,
                    sumWorkNumber: workSheet.sumWorkNumber + co_luong - ko_luong,
                }
            }
        )

        return res.status(200).json({
            success: true,
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            success: false,
        });
    }
}

async function handleGetFormOT(req, res) {
    const username = req.username;
    if (!username) return res.status(401).json({
        error: true,
        msg: 'Invalid username provided in form submission',
        success: false,
    });
    try {
        const department = await PersonInformation.findOne({ username: username });
        const admin = await Department.findOne({ username: username });
        return res.status(200).json({
            success: true,
            form_CompensatingTimekeeping: {
                username: username,
                department: department.department,
                approvedBy: admin.admin,
            }
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            msg: 'get form-OT',
            success: false,
        });
    }
}

async function handlePutFormOT(req, res) {
    try {
        await Form_OT.findOneAndUpdate(
            { username: req.body.username },
            {
                $set: {
                    reason: req.body.reason,
                    startTime: req.body.startTime,
                    endTime: req.body.endTime,
                }
            }
        )
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
            msg: 'post form-OT',
            success: false,
        });
    }
}

module.exports = {
    handleGetFormCompensatingTimekeeping,
    handlePostFormCompensatingTimekeeping,
    handleGetAllUnCheckedFormCompensatingTimekeeping,
    handleGetAllCheckedFormCompensatingTimekeeping,
    handlePutFormCompensatingTimekeeping,

    handleGetFormOnLeave,
    handlePostFormOnLeave,
    handleGetAllUnCheckedFormOnLeave,
    handleGetAllCheckedFormOnLeave,
    handlePutFormOnLeave,

    handleGetFormOT,
    handlePutFormOT,
}
