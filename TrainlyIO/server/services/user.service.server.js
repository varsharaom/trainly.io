


        var app = require('../../express');
        var passport = require('passport');
        var LocalStrategy= require('passport-local').Strategy;
        var bcrypt = require('bcrypt-nodejs');
        var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
       var FacebookStrategy = require('passport-facebook').Strategy;
        var multer = require('multer'); // npm install multer --save
        var mysql = require('mysql');
//---------------------------------------------------
        passport.serializeUser(serializeUser);
        passport.deserializeUser(deserializeUser);
        passport.use(new LocalStrategy(localStrategy));
//------------------------------------------------------------
    // All URI
        app.post("/api/project/markAsCompleted",markAsCompleted);
        app.get("/api/project/executeQuery1/:num",executeQuery1);
        app.get("/api/project/executeQuery2",executeQuery2);
        app.get("/api/project/executeQuery3/:date",executeQuery3);
        app.get("/api/project/executeQuery4/:amt",executeQuery4);
        app.get("/api/project/executeQuery5",executeQuery5);
        // app.get("/api/project/:email/updateFaculty/:grantor",updateFaculty);
        // app.get("/api/project/:email/updateAdmin/:grantor",updateAdmin);
        app.put("/api/project/updateFaculty/",updateFaculty);
        app.put("/api/project/updateAdmin/",updateAdmin);
        app.get("/api/project/user/:StudentID/getInCompleteCourseMaterials/course/:CourseID",getInCompleteCourseMaterials);
        app.get("/api/project/user/:StudentID/getCompletedCourseMaterials/course/:CourseID",getCompletedCourseMaterials);
        app.post("/api/project/registerFaculty",registerFaculty);
        app.post('/api/project/registerAdmin',registerAdmin);
        app.get("/api/project/findIfAdmin/:emailID",findIfAdmin);
        app.get("/api/project/findIfFaculty/:emailID",findIfFaculty);
        app.get("/api/project/getReqFromFaculty/",getReqFromFaculty);
        app.get("/api/project/getReqFromAdmin/",getReqFromAdmin);
        app.get("/api/project/getLikedCourses/:StudentID",getLikedCourses);
        app.post('/api/project/likeCourse/user/:StudentID',likeCourse);
        app.delete('/api/project/unlikeCourse/:courseId/user/:StudentID',unlikeCourse);
        app.delete("/api/project/user/:StudentID/removeEnrolledCourse/:CourseID",removeEnrolledCourse);
        app.get("/api/project/getEnrolledCoursesWithSecondaryTopics/:StudentID",getEnrolledCoursesWithSecondaryTopics);
        app.get("/api/project/getCompletedCourses/:StudentID",getCompletedCourses);
        app.get("/api/project/getInterestedCourses/:StudentID",getInterestedCourses);
        app.get("/api/project/getTotalMoneySpent/:StudentID",getTotalMoneySpent);
        app.post("/api/project/user/:StudentID/addCourse/:CourseID",addCourse);
        app.get("/api/project/getCourses",getCourses);
        app.get("/api/project/getCourseInfo/:CourseID",getCourseInfo);
        app.get("/api/project/getEnrolledCourses/:StudentID",getEnrolledCourses);
        app.post('/api/project/login',passport.authenticate('local'),login);
        app.post('/api/project/register',register);
        app.post('/api/project/unregister',unregister);
        app.get('/api/project/checkLoggedIn',checkLoggedIn);
        app.post('/api/project/logout',logout);
        app.get('/api/project/findUserByUsername',findUserByUsername);


        app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
        app.get('/auth/google/callback',
            passport.authenticate('google', {
                successRedirect: '/',
                failureRedirect: '/'
            }));

        app.get ('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect: '/',
                failureRedirect: '/'
            }));

        var googleConfig = {
            // clientID     : "1068123510453-uravjvr4a895vmec8c4dpssj9m49b7qn.apps.googleusercontent.com",
            // clientSecret : "TbvEW-FimdwlxOksz5cSyW9Y",
            // callbackURL  : "https://wedevproject.herokuapp.com/auth/google/callback"
            clientID     : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET,
            callbackURL  : process.env.GOOGLE_CALLBACK_URL
        };
        var facebookConfig = {
            // clientID     : "242625612892833",
            // clientSecret : "0c36a8f1fbe8ca589dfc83ca8dfd442e",
            // callbackURL  : "https://deb-shubham-webdev.herokuapp.com/auth/facebook/callback",
            clientID     : process.env.FACEBOOK_CLIENT_ID,
            clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL  : process.env.FACEBOOK_CALLBACK_URL,
            profileFields: ['id', 'displayName', 'email']
        };
        passport.use(new GoogleStrategy(googleConfig, googleStrategy));
        passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));
