const express = require("express");
const app = express();
const mysql = require('mysql');
const route = require('./routes')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const cors = require('cors');

app.use(cors())
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  port: 3304,
  password: "root",
  database: "marketscope",
  });

db.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query(
      "SELECT * FROM login WHERE username = ? AND password = ?",
      [username, password],
      (error, result)=> {
          if (error) {
              throw error
          }
          if (result.length > 0) {
              res.send( result);
              }else({message: "Wrong username/password comination!"});
          }
  );
});

app.post('/firepositions', function (req, res) {
db.query('SELECT COUNT(*) AS count FROM employee WHERE FirePositions=1', 
function (error, results, fields) {
  if (error) throw error;
  console.log(results); // Auto increment id
  res.end(JSON.stringify(results));
  });
})

app.post('/firepositionsdata', function (req, res) {
  db.query('SELECT * FROM employee WHERE FirePositions=1', 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); // Auto increment id
      res.end(JSON.stringify(results));
      });
  })

app.post('/addfireposition', function (req, res) {
  db.query('UPDATE employee SET FirePositions=1 WHERE id=' 
  + req.body.id, 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); // Auto increment id
      res.end(JSON.stringify(results));
    });
})

app.post('/activeprofiles', function (req, res) {
db.query('SELECT COUNT(*) AS count FROM employee WHERE FirePositions=1 OR Priority="Moderate"', 
function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  res.end(JSON.stringify(results));
  });
})

app.post('/activeprofilesdata', function (req, res) {
db.query('SELECT * FROM employee WHERE FirePositions=1 OR Priority="Moderate"', 
function (error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.end(JSON.stringify(results));
    });
})

app.post('/allocatedprofiles', function (req, res) {
  db.query('SELECT DISTINCT COUNT(pid) AS count FROM master_recruiter where taskdate=curdate()', 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); 
      res.end(JSON.stringify(results));
      });
  }) 

app.post('/allocatedprofilesdata', function (req, res) {
db.query('SELECT DISTINCT(pid) FROM master_recruiter ORDER BY taskdate DESC', 
function (error, results, fields) {
    if (error) throw error;
    console.log(results); 
    res.end(JSON.stringify(results));
    });
})

app.post('/recruiter', function (req, res) {
  db.query('INSERT INTO recruiter VALUES( "'+req.body.profileid+'","'+ req.body.company+'","'+ req.body.recruiter+'","'+
   req.body.cvsent+'","'+ req.body.candidates+'","'+ req.body.date+'","'+ req.body.leave+'")', 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); // Auto increment id
      res.end(JSON.stringify(results));
    });
})

app.post('/recruiterdata', function (req, res) {
  db.query('SELECT * FROM employee JOIN master_recruiter ON employee.id = master_recruiter.master_id and master_recruiter.recruiter_name = "' 
  + req.body.name + '"', 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); // Auto increment id
      res.send(JSON.stringify(results));
    });
})

app.post('/newtaskname', function (req, res) {
db.query('SELECT username FROM login', 
function (error, results, fields) {
    if (error) throw error;
    console.log(results); // Auto increment id
    res.send(JSON.stringify(results)); 
  });
})


app.post('/tldata', function (req, res) {
  db.query('SELECT * FROM employee ' , 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); // Auto increment id
      res.send(JSON.stringify(results));
    });
})

app.get('/tasksheet', function (req, res) {
  db.query('SELECT * FROM master_recruiter where taskdate=curdate();', 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); // Auto increment id
      res.send(JSON.stringify(results));
    });
})

app.get('/recruiteroptions', function (req, res) {
  db.query('SELECT distinct(recruiter_name) FROM master_recruiter', 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); // Auto increment id
      res.send(JSON.stringify(results));
    });
})

app.post('/rdfdata', function (req, res) {
  db.query('SELECT * FROM master_recruiter WHERE recruiter_name ="' 
  + req.body.recruiter + '"' +' AND taskDate = "' + req.body.date + '"', 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); // Auto increment id
      res.send(JSON.stringify(results));
    });
})

