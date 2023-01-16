const express = require('express');
const router = express.Router();

const {
    getStudentData,
    getStudentDataByRoll,
    postStudentData,
    patchStudentData,
    deleteStudentData
} = require('../controllers/controller')

router.route('/api/students/').get(getStudentData)
router.route('/api/students/').post(postStudentData)
router.route('/api/students/:roll').get(getStudentDataByRoll)
router.route('/api/students/:roll').patch(patchStudentData)
router.route('/api/students/:roll').delete(deleteStudentData)

module.exports = router;