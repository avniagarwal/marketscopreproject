const router = require("express").Router();

router.post('/rdf', (profileid, company, recruiter, cvsent, candidates, date, res) => {
    let recruiterdata = [profileid, company, recruiter, cvsent, candidates, date];
    var sql = "INSERT INTO RECRUITER (profileid, company, recruiter,cvsent, canditates, date) VALUES (?)";
    connection.query(sql, [recruiterdata], (err, rows, fields) => {
    if (!err)
    rows.forEach(element => {
    if(element.constructor == Array)
    res.send('New Entry for PID:  : '+ element[0].profile_id);
    });
    else
    console.log(err);
    })
    });

module.exports = router;