app.post('/addtask', function (req, res) {
  console.log(req.body);
  db.query('INSERT INTO master_recruiter(recruiter_name, pid, nature, taskdate) VALUES( "'+ req.body.recruiter+'","'+
  req.body.pid+'","'+req.body.nature+'", DATE(NOW()))', 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); // Auto increment id
      res.send(JSON.stringify(results));
    });
})

app.post('/deletetask', function (req, res) {
  console.log(req.body);
  db.query('delete from master_recruiter where master_id=' +
   req.body.master_id+ ' AND recruiter_name="' + req.body.recruiter_name + '"', 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); // Auto increment id
      res.send(JSON.stringify(results));
    });
})

app.post('/MRfilter', function (req, res) {
  console.log(req.body);
  let sqlQuery;
  if(req.body.recruiter && req.body.startDate && req.body.endDate && req.body.company) {
      sqlQuery = ('SELECT * FROM master_recruiter WHERE recruiter_name ="' + req.body.recruiter 
      + '" AND taskDate BETWEEN "' + req.body.startDate + '" AND "'+
      req.body.endDate + '" AND company="' + req.body.company + '"')
  }
  if(!req.body.recruiter) {
      sqlQuery = ('SELECT * FROM master_recruiter WHERE taskDate BETWEEN "' + req.body.startDate + '" AND "'+
      req.body.endDate + '" AND company="' + req.body.company + '"')
  }
  if(!req.body.company) {
      sqlQuery = ('SELECT * FROM master_recruiter WHERE recruiter_name ="' + req.body.recruiter 
      +'" AND taskDate BETWEEN "' + req.body.startDate + '" AND "'+
      req.body.endDate + '"')
  }
  if(!req.body.startDate) {
      sqlQuery = ('SELECT * FROM master_recruiter WHERE recruiter_name ="' + req.body.recruiter 
      +'" AND taskDate <"' + req.body.endDate + '" AND company="' + req.body.company + '"')
  }
  if(!req.body.endDate) {
      sqlQuery = ('SELECT * FROM master_recruiter WHERE recruiter_name ="' + req.body.recruiter 
      +'" AND taskDate >"' + req.body.startDate + '" AND company="' + req.body.company + '"')
  }
  if(!req.body.company && !req.body.recruiter) {
      sqlQuery = ('SELECT * FROM master_recruiter taskDate BETWEEN "' + req.body.startDate + '" AND "'+
      req.body.endDate + '"')
  }
  if(!req.body.endDate && !req.body.company && !req.body.recruiter ) {
      sqlQuery = ('SELECT * FROM master_recruiter WHERE taskDate>"' + req.body.startDate + '"')
  }
  if(!req.body.startDate && !req.body.company && !req.body.recruiter ) {
      sqlQuery = ('SELECT * FROM master_recruiter WHERE taskDate<"' + req.body.endDate + '"')
  }
  if(!req.body.recruiter && !req.body.startDate) {
      sqlQuery = ('SELECT * FROM master_recruiter WHERE company ="' + req.body.company 
      +'" AND taskDate <"' + req.body.endDate + '"')
  }
  if(!req.body.company && !req.body.startDate) {
      sqlQuery = ('SELECT * FROM master_recruiter WHERE recruiter_name ="' + req.body.recruiter 
      +'" AND taskDate <"' + req.body.endDate + '"')
  }
  if(!req.body.recruiter && !req.body.endDate) {
      sqlQuery = ('SELECT * FROM master_recruiter WHERE company ="' + req.body.company 
      +'" AND taskDate >"' + req.body.startDate + '"')
  }
  if(!req.body.company && !req.body.endDate) {
      sqlQuery = ('SELECT * FROM master_recruiter WHERE recruiter_name ="' + req.body.recruiter 
      +'" AND taskDate >"' + req.body.startDate + '"')
  }
  if(!req.body.startDate && !req.body.endDate) {
      sqlQuery = ('SELECT * FROM master_recruiter WHERE recruiter_name ="' + req.body.recruiter 
      + '" AND company="' + req.body.company + '"')
  }
  db.query(sqlQuery, 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); // Auto increment id
      res.end(JSON.stringify(results));
    });
})