//------------------------------------------------------------
        // ALL function definitions

        function markAsCompleted(req,res) {
            var user = req.body;

            console.log("Registering user "+user);
            var course = {
                CourseID:user.CourseID,
                Date:user.Date,
                MaterialName:user.MaterialName,
                StudentID:user.StudentID,
                Time:user.Time,

            };
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                'INSERT INTO completes_material SET ?', course,
                function select(error) {
                    if(error) {
                        res.sendStatus(404);
                        con.end();
                        return;
                    }
                    else{
                        res.json(user);
                    }
                    con.end();
                });
        }

        function executeQuery1(req,res) {
            console.log("Inside query1");
            var num  =req.params.num;
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

           /* var query = "Select q3.CourseID as CourseID, q3.CourseName, q3.numbers as StudentsCompleted, count(cm.MaterialName) as Materials "+
                        "From (select q2.CourseID, q2.numbers "+
                        "from(select q1.CourseID, count(q1.student) as numbers "+
                        "From (select e.CourseID as CourseID, e.StudentID as student "+
                        "from Course c inner join Enrolled e on e.CourseID = c.CourseID "+
                        "where e.CourseCompletionDate is not null)q1 "+
                        "group by q1.CourseID)q2 "+
                        "where q2.numbers > ?)q3 "+
                        "Inner join Course_Material cm on q3.CourseID = cm.CourseID "+
                        "order by q3.CourseID, q3.numbers;";*/

            var query="Select q3.CourseID as CourseID, q3.CourseName, q3.numbers as StudentsCompleted, count(cm.MaterialName) as Materials "+
            "From (select q2.CourseID as CourseID, q2.CourseName as CourseName, q2.numbers as numbers "+
            "from( select q1.CourseID as CourseID, q1.CourseName as CourseName, count(q1.student) as numbers "+
            "From(select e.CourseID as CourseID, c.Name as CourseName, e.StudentID as student "+
            "from Course c inner join Enrolled e on e.CourseID = c.CourseID "+
            "where e.CourseCompletionDate is not null)q1 "+
            "group by q1.CourseID)q2 "+
            "where q2.numbers > 2)q3 "+
            "Inner join Course_Material cm on q3.CourseID = cm.CourseID "+
            "group by q3.CourseID "+
           " order by q3.CourseID, q3.numbers;";





            con.query(query,num,
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }
                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }


        function executeQuery2(req,res) {
            console.log("Inside query2");

            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            var query = "SELECT co.CourseID as course_ID,co.Name as name, COUNT(*) as interested_students "+
                        "FROM ((student s INNER JOIN Interested ir ON s.StudentID=ir.StudentID) "+
                        "INNER JOIN course co ON co.CourseID = ir.CourseID) "+
                        "GROUP BY co.CourseID "+
                        "HAVING COUNT(*)>1 "+
                        "ORDER BY interested_students , course_ID;";

            con.query(query,
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }
                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }

        function executeQuery3(req,res) {
            console.log("Inside query3");
            var date = req.params.date;

            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            var query = "SELECT c1.Name as course, CONCAT(f.Fname, ' ', f.Lname) AS Name, "+
                        "f.FacultyEmail AS EmailID, c1.Cost, COUNT(distinct(e.StudentID)) AS Students_Completed "+
                        "FROM (((Faculty AS f INNER JOIN Creates AS cr ON cr.FacultyID=f.FacultyID)INNER JOIN Course c1 ON "+
                        "c1.CourseID = cr.CourseID)INNER JOIN Enrolled e ON e.CourseID= c1.CourseID) WHERE c1.CourseID "+
                        "IN(SELECT c.CourseID AS course FROM (Course AS c INNER JOIN Course_Material AS cm "+
                        "ON c.CourseID=cm.CourseID) GROUP BY c.CourseID "+
                        "HAVING count(cm.MaterialName)>5) AND e.CourseCompletionDate <= ? "+
                        "GROUP BY e.CourseID "+
                        "ORDER BY course, c1.Cost;";

            con.query(query,date,
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }
                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }

        function executeQuery4(req,res) {
            console.log("Inside query4");
            var amt = req.params.amt;

            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            var query = "SELECT CONCAT(Student.Fname, ' ', Student.Lname) as Name, CONCAT('$',SUM(Course.Cost)) as Tuition "+
                        "FROM Course JOIN (Student JOIN Enrolled ON Student.StudentID = Enrolled.StudentID) "+
                        "ON Course.CourseID = Enrolled.CourseID "+
                        "GROUP BY Student.StudentID "+
                        "HAVING SUM(Course.Cost)> ? "+
                        "ORDER BY Tuition, Student.StudentID;";

            con.query(query,amt,
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }
                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }

        function executeQuery5(req,res) {
            console.log("Inside query5");

            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            var query = "SELECT SUM(a.tuition) as TotalRevenue "+
                "FROM (SELECT SUM(Course.Cost) as tuition "+
                "FROM Course JOIN (Student JOIN Enrolled "+
                "ON Student.StudentID = Enrolled.StudentID) "+
                "ON Course.CourseID = Enrolled.CourseID "+
                "GROUP BY Student.StudentID) a;";

            con.query(query,
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }
                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }

        function updateFaculty(req){
            console.log("request is ");
            console.log("update in faculty server");
            var currentDate=new Date();
            var pmonth=currentDate.getMonth();
            pmonth=pmonth+1;
            var pdate=currentDate.getFullYear()+"-"+
                pmonth +"-"+
                currentDate.getDate();
            var ptime=currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();


            var email = req.body.email;
            var grantor=req.body.grantor;
            console.log("email is" + email);
            console.log("grantor is" + grantor);

            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });
            con.query(
                "update faculty set ValidatedDate=? , ValidatedTime=? , ValidatedBy=? where FacultyEmail=?",[pdate,ptime,grantor,email],
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        res.sendStatus(200);
                        return;

                    }
                    if(results.length > 0) {
                        // res.json(results);
                        res.sendStatus(200);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }

        function updateAdmin(req){
            console.log("update admin in server");
            var currentDate=new Date();
            var pmonth=currentDate.getMonth();
            pmonth=pmonth+1;
            var pdate=currentDate.getFullYear()+"-"+
                pmonth +"-"+
                currentDate.getDate();
            var ptime=currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();


            var email = req.body.email;
            var grantor=req.body.grantor;
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });
            con.query(
                "update admin set PermittedDate=? , PermittedTime=? , PermittedBy=? where AdminEmail=?",[pdate,ptime,grantor,email],
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        res.sendStatus(200);
                        return;

                    }
                    if(results.length > 0) {
                        // res.json(results);
                        res.sendStatus(200);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }

        function getInCompleteCourseMaterials(req,res) {
            var StudentID = req.params.StudentID;
            var CourseID =  req.params.CourseID;
            console.log("StudentId is "+StudentID+" CourseID is "+CourseID);
            var query = "select q2.StudentID, q2.course_ID as course_ID, q2.CourseOrder as CourseOrder, "+
                        "q2.unfinished as unfinished from (SELECT cp.StudentID, cm.CourseID as course_ID, "+
                        "cm.CourseOrder as CourseOrder, cm.MaterialName as unfinished from Course_Material cm "+
                        "left join Completes_Material cp on cm.MaterialName = cp.MaterialName inner join "+
                        "Course c on c.CourseID = cm.CourseID where cp.StudentID is null or cp.StudentID <> ?)q2 "+
                        "where q2.course_ID = ? and q2.StudentID is null "+
                        "ORDER BY q2.CourseOrder";

            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(query,[StudentID,CourseID],
                function select(error,results) {
                    if(error) {
                        console.log(error);
                        res.sendStatus(404);
                        con.end();
                        return;
                    }
                    else{
                        console.log(results);
                        res.json(results);
                    }
                    con.end();
                });
        }

        function getCompletedCourseMaterials(req,res) {
            var StudentID = req.params.StudentID;
            var CourseID =  req.params.CourseID;
            console.log("StudentId is "+StudentID+" CourseID is "+CourseID);
            var query = "select s.StudentID, cp.CourseID as course_ID, cm.CourseOrder as CourseOrder, "+
                        "cp.MaterialName as completes from Student s inner join Completes_Material cp on "+
                        "cp.StudentID = s.StudentID inner join Course_Material cm on cm.MaterialName = cp.MaterialName "+
                        "where cp.CourseID = ? and s.StudentID = ? "+
                        "ORDER BY cm.CourseOrder";
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(query,[CourseID,StudentID],
                function select(error,results) {
                    if(error) {
                        console.log(error);
                        res.sendStatus(404);
                        con.end();
                        return;
                    }
                    else{
                        console.log(results);
                        res.json(results);
                    }
                    con.end();
                });
        }

        function registerFaculty(req,res){
            var user=req.body;
            /*  var regfaculty={
             FacultyID:user.StudentID,
             Fname:user.

             }*/

            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                'INSERT INTO faculty SET ?', user,
                function select(error) {
                    if(error) {
                        res.sendStatus(404);
                        con.end();
                        return;
                    }
                    else{
                        res.json(user);
                    }
                    con.end();
                });
        }




        function registerAdmin(req,res){
            var user=req.body;
            console.log("ad"+JSON.stringify(user));
            /*  var regfaculty={
                  FacultyID:user.StudentID,
                  Fname:user.

              }*/

            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                'INSERT INTO admin SET ?', user,
                function select(error) {
                    if(error) {
                        res.sendStatus(404);
                        con.end();
                        return;
                    }
                    else{
                        res.json(user);
                    }
                    con.end();
                });



        }


        //service to check if the person logged in is an admin-so that only admin should see the list of pendng request

        function findIfAdmin(req,res) {
            var emailID = req.params.emailID;
            console.log("in findIfdmin email "+emailID);
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query("SELECT * FROM admin WHERE PermittedDate is not null and AdminEmail = ?",emailID,

                function select(error, results, fields) {
                    if(error) {
                        console.log(error);
                        con.end();
                        return;
                    }

                    if(results.length > 0) {
                        console.log("User is present");
                        res.send(results);
                    } else {
                        res.send(null);
                        console.log('No username in the db admin');
                    }
                    con.end();
                });

            // userModel
            //     .findUserByUsername(username)
            //     .then(function (user) {
            //         res.send(user);
            //     },function () {
            //         res.sendStatus(404);
            //     })
        }



        function findIfFaculty(req,res) {
            var emailID = req.params.emailID;
            console.log("in findIffaculty email "+emailID);
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query("SELECT * FROM faculty WHERE ValidatedDate is not null and FacultyEmail = ?",emailID,

                function select(error, results, fields) {
                    if(error) {
                        console.log(error);
                        con.end();
                        return;
                    }

                    if(results.length > 0) {
                        console.log("User is present in faculty table");
                        res.send(results);
                    } else {
                        res.send(null);
                        console.log('No faculty username in the db');
                    }
                    con.end();
                });

            // userModel
            //     .findUserByUsername(username)
            //     .then(function (user) {
            //         res.send(user);
            //     },function () {
            //         res.sendStatus(404);
            //     })
        }


        function getReqFromFaculty(req,res){
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                "SELECT * FROM faculty where ValidatedDate is null;",
                function select(error, results, fields) {
                    if(error) {
                        console.log(error);
                        con.end();
                        return;
                    }

                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }


        function getReqFromAdmin(req,res){
            console.log("in sercive for getregfrom adn");
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                "SELECT * FROM admin where PermittedDate is null;",
                function select(error, results, fields) {
                    if(error) {
                        console.log(error);
                        con.end();
                        return;
                    }

                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data of null in admin tab');
                    }
                    con.end();
                });
        }


        function getLikedCourses(req,res) {
            var StudentID = req.params.StudentID;

            var query = 'SELECT * FROM interested WHERE StudentID = ?';
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(query,StudentID,
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }
                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }

        function likeCourse(req,res) {
            var courseId = req.body.CourseID;
            var StudentID = req.params.StudentID;
            var object = {
                StudentID:StudentID,
                CourseID:courseId
            };
            console.log("Liked Object "+object);
            var query = 'INSERT INTO interested SET ?';
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(query,object,
                function select(error) {
                    if(error) {
                        console.log(error);
                        res.sendStatus(404);
                        con.end();
                        return;
                    }
                    else{
                        res.sendStatus(200);
                    }
                    con.end();
                });
            // userModel
            //     .likeMovie(userId,movieobject)
            //     .then(function (response) {
            //         res.sendStatus(200);
            //     },function (err) {
            //         console.log(err);
            //         res.sendStatus(404);
            //     })
        }

        function unlikeCourse(req,res) {
            var courseId = req.params.courseId;
            var StudentID = req.params.StudentID;
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            var query = "DELETE FROM interested WHERE StudentID = ? AND CourseID = ?";

            con.query(query,[StudentID , courseId],
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }
                    else {
                        res.sendStatus(200);
                        console.log("Successfully deleted the interested course");
                    }
                    con.end();
                });
            // userModel
            //     .unlikeMovie(movieId,userId)
            //     .then(function (response) {
            //         res.sendStatus(200);
            //     },function (err) {
            //         console.log(err);
            //         res.sendStatus(404);
            //     })
        }


        function removeEnrolledCourse(req,res) {
            var StudentID = req.params.StudentID;
            var CourseID = req.params.CourseID;
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            var query = "DELETE FROM enrolled WHERE StudentID = ? AND CourseID = ?";

            con.query(query,[StudentID , CourseID],
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }
                    else {
                        res.sendStatus(404);
                        console.log("Successfully deleted the course");
                    }
                    con.end();
                });
        }


        function getEnrolledCoursesWithSecondaryTopics(req,res) {
            var StudentID = req.params.StudentID;
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            var query = "SELECT e.StudentID as StudentID, c.CourseID as CourseID,c.Name as Name, c.PrimaryTopic as PrimaryTopic, " +
                "s.SecondaryTopic as sec_topics,(select avg(enrolled.Rating) "+
                "FROM enrolled where e.CourseID=enrolled.CourseID) as ranking "+
                "FROM (Enrolled AS e INNER JOIN Course AS c ON e.CourseID=c.CourseID) "+
                "INNER JOIN Secondary_Topic as s ON s.CourseID =c.CourseID "+
                "WHERE e.CourseCompletionDate IS NULL AND e.StudentID  = ? "+
                "ORDER BY ranking";

            con.query(query,StudentID,
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }
                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }

        function getCompletedCourses(req,res) {
            var StudentID = req.params.StudentID;
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            var query = "SELECT e.StudentID, e.CourseID, c.Name as Name, c.PrimaryTopic, s.SecondaryTopic as sec_topics,(select avg(enrolled.Rating) "+
                        "FROM enrolled  where e.CourseID=enrolled.CourseID) as ranking "+
                        "FROM (Enrolled AS e INNER JOIN Course AS c ON e.CourseID=c.CourseID) "+
                        "INNER JOIN Secondary_Topic as s ON s.CourseID=c.CourseID "+
                        "WHERE e.CourseCompletionDate IS NOT NULL AND e.StudentID = ? "+
                        "order by ranking";

            con.query(query,StudentID,
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }
                    console.log("Inside completed courses server function");
                    if(results.length > 0) {
                        console.log(results);
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }

        function getInterestedCourses(req,res) {
            var StudentID = req.params.StudentID;
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                "SELECT i.StudentID as StudentID, c.Name as Name, i.CourseID as CourseID, c.PrimaryTopic as PrimaryTopic," +
                "s.SecondaryTopic as sec_topics," +
                "(SELECT avg(e.Rating) as avg_rating FROM enrolled e WHERE i.CourseID=e.CourseID) as ranking"+
                " FROM ((interested i INNER JOIN course c ON i.CourseID=c.CourseID) "+
                " INNER JOIN Secondary_Topic as s ON s.CourseID=c.CourseID) "+
                " WHERE i.StudentID = ? " +
                " ORDER BY ranking;",StudentID,
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }
                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }
        
        function getTotalMoneySpent(req,res) {
            var StudentID = req.params.StudentID;
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                "SELECT s.StudentID as user,SUM(c.cost) as total_cost "+
                "FROM ((Student s INNER JOIN Enrolled e ON s.StudentID = e.StudentID) "+
                "INNER JOIN Course c ON c.CourseID = e.CourseID) "+
                "WHERE s.StudentID = ?",StudentID,
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }
                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }

        function addCourse(req,res) {
            var course = req.body;
            var CourseID = req.params.CourseID;
            var StudentID = req.params.StudentID;
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            var hh = today.getHours(); // => 9
            var mins = today.getMinutes(); // =>  30
            var secs = today.getSeconds(); // => 51

            if(dd<10) {
                dd = '0'+dd
            }

            if(mm<10) {
                mm = '0'+mm
            }

            today = yyyy + '-' + mm + '-' + dd;
            var time = hh + ':' + mins + ':' + secs;
            var min = 100000;
            var max = 999999;
            var paymentCode = Math.floor(Math.random() * (max - min + 1)) + min;
            var courseobject = {
                StudentID:StudentID,
                CourseID:CourseID,
                PaymentDate:today,
                PaymentTime:time,
                PaymentCode:paymentCode
            };
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                'INSERT INTO enrolled SET ?', courseobject,
                function select(error) {
                    if(error) {
                        console.log(error);
                        res.sendStatus(404);
                        con.end();
                        return;
                    }
                    else{
                        res.sendStatus(200);
                    }
                    con.end();
                });
            // userModel
            //     .addMovie(userId,movieobject)
            //     .then(function (response) {
            //         res.sendStatus(200);
            //     },function (err) {
            //         console.log(err);
            //         res.sendStatus(404);
            //     })
        }

        function getEnrolledCourses(req,res) {
            var studentID = req.params.StudentID;
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                "SELECT * FROM (enrolled e INNER JOIN Course c ON e.CourseID = C.CourseID)" +
                " WHERE StudentID = ?",studentID,
                function select(error, results, fields) {
                    if(error) {
                        console.log("Error in query: "+error);
                        con.end();
                        return;
                    }

                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }
        
        function getCourses(req,res){
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                "SELECT * FROM course;",
                function select(error, results, fields) {
                    if(error) {
                        console.log(error);
                        con.end();
                        return;
                    }

                    if(results.length > 0) {
                        res.json(results);
                    } else {
                        console.log('No data');
                    }
                    con.end();
                });
        }

        function getCourseInfo(req,res){
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });
            var courseId = req.params.CourseID;
            con.query(
                'SELECT * FROM ((course c INNER JOIN course_material cm ON c.CourseID = cm.CourseID) LEFT OUTER JOIN ' +
                'course_question cq ON cq.CourseID = c.CourseID)' +
                'WHERE c.CourseID = ?',courseId,
                function select(error, results, fields) {
                    if(error) {
                        res.sendStatus(404);
                        console.log(error);
                        con.end();
                        return;
                    }

                    if(results!==undefined && results.length > 0) {
                        res.json(results);
                        con.end();
                    } else {

                        var con2 = mysql.createConnection({
                            host: "localhost",
                            user: "root",
                            password: "",
                            database:"trainlyio"
                        });
                        con2.query(
                            'SELECT * FROM course WHERE CourseID = ?',courseId,
                            function select(error, results, fields) {
                                if(error) {
                                    console.log(error);
                                    con.end();
                                }

                                if(results!==undefined && results.length > 0) {
                                    res.json(results);
                                    con.end();
                                } else {
                                    console.log('No data');
                                    con.end();
                                }
                            });
                    }
                });
        }

        function findUserById(req,res) {
            var userId = req.params.userId;

            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                'SELECT * FROM student WHERE StudentID = ?',userId,
                function select(error, results, fields) {
                    if(error) {
                        console.log(error);
                        con.end();
                        return;
                    }

                    if(results.length > 0) {
                        console.log("User is present");
                        res.send(results);
                    } else {
                        res.send(null);
                        console.log('No username in the db');
                    }
                    con.end();
                });
        }

        function localStrategy(username, password, done) {
            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });
            con.query(
                'SELECT * FROM student WHERE StudentEmail = ?',username,
                function select(error, results, fields) {
                    // console.log("Results after query ",results);
                    if(error) {
                        con.end();
                        return done(null,false);
                    }

                    if(results.length > 0) {
                        console.log("User is present");
                        if(bcrypt.compareSync(password,results[0].Password)){
                            console.log("passwords matched");
                            con.end();
                            return done(null,results[0]);
                        }
                    } else {
                        console.log('No username in the db');
                        con.end();
                        return done(null,false);
                    }
                });
         }

        function login(req,res) {
                var user = req.user;
                res.json(user);
        }

        function register(req,res) {
                var user = req.body;
                user.password=bcrypt.hashSync(user.password);
                console.log("Registering user "+user);
                var regUser = {
                    Fname:user.fusername,
                    Lname:user.lusername,
                    StudentEmail:user.email,
                    Password:user.password,
                    Street:user.street,
                    City:user.city,
                    Country:user.country,
                    PostalCode:user.pcode
                };
                var con = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "",
                    database:"trainlyio"
                });

                con.query(
                    'INSERT INTO student SET ?', regUser,
                    function select(error) {
                        if(error) {
                            res.sendStatus(404);
                            con.end();
                            return;
                        }
                        else{
                            res.json(user);
                        }
                        con.end();
                    });
        }

        function unregister(req,res) {
            var user = req.body;
            userModel
                .deleteUser(user._id)
                .then(function (user) {
                    req.logout();
                    res.sendStatus(200);
                },function () {
                    res.sendStatus(404);
                })
        }

        function checkLoggedIn(req,res) {
                res.send(req.isAuthenticated()? req.user:'0');
        }

        function logout(req,res) {
                req.logout();
                res.sendStatus(200);
        }

        function findUserByUsername(req,res) {
            var username = req.query.username;

            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                'SELECT * FROM student WHERE StudentEmail = ?',username,
                function select(error, results, fields) {
                    if(error) {
                        console.log(error);
                        con.end();
                        return;
                    }

                    if(results.length > 0) {
                        console.log("User is present");
                        res.send(results);
                    } else {
                        res.send(null);
                        console.log('No username in the db');
                    }
                    con.end();
                });
        }

        function serializeUser(user,done) {
            done(null,user);
        }

        function deserializeUser(user,done) {
            var userId = user.StudentID;

            var con = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "",
                database:"trainlyio"
            });

            con.query(
                'SELECT * FROM student WHERE StudentID = ?',userId,
                function select(error, results, fields) {
                    if(error) {
                        console.log(error);
                        con.end();
                        return;
                    }

                    if(results.length > 0) {
                        done(null,user);
                    } else {
                        done(null,false);
                        console.log('No username in the db');
                    }
                    con.end();
                });

                // userModel
                //     .findUserById(user._id)
                //     .then(function (user) {
                //         done(null,user);
                //     },function (err) {
                //         done(err,null)
                //     });
        }

        function facebookStrategy(token, refreshToken, profile, done) {
            userModel
                .findUserByFacebookId(profile.id)
                .then(
                    function(user) {
                        if(user) {
                            return done(null, user);
                        } else {
                            console.log(profile);
                            var email = profile.emails[0].value;
                            var emailParts = email.split("@");
                            var newFacebookUser = {
                                username:  emailParts[0],
                                firstName: profile.name[0],
                                lastName:  profile.name[1],
                                email:     email,
                                facebook: {
                                    id:    profile.id,
                                    token: token
                                }
                            };
                            return userModel.createUser(newFacebookUser);
                        }
                    },
                    function(err) {
                        if (err) { return done(err); }
                    }
                )
                .then(
                    function(user){
                        return done(null, user);
                    },
                    function(err){
                        if (err) { return done(err); }
                    }
                );
        }

        function googleStrategy(token, refreshToken, profile, done) {
            userModel
                .findUserByGoogleId(profile.id)
                .then(
                    function(user) {
                        if(user) {
                            return done(null, user);
                        } else {
                            var email = profile.emails[0].value;
                            var emailParts = email.split("@");
                            var newGoogleUser = {
                                username:  emailParts[0],
                                firstName: profile.name.givenName,
                                lastName:  profile.name.familyName,
                                email:     email,
                                google: {
                                    id:    profile.id,
                                    token: token
                                }
                            };
                            return userModel.createUser(newGoogleUser);
                        }
                    },
                    function(err) {
                        if (err) { return done(err); }
                    }
                )
                .then(
                    function(user){
                        console.log(user);
                        return done(null, user);
                    },
                    function(err){
                        if (err) { return done(err); }
                    }
                );
        }