app.put('/rdfupdate', function (req, res) {
  db.query("UPDATE master_recruiter SET CVSourced=" + req.body.CVSourced + ", CVSent=" + req.body.CVSent +
      ", Candidates='" + req.body.Candidates +
      "' WHERE master_id=" + req.body.profileid + ";", 
      function (error, results, fields) {
  if (error) throw error;
  return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
  })
});


app.post('/deletefireposition', function (req, res) {
  db.query('UPDATE employee SET FirePositions=0 WHERE id=' 
  + req.body.id, 
  function (error, results, fields) {
      if (error) throw error;
      console.log(results); // Auto increment id
      res.end(JSON.stringify(results));
    }); 
})
// app.put('/rdfsent', function (req, res) {
//     var cvsent = 0;
//     if(req.body.CVSent !== ''){
//         cvsent = parseInt(req.body.CVSent)
//     }
//     connection.query("UPDATE recruiter SET CVSent=" + cvsent + 
//         " WHERE ProfileID=" + req.body.profileid + ";", 
//         function (error, results, fields) {
//     if (error) throw error;
//     return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
//     });
// });

// app.put('/rdfcandidates', function (req, res) {
//     connection.query("UPDATE recruiter SET Candidates='" + req.body.candidates 
//         + "' WHERE ProfileID=" + req.body.profileid + ";", 
//         function (error, results, fields) {
//     if (error) throw error;
//     return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
//     });
// });

// app.put('/rdfleave', function (req, res) {
//     console.log(req.body.leave);
//     let leave = 0
//     if(req.body.leave === true){leave = 1;}
//     connection.query("UPDATE master_recruiter SET `leave`='" + leave
//         + "' WHERE `Date`='" + req.body.date + "';", 
//         function (error, results, fields) {
//     if (error) throw error;
//     return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
//     });
// });


//To add entries to the employee table

app.post("/create", (req, res) => {
  console.log(req);
  const NameofCompany = req.body.NameofCompany;
  const BusinessTerm = req.body.BusinessTerm;
  const category = req.body.category;
  const Priority = req.body.Priority;
  const NOP = req.body.NOP;
  const SPOC = req.body.SPOC;
  const EdReq = req.body.EdReq;
  const JoiningTime = req.body.JoiningTime;
  const TargetComp = req.body.TargetComp;
  const Skill1 = req.body.Skill1;
  const Skill2 = req.body.Skill2;
  const Skill3 = req.body.Skill3;
  const Skill4 = req.body.Skill4;
  const Skill5 = req.body.Skill5;
  const MSrep = req.body.MSrep;
  const LowExperience = req.body.LowExperience;
  const HighExperience = req.body.HighExperience;
  const IndiaAbroad = req.body.IndiaAbroad;
  const Country = req.body.Country;
  const State = req.body.State;
  const lowSalary = req.body.lowSalary;
  const highSalary = req.body.highSalary;
  const lakhK= req.body.lakhK;
  const currency= req.body.currency;
  const FunctionalArea = req.body.FunctionalArea;
  const SubFunctionalArea = req.body.SubFunctionalArea;
  const LinkJD = req.body.LinkJD;
  const JBlink = req.body.JBlink;
  const ExNot = req.body.ExNot;



  db.query(
    "INSERT INTO employee (NameofCompany, BusinessTerm,category, Priority, NOP, SPOC, EdReq, JoiningTime, TargetComp, Skill1, Skill2, Skill3, Skill4, Skill5, MSrep, LowExperience, HighExperience, IndiaAbroad, Country, State, lowSalary, highSalary,lakhK,currency, FunctionalArea, SubFunctionalArea, LinkJD,JBlink, ExNot) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [NameofCompany, BusinessTerm,category, Priority, NOP, SPOC, EdReq, JoiningTime, TargetComp, Skill1, Skill2, Skill3, Skill4, Skill5, MSrep, LowExperience, HighExperience, IndiaAbroad, Country, State, lowSalary, highSalary,lakhK,currency, FunctionalArea, SubFunctionalArea, LinkJD,JBlink, ExNot],
    (err, result) => {
      if (err) {
        console.log(err);
        console.log("SQL INSERT NOT WORKING");
      } else {
        res.send("Values Inserted");
        //db.off();
      }
    }
  );
});


//To get the data from employee db
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employee", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//To get the data from employee db and display in Positions table
app.get("/employees2", (req, res) => {
  db.query("SELECT id,NameofCompany,BusinessTerm,category,Priority,NOP,SPOC,EdReq,JoiningTime,TargetComp,CONCAT(Skill1,' , ',Skill2,' , ',Skill3,' , ',Skill4,' , ',Skill5) AS Skills,MSrep,CONCAT(LowExperience,'-',highExperience,' yrs')AS Experience,CONCAT(IndiaAbroad,': ',Country,'(',State,')')AS Location, CONCAT(currency,' ',lowSalary, '-' ,highSalary,' ',lakhK) AS Salary,FunctionalArea,SubFunctionalArea,LinkJD,JBlink,ExNot,DateandTime,Whoedited  FROM employee", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result); 
    }
  });
});



//To get the list of all the skills 
app.get("/skills", (req, res) => {
  db.query("SELECT * FROM skills", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.get("/selective", (req, res) => {
  const id = req.body.id;
  db.query("SELECT * FROM employee WHERE id = 14", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//to get the list of SPOC from SPOC table
app.get("/SPOC", (req, res) => {
  const NameofCompany = req.body.NameofCompany;
  db.query("select * from spoc ", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//To update the entries in Edit form and send then to employee db
app.put('/update', (req, res) => {
  const id = req.body.id;
  const NameofCompany = req.body.NameofCompany;
  const BusinessTerm = req.body.BusinessTerm;
  const category = req.body.category;
  const Priority = req.body.Priority;
  const NOP = req.body.NOP;
  const SPOC = req.body.SPOC;
  const EdReq = req.body.EdReq;
  const JoiningTime = req.body.JoiningTime;
  const TargetComp = req.body.TargetComp;
  const Skill1 = req.body.Skill1;
  const Skill2 = req.body.Skill2;
  const Skill3 = req.body.Skill3;
  const Skill4 = req.body.Skill4;
  const Skill5 = req.body.Skill5;
  const MSrep = req.body.MSrep;
  const LowExperience = req.body.LowExperience;
  const HighExperience = req.body.HighExperience;
  const IndiaAbroad = req.body.IndiaAbroad;
  const Country = req.body.Country;
  const State = req.body.State;
  const lowSalary = req.body.lowSalary;
  const highSalary = req.body.highSalary;
  const lakhK= req.body.lakhK;
  const currency= req.body.currency;
  const FunctionalArea = req.body.FunctionalArea;
  const SubFunctionalArea = req.body.SubFunctionalArea;
  const LinkJD = req.body.LinkJD;
  const JBlink = req.body.JBlink;
  const ExNot = req.body.ExNot;

  db.query("UPDATE employee SET NameofCompany = ?, BusinessTerm = ?,category = ?,Priority = ?,NOP = ?,SPOC = ?,EdReq = ?,JoiningTime = ?,TargetComp = ?,Skill1 = ?,Skill2 = ?,Skill3 = ?,Skill4 = ?,Skill5 = ?,MSrep = ?,LowExperience = ?,HighExperience = ?,IndiaAbroad = ?,Country = ?,State = ?,lowSalary = ?,highSalary = ?,lakhK = ?,currency = ?, FunctionalArea = ?,SubFunctionalArea = ?,LinkJD = ?,JBlink = ?,ExNot = ? WHERE id = ?", [NameofCompany, BusinessTerm,category, Priority, NOP, SPOC, EdReq, JoiningTime, TargetComp, Skill1, Skill2, Skill3, Skill4, Skill5, MSrep, LowExperience, HighExperience, IndiaAbroad, Country, State, lowSalary, highSalary,lakhK,currency, FunctionalArea, SubFunctionalArea, LinkJD, JBlink, ExNot, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }
  );
});


//To delete the entries from employee table
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employee WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//To add the complted positions to archive table 
app.post("/archive", (req, res) => {
  console.log(req);
  const empId = req.body.empId;
  const NameofCompany = req.body.NameofCompany;
  const BusinessTerm = req.body.BusinessTerm;
  const category = req.body.category;
  const Priority = req.body.Priority;
  const NOP = req.body.NOP;
  const SPOC = req.body.SPOC;
  const EdReq = req.body.EdReq;
  const JoiningTime = req.body.JoiningTime;
  const TargetComp = req.body.TargetComp;
  const Skill1 = req.body.Skill1;
  const Skill2 = req.body.Skill2;
  const Skill3 = req.body.Skill3;
  const Skill4 = req.body.Skill4;
  const Skill5 = req.body.Skill5;
  const MSrep = req.body.MSrep;
  const LowExperience = req.body.LowExperience;
  const HighExperience = req.body.HighExperience;
  const IndiaAbroad = req.body.IndiaAbroad;
  const Country = req.body.Country;
  const State = req.body.State;
  const lowSalary = req.body.lowSalary;
  const highSalary = req.body.highSalary;
  const lakhK= req.body.lakhK;
  const currency= req.body.currency;
  const FunctionalArea = req.body.FunctionalArea;
  const SubFunctionalArea = req.body.SubFunctionalArea;
  const LinkJD = req.body.LinkJD;
  const JBlink = req.body.JBlink;
  const ExNot = req.body.ExNot;



  db.query(
    "INSERT INTO archive (empId,NameofCompany, BusinessTerm,category, Priority, NOP, SPOC, EdReq, JoiningTime, TargetComp, Skill1, Skill2, Skill3, Skill4, Skill5, MSrep, LowExperience, HighExperience, IndiaAbroad, Country, State, lowSalary, highSalary,lakhK,currency, FunctionalArea, SubFunctionalArea, LinkJD,JBlink, ExNot) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [empId,NameofCompany, BusinessTerm,category, Priority, NOP, SPOC, EdReq, JoiningTime, TargetComp, Skill1, Skill2, Skill3, Skill4, Skill5, MSrep, LowExperience, HighExperience, IndiaAbroad, Country, State, lowSalary, highSalary,lakhK,currency, FunctionalArea, SubFunctionalArea, LinkJD,JBlink, ExNot],
    (err, result) => {
      if (err) {
        console.log(err);
        console.log("SQL INSERT FOR ARCHIVE NOT WORKING");
      } else {
        res.send("Values Inserted");
        //db.off();
      }
    }
  );
});


//To add the deleted entries from employee table to delete table
app.post("/delete", (req, res) => {
  console.log(req);
  const empId = req.body.empId;
  const NameofCompany = req.body.NameofCompany;
  const BusinessTerm = req.body.BusinessTerm;
  const category = req.body.category;
  const Priority = req.body.Priority;
  const NOP = req.body.NOP;
  const SPOC = req.body.SPOC;
  const EdReq = req.body.EdReq;
  const JoiningTime = req.body.JoiningTime;
  const TargetComp = req.body.TargetComp;
  const Skill1 = req.body.Skill1;
  const Skill2 = req.body.Skill2;
  const Skill3 = req.body.Skill3;
  const Skill4 = req.body.Skill4;
  const Skill5 = req.body.Skill5;
  const MSrep = req.body.MSrep;
  const LowExperience = req.body.LowExperience;
  const HighExperience = req.body.HighExperience;
  const IndiaAbroad = req.body.IndiaAbroad;
  const Country = req.body.Country;
  const State = req.body.State;
  const lowSalary = req.body.lowSalary;
  const highSalary = req.body.highSalary;
  const lakhK= req.body.lakhK;
  const currency= req.body.currency;
  const FunctionalArea = req.body.FunctionalArea;
  const SubFunctionalArea = req.body.SubFunctionalArea;
  const LinkJD = req.body.LinkJD;
  const JBlink = req.body.JBlink;
  const ExNot = req.body.ExNot;



  db.query(
    "INSERT INTO deletepos (empId,NameofCompany, BusinessTerm,category, Priority, NOP, SPOC, EdReq, JoiningTime, TargetComp, Skill1, Skill2, Skill3, Skill4, Skill5, MSrep, LowExperience, HighExperience, IndiaAbroad, Country, State, lowSalary, highSalary,lakhK,currency, FunctionalArea, SubFunctionalArea, LinkJD,JBlink, ExNot) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [empId,NameofCompany, BusinessTerm,category, Priority, NOP, SPOC, EdReq, JoiningTime, TargetComp, Skill1, Skill2, Skill3, Skill4, Skill5, MSrep, LowExperience, HighExperience, IndiaAbroad, Country, State, lowSalary, highSalary,lakhK,currency, FunctionalArea, SubFunctionalArea, LinkJD,JBlink, ExNot],
    (err, result) => {
      if (err) {
        console.log(err);
        console.log("SQL INSERT FOR DELETE NOT WORKING");
      } else {
        res.send("Values Inserted");
        //db.off();
      }
    }
  );
});


//To get the data for mass table from employee db
app.get("/priority", (req, res) => {
  db.query("SELECT * FROM employee", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//To get the data from company table for edit/delete company page
app.get("/company", (req, res) => {
  db.query("SELECT * FROM company", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//To get the list of MSREP from login table
app.get("/MSRep", (req, res) => {
  db.query("SELECT * FROM login", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//to get the list of companies for CDF
app.get("/NameofCompany", (req, res) => {
  db.query("SELECT * FROM company", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


// to get the employee details from login table
app.get("/login", (req, res) => {
  db.query("SELECT * FROM login", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//To add a company to company table
app.post("/addcompany", (req, res) => {
  console.log(req);
  const NameofCompany = req.body.NameofCompany;
 const Industry = req.body.Industry;
 const SPOC = req.body.SPOC;

  db.query(
    "INSERT INTO company (NameofCompany, Industry) VALUES (?,?)",
    [NameofCompany, Industry],
    (err, result) => {
      if (err) {
        console.log(err);
        console.log("SQL INSERT FOR COMPANY NOT WORKING");
      } else {
        res.send("Values Inserted");
        //db.off();
      }
    }
  );
});

//To add a spoc to spoc table
app.post("/addSPOC", (req, res) => {
  console.log(req);
  const NameofCompany = req.body.NameofCompany;
 const SPOC = req.body.SPOC;

  db.query(
    "INSERT INTO spoc (NameofCompany, SPOC) VALUES (?,?)",
    [NameofCompany, SPOC],
    (err, result) => {
      if (err) {
        console.log(err);
        console.log("SQL INSERT FOR SPOC NOT WORKING");
      } else {
        res.send("Values Inserted");
        //db.off();
      }
    }
  );
});

//To add an employee to login table
app.post("/addemployee", (req, res) => {
  console.log(req);
  const username = req.body.username;
 const email = req.body.email;
 const password = req.body.password;
 const position = req.body.position;

  db.query(
    "INSERT INTO login (username, email, password, position) VALUES (?,?,?,?)",
    [username, email,password,position],
    (err, result) => {
      if (err) {
        console.log(err);
        console.log("SQL INSERT FOR Employee in Login Table NOT WORKING");
      } else {
        res.send("Values Inserted");
        //db.off();
      }
    }
  );
});

//To delete a company from company table
app.delete("/deleteCompany/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM company WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//To delete an MS employee from login table
app.delete("/deleteEmployee/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM login WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//To update the entries in Edit form and send then to employee db
app.put('/updateEmployee', (req, res) => {
  const id = req.body.id;
  const username = req.body.username;
const email = req.body.email;
const password = req.body.password;
  const position = req.body.position;

  db.query("UPDATE login SET username = ?, email = ?,password = ?,position = ? WHERE id = ?", [username,email,password,position, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }
  );
});


// app.post('/updateS', function (req, res) {
//   db.query("UPDATE employee SET SPOC='" + req.body.SPOC 
//       + "' WHERE id=" + req.body.id + ";", 
//       function (error, results, fields) {
//   if (error) throw error;
//   return res.send({ error: false, data: results, message: 'user has been updated successfully.' });
//   })
// });

app.put('/updateS', (req, res) => {
  const id = req.body.id;
  const SPOC = req.body.SPOC

  db.query("UPDATE employee SET SPOC = ? WHERE id = ?", [SPOC, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }
  );
});

app.put('/updateP', (req, res) => {
  const id = req.body.id;
  const Priority = req.body.Priority

  db.query("UPDATE employee SET Priority = ? WHERE id = ?", [Priority, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  }
  );
});




app.listen(3001, () => {
    console.log('Server is running at port 9002');
